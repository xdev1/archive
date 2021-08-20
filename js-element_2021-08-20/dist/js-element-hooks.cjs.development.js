'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('js-element/core');

var connectionStore = new WeakMap();
var ITERATION_KEY = Symbol('iteration key');

function storeObservable(obj) {
  // this will be used to save (obj.key -> reaction) connections later
  connectionStore.set(obj, new Map());
}

function registerReactionForOperation(reaction, ref) {
  var target = ref.target;
  var key = ref.key;
  var type = ref.type;

  if (type === 'iterate') {
    key = ITERATION_KEY;
  }

  var reactionsForObj = connectionStore.get(target);
  var reactionsForKey = reactionsForObj.get(key);
  if (!reactionsForKey) {
    reactionsForKey = new Set();
    reactionsForObj.set(key, reactionsForKey);
  }
  // save the fact that the key is used by the reaction during its current run
  if (!reactionsForKey.has(reaction)) {
    reactionsForKey.add(reaction);
    reaction.cleaners.push(reactionsForKey);
  }
}

function getReactionsForOperation(ref) {
  var target = ref.target;
  var key = ref.key;
  var type = ref.type;

  var reactionsForTarget = connectionStore.get(target);
  var reactionsForKey = new Set();

  if (type === 'clear') {
    reactionsForTarget.forEach(function (_, key) {
      addReactionsForKey(reactionsForKey, reactionsForTarget, key);
    });
  } else {
    addReactionsForKey(reactionsForKey, reactionsForTarget, key);
  }

  if (type === 'add' || type === 'delete' || type === 'clear') {
    var iterationKey = Array.isArray(target) ? 'length' : ITERATION_KEY;
    addReactionsForKey(reactionsForKey, reactionsForTarget, iterationKey);
  }

  return reactionsForKey;
}

function addReactionsForKey(reactionsForKey, reactionsForTarget, key) {
  var reactions = reactionsForTarget.get(key);
  reactions && reactions.forEach(reactionsForKey.add, reactionsForKey);
}

function releaseReaction(reaction) {
  if (reaction.cleaners) {
    reaction.cleaners.forEach(releaseReactionKeyConnection, reaction);
  }
  reaction.cleaners = [];
}

function releaseReactionKeyConnection(reactionsForKey) {
  reactionsForKey.delete(this);
}

// reactions can call each other and form a call stack
var reactionStack = [];
var isDebugging = false;

function runAsReaction(reaction, fn, context, args) {
  // do not build reactive relations, if the reaction is unobserved
  if (reaction.unobserved) {
    return Reflect.apply(fn, context, args);
  }

  // only run the reaction if it is not already in the reaction stack
  // TODO: improve this to allow explicitly recursive reactions
  if (reactionStack.indexOf(reaction) === -1) {
    // release the (obj -> key -> reactions) connections
    // and reset the cleaner connections
    releaseReaction(reaction);

    try {
      // set the reaction as the currently running one
      // this is required so that we can create (observable.prop -> reaction) pairs in the get trap
      reactionStack.push(reaction);
      return Reflect.apply(fn, context, args);
    } finally {
      // always remove the currently running flag from the reaction when it stops execution
      reactionStack.pop();
    }
  }
}

// register the currently running reaction to be queued again on obj.key mutations
function registerRunningReactionForOperation(operation) {
  // get the current reaction from the top of the stack
  var runningReaction = reactionStack[reactionStack.length - 1];
  if (runningReaction) {
    debugOperation(runningReaction, operation);
    registerReactionForOperation(runningReaction, operation);
  }
}

function queueReactionsForOperation(operation) {
  // iterate and queue every reaction, which is triggered by obj.key mutation
  getReactionsForOperation(operation).forEach(queueReaction, operation);
}

function queueReaction(reaction) {
  debugOperation(reaction, this);
  // queue the reaction for later execution or run it immediately
  if (typeof reaction.scheduler === 'function') {
    reaction.scheduler(reaction);
  } else if (typeof reaction.scheduler === 'object') {
    reaction.scheduler.add(reaction);
  } else {
    reaction();
  }
}

