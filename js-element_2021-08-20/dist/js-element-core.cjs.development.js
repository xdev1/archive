'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

let ignoreAttributeChange = false;
const interceptions = {
    init: [],
    render: []
};
const Attr = {
    string: {
        mapPropToAttr: (it) => it,
        mapAttrToProp: (it) => it
    },
    number: {
        mapPropToAttr: (it) => (it === null ? null : String(it)),
        mapAttrToProp: (it) => it === null ? null : Number.parseFloat(it)
    },
    boolean: {
        mapPropToAttr: (it) => (!it ? null : ''),
        mapAttrToProp: (it) => (it === null ? false : true)
    }
};
function createNotifier() {
    const subscribers = [];
    return {
        subscribe: (subscriber) => void subscribers.push(subscriber),
        notify: () => void (subscribers.length && subscribers.forEach((it) => it()))
    };
}
function intercept(point, fn) {
    interceptions[point].push(fn);
}
function runIntercepted(action, payload, interceptors) {
    if (interceptors.length === 0) {
        action();
    }
    else {
        let next = () => action();
        for (let i = interceptors.length - 1; i >= 0; --i) {
            const nextFn = next;
            next = () => void interceptors[i](payload, nextFn);
        }
        next();
    }
}
function createCustomElementClass(name, prepare, init, render, propConfigs, onPropChange) {
    const ctrls = new WeakMap();
    const customElementClass = class extends HTMLElement {
        constructor() {
            super();
            const stylesElement = document.createElement('div');
            const contentElement = document.createElement('div');
            this.attachShadow({ mode: 'open' });
            contentElement.append(document.createElement('span'));
            this.shadowRoot.append(stylesElement, contentElement);
            let initialized = false;
            let mounted = false;
            let updated = false;
            let shallCommit = false;
            let getContent;
            const beforeMountNotifier = createNotifier();
            const afterMountNotifier = createNotifier();
            const beforeUpdateNotifier = createNotifier();
            const afterUpdateNotifier = createNotifier();
            const beforeUnmountNotifier = createNotifier();
            const onceBeforeUpdateActions = [];
            const ctrl = {
                getName: () => name,
                getHost: () => this,
                isInitialized: () => initialized,
                isMounted: () => mounted,
                hasUpdated: () => updated,
                beforeMount: beforeMountNotifier.subscribe,
                afterMount: afterMountNotifier.subscribe,
                onceBeforeUpdate: (task) => onceBeforeUpdateActions.push(task),
                beforeUpdate: beforeUpdateNotifier.subscribe,
                afterUpdate: afterUpdateNotifier.subscribe,
                beforeUnmount: beforeUnmountNotifier.subscribe,
                refresh: () => {
                    if (!shallCommit) {
                        shallCommit = true;
                        requestAnimationFrame(() => {
                            shallCommit = false;
                            commit();
                        });
                    }
                }
            };
            const commit = () => {
                if (mounted) {
                    if (onceBeforeUpdateActions.length) {
                        try {
                            onceBeforeUpdateActions.forEach((action) => action());
                        }
                        finally {
                            onceBeforeUpdateActions.length = 0;
                        }
                    }
                    beforeUpdateNotifier.notify();
                }
                runIntercepted(() => {
                    if (!getContent) {
                        return;
                    }
                    const content = getContent();
                    try {
                        render(content, contentElement);
                    }
                    catch (e) {
                        console.error(`Render error in "${ctrl.getName()}"`);
                        throw e;
                    }
                }, ctrl, interceptions.render);
                initialized = true;
                if (!mounted) {
                    mounted = true;
                    afterMountNotifier.notify();
                }
                else {
                    updated = true;
                    afterUpdateNotifier.notify();
                }
            };
            this.connectedCallback = () => {
                if (!initialized) {
                    runIntercepted(() => {
                        getContent = init(this, ctrl);
                    }, ctrl, interceptions.init);
                }
                beforeMountNotifier.notify();
                commit();
            };
            this.disconnectedCallback = () => {
                beforeUnmountNotifier.notify();
                contentElement.innerHTML = '';
            };
            prepare(this, ctrl);
            ctrls.set(this, ctrl);
            ctrl.beforeUnmount(() => ctrls.delete(this));
        }
        connectedCallback() {
            this.connectedCallback();
        }
        disconnectedCallback() {
            this.disconnectedCallback();
        }
    };
    if (propConfigs && propConfigs.length > 0) {
        const propConfigByPropName = new Map();
        const propConfigByAttrName = new Map();
        for (const propConfig of propConfigs) {
            propConfigByPropName.set(propConfig.propName, propConfig);
            if (propConfig.hasAttr) {
                propConfigByAttrName.set(propConfig.attrName, propConfig);
            }
            const proto = customElementClass.prototype;
            customElementClass.observedAttributes = Array.from(propConfigByAttrName.keys());
            proto.getAttribute = function (attrName) {
                const propInfo = propConfigByAttrName.get(attrName);
                return propInfo && propInfo.hasAttr
                    ? propInfo.mapPropToAttr(this[propInfo.propName])
                    : HTMLElement.prototype.getAttribute.call(this, attrName);
            };
            proto.attributeChangedCallback = function (attrName, oldValue, value) {
                if (!ignoreAttributeChange) {
                    const propInfo = propConfigByAttrName.get(attrName);
                    if (typeof value === 'string') {
                        this[propInfo.propName] = propInfo.mapAttrToProp(value);
                    }
                }
            };
            for (const propConfig of propConfigByPropName.values()) {
                const { propName } = propConfig;
                if (propName === 'ref') {
                    continue;
                }
                const setPropDescriptor = function (target) {
                    let propValue;
                    Object.defineProperty(target, propName, {
                        get() {
                            return propValue;
                        },
                        set(value) {
                            propValue = value;
                            if (propConfig.hasAttr && propConfig.reflect) {
                                try {
                                    ignoreAttributeChange = true;
                                    target.setAttribute(propConfig.attrName, propConfig.mapPropToAttr(value));
                                }
                                finally {
                                    ignoreAttributeChange = false;
                                }
                            }
                            const ctrl = ctrls.get(this);
                            ctrl && onPropChange && onPropChange(ctrl, propName, value);
                        }
                    });
                };
                Object.defineProperty(proto, propName, {
                    configurable: true,
                    get() {
                        setPropDescriptor(this);
                        return undefined;
                    },
                    set(value) {
                        setPropDescriptor(this);
                        this[propName] = value;
                    }
                });
            }
        }
    }
    return customElementClass;
}

