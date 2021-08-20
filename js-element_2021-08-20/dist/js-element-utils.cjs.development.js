'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsElement = require('js-element');
var core = require('js-element/core');
var mobx = require('mobx');

var t=new WeakMap,n=Symbol("iteration key");function r(e,t,n){var r=t.get(n);r&&r.forEach(e.add,e);}function o(e){e.delete(this);}var a=[],u=!1;function c(e,t,n,r){if(e.unobserved)return Reflect.apply(t,n,r);if(-1===a.indexOf(e)){!function(e){e.cleaners&&e.cleaners.forEach(o,e),e.cleaners=[];}(e);try{return a.push(e),Reflect.apply(t,n,r)}finally{a.pop();}}}function s(e){var r=a[a.length-1];r&&(f(r,e),function(e,r){var o=r.target,a=r.key;"iterate"===r.type&&(a=n);var u=t.get(o),c=u.get(a);c||(c=new Set,u.set(a,c)),c.has(e)||(c.add(e),e.cleaners.push(c));}(r,e));}function i(e){(function(e){var o=e.target,a=e.key,u=e.type,c=t.get(o),s=new Set;if("clear"===u?c.forEach((function(e,t){r(s,c,t);})):r(s,c,a),"add"===u||"delete"===u||"clear"===u){var i=Array.isArray(o)?"length":n;r(s,c,i);}return s})(e).forEach(l,e);}function l(e){f(e,this),"function"==typeof e.scheduler?e.scheduler(e):"object"==typeof e.scheduler?e.scheduler.add(e):e();}function f(e,t){if(e.debugger&&!u)try{u=!0,e.debugger(t);}finally{u=!1;}}function p(){return a.length>0}var y=Symbol("is reaction");var g=new WeakMap,d=new WeakMap,h=Object.prototype.hasOwnProperty;function v(e){var t=d.get(e);return p()&&"object"==typeof e&&null!==e?t||E(e):t||e}function b(e,t){var n=e.next;return e.next=function(){var r=n.call(e),o=r.done,a=r.value;return o||(t?a[1]=v(a[1]):a=v(a)),{done:o,value:a}},e}var m={has:function(e){var t=g.get(this),n=Reflect.getPrototypeOf(this);return s({target:t,key:e,type:"has"}),n.has.apply(t,arguments)},get:function(e){var t=g.get(this),n=Reflect.getPrototypeOf(this);return s({target:t,key:e,type:"get"}),v(n.get.apply(t,arguments))},add:function(e){var t=g.get(this),n=Reflect.getPrototypeOf(this),r=n.has.call(t,e),o=n.add.apply(t,arguments);return r||i({target:t,key:e,value:e,type:"add"}),o},set:function(e,t){var n=g.get(this),r=Reflect.getPrototypeOf(this),o=r.has.call(n,e),a=r.get.call(n,e),u=r.set.apply(n,arguments);return o?t!==a&&i({target:n,key:e,value:t,oldValue:a,type:"set"}):i({target:n,key:e,value:t,type:"add"}),u},delete:function(e){var t=g.get(this),n=Reflect.getPrototypeOf(this),r=n.has.call(t,e),o=n.get?n.get.call(t,e):void 0,a=n.delete.apply(t,arguments);return r&&i({target:t,key:e,oldValue:o,type:"delete"}),a},clear:function(){var e=g.get(this),t=Reflect.getPrototypeOf(this),n=0!==e.size,r=e instanceof Map?new Map(e):new Set(e),o=t.clear.apply(e,arguments);return n&&i({target:e,oldTarget:r,type:"clear"}),o},forEach:function(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];var r=g.get(this),o=Reflect.getPrototypeOf(this);s({target:r,type:"iterate"});var a,u=function(t){for(var n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];return e.apply(void 0,[v(t)].concat(n))};return (a=o.forEach).call.apply(a,[r,u].concat(t))},keys:function(){var e=g.get(this),t=Reflect.getPrototypeOf(this);return s({target:e,type:"iterate"}),t.keys.apply(e,arguments)},values:function(){var e=g.get(this),t=Reflect.getPrototypeOf(this);s({target:e,type:"iterate"});var n=t.values.apply(e,arguments);return b(n,!1)},entries:function(){var e=g.get(this),t=Reflect.getPrototypeOf(this);s({target:e,type:"iterate"});var n=t.entries.apply(e,arguments);return b(n,!0)},get size(){var e=g.get(this),t=Reflect.getPrototypeOf(this);return s({target:e,type:"iterate"}),Reflect.get(t,"size",e)}};m[Symbol.iterator]=function(){var e=g.get(this),t=Reflect.getPrototypeOf(this);s({target:e,type:"iterate"});var n=t[Symbol.iterator].apply(e,arguments);return b(n,e instanceof Map)};var w={get:function(e,t,n){return e=h.call(m,t)?m:e,Reflect.get(e,t,n)}},k="object"==typeof window?window:Function("return this")(),O=new Map([[Map,w],[Set,w],[WeakMap,w],[WeakSet,w],[Object,!1],[Array,!1],[Int8Array,!1],[Uint8Array,!1],[Uint8ClampedArray,!1],[Int16Array,!1],[Uint16Array,!1],[Int32Array,!1],[Uint32Array,!1],[Float32Array,!1],[Float64Array,!1]]);function S(e){return O.get(e.constructor)}var j=Object.prototype.hasOwnProperty,R=new Set(Object.getOwnPropertyNames(Symbol).map((function(e){return Symbol[e]})).filter((function(e){return "symbol"==typeof e})));var P={get:function(e,t,n){var r=Reflect.get(e,t,n);if("symbol"==typeof t&&R.has(t))return r;s({target:e,key:t,receiver:n,type:"get"});var o=d.get(r);if(p()&&"object"==typeof r&&null!==r){if(o)return o;var a=Reflect.getOwnPropertyDescriptor(e,t);if(!a||!1!==a.writable||!1!==a.configurable)return E(r)}return o||r},has:function(e,t){var n=Reflect.has(e,t);return s({target:e,key:t,type:"has"}),n},ownKeys:function(e){return s({target:e,type:"iterate"}),Reflect.ownKeys(e)},set:function(e,t,n,r){"object"==typeof n&&null!==n&&(n=g.get(n)||n);var o=j.call(e,t),a=e[t],u=Reflect.set(e,t,n,r);return e!==g.get(r)||(o?n!==a&&i({target:e,key:t,value:n,oldValue:a,receiver:r,type:"set"}):i({target:e,key:t,value:n,receiver:r,type:"add"})),u},deleteProperty:function(e,t){var n=j.call(e,t),r=e[t],o=Reflect.deleteProperty(e,t);return n&&i({target:e,key:t,oldValue:r,type:"delete"}),o}};function E(e){return void 0===e&&(e={}),g.has(e)||"function"==typeof(n=e.constructor)&&n.name in k&&k[n.name]===n&&!O.has(n)?e:d.get(e)||function(e){var n=S(e)||P,r=new Proxy(e,n);return d.set(e,r),g.set(r,e),function(e){t.set(e,new Map);}(e),r}(e);var n;}const M="js-element::ext::store";let U=!1,A=!1,x=null;function H(t,n){return U||(core.intercept("init",((e,t)=>{x=e;try{t();}finally{x=null;}})),U=!0),(...e)=>{if(!x)throw new Error(`Hook function "${t}" has been invoked outside of component initialization phase`);return n(...e)}}function C(e){const t=x,n=t.getHost();let r=null;const o=new Promise((e=>{r=()=>e(null);}));let a=e.defaultValue;return t.beforeMount((()=>{const r={context:e,callback:e=>{a=e,t.refresh();},cancelled:o};n.dispatchEvent(new CustomEvent("$$context$$",{detail:r,bubbles:!0,composed:!0}));})),t.beforeUnmount((()=>r())),()=>a}H("useCtx",(function(e){if(e&&"context"===e.kind)return C(e);const t={};return Object.entries(e).forEach((([n,r])=>{Object.defineProperty(t,n,{get:"context"===r.kind?C(r):e[n]});})),t}));const I=H("useHost",(()=>x.getHost()));H("useMethods",((e,t)=>{e&&t&&(e.current=t);}));H("useRefresher",(function(){return x.refresh}));H("useStatus",(function(){const e=x;return {isMounted:e.isMounted,hasUpdated:e.hasUpdated}}));H("useDefaults",(function(e,t){const n=x,r=Object.assign({},t,e);return n.beforeUpdate((()=>{for(const e in r)delete r[e];Object.assign(r,t,e);})),r}));const N=H("useValue",(function(e){let t=e,n=e;const r=x;return [()=>n,e=>{t="function"==typeof e?e(t):e,r.onceBeforeUpdate((()=>{n=t;})),r.refresh();}]})),T=H("useState",(function(e){let t,n=!1;const r=x,o={...e};return t={...o},[o,(e,a)=>{n=!0,"string"==typeof e?t[e]="function"==typeof a?a(t[e]):a:"function"==typeof e?Object.assign(t,e(t)):Object.assign(t,e),r.onceBeforeUpdate((()=>{n&&(Object.assign(o,t),n=!1);})),r.refresh();}]}));H("useReactive",(function(t){return A||(core.intercept("render",((e,t)=>{!function(e,t){void 0===t&&(t={});var n=e[y]?e:function t(){return c(t,e,this,arguments)};n.scheduler=t.scheduler,n.debugger=t.debugger,n[y]=!0,t.lazy||n();}(t);})),A=!0),n=t,g.has(n)?t:E(t);var n;}));H("useStyles",((...e)=>{const t=x,n=(...e)=>{!function(e,t){if(t instanceof HTMLStyleElement)e.appendChild(t);else {const n=t.join("\n\n/* =============== */\n\n"),r=document.createElement("style");r.appendChild(document.createTextNode(n)),e.appendChild(r);}}(t.getHost().shadowRoot.firstChild,e);};return n.apply(null,e),n}));H("useEmitter",(function(){const e=x.getHost();return (t,n)=>{e.dispatchEvent(t),n&&n(t);}}));H("useMemo",(function(e,t){let n,r;return {get value(){const o=t();return n&&ue(n,o)||(r=e.apply(null,o)),n=o,r}}}));H("useAfterMount",(function(e){let t;const n=x;n.afterMount((()=>{t=e();})),n.beforeUnmount((()=>{"function"==typeof t&&t(),t=null;}));}));const G=H("useBeforeUpdate",(function(e){let t;const n=x;n.beforeMount((()=>{t=e();})),n.afterUpdate((()=>{"function"==typeof t&&t();})),n.beforeUnmount((()=>{"function"==typeof t&&t(),t=null;}));}));H("useAfterUpdate",(function(e){let t;const n=x;n.afterUpdate((()=>{"function"==typeof t&&t(),t=e();})),n.beforeUnmount((()=>{"function"==typeof t&&t(),t=null;}));}));H("useBeforeUnmount",(function(e){x.beforeUnmount(e);}));const X=H("useEffect",(function(e,t){let n,r=null;const o=x,a=()=>{let o=void 0===t;if(!o){const e=t();o=null===r||null===e||!ue(r,e),r=e;}o&&(n&&n(),n=e());};o.afterMount(a),o.afterUpdate(a),o.beforeUnmount((()=>n&&n()));})),Y=H("useInterval",((e,t)=>{const n="function"==typeof t?t:()=>t;X((()=>{const t=setInterval(e,n());return ()=>clearInterval(t)}),(()=>[n()]));}));H("useTimer",((e,t=_)=>{let n=0;const r="function"==typeof e?e:()=>e,[o,a]=N(t(n++));return Y((()=>{a(t(n++));}),(()=>r())),o}));function _(){return new Date}const ee={result:void 0,error:void 0,state:"pending"};H("usePromise",(function(e,t){const[n,r]=T(ee);let o=-1;return X((()=>{++o,"pending"!==n.state&&r(ee);const t=o;e().then((e=>{o===t&&r({result:e,state:"resolved"});})).catch((e=>{o===t&&r({error:e instanceof Error?e:new Error(String(e)),state:"rejected"});}));}),"function"==typeof t?t:()=>[]),{getState:()=>n.state,getResult:()=>n.result,getError:()=>n.error}}));H("useActions",(function(e){let t=null;const n=x,r={};n.beforeMount((()=>{if(ce(n,{type:M,payload:{setStore(e){t=e;}}}),!t)throw new Error(`Store for actions not available (-> ${n.getName()})`)}));for(const n of Object.keys(e))r[n]=(...r)=>{t.dispatch(e[n](...r));};return r}));function ue(e,t){let n=Array.isArray(e)&&Array.isArray(t)&&e.length===t.length;if(n)for(let r=0;r<e.length;++r)if(e[r]!==t[r]){n=!1;break}return n}function ce(e,t){e.getHost().dispatchEvent(new CustomEvent("js-element/hooks::send+receive"+t.type,{bubbles:!0,composed:!0,detail:t}));}