function debugOperation(reaction, operation) {
  if (reaction.debugger && !isDebugging) {
    try {
      isDebugging = true;
      reaction.debugger(operation);
    } finally {
      isDebugging = false;
    }
  }
}

function hasRunningReaction() {
  return reactionStack.length > 0;
}

var IS_REACTION = Symbol('is reaction');

function observe(fn, options) {
  if ( options === void 0 ) options = {};

  // wrap the passed function in a reaction, if it is not already one
  var reaction = fn[IS_REACTION] ? fn : function reaction() {
    return runAsReaction(reaction, fn, this, arguments);
  };
  // save the scheduler and debugger on the reaction
  reaction.scheduler = options.scheduler;
  reaction.debugger = options.debugger;
  // save the fact that this is a reaction
  reaction[IS_REACTION] = true;
  // run the reaction once if it is not a lazy one
  if (!options.lazy) {
    reaction();
  }
  return reaction;
}

var proxyToRaw = new WeakMap();
var rawToProxy = new WeakMap();

var hasOwnProperty = Object.prototype.hasOwnProperty;

function findObservable(obj) {
  var observableObj = rawToProxy.get(obj);
  if (hasRunningReaction() && typeof obj === 'object' && obj !== null) {
    if (observableObj) {
      return observableObj;
    }
    return observable(obj);
  }
  return observableObj || obj;
}

function patchIterator(iterator, isEntries) {
  var originalNext = iterator.next;
  iterator.next = function () {
    var ref = originalNext.call(iterator);
    var done = ref.done;
    var value = ref.value;
    if (!done) {
      if (isEntries) {
        value[1] = findObservable(value[1]);
      } else {
        value = findObservable(value);
      }
    }
    return { done: done, value: value };
  };
  return iterator;
}

var instrumentations = {
  has: function has(key) {
    var target = proxyToRaw.get(this);
    var proto = Reflect.getPrototypeOf(this);
    registerRunningReactionForOperation({ target: target, key: key, type: 'has' });
    return proto.has.apply(target, arguments);
  },
  get: function get(key) {
    var target = proxyToRaw.get(this);
    var proto = Reflect.getPrototypeOf(this);
    registerRunningReactionForOperation({ target: target, key: key, type: 'get' });
    return findObservable(proto.get.apply(target, arguments));
  },
  add: function add(key) {
    var target = proxyToRaw.get(this);
    var proto = Reflect.getPrototypeOf(this);
    var hadKey = proto.has.call(target, key);
    // forward the operation before queueing reactions
    var result = proto.add.apply(target, arguments);
    if (!hadKey) {
      queueReactionsForOperation({ target: target, key: key, value: key, type: 'add' });
    }
    return result;
  },
  set: function set(key, value) {
    var target = proxyToRaw.get(this);
    var proto = Reflect.getPrototypeOf(this);
    var hadKey = proto.has.call(target, key);
    var oldValue = proto.get.call(target, key);
    // forward the operation before queueing reactions
    var result = proto.set.apply(target, arguments);
    if (!hadKey) {
      queueReactionsForOperation({ target: target, key: key, value: value, type: 'add' });
    } else if (value !== oldValue) {
      queueReactionsForOperation({ target: target, key: key, value: value, oldValue: oldValue, type: 'set' });
    }
    return result;
  },
  delete: function delete$1(key) {
    var target = proxyToRaw.get(this);
    var proto = Reflect.getPrototypeOf(this);
    var hadKey = proto.has.call(target, key);
    var oldValue = proto.get ? proto.get.call(target, key) : undefined;
    // forward the operation before queueing reactions
    var result = proto.delete.apply(target, arguments);
    if (hadKey) {
      queueReactionsForOperation({ target: target, key: key, oldValue: oldValue, type: 'delete' });
    }
    return result;
  },
  clear: function clear() {
    var target = proxyToRaw.get(this);
    var proto = Reflect.getPrototypeOf(this);
    var hadItems = target.size !== 0;
    var oldTarget = target instanceof Map ? new Map(target) : new Set(target);
    // forward the operation before queueing reactions
    var result = proto.clear.apply(target, arguments);
    if (hadItems) {
      queueReactionsForOperation({ target: target, oldTarget: oldTarget, type: 'clear' });
    }
    return result;
  },
  forEach: function forEach(cb) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

    var target = proxyToRaw.get(this);
    var proto = Reflect.getPrototypeOf(this);
    registerRunningReactionForOperation({ target: target, type: 'iterate' });
    // swap out the raw values with their observable pairs
    // before passing them to the callback
    var wrappedCb = function (value) {
      var rest = [], len = arguments.length - 1;
      while ( len-- > 0 ) rest[ len ] = arguments[ len + 1 ];

      return cb.apply(void 0, [ findObservable(value) ].concat( rest ));
    };
    return (ref = proto.forEach).call.apply(ref, [ target, wrappedCb ].concat( args ));
    var ref;
  },
  keys: function keys() {
    var target = proxyToRaw.get(this);
    var proto = Reflect.getPrototypeOf(this);
    registerRunningReactionForOperation({ target: target, type: 'iterate' });
    return proto.keys.apply(target, arguments);
  },
  values: function values() {
    var target = proxyToRaw.get(this);
    var proto = Reflect.getPrototypeOf(this);
    registerRunningReactionForOperation({ target: target, type: 'iterate' });
    var iterator = proto.values.apply(target, arguments);
    return patchIterator(iterator, false);
  },
  entries: function entries() {
    var target = proxyToRaw.get(this);
    var proto = Reflect.getPrototypeOf(this);
    registerRunningReactionForOperation({ target: target, type: 'iterate' });
    var iterator = proto.entries.apply(target, arguments);
    return patchIterator(iterator, true);
  },
  get size() {
    var target = proxyToRaw.get(this);
    var proto = Reflect.getPrototypeOf(this);
    registerRunningReactionForOperation({ target: target, type: 'iterate' });
    return Reflect.get(proto, 'size', target);
  }
};
instrumentations[Symbol.iterator] = function () {
    var target = proxyToRaw.get(this);
    var proto = Reflect.getPrototypeOf(this);
    registerRunningReactionForOperation({ target: target, type: 'iterate' });
    var iterator = proto[Symbol.iterator].apply(target, arguments);
    return patchIterator(iterator, target instanceof Map);
  };

