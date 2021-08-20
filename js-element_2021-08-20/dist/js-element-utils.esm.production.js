import{intercept as e}from"js-element";import{intercept as t}from"js-element/core";import{autorun as n}from"mobx";var r=new WeakMap,o=Symbol("iteration key");function a(e,t,n){var r=t.get(n);r&&r.forEach(e.add,e)}function u(e){e.delete(this)}var s=[],l=!1;function c(e,t,n,r){if(e.unobserved)return Reflect.apply(t,n,r);if(-1===s.indexOf(e)){!function(e){e.cleaners&&e.cleaners.forEach(u,e),e.cleaners=[]}(e);try{return s.push(e),Reflect.apply(t,n,r)}finally{s.pop()}}}function i(e){var t=s[s.length-1];t&&(y(t,e),function(e,t){var n=t.target,a=t.key;"iterate"===t.type&&(a=o);var u=r.get(n),s=u.get(a);s||(s=new Set,u.set(a,s)),s.has(e)||(s.add(e),e.cleaners.push(s))}(t,e))}function f(e){(function(e){var t=e.target,n=e.key,u=e.type,s=r.get(t),l=new Set;if("clear"===u?s.forEach((function(e,t){a(l,s,t)})):a(l,s,n),"add"===u||"delete"===u||"clear"===u){var c=Array.isArray(t)?"length":o;a(l,s,c)}return l})(e).forEach(p,e)}function p(e){y(e,this),"function"==typeof e.scheduler?e.scheduler(e):"object"==typeof e.scheduler?e.scheduler.add(e):e()}function y(e,t){if(e.debugger&&!l)try{l=!0,e.debugger(t)}finally{l=!1}}function d(){return s.length>0}var g=Symbol("is reaction"),h=new WeakMap,v=new WeakMap,b=Object.prototype.hasOwnProperty;function m(e){var t=v.get(e);return d()&&"object"==typeof e&&null!==e?t||S(e):t||e}function w(e,t){var n=e.next;return e.next=function(){var r=n.call(e),o=r.done,a=r.value;return o||(t?a[1]=m(a[1]):a=m(a)),{done:o,value:a}},e}var O={has:function(e){var t=h.get(this),n=Reflect.getPrototypeOf(this);return i({target:t,key:e,type:"has"}),n.has.apply(t,arguments)},get:function(e){var t=h.get(this),n=Reflect.getPrototypeOf(this);return i({target:t,key:e,type:"get"}),m(n.get.apply(t,arguments))},add:function(e){var t=h.get(this),n=Reflect.getPrototypeOf(this),r=n.has.call(t,e),o=n.add.apply(t,arguments);return r||f({target:t,key:e,value:e,type:"add"}),o},set:function(e,t){var n=h.get(this),r=Reflect.getPrototypeOf(this),o=r.has.call(n,e),a=r.get.call(n,e),u=r.set.apply(n,arguments);return o?t!==a&&f({target:n,key:e,value:t,oldValue:a,type:"set"}):f({target:n,key:e,value:t,type:"add"}),u},delete:function(e){var t=h.get(this),n=Reflect.getPrototypeOf(this),r=n.has.call(t,e),o=n.get?n.get.call(t,e):void 0,a=n.delete.apply(t,arguments);return r&&f({target:t,key:e,oldValue:o,type:"delete"}),a},clear:function(){var e=h.get(this),t=Reflect.getPrototypeOf(this),n=0!==e.size,r=e instanceof Map?new Map(e):new Set(e),o=t.clear.apply(e,arguments);return n&&f({target:e,oldTarget:r,type:"clear"}),o},forEach:function(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];var r=h.get(this),o=Reflect.getPrototypeOf(this);i({target:r,type:"iterate"});var a,u=function(t){for(var n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];return e.apply(void 0,[m(t)].concat(n))};return(a=o.forEach).call.apply(a,[r,u].concat(t))},keys:function(){var e=h.get(this),t=Reflect.getPrototypeOf(this);return i({target:e,type:"iterate"}),t.keys.apply(e,arguments)},values:function(){var e=h.get(this),t=Reflect.getPrototypeOf(this);i({target:e,type:"iterate"});var n=t.values.apply(e,arguments);return w(n,!1)},entries:function(){var e=h.get(this),t=Reflect.getPrototypeOf(this);i({target:e,type:"iterate"});var n=t.entries.apply(e,arguments);return w(n,!0)},get size(){var e=h.get(this),t=Reflect.getPrototypeOf(this);return i({target:e,type:"iterate"}),Reflect.get(t,"size",e)}};O[Symbol.iterator]=function(){var e=h.get(this),t=Reflect.getPrototypeOf(this);i({target:e,type:"iterate"});var n=t[Symbol.iterator].apply(e,arguments);return w(n,e instanceof Map)};var k={get:function(e,t,n){return e=b.call(O,t)?O:e,Reflect.get(e,t,n)}},E="object"==typeof window?window:Function("return this")(),R=new Map([[Map,k],[Set,k],[WeakMap,k],[WeakSet,k],[Object,!1],[Array,!1],[Int8Array,!1],[Uint8Array,!1],[Uint8ClampedArray,!1],[Int16Array,!1],[Uint16Array,!1],[Int32Array,!1],[Uint32Array,!1],[Float32Array,!1],[Float64Array,!1]]);var j=Object.prototype.hasOwnProperty,P=new Set(Object.getOwnPropertyNames(Symbol).map((function(e){return Symbol[e]})).filter((function(e){return"symbol"==typeof e}))),M={get:function(e,t,n){var r=Reflect.get(e,t,n);if("symbol"==typeof t&&P.has(t))return r;i({target:e,key:t,receiver:n,type:"get"});var o=v.get(r);if(d()&&"object"==typeof r&&null!==r){if(o)return o;var a=Reflect.getOwnPropertyDescriptor(e,t);if(!a||!1!==a.writable||!1!==a.configurable)return S(r)}return o||r},has:function(e,t){var n=Reflect.has(e,t);return i({target:e,key:t,type:"has"}),n},ownKeys:function(e){return i({target:e,type:"iterate"}),Reflect.ownKeys(e)},set:function(e,t,n,r){"object"==typeof n&&null!==n&&(n=h.get(n)||n);var o=j.call(e,t),a=e[t],u=Reflect.set(e,t,n,r);return e!==h.get(r)||(o?n!==a&&f({target:e,key:t,value:n,oldValue:a,receiver:r,type:"set"}):f({target:e,key:t,value:n,receiver:r,type:"add"})),u},deleteProperty:function(e,t){var n=j.call(e,t),r=e[t],o=Reflect.deleteProperty(e,t);return n&&f({target:e,key:t,oldValue:r,type:"delete"}),o}};function S(e){return void 0===e&&(e={}),h.has(e)||"function"==typeof(t=e.constructor)&&t.name in E&&E[t.name]===t&&!R.has(t)?e:v.get(e)||function(e){var t=function(e){return R.get(e.constructor)}(e)||M,n=new Proxy(e,t);return v.set(e,n),h.set(n,e),function(e){r.set(e,new Map)}(e),n}(e);var t}let U=!1,A=!1,x=null;function C(e,n){return U||(t("init",((e,t)=>{x=e;try{t()}finally{x=null}})),U=!0),(...t)=>{if(!x)throw new Error(`Hook function "${e}" has been invoked outside of component initialization phase`);return n(...t)}}function H(e){const t=x,n=t.getHost();let r=null;const o=new Promise((e=>{r=()=>e(null)}));let a=e.defaultValue;return t.beforeMount((()=>{const r={context:e,callback:e=>{a=e,t.refresh()},cancelled:o};n.dispatchEvent(new CustomEvent("$$context$$",{detail:r,bubbles:!0,composed:!0}))})),t.beforeUnmount((()=>r())),()=>a}C("useCtx",(function(e){if(e&&"context"===e.kind)return H(e);const t={};return Object.entries(e).forEach((([n,r])=>{Object.defineProperty(t,n,{get:"context"===r.kind?H(r):e[n]})})),t}));const I=C("useHost",(()=>x.getHost()));C("useMethods",((e,t)=>{e&&t&&(e.current=t)})),C("useRefresher",(function(){return x.refresh})),C("useStatus",(function(){const e=x;return{isMounted:e.isMounted,hasUpdated:e.hasUpdated}})),C("useDefaults",(function(e,t){const n=x,r=Object.assign({},t,e);return n.beforeUpdate((()=>{for(const e in r)delete r[e];Object.assign(r,t,e)})),r}));const V=C("useValue",(function(e){let t=e,n=e;const r=x;return[()=>n,e=>{t="function"==typeof e?e(t):e,r.onceBeforeUpdate((()=>{n=t})),r.refresh()}]})),$=C("useState",(function(e){let t,n=!1;const r=x,o={...e};return t={...o},[o,(e,a)=>{n=!0,"string"==typeof e?t[e]="function"==typeof a?a(t[e]):a:"function"==typeof e?Object.assign(t,e(t)):Object.assign(t,e),r.onceBeforeUpdate((()=>{n&&(Object.assign(o,t),n=!1)})),r.refresh()}]}));C("useReactive",(function(e){return A||(t("render",((e,t)=>{!function(e,t){void 0===t&&(t={});var n=e[g]?e:function t(){return c(t,e,this,arguments)};n.scheduler=t.scheduler,n.debugger=t.debugger,n[g]=!0,t.lazy||n()}(t)})),A=!0),n=e,h.has(n)?e:S(e);var n})),C("useStyles",((...e)=>{const t=x,n=(...e)=>{!function(e,t){if(t instanceof HTMLStyleElement)e.appendChild(t);else{const n=t.join("\n\n/* =============== */\n\n"),r=document.createElement("style");r.appendChild(document.createTextNode(n)),e.appendChild(r)}}(t.getHost().shadowRoot.firstChild,e)};return n.apply(null,e),n})),C("useEmitter",(function(){const e=x.getHost();return(t,n)=>{e.dispatchEvent(t),n&&n(t)}})),C("useMemo",(function(e,t){let n,r;return{get value(){const o=t();return n&&D(n,o)||(r=e.apply(null,o)),n=o,r}}})),C("useAfterMount",(function(e){let t;const n=x;n.afterMount((()=>{t=e()})),n.beforeUnmount((()=>{"function"==typeof t&&t(),t=null}))}));const z=C("useBeforeUpdate",(function(e){let t;const n=x;n.beforeMount((()=>{t=e()})),n.afterUpdate((()=>{"function"==typeof t&&t()})),n.beforeUnmount((()=>{"function"==typeof t&&t(),t=null}))}));C("useAfterUpdate",(function(e){let t;const n=x;n.afterUpdate((()=>{"function"==typeof t&&t(),t=e()})),n.beforeUnmount((()=>{"function"==typeof t&&t(),t=null}))})),C("useBeforeUnmount",(function(e){x.beforeUnmount(e)}));const N=C("useEffect",(function(e,t){let n,r=null;const o=x,a=()=>{let o=void 0===t;if(!o){const e=t();o=null===r||null===e||!D(r,e),r=e}o&&(n&&n(),n=e())};o.afterMount(a),o.afterUpdate(a),o.beforeUnmount((()=>n&&n()))})),W=C("useInterval",((e,t)=>{const n="function"==typeof t?t:()=>t;N((()=>{const t=setInterval(e,n());return()=>clearInterval(t)}),(()=>[n()]))}));function B(){return new Date}C("useTimer",((e,t=B)=>{let n=0;const r="function"==typeof e?e:()=>e,[o,a]=V(t(n++));return W((()=>{a(t(n++))}),(()=>r())),o}));const T={result:void 0,error:void 0,state:"pending"};function D(e,t){let n=Array.isArray(e)&&Array.isArray(t)&&e.length===t.length;if(n)for(let r=0;r<e.length;++r)if(e[r]!==t[r]){n=!1;break}return n}C("usePromise",(function(e,t){const[n,r]=$(T);let o=-1;return N((()=>{++o,"pending"!==n.state&&r(T);const t=o;e().then((e=>{o===t&&r({result:e,state:"resolved"})})).catch((e=>{o===t&&r({error:e instanceof Error?e:new Error(String(e)),state:"rejected"})}))}),"function"==typeof t?t:()=>[]),{getState:()=>n.state,getResult:()=>n.result,getError:()=>n.error}})),C("useActions",(function(e){let t=null;const n=x,r={};n.beforeMount((()=>{if(function(e,t){e.getHost().dispatchEvent(new CustomEvent("js-element/hooks::send+receive"+t.type,{bubbles:!0,composed:!0,detail:t}))}(n,{type:"js-element::ext::store",payload:{setStore(e){t=e}}}),!t)throw new Error(`Store for actions not available (-> ${n.getName()})`)}));for(const n of Object.keys(e))r[n]=(...r)=>{t.dispatch(e[n](...r))};return r}));let F=!1;function L(e,t){let n="string"==typeof e?t:e,r=[],o=!1,a=!1,u=!1;const s=()=>n;return[{getState:s,dispatch(e){},subscribe(e){const t=e.bind(null);let n=!1;return r.push(t),()=>{if(n)return;const e=r.findIndex((e=>e===t));o?(a=!0,r[e]=null):r.splice(e,1),n=!0}},destroy(){u||"function"!=typeof n.destroy||(n.destroy(),u=!0)}},e=>{if(n=Object.assign({},n,e(n)),o)throw new Error("Not allowed to set state while store is notifying");const t=r.length;a=!1;try{for(let e=0;e<t;++e){const t=r[e];t&&t()}a&&(r=r.filter((e=>null!==e)))}finally{a=!1,o=!1}},s]}let K=1;function q(){F||(e("render",((e,t)=>{n(t)})),F=!0);const t="js-element/utils::mobx::"+K++;return[C("useObservableProvider",(e=>{const n=I();return z((()=>{const r=t=>{t.stopPropagation(),t.detail.callback(e)};return n.addEventListener(t,r),()=>{removeEventListener(t,r)}})),e})),()=>{let e=null;const n=I();return z((()=>{n.dispatchEvent(new CustomEvent(t,{detail:{callback:t=>{e=t}},bubbles:!0,composed:!0}))})),new Proxy({},{get(t,n){if(!e)throw new Error("No mobx observable provided");return e[n]},set(t,n,r){if(!e)throw new Error("Observable not available");return e[n]=r,!0}})}]}export{q as createMobxHooks,L as initStore};