let mobxInterceptorRegistered = false;
function initStore(arg1, arg2) {
    let state = typeof arg1 === 'string' ? arg2 : arg1;
    let subscribers = [];
    let notifying = false;
    let unsubscribedWhileNotifying = false;
    let destroyed = false;
    const getState = () => state;
    const setState = (fn) => {
        state = Object.assign({}, state, fn(state));
        if (notifying) {
            throw new Error('Not allowed to set state while store is notifying');
        }
        const subscriberCount = subscribers.length;
        unsubscribedWhileNotifying = false;
        try {
            for (let i = 0; i < subscriberCount; ++i) {
                const subscriber = subscribers[i];
                if (subscriber) {
                    subscriber();
                }
            }
            if (unsubscribedWhileNotifying) {
                subscribers = subscribers.filter((it) => it !== null);
            }
        }
        finally {
            unsubscribedWhileNotifying = false;
            notifying = false;
        }
    };
    const store = {
        getState,
        dispatch(ev) { },
        subscribe(subscriber) {
            const sub = subscriber.bind(null);
            let unsubscribed = false;
            subscribers.push(sub);
            return () => {
                if (unsubscribed) {
                    return;
                }
                const idx = subscribers.findIndex((it) => it === sub);
                if (notifying) {
                    unsubscribedWhileNotifying = true;
                    subscribers[idx] = null;
                }
                else {
                    subscribers.splice(idx, 1);
                }
                unsubscribed = true;
            };
        },
        destroy() {
            if (!destroyed && typeof state.destroy === 'function') {
                state.destroy();
                destroyed = true;
            }
        }
    };
    return [store, setState, getState];
}
let nextStoreId = 1;
function createMobxHooks() {
    if (!mobxInterceptorRegistered) {
        jsElement.intercept('render', (ctlr, next) => {
            mobx.autorun(next);
        });
        mobxInterceptorRegistered = true;
    }
    const eventName = 'js-element/utils::mobx::' + nextStoreId++;
    const useObservableProvider = H('useObservableProvider', (observable) => {
        const host = I();
        G(() => {
            const listener = (ev) => {
                ev.stopPropagation();
                ev.detail.callback(observable);
            };
            host.addEventListener(eventName, listener);
            return () => {
                removeEventListener(eventName, listener);
            };
        });
        return observable;
    });
    const useObservable = () => {
        let observable = null;
        const host = I();
        G(() => {
            host.dispatchEvent(new CustomEvent(eventName, {
                detail: {
                    callback: (obs) => {
                        observable = obs;
                    }
                },
                bubbles: true,
                composed: true
            }));
        });
        return new Proxy({}, {
            get(target, key) {
                if (!observable) {
                    throw new Error('No mobx observable provided');
                }
                return observable[key];
            },
            set(target, key, value) {
                if (!observable) {
                    throw new Error('Observable not available');
                }
                observable[key] = value;
                return true;
            }
        });
    };
    return [useObservableProvider, useObservable];
}

exports.createMobxHooks = createMobxHooks;
exports.initStore = initStore;