var collectionHandlers = {
  get: function get(target, key, receiver) {
    // instrument methods and property accessors to be reactive
    target = hasOwnProperty.call(instrumentations, key) ? instrumentations : target;
    return Reflect.get(target, key, receiver);
  }
};

// eslint-disable-next-line
var globalObj = typeof window === 'object' ? window : Function('return this')();

// built-in object can not be wrapped by Proxies
// their methods expect the object instance as the 'this' instead of the Proxy wrapper
// complex objects are wrapped with a Proxy of instrumented methods
// which switch the proxy to the raw object and to add reactive wiring
var handlers = new Map([[Map, collectionHandlers], [Set, collectionHandlers], [WeakMap, collectionHandlers], [WeakSet, collectionHandlers], [Object, false], [Array, false], [Int8Array, false], [Uint8Array, false], [Uint8ClampedArray, false], [Int16Array, false], [Uint16Array, false], [Int32Array, false], [Uint32Array, false], [Float32Array, false], [Float64Array, false]]);

function shouldInstrument(ref) {
  var constructor = ref.constructor;

  var isBuiltIn = typeof constructor === 'function' && constructor.name in globalObj && globalObj[constructor.name] === constructor;
  return !isBuiltIn || handlers.has(constructor);
}

function getHandlers(obj) {
  return handlers.get(obj.constructor);
}

var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var wellKnownSymbols = new Set(Object.getOwnPropertyNames(Symbol).map(function (key) { return Symbol[key]; }).filter(function (value) { return typeof value === 'symbol'; }));

