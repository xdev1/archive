let t=!1;const e={init:[],render:[]},n={string:{mapPropToAttr:t=>t,mapAttrToProp:t=>t},number:{mapPropToAttr:t=>null===t?null:String(t),mapAttrToProp:t=>null===t?null:Number.parseFloat(t)},boolean:{mapPropToAttr:t=>t?"":null,mapAttrToProp:t=>null!==t}};function r(){const t=[];return{subscribe:e=>{t.push(e)},notify:()=>{t.length&&t.forEach((t=>t()))}}}function o(t,n){e[t].push(n)}function s(t,e,n){if(0===n.length)t();else{let r=()=>t();for(let t=n.length-1;t>=0;--t){const o=r;r=()=>{n[t](e,o)}}r()}}function a(n,o,a,c,i,l){const u=new WeakMap,p=class extends HTMLElement{constructor(){super();const t=document.createElement("div"),i=document.createElement("div");this.attachShadow({mode:"open"}),i.append(document.createElement("span")),this.shadowRoot.append(t,i);let l,p=!1,f=!1,d=!1,h=!1;const m=r(),b=r(),g=r(),_=r(),y=r(),A=[],T={getName:()=>n,getHost:()=>this,isInitialized:()=>p,isMounted:()=>f,hasUpdated:()=>d,beforeMount:m.subscribe,afterMount:b.subscribe,onceBeforeUpdate:t=>A.push(t),beforeUpdate:g.subscribe,afterUpdate:_.subscribe,beforeUnmount:y.subscribe,refresh:()=>{h||(h=!0,requestAnimationFrame((()=>{h=!1,w()})))}},w=()=>{if(f){if(A.length)try{A.forEach((t=>t()))}finally{A.length=0}g.notify()}s((()=>{if(!l)return;const t=l();try{c(t,i)}catch(t){throw console.error(`Render error in "${T.getName()}"`),t}}),T,e.render),p=!0,f?(d=!0,_.notify()):(f=!0,b.notify())};this.connectedCallback=()=>{p||s((()=>{l=a(this,T)}),T,e.init),m.notify(),w()},this.disconnectedCallback=()=>{y.notify(),i.innerHTML=""},o(this,T),u.set(this,T),T.beforeUnmount((()=>u.delete(this)))}connectedCallback(){this.connectedCallback()}disconnectedCallback(){this.disconnectedCallback()}};if(i&&i.length>0){const e=new Map,n=new Map;for(const r of i){e.set(r.propName,r),r.hasAttr&&n.set(r.attrName,r);const o=p.prototype;p.observedAttributes=Array.from(n.keys()),o.getAttribute=function(t){const e=n.get(t);return e&&e.hasAttr?e.mapPropToAttr(this[e.propName]):HTMLElement.prototype.getAttribute.call(this,t)},o.attributeChangedCallback=function(e,r,o){if(!t){const t=n.get(e);"string"==typeof o&&(this[t.propName]=t.mapAttrToProp(o))}};for(const n of e.values()){const{propName:e}=n;if("ref"===e)continue;const r=function(r){let o;Object.defineProperty(r,e,{get:()=>o,set(s){if(o=s,n.hasAttr&&n.reflect)try{t=!0,r.setAttribute(n.attrName,n.mapPropToAttr(s))}finally{t=!1}const a=u.get(this);a&&l&&l(a,e,s)}})};Object.defineProperty(o,e,{configurable:!0,get(){r(this)},set(t){r(this),this[e]=t}})}}}return p}const c=()=>h.prototype.toString();Object.defineProperty(c,"__getHiddenAPI",{value:()=>({createComponentType:_,createCustomElementClass:a,registerElement:g})}),Object.defineProperty(h.prototype,"toString",{value:c});const i=new Map;function l(t,e=!1){return(n,r)=>{const o=n.constructor;m(r);let s=i.get(o);s||(s=new Map,s.set(r,{propName:r,attrName:m(r),hasAttr:!0,reflect:e,mapPropToAttr:t.mapPropToAttr,mapAttrToProp:t.mapAttrToProp}),i.set(o,s))}}function u(t){return Object.freeze({kind:"context",defaultValue:t})}function p(t,e){const n="$$context$$";class r extends HTMLElement{constructor(){super(),this.__value=void 0,this.__subscribers=[],this.__cleanup=null,this.attachShadow({mode:"open"})}get value(){return this.__value}set value(t){t!==this.__value&&(this.__value=t,this.__subscribers.forEach((e=>e(t))))}connectedCallback(){this.shadowRoot.innerHTML="<slot></slot>";const t=t=>{t.detail.context===e&&(t.stopPropagation(),this.__subscribers.push(t.detail.callback),t.detail.cancelled.then((()=>{this.__subscribers.splice(this.__subscribers.indexOf(t.detail.callback),1)})))};this.addEventListener(n,t),this.__cleanup=()=>this.removeEventListener(n,t)}disconnectCallback(){this.__subscribers.length,this.__cleanup(),this.__cleanup=null}}return g(t,r),_(t)}function f(t=null){return{current:t}}function d(t,e,n){const r={detail:e||null,bubbles:!n||!!n.bubbles,cancelable:!n||!!n.cancelable,composed:!0};return new CustomEvent(t,r)}function h(t){return{define:(e=t.patchContent,function t(n,r,o){if("string"==typeof n)return t(o?{tag:n,props:r,init:o}:{tag:n,init:r});if(!n.init){const e=e=>t({...n,init:e});return e.bind=e,e.main=e,e.init=e,e}const s=n.tag,c=n.props||null;if(c){const t=new c;let e=i.get(c);e||(e=new Map,i.set(c,e));for(const n of Object.keys(t))e.has(n)||e.set(n,{propName:n,hasAttr:!1})}const l=function(t,e,n,r,o,s){let c=null;function i(t){return o(t.__data)}return a(t,((t,o)=>{const s=e?new e:{};if(t.__data=s,t.__ctrl=o,n&&n.has("ref")){let e=null;s.ref={},Object.defineProperty(s.ref,"current",{enumerable:!0,get:()=>e,set:n=>{if(e)throw new Error("Methods can only be set once");n&&(e=n,Object.assign(t,e))}})}if(null===c&&r&&(c=function(t){"function"==typeof t&&(t=t());if(!t)return"";Array.isArray(t)&&(t=t.join("\n\n/* =============== */\n\n"));return t}(r)),c){const e=document.createElement("style");e.appendChild(document.createTextNode(c)),t.shadowRoot.firstChild.appendChild(e)}}),i,s,n?Array.from(n.values()):[],((t,e,n)=>{t.getHost().__data[e]=n,t.refresh()}))}(s,c,i.get(c),n.styles,n.init,e);return g(s,l),_(s)}),render:b(t.isMountable,t.patchContent),impl:C(t.patchContent)};var e}function m(t){return t.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase()}function b(t,e){return(t,n)=>{const r="string"==typeof n?document.querySelector(n):n;if(!r)throw new TypeError(`Could not find container DOM element "${n}"`);r.innerHTML="",null!==t&&e(t,r)}}function g(t,e){customElements.get(t)?(console.clear(),console.log(`Custom element ${t} already defined -> reloading...`),setTimeout((()=>{console.clear(),location.reload()}),1e3)):customElements.define(t,e)}function _(t){return Object.defineProperty((e=>Object.assign(document.createElement(t),e)),"tagName",{value:t})}const y=new Map;function A(t){return e=>{const n="string"==typeof t?t:t.tag;let r=y.get(e);r?r.tag=n:(r={tag:n,props:new Map},y.set(e,r))}}function T(t,e){return(n,r)=>{const o=n.constructor,s=t?{propName:r,hasAttr:!0,attrName:m(r),reflect:!!e,mapPropToAttr:t.mapPropToAttr,mapAttrToProp:t.mapAttrToProp}:{propName:r,hasAttr:!1};let a=y.get(o);a||(a={tag:"",props:new Map},y.set(o,a)),a.props.set(r,s)}}function w(t){return T()}function P(){return T()}function C(t){return(e,n)=>{const r=y.get(e),o=r.tag,s=Array.from(r.props.values());return g(o,a(o,((t,n)=>{let r=!1;t.__data=new e;for(const{propName:e}of s)"ref"!==e?t[e]=t.__data[e]:r=!0;if(r){let e=null;t.__data.ref={},Object.defineProperty(t.__data.ref,"current",{enumerable:!0,get:()=>e,set:n=>{if(e)throw new Error("Methods can only be set once");n&&(e=n,Object.assign(t,e))}})}}),((t,e)=>n(t.__data)),t,s,((t,e,n)=>{t.getHost().__data[e]=n,t.refresh()}))),_(o)}}export{n as Attr,h as adapt,l as attr,u as createCtx,d as createEvent,f as createRef,p as defineProvider,A as elem,w as event,o as intercept,T as prop,P as ref};