const getHiddenAPI = () => ({
    createComponentType,
    createCustomElementClass,
    registerElement
});
const toString = () => adapt.prototype.toString();
Object.defineProperty(toString, '__getHiddenAPI', {
    value: getHiddenAPI
});
Object.defineProperty(adapt.prototype, 'toString', {
    value: toString
});
const globalPropConfigs = new Map();
function attr(type, reflect = false) {
    return (proto, propName) => {
        const propsClass = proto.constructor;
        propNameToAttrName(propName);
        let propConfigMap = globalPropConfigs.get(propsClass);
        if (!propConfigMap) {
            propConfigMap = new Map();
            propConfigMap.set(propName, {
                propName,
                attrName: propNameToAttrName(propName),
                hasAttr: true,
                reflect,
                mapPropToAttr: type.mapPropToAttr,
                mapAttrToProp: type.mapAttrToProp
            });
            globalPropConfigs.set(propsClass, propConfigMap);
        }
    };
}
function createCtx(defaultValue) {
    return Object.freeze({
        kind: 'context',
        defaultValue: defaultValue
    });
}
function defineProvider(tagName, ctx) {
    const eventName = `$$context$$`;
    class CtxProviderElement extends HTMLElement {
        constructor() {
            super();
            this.__value = undefined;
            this.__subscribers = [];
            this.__cleanup = null;
            this.attachShadow({ mode: 'open' });
        }
        get value() {
            return this.__value;
        }
        set value(val) {
            if (val !== this.__value) {
                this.__value = val;
                this.__subscribers.forEach((subscriber) => subscriber(val));
            }
        }
        connectedCallback() {
            this.shadowRoot.innerHTML = '<slot></slot>';
            const eventListener = (ev) => {
                if (ev.detail.context !== ctx) {
                    return;
                }
                ev.stopPropagation();
                this.__subscribers.push(ev.detail.callback);
                ev.detail.cancelled.then(() => {
                    this.__subscribers.splice(this.__subscribers.indexOf(ev.detail.callback), 1);
                });
            };
            this.addEventListener(eventName, eventListener);
            this.__cleanup = () => this.removeEventListener(eventName, eventListener);
        }
        disconnectCallback() {
            this.__subscribers.length === 0;
            this.__cleanup();
            this.__cleanup = null;
        }
    }
    registerElement(tagName, CtxProviderElement);
    return createComponentType(tagName);
}
function createRef(value = null) {
    return { current: value };
}
function createEvent(type, detail, options) {
    const params = {
        detail: detail || null,
        bubbles: !options || !!options.bubbles,
        cancelable: !options || !!options.cancelable,
        composed: true
    };
    return new CustomEvent(type, params);
}
function adapt(config) {
    return {
        define: createDefiner(config.patchContent),
        render: createRenderer(config.isMountable, config.patchContent),
        impl: createImplementer(config.patchContent)
    };
}
function createDefiner(patch) {
    return function define(arg1, arg2, arg3) {
        if (typeof arg1 === 'string') {
            return arg3
                ? define({ tag: arg1, props: arg2, init: arg3 })
                : define({ tag: arg1, init: arg2 });
        }
        else if (!arg1.init) {
            const ret = (init) => define({ ...arg1, init });
            ret.bind = ret;
            ret.main = ret;
            ret.init = ret;
            return ret;
        }
        const tagName = arg1.tag;
        const propsClass = arg1.props || null;
        if (propsClass) {
            const props = new propsClass();
            let propConfigMap = globalPropConfigs.get(propsClass);
            if (!propConfigMap) {
                propConfigMap = new Map();
                globalPropConfigs.set(propsClass, propConfigMap);
            }
            for (const key of Object.keys(props)) {
                if (!propConfigMap.has(key)) {
                    propConfigMap.set(key, {
                        propName: key,
                        hasAttr: false
                    });
                }
            }
        }
        const customElementClass = buildCustomElementClass(tagName, propsClass, globalPropConfigs.get(propsClass), arg1.styles, arg1.init, patch);
        registerElement(tagName, customElementClass);
        return createComponentType(tagName);
    };
}
function buildCustomElementClass(name, propsClass, propConfigMap, styles, main, render) {
    let combinedStyles = null;
    const prepare = (host, ctrl) => {
        const data = propsClass ? new propsClass() : {};
        host.__data = data;
        host.__ctrl = ctrl;
        if (propConfigMap && propConfigMap.has('ref')) {
            let componentMethods = null;
            data.ref = {};
            Object.defineProperty(data.ref, 'current', {
                enumerable: true,
                get: () => componentMethods,
                set: (methods) => {
                    if (componentMethods) {
                        throw new Error('Methods can only be set once');
                    }
                    else if (methods) {
                        componentMethods = methods;
                        Object.assign(host, componentMethods);
                    }
                }
            });
        }
        if (combinedStyles === null && styles) {
            combinedStyles = combineStyles(styles);
        }
        if (combinedStyles) {
            const styleElem = document.createElement('style');
            styleElem.appendChild(document.createTextNode(combinedStyles));
            host.shadowRoot.firstChild.appendChild(styleElem);
        }
    };
    function init(host) {
        return main(host.__data);
    }
    const customElementClass = createCustomElementClass(name, prepare, init, render, propConfigMap ? Array.from(propConfigMap.values()) : [], (ctrl, propName, value) => {
        ctrl.getHost().__data[propName] = value;
        ctrl.refresh();
    });
    return customElementClass;
}
function propNameToAttrName(propName) {
    return propName.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
}
function createRenderer(isValidContent, patch) {
    return (content, container) => {
        {
            if (content !== null && (!content || !isValidContent(content))) {
                throw new TypeError(`First argument "content" of function "render" must be a` +
                    ' valid content to render or null to clear target container');
            }
            if (!container || (typeof container !== 'string' && !container.tagName)) {
                throw new TypeError(`Second argument "container" of function "render" must either ` +
                    ' be a DOM element or selector string for the DOM element');
            }
        }
        const target = typeof container === 'string'
            ? document.querySelector(container)
            : container;
        if (!target) {
            throw new TypeError(`Could not find container DOM element "${container}"`);
        }
        target.innerHTML = '';
        content !== null && patch(content, target);
    };
}
function registerElement(tagName, elementClass) {
    if (customElements.get(tagName)) {
        console.clear();
        console.log(`Custom element ${tagName} already defined -> reloading...`);
        setTimeout(() => {
            console.clear();
            location.reload();
        }, 1000);
    }
    else {
        customElements.define(tagName, elementClass);
    }
}
function createComponentType(tagName) {
    const ret = (props) => Object.assign(document.createElement(tagName), props);
    return Object.defineProperty(ret, 'tagName', { value: tagName });
}
function combineStyles(styles) {
    if (typeof styles === 'function') {
        styles = styles();
    }
    if (!styles) {
        return '';
    }
    if (Array.isArray(styles)) {
        styles = styles.join('\n\n/* =============== */\n\n');
    }
    return styles;
}
const elemConfigByClass = new Map();
function elem(config) {
    return (constructor) => {
        const tag = typeof config === 'string' ? config : config.tag;
        let elemConfig = elemConfigByClass.get(constructor);
        if (!elemConfig) {
            elemConfig = { tag: tag, props: new Map() };
            elemConfigByClass.set(constructor, elemConfig);
        }
        else {
            elemConfig.tag = tag;
        }
    };
}
function prop(attr, reflect) {
    return (proto, propName) => {
        const constructor = proto.constructor;
        const propConfig = !attr
            ? { propName, hasAttr: false }
            : {
                propName,
                hasAttr: true,
                attrName: propNameToAttrName(propName),
                reflect: !!reflect,
                mapPropToAttr: attr.mapPropToAttr,
                mapAttrToProp: attr.mapAttrToProp
            };
        let elemConfig = elemConfigByClass.get(constructor);
        if (!elemConfig) {
            elemConfig = { tag: '', props: new Map() };
            elemConfigByClass.set(constructor, elemConfig);
        }
        elemConfig.props.set(propName, propConfig);
    };
}
function event(type) {
    return prop();
}
function ref() {
    return prop();
}
function createImplementer(patch) {
    return (constructor, fn) => {
        const elemConfig = elemConfigByClass.get(constructor);
        if ((!elemConfig || !elemConfig.tag)) {
            throw new Error('[implement] Class has not been decorated by @element');
        }
        const tag = elemConfig.tag;
        const prepare = (host, ctrl) => {
            let hasRefProp = false;
            host.__data = new constructor();
            for (const { propName } of propConfigs) {
                if (propName !== 'ref') {
                    host[propName] = host.__data[propName];
                }
                else {
                    hasRefProp = true;
                }
            }
            if (hasRefProp) {
                let componentMethods = null;
                host.__data.ref = {};
                Object.defineProperty(host.__data.ref, 'current', {
                    enumerable: true,
                    get: () => componentMethods,
                    set: (methods) => {
                        if (componentMethods) {
                            throw new Error('Methods can only be set once');
                        }
                        else if (methods) {
                            componentMethods = methods;
                            Object.assign(host, componentMethods);
                        }
                    }
                });
            }
        };
        const init = (host, ctrl) => {
            return fn(host.__data);
        };
        const onPropChange = (ctrl, propName, value) => {
            const host = ctrl.getHost();
            host.__data[propName] = value;
            ctrl.refresh();
        };
        const propConfigs = Array.from(elemConfig.props.values());
        const customElementClass = createCustomElementClass(tag, prepare, init, patch, propConfigs, onPropChange);
        registerElement(tag, customElementClass);
        return createComponentType(tag);
    };
}

exports.Attr = Attr;
exports.adapt = adapt;
exports.attr = attr;
exports.createCtx = createCtx;
exports.createEvent = createEvent;
exports.createRef = createRef;
exports.defineProvider = defineProvider;
exports.elem = elem;
exports.event = event;
exports.intercept = intercept;
exports.prop = prop;
exports.ref = ref;