// intercept get operations on observables to know which reaction uses their properties
function get(target, key, receiver) {
  var result = Reflect.get(target, key, receiver);
  // do not register (observable.prop -> reaction) pairs for well known symbols
  // these symbols are frequently retrieved in low level JavaScript under the hood
  if (typeof key === 'symbol' && wellKnownSymbols.has(key)) {
    return result;
  }
  // register and save (observable.prop -> runningReaction)
  registerRunningReactionForOperation({ target: target, key: key, receiver: receiver, type: 'get' });
  // if we are inside a reaction and observable.prop is an object wrap it in an observable too
  // this is needed to intercept property access on that object too (dynamic observable tree)
  var observableResult = rawToProxy.get(result);
  if (hasRunningReaction() && typeof result === 'object' && result !== null) {
    if (observableResult) {
      return observableResult;
    }
    // do not violate the none-configurable none-writable prop get handler invariant
    // fall back to none reactive mode in this case, instead of letting the Proxy throw a TypeError
    var descriptor = Reflect.getOwnPropertyDescriptor(target, key);
    if (!descriptor || !(descriptor.writable === false && descriptor.configurable === false)) {
      return observable(result);
    }
  }
  // otherwise return the observable wrapper if it is already created and cached or the raw object
  return observableResult || result;
}

function has(target, key) {
  var result = Reflect.has(target, key);
  // register and save (observable.prop -> runningReaction)
  registerRunningReactionForOperation({ target: target, key: key, type: 'has' });
  return result;
}

function ownKeys(target) {
  registerRunningReactionForOperation({ target: target, type: 'iterate' });
  return Reflect.ownKeys(target);
}

// intercept set operations on observables to know when to trigger reactions
function set(target, key, value, receiver) {
  // make sure to do not pollute the raw object with observables
  if (typeof value === 'object' && value !== null) {
    value = proxyToRaw.get(value) || value;
  }
  // save if the object had a descriptor for this key
  var hadKey = hasOwnProperty$1.call(target, key);
  // save if the value changed because of this set operation
  var oldValue = target[key];
  // execute the set operation before running any reaction
  var result = Reflect.set(target, key, value, receiver);
  // do not queue reactions if the target of the operation is not the raw receiver
  // (possible because of prototypal inheritance)
  if (target !== proxyToRaw.get(receiver)) {
    return result;
  }
  // queue a reaction if it's a new property or its value changed
  if (!hadKey) {
    queueReactionsForOperation({ target: target, key: key, value: value, receiver: receiver, type: 'add' });
  } else if (value !== oldValue) {
    queueReactionsForOperation({
      target: target,
      key: key,
      value: value,
      oldValue: oldValue,
      receiver: receiver,
      type: 'set'
    });
  }
  return result;
}

function deleteProperty(target, key) {
  // save if the object had the key
  var hadKey = hasOwnProperty$1.call(target, key);
  var oldValue = target[key];
  // execute the delete operation before running any reaction
  var result = Reflect.deleteProperty(target, key);
  // only queue reactions for delete operations which resulted in an actual change
  if (hadKey) {
    queueReactionsForOperation({ target: target, key: key, oldValue: oldValue, type: 'delete' });
  }
  return result;
}

var baseHandlers = { get: get, has: has, ownKeys: ownKeys, set: set, deleteProperty: deleteProperty };

function observable(obj) {
  if ( obj === void 0 ) obj = {};

  // if it is already an observable or it should not be wrapped, return it
  if (proxyToRaw.has(obj) || !shouldInstrument(obj)) {
    return obj;
  }
  // if it already has a cached observable wrapper, return it
  // otherwise create a new observable
  return rawToProxy.get(obj) || createObservable(obj);
}

function createObservable(obj) {
  // if it is a complex built-in object or a normal object, wrap it
  var handlers = getHandlers(obj) || baseHandlers;
  var observable = new Proxy(obj, handlers);
  // save these to switch between the raw object and the wrapped object with ease later
  rawToProxy.set(obj, observable);
  proxyToRaw.set(observable, obj);
  // init basic data structures to save and cleanup later (observable.prop -> reaction) connections
  storeObservable(obj);
  return observable;
}

function isObservable(obj) {
  return proxyToRaw.has(obj);
}

const STORE_KEY = 'js-element::ext::store';
let baseInterceptorAdded = false;
let observerInterceptorAdded = false;
let currentCtrl = null;
function hook(name, fn) {
    if (!baseInterceptorAdded) {
        core.intercept('init', (() => {
            return (c, next) => {
                currentCtrl = c;
                try {
                    next();
                }
                finally {
                    currentCtrl = null;
                }
            };
        })());
        baseInterceptorAdded = true;
    }
    return ((...args) => {
        if (!currentCtrl) {
            throw new Error(`Hook function "${name}" has been invoked outside of component initialization phase`);
        }
        return fn(...args);
    });
}
function withConsumer(ctx) {
    const c = currentCtrl;
    const host = c.getHost();
    let cancel = null;
    const cancelled = new Promise((resolve) => {
        cancel = () => resolve(null);
    });
    let value = ctx.defaultValue;
    c.beforeMount(() => {
        const detail = {
            context: ctx,
            callback: (newValue) => {
                value = newValue;
                c.refresh();
            },
            cancelled
        };
        host.dispatchEvent(new CustomEvent('$$context$$', {
            detail,
            bubbles: true,
            composed: true
        }));
    });
    c.beforeUnmount(() => cancel());
    return () => value;
}
const useCtx = hook('useCtx', useCtxFn);
function useCtxFn(arg) {
    if (arg && arg.kind === 'context') {
        return withConsumer(arg);
    }
    const ret = {};
    Object.entries(arg).forEach(([k, v]) => {
        Object.defineProperty(ret, k, {
            get: v.kind === 'context'
                ? withConsumer(v)
                : arg[k]
        });
    });
    return ret;
}
const useHost = hook('useHost', () => {
    return currentCtrl.getHost();
});
const useMethods = hook('useMethods', (ref, methods) => {
    if (ref && methods) {
        ref.current = methods;
    }
});
const useRefresher = hook('useRefresher', function () {
    return currentCtrl.refresh;
});
const useStatus = hook('useStatus', function () {
    const c = currentCtrl;
    return {
        isMounted: c.isMounted,
        hasUpdated: c.hasUpdated
    };
});
const useDefaults = hook('useDefaults', function (props, defaults) {
    const c = currentCtrl;
    const ret = Object.assign({}, defaults, props);
    c.beforeUpdate(() => {
        for (const key in ret) {
            delete ret[key];
        }
        Object.assign(ret, defaults, props);
    });
    return ret;
});
const useValue = hook('useValue', function (initialValue) {
    let nextValue = initialValue;
    let value = initialValue;
    const c = currentCtrl;
    const setValue = (updater) => {
        nextValue = typeof updater === 'function' ? updater(nextValue) : updater;
        c.onceBeforeUpdate(() => {
            value = nextValue;
        });
        c.refresh();
    };
    return [() => value, setValue];
});
const useState = hook('useState', function (initialState) {
    let nextState, mergeNecessary = false;
    const c = currentCtrl;
    const state = { ...initialState }, setState = (arg1, arg2) => {
        mergeNecessary = true;
        if (typeof arg1 === 'string') {
            nextState[arg1] =
                typeof arg2 === 'function' ? arg2(nextState[arg1]) : arg2;
        }
        else if (typeof arg1 === 'function') {
            Object.assign(nextState, arg1(nextState));
        }
        else {
            Object.assign(nextState, arg1);
        }
        c.onceBeforeUpdate(() => {
            if (mergeNecessary) {
                Object.assign(state, nextState);
                mergeNecessary = false;
            }
        });
        c.refresh();
    };
    nextState = { ...state };
    return [state, setState];
});
const useReactive = hook('useReactive', function (state) {
    if (!observerInterceptorAdded) {
        core.intercept('render', (ctrl, next) => {
            observe(next);
        });
        observerInterceptorAdded = true;
    }
    return isObservable(state) ? state : observable(state);
});
function addStyles(stylesContainer, styles) {
    if (styles instanceof HTMLStyleElement) {
        stylesContainer.appendChild(styles);
    }
    else {
        const css = styles.join('\n\n/* =============== */\n\n');
        const styleElem = document.createElement('style');
        styleElem.appendChild(document.createTextNode(css));
        stylesContainer.appendChild(styleElem);
    }
}
const useStyles = hook('useStyles', (...styles) => {
    const c = currentCtrl;
    const ret = (...styles) => {
        addStyles(c.getHost().shadowRoot.firstChild, styles);
    };
    ret.apply(null, styles);
    return ret;
});
const useEmitter = hook('useEmitter', function () {
    const host = currentCtrl.getHost();
    return (ev, handler) => {
        host.dispatchEvent(ev);
        if (handler) {
            handler(ev);
        }
    };
});
const useMemo = hook('useMemo', function (getValue, getDeps) {
    let oldDeps, value;
    const memo = {
        get value() {
            const newDeps = getDeps();
            if (!oldDeps || !isEqualArray(oldDeps, newDeps)) {
                value = getValue.apply(null, newDeps);
            }
            oldDeps = newDeps;
            return value;
        }
    };
    return memo;
});
const useAfterMount = hook('useAfterMount', function (action) {
    let cleanup;
    const c = currentCtrl;
    c.afterMount(() => {
        cleanup = action();
    });
    c.beforeUnmount(() => {
        if (typeof cleanup === 'function') {
            cleanup();
        }
        cleanup = null;
    });
});
const useBeforeMount = hook('useBeforeUpdate', function (action) {
    let cleanup;
    const c = currentCtrl;
    c.beforeMount(() => {
        cleanup = action();
    });
    c.afterUpdate(() => {
        if (typeof cleanup === 'function') {
            cleanup();
        }
    });
    c.beforeUnmount(() => {
        if (typeof cleanup === 'function') {
            cleanup();
        }
        cleanup = null;
    });
});
const useAfterUpdate = hook('useAfterUpdate', function (action) {
    let cleanup;
    const c = currentCtrl;
    c.afterUpdate(() => {
        if (typeof cleanup === 'function') {
            cleanup();
        }
        cleanup = action();
    });
    c.beforeUnmount(() => {
        if (typeof cleanup === 'function') {
            cleanup();
        }
        cleanup = null;
    });
});
const useBeforeUnmount = hook('useBeforeUnmount', function (action) {
    currentCtrl.beforeUnmount(action);
});
const useEffect = hook('useEffect', function (action, getDeps) {
    let oldDeps = null;
    let cleanup;
    const c = currentCtrl;
    const callback = () => {
        let needsAction = getDeps === undefined;
        if (!needsAction) {
            const newDeps = getDeps();
            needsAction =
                oldDeps === null ||
                    newDeps === null ||
                    !isEqualArray(oldDeps, newDeps);
            oldDeps = newDeps;
        }
        if (needsAction) {
            cleanup && cleanup();
            cleanup = action();
        }
    };
    c.afterMount(callback);
    c.afterUpdate(callback);
    c.beforeUnmount(() => cleanup && cleanup());
});
const useInterval = hook('useInterval', (task, delay) => {
    const getDelay = typeof delay === 'function' ? delay : () => delay;
    useEffect(() => {
        const id = setInterval(task, getDelay());
        return () => clearInterval(id);
    }, () => [getDelay()]);
});
const useTimer = hook('useTimer', (delay, get = getDate) => {
    let idx = 0;
    const getDelay = typeof delay === 'function' ? delay : () => delay;
    const [getValue, setValue] = useValue(get(idx++));
    useInterval(() => {
        setValue(get(idx++));
    }, () => getDelay());
    return getValue;
});
function getDate() {
    return new Date();
}
const initialState = {
    result: undefined,
    error: undefined,
    state: 'pending'
};
const usePromise = hook('usePromise', function (getPromise, getDeps) {
    const [state, setState] = useState(initialState);
    let promiseIdx = -1;
    useEffect(() => {
        ++promiseIdx;
        if (state.state !== 'pending') {
            setState(initialState);
        }
        const myPromiseIdx = promiseIdx;
        getPromise()
            .then((result) => {
            if (promiseIdx === myPromiseIdx) {
                setState({
                    result,
                    state: 'resolved'
                });
            }
        })
            .catch((error) => {
            if (promiseIdx === myPromiseIdx) {
                setState({
                    error: error instanceof Error ? error : new Error(String(error)),
                    state: 'rejected'
                });
            }
        });
    }, typeof getDeps === 'function' ? getDeps : () => []);
    return {
        getState: () => state.state,
        getResult: () => state.result,
        getError: () => state.error
    };
});
const useActions = hook('useActions', function (msgCreators) {
    let store = null;
    const c = currentCtrl;
    const ret = {};
    c.beforeMount(() => {
        send(c, {
            type: STORE_KEY,
            payload: {
                setStore(st) {
                    store = st;
                }
            }
        });
        if (!store) {
            throw new Error(`Store for actions not available (-> ${c.getName()})`);
        }
    });
    for (const key of Object.keys(msgCreators)) {
        ret[key] = (...args) => {
            store.dispatch(msgCreators[key](...args));
        };
    }
    return ret;
});
function createStoreHook(store) {
    return () => {
        const ret = {};
        const refresh = useRefresher();
        for (const key of Object.keys(store.getState())) {
            Object.defineProperty(ret, key, {
                get: () => store.getState()[key]
            });
        }
        useAfterMount(() => {
            const unsubscribe = store.subscribe(() => {
                refresh();
            });
            return unsubscribe;
        });
        return ret;
    };
}
let eventKeyCounter = 0;
function createStoreHooks() {
    const STORE_KEY2 = STORE_KEY + ++eventKeyCounter;
    const useStore = hook('useStore', (store) => {
        const c = currentCtrl;
        c.beforeMount(() => {
            receive(c, STORE_KEY, (msg) => {
                msg.payload.setStore(store);
            });
            receive(c, STORE_KEY2, (msg) => {
                msg.payload.setStore(store);
            });
        });
    });
    const useSelectors = hook('useSelectors', function (selectors) {
        let store = null;
        const c = currentCtrl;
        const ret = {};
        c.beforeMount(() => {
            send(c, {
                type: STORE_KEY2,
                payload: {
                    setStore(st) {
                        store = st;
                    }
                }
            });
            if (!store) {
                throw new Error(`Store for selectors not available (-> ${c.getName()})`);
            }
            const unsubscribe = store.subscribe(() => {
                c.refresh();
            });
            c.beforeUnmount(unsubscribe);
        });
        for (const key of Object.keys(selectors)) {
            Object.defineProperty(ret, key, {
                get: () => {
                    return selectors[key](store.getState());
                }
            });
        }
        return ret;
    });
    return [useStore, useSelectors];
}
function isEqualArray(arr1, arr2) {
    let ret = Array.isArray(arr1) && Array.isArray(arr2) && arr1.length === arr2.length;
    if (ret) {
        for (let i = 0; i < arr1.length; ++i) {
            if (arr1[i] !== arr2[i]) {
                ret = false;
                break;
            }
        }
    }
    return ret;
}
const SEND_RECEIVE_MESSAGE_TYPE_SUFFIX = 'js-element/hooks::send+receive';
function send(c, msg) {
    c.getHost().dispatchEvent(new CustomEvent(SEND_RECEIVE_MESSAGE_TYPE_SUFFIX + msg.type, {
        bubbles: true,
        composed: true,
        detail: msg
    }));
}
function receive(c, type, handler) {
    const host = c.getHost();
    const listener = (ev) => {
        ev.stopPropagation();
        handler(ev.detail);
    };
    const unsubscribe = () => {
        host.removeEventListener(SEND_RECEIVE_MESSAGE_TYPE_SUFFIX + type, listener);
    };
    host.addEventListener(SEND_RECEIVE_MESSAGE_TYPE_SUFFIX + type, listener);
    c.beforeUnmount(unsubscribe);
    return unsubscribe;
}

exports.createStoreHook = createStoreHook;
exports.createStoreHooks = createStoreHooks;
exports.hook = hook;
exports.useActions = useActions;
exports.useAfterMount = useAfterMount;
exports.useAfterUpdate = useAfterUpdate;
exports.useBeforeMount = useBeforeMount;
exports.useBeforeUnmount = useBeforeUnmount;
exports.useCtx = useCtx;
exports.useDefaults = useDefaults;
exports.useEffect = useEffect;
exports.useEmitter = useEmitter;
exports.useHost = useHost;
exports.useInterval = useInterval;
exports.useMemo = useMemo;
exports.useMethods = useMethods;
exports.usePromise = usePromise;
exports.useReactive = useReactive;
exports.useRefresher = useRefresher;
exports.useState = useState;
exports.useStatus = useStatus;
exports.useStyles = useStyles;
exports.useTimer = useTimer;
exports.useValue = useValue;
