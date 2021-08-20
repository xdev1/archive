(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.jsElement = {}));
}(this, (function (exports) { 'use strict';

  var n$3=function(t,s,r,e){var u;s[0]=0;for(var h=1;h<s.length;h++){var p=s[h++],a=s[h]?(s[0]|=p?1:2,r[s[h++]]):s[++h];3===p?e[0]=a:4===p?e[1]=Object.assign(e[1]||{},a):5===p?(e[1]=e[1]||{})[s[++h]]=a:6===p?e[1][s[++h]]+=a+"":p?(u=t.apply(a,n$3(t,a,r,["",null])),e.push(u),a[0]?s[0]|=2:(s[h-2]=0,s[h]=u)):e.push(a);}return e},t$3=new Map;function htm(s){var r=t$3.get(this);return r||(r=new Map,t$3.set(this,r)),(r=n$3(this,r.get(s)||(r.set(s,r=function(n){for(var t,s,r=1,e="",u="",h=[0],p=function(n){1===r&&(n||(e=e.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?h.push(0,n,e):3===r&&(n||e)?(h.push(3,n,e),r=2):2===r&&"..."===e&&n?h.push(4,n,0):2===r&&e&&!n?h.push(5,0,!0,e):r>=5&&((e||!n&&5===r)&&(h.push(r,0,e,s),r=6),n&&(h.push(r,n,0,s),r=6)),e="";},a=0;a<n.length;a++){a&&(1===r&&p(),p(a));for(var l=0;l<n[a].length;l++)t=n[a][l],1===r?"<"===t?(p(),h=[h],r=3):e+=t:4===r?"--"===e&&">"===t?(r=1,e=""):e=t+e[0]:u?t===u?u="":e+=t:'"'===t||"'"===t?u=t:">"===t?(p(),r=1):r&&("="===t?(r=5,s=e,e=""):"/"===t&&(r<5||">"===n[a][l+1])?(p(),3===r&&(h=h[0]),r=h,(h=h[0]).push(2,0,r),r=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(p(),r=2):e+=t),3===r&&"!--"===e&&(r=4,h=h[0]);}return p(),h}(s)),r),arguments,[])).length>1?r:r[0]}

  let t$2=!1;const e={init:[],render:[]},n$2={string:{mapPropToAttr:t=>t,mapAttrToProp:t=>t},number:{mapPropToAttr:t=>null===t?null:String(t),mapAttrToProp:t=>null===t?null:Number.parseFloat(t)},boolean:{mapPropToAttr:t=>t?"":null,mapAttrToProp:t=>null!==t}};function r$2(){const t=[];return {subscribe:e=>{t.push(e);},notify:()=>{t.length&&t.forEach((t=>t()));}}}function o$2(t,n){e[t].push(n);}function s$2(t,e,n){if(0===n.length)t();else {let r=()=>t();for(let t=n.length-1;t>=0;--t){const o=r;r=()=>{n[t](e,o);};}r();}}function a$2(n,o,a,c,i,l){const u=new WeakMap,p=class extends HTMLElement{constructor(){super();const t=document.createElement("div"),i=document.createElement("div");this.attachShadow({mode:"open"}),i.append(document.createElement("span")),this.shadowRoot.append(t,i);let l,p=!1,f=!1,d=!1,h=!1;const m=r$2(),b=r$2(),g=r$2(),_=r$2(),y=r$2(),A=[],T={getName:()=>n,getHost:()=>this,isInitialized:()=>p,isMounted:()=>f,hasUpdated:()=>d,beforeMount:m.subscribe,afterMount:b.subscribe,onceBeforeUpdate:t=>A.push(t),beforeUpdate:g.subscribe,afterUpdate:_.subscribe,beforeUnmount:y.subscribe,refresh:()=>{h||(h=!0,requestAnimationFrame((()=>{h=!1,w();})));}},w=()=>{if(f){if(A.length)try{A.forEach((t=>t()));}finally{A.length=0;}g.notify();}s$2((()=>{if(!l)return;const t=l();try{c(t,i);}catch(t){throw console.error(`Render error in "${T.getName()}"`),t}}),T,e.render),p=!0,f?(d=!0,_.notify()):(f=!0,b.notify());};this.connectedCallback=()=>{p||s$2((()=>{l=a(this,T);}),T,e.init),m.notify(),w();},this.disconnectedCallback=()=>{y.notify(),i.innerHTML="";},o(this,T),u.set(this,T),T.beforeUnmount((()=>u.delete(this)));}connectedCallback(){this.connectedCallback();}disconnectedCallback(){this.disconnectedCallback();}};if(i&&i.length>0){const e=new Map,n=new Map;for(const r of i){e.set(r.propName,r),r.hasAttr&&n.set(r.attrName,r);const o=p.prototype;p.observedAttributes=Array.from(n.keys()),o.getAttribute=function(t){const e=n.get(t);return e&&e.hasAttr?e.mapPropToAttr(this[e.propName]):HTMLElement.prototype.getAttribute.call(this,t)},o.attributeChangedCallback=function(e,r,o){if(!t$2){const t=n.get(e);"string"==typeof o&&(this[t.propName]=t.mapAttrToProp(o));}};for(const n of e.values()){const{propName:e}=n;if("ref"===e)continue;const r=function(r){let o;Object.defineProperty(r,e,{get:()=>o,set(s){if(o=s,n.hasAttr&&n.reflect)try{t$2=!0,r.setAttribute(n.attrName,n.mapPropToAttr(s));}finally{t$2=!1;}const a=u.get(this);a&&l&&l(a,e,s);}});};Object.defineProperty(o,e,{configurable:!0,get(){r(this);},set(t){r(this),this[e]=t;}});}}}return p}const c$2=()=>h$4.prototype.toString();Object.defineProperty(c$2,"__getHiddenAPI",{value:()=>({createComponentType:_$2,createCustomElementClass:a$2,registerElement:g$2})}),Object.defineProperty(h$4.prototype,"toString",{value:c$2});const i$2=new Map;function l$2(t,e=!1){return (n,r)=>{const o=n.constructor;m$2(r);let s=i$2.get(o);s||(s=new Map,s.set(r,{propName:r,attrName:m$2(r),hasAttr:!0,reflect:e,mapPropToAttr:t.mapPropToAttr,mapAttrToProp:t.mapAttrToProp}),i$2.set(o,s));}}function u$2(t){return Object.freeze({kind:"context",defaultValue:t})}function p$2(t,e){const n="$$context$$";class r extends HTMLElement{constructor(){super(),this.__value=void 0,this.__subscribers=[],this.__cleanup=null,this.attachShadow({mode:"open"});}get value(){return this.__value}set value(t){t!==this.__value&&(this.__value=t,this.__subscribers.forEach((e=>e(t))));}connectedCallback(){this.shadowRoot.innerHTML="<slot></slot>";const t=t=>{t.detail.context===e&&(t.stopPropagation(),this.__subscribers.push(t.detail.callback),t.detail.cancelled.then((()=>{this.__subscribers.splice(this.__subscribers.indexOf(t.detail.callback),1);})));};this.addEventListener(n,t),this.__cleanup=()=>this.removeEventListener(n,t);}disconnectCallback(){this.__subscribers.length,this.__cleanup(),this.__cleanup=null;}}return g$2(t,r),_$2(t)}function f$2(t=null){return {current:t}}function d$2(t,e,n){const r={detail:e||null,bubbles:!n||!!n.bubbles,cancelable:!n||!!n.cancelable,composed:!0};return new CustomEvent(t,r)}function h$4(t){return {define:(e=t.patchContent,function t(n,r,o){if("string"==typeof n)return t(o?{tag:n,props:r,init:o}:{tag:n,init:r});if(!n.init){const e=e=>t({...n,init:e});return e.bind=e,e.main=e,e.init=e,e}const s=n.tag,c=n.props||null;if(c){const t=new c;let e=i$2.get(c);e||(e=new Map,i$2.set(c,e));for(const n of Object.keys(t))e.has(n)||e.set(n,{propName:n,hasAttr:!1});}const l=function(t,e,n,r,o,s){let c=null;function i(t){return o(t.__data)}return a$2(t,((t,o)=>{const s=e?new e:{};if(t.__data=s,t.__ctrl=o,n&&n.has("ref")){let e=null;s.ref={},Object.defineProperty(s.ref,"current",{enumerable:!0,get:()=>e,set:n=>{if(e)throw new Error("Methods can only be set once");n&&(e=n,Object.assign(t,e));}});}if(null===c&&r&&(c=function(t){"function"==typeof t&&(t=t());if(!t)return "";Array.isArray(t)&&(t=t.join("\n\n/* =============== */\n\n"));return t}(r)),c){const e=document.createElement("style");e.appendChild(document.createTextNode(c)),t.shadowRoot.firstChild.appendChild(e);}}),i,s,n?Array.from(n.values()):[],((t,e,n)=>{t.getHost().__data[e]=n,t.refresh();}))}(s,c,i$2.get(c),n.styles,n.init,e);return g$2(s,l),_$2(s)}),render:b$2(t.isMountable,t.patchContent),impl:C$2(t.patchContent)};var e;}function m$2(t){return t.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase()}function b$2(t,e){return (t,n)=>{const r="string"==typeof n?document.querySelector(n):n;if(!r)throw new TypeError(`Could not find container DOM element "${n}"`);r.innerHTML="",null!==t&&e(t,r);}}function g$2(t,e){customElements.get(t)?(console.clear(),console.log(`Custom element ${t} already defined -> reloading...`),setTimeout((()=>{console.clear(),location.reload();}),1e3)):customElements.define(t,e);}function _$2(t){return Object.defineProperty((e=>Object.assign(document.createElement(t),e)),"tagName",{value:t})}const y$2=new Map;function T$1(t,e){return (n,r)=>{const o=n.constructor,s=t?{propName:r,hasAttr:!0,attrName:m$2(r),reflect:!!e,mapPropToAttr:t.mapPropToAttr,mapAttrToProp:t.mapAttrToProp}:{propName:r,hasAttr:!1};let a=y$2.get(o);a||(a={tag:"",props:new Map},y$2.set(o,a)),a.props.set(r,s);}}function w$2(t){return T$1()}function P$1(){return T$1()}function C$2(t){return (e,n)=>{const r=y$2.get(e),o=r.tag,s=Array.from(r.props.values());return g$2(o,a$2(o,((t,n)=>{let r=!1;t.__data=new e;for(const{propName:e}of s)"ref"!==e?t[e]=t.__data[e]:r=!0;if(r){let e=null;t.__data.ref={},Object.defineProperty(t.__data.ref,"current",{enumerable:!0,get:()=>e,set:n=>{if(e)throw new Error("Methods can only be set once");n&&(e=n,Object.assign(t,e));}});}}),((t,e)=>n(t.__data)),t,s,((t,e,n)=>{t.getHost().__data[e]=n,t.refresh();}))),_$2(o)}}

  var SSR_NODE = 1, TEXT_NODE = 3, EMPTY_OBJ$1 = {}, EMPTY_ARR$1 = [], SVG_NS = 'http://www.w3.org/2000/svg';
  var listener = function (event) {
      this.events[event.type](event);
  };
  var getKey = (vdom) => (vdom == null ? vdom : vdom.key);
  var patchProperty = (node, key, oldValue, newValue, isSvg) => {
      if (key === 'key') ;
      else if (key === 'ref') {
          if (newValue !== oldValue) {
              oldValue && passToRef(oldValue, null);
              newValue && passToRef(newValue, node);
          }
      }
      else if (key[0] === 'o' && key[1] === 'n') {
          if (!((node.events || (node.events = {}))[(key = key.slice(2))] = newValue)) {
              node.removeEventListener(key, listener);
          }
          else if (!oldValue) {
              node.addEventListener(key, listener);
          }
      }
      else if (!isSvg &&
          key !== 'list' &&
          key !== 'form' &&
          (key in node ||
              (node.__alwaysSetProps && key !== 'class' && !key.includes('-')))) {
          node[key] = newValue == null ? '' : newValue;
          if (node.__alwaysSetProps) {
              node.__props[key] = newValue;
              node.__ctrl.refresh();
          }
      }
      else if (newValue == null || newValue === false) {
          node.removeAttribute(key);
      }
      else {
          node.setAttribute(key, newValue);
      }
  };
  var createNode = (vdom, isSvg) => {
      var props = vdom.props, node = vdom.type === TEXT_NODE
          ? document.createTextNode(vdom.tag)
          : (isSvg = isSvg || vdom.tag === 'svg')
              ? document.createElementNS(SVG_NS, vdom.tag, { is: props.is })
              : document.createElement(vdom.tag, { is: props.is });
      for (var k in props) {
          patchProperty(node, k, null, props[k], isSvg);
      }
      for (var i = 0; i < vdom.children.length; i++) {
          node.appendChild(createNode((vdom.children[i] = vdomify(vdom.children[i])), isSvg));
      }
      return (vdom.node = node);
  };
  var patchNode = (parent, node, oldVNode, newVNode, isSvg) => {
      if (oldVNode === newVNode) ;
      else if (oldVNode != null &&
          oldVNode.type === TEXT_NODE &&
          newVNode.type === TEXT_NODE) {
          if (oldVNode.tag !== newVNode.tag)
              node.nodeValue = newVNode.tag;
      }
      else if (oldVNode == null || oldVNode.tag !== newVNode.tag) {
          oldVNode && dismissVNode(oldVNode);
          node = parent.insertBefore(createNode((newVNode = vdomify(newVNode)), isSvg), node);
          oldVNode && parent.removeChild(oldVNode.node);
      }
      else {
          var tmpVKid, oldVKid, oldKey, newKey, oldProps = oldVNode.props, newProps = newVNode.props, oldVKids = oldVNode.children, newVKids = newVNode.children, oldHead = 0, newHead = 0, oldTail = oldVKids.length - 1, newTail = newVKids.length - 1;
          isSvg = isSvg || newVNode.tag === 'svg';
          for (var i in { ...oldProps, ...newProps }) {
              if (i === 'value' || i === 'selected' || i === 'checked'
                  ? node[i]
                  : oldProps[i] !== newProps[i]) {
                  patchProperty(node, i, oldProps[i], newProps[i], isSvg);
              }
          }
          while (newHead <= newTail && oldHead <= oldTail) {
              if ((oldKey = getKey(oldVKids[oldHead])) == null ||
                  oldKey !== getKey(newVKids[newHead])) {
                  break;
              }
              patchNode(node, oldVKids[oldHead].node, oldVKids[oldHead++], (newVKids[newHead] = vdomify(newVKids[newHead++])), isSvg);
          }
          while (newHead <= newTail && oldHead <= oldTail) {
              if ((oldKey = getKey(oldVKids[oldTail])) == null ||
                  oldKey !== getKey(newVKids[newTail])) {
                  break;
              }
              patchNode(node, oldVKids[oldTail].node, oldVKids[oldTail--], (newVKids[newTail] = vdomify(newVKids[newTail--])), isSvg);
          }
          if (oldHead > oldTail) {
              while (newHead <= newTail) {
                  node.insertBefore(createNode((newVKids[newHead] = vdomify(newVKids[newHead++])), isSvg), (oldVKid = oldVKids[oldHead]) && oldVKid.node);
              }
          }
          else if (newHead > newTail) {
              while (oldHead <= oldTail) {
                  node.removeChild(oldVKids[oldHead].node);
                  dismissVNode(oldVKids[oldHead++]);
              }
          }
          else {
              for (var keyed = {}, newKeyed = {}, i = oldHead; i <= oldTail; i++) {
                  if ((oldKey = oldVKids[i].key) != null) {
                      keyed[oldKey] = oldVKids[i];
                  }
              }
              while (newHead <= newTail) {
                  oldKey = getKey((oldVKid = oldVKids[oldHead]));
                  newKey = getKey((newVKids[newHead] = vdomify(newVKids[newHead])));
                  if (newKeyed[oldKey] ||
                      (newKey != null && newKey === getKey(oldVKids[oldHead + 1]))) {
                      if (oldKey == null) {
                          node.removeChild(oldVKid.node);
                          dismissVNode(oldVKid);
                      }
                      oldHead++;
                      continue;
                  }
                  if (newKey == null || oldVNode.type === SSR_NODE) {
                      if (oldKey == null) {
                          patchNode(node, oldVKid && oldVKid.node, oldVKid, newVKids[newHead], isSvg);
                          newHead++;
                      }
                      oldHead++;
                  }
                  else {
                      if (oldKey === newKey) {
                          patchNode(node, oldVKid.node, oldVKid, newVKids[newHead], isSvg);
                          newKeyed[newKey] = true;
                          oldHead++;
                      }
                      else {
                          if ((tmpVKid = keyed[newKey]) != null) {
                              patchNode(node, node.insertBefore(tmpVKid.node, oldVKid && oldVKid.node), tmpVKid, newVKids[newHead], isSvg);
                              newKeyed[newKey] = true;
                          }
                          else {
                              patchNode(node, oldVKid && oldVKid.node, null, newVKids[newHead], isSvg);
                          }
                      }
                      newHead++;
                  }
              }
              while (oldHead <= oldTail) {
                  if (getKey((oldVKid = oldVKids[oldHead++])) == null) {
                      node.removeChild(oldVKid.node);
                      dismissVNode(oldVKid);
                  }
              }
              for (var i in keyed) {
                  if (newKeyed[i] == null) {
                      node.removeChild(keyed[i].node);
                      dismissVNode(keyed[i]);
                  }
              }
          }
      }
      return (newVNode.node = node);
  };
  var vdomify = (newVNode) => newVNode !== true && newVNode !== false && newVNode ? newVNode : text('');
  var passToRef = (ref, value) => ref && (typeof ref === 'function' ? ref(value) : (ref.current = value));
  var dismissVNode = (vnode) => vnode && vnode.props && vnode.props.ref && passToRef(vnode.props.ref, null);
  var recycleNode = (node) => node.nodeType === TEXT_NODE
      ? text(node.nodeValue, node)
      : createVNode(node.nodeName.toLowerCase(), EMPTY_OBJ$1, EMPTY_ARR$1.map.call(node.childNodes, recycleNode), SSR_NODE, node);
  var createVNode = (tag, props, children, type, node) => ({
      tag,
      props,
      key: props.key,
      children,
      type,
      node
  });
  var text = (value, node) => createVNode(value, EMPTY_OBJ$1, EMPTY_ARR$1, TEXT_NODE, node);
  var h$3 = (tag, props, children = EMPTY_ARR$1) => createVNode(tag, props || EMPTY_OBJ$1, Array.isArray(children) ? children : [children]);
  var patch = (node, vdom) => (((node = patchNode(node.parentNode, node, node.vdom || recycleNode(node), vdom)).vdom = vdom),
      node);

  const { createComponentType, createCustomElementClass, registerElement } = h$4.prototype.toString.__getHiddenAPI();
  const { define, render, impl } = h$4({
      isMountable: (it) => !!it && it.isVElement === true,
      patchContent: renderContent
  });
  const html = htm.bind(h$2);
  const tagNameCounts = new Map();
  function renderContent(content, target) {
      if (target.hasChildNodes()) {
          patch(target.firstChild, content);
      }
      else {
          const newTarget = document.createElement('span');
          target.append(newTarget);
          patch(newTarget, content);
      }
  }
  function asVNode(x) {
      return typeof x === 'number' || typeof x === 'string' ? text(x, null) : x;
  }
  function asComponent(tagName, customElementClass, deps) {
      return createComponentType(tagName);
  }
  function h$2(type, props) {
      const argc = arguments.length;
      let tagName = typeof type === 'function' ? type.tagName : type;
      if (!tagName && typeof type === 'function') {
          const prepare = (host, ctrl) => {
              host.__alwaysSetProps = true;
              host.__props = {};
              host.__ctrl = ctrl;
          };
          const name = type.name ? toKebabCase(type.name.replace('$', 'x')) : 'ce';
          if (!tagNameCounts.has(name)) {
              tagNameCounts.set(name, 1);
              tagName = name + '--n1';
          }
          else {
              const count = tagNameCounts.get(name);
              tagNameCounts.set(name, count + 1);
              tagName = name + '--n' + (count + 1);
          }
          type = createCustomElementClass(tagName, prepare, type, render);
          Object.defineProperty(type, 'tagName', {
              value: tagName
          });
          registerElement(tagName, type);
      }
      {
          if (typeof tagName !== 'string') {
              throw new Error('[h] First argument must be a string or a component');
          }
      }
      const children = argc > 2 ? [] : EMPTY_ARR;
      if (argc > 2) {
          for (let i = 2; i < argc; ++i) {
              const child = arguments[i];
              if (!Array.isArray(child)) {
                  children.push(asVNode(child));
              }
              else {
                  for (let j = 0; j < child.length; ++j) {
                      children.push(asVNode(child[j]));
                  }
              }
          }
      }
      const ret = h$3(tagName, props || EMPTY_OBJ, children);
      ret.isVElement = true;
      return ret;
  }
  const EMPTY_ARR = [];
  const EMPTY_OBJ = {};
  function toKebabCase(s) {
      return s
          .replace(/([a-z])([A-Z])/g, '$1-$2')
          .replace(/[\s_]+/g, '-')
          .toLowerCase();
  }

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
      return observable$1(obj);
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
        return observable$1(result);
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

  function ownKeys$1(target) {
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

  var baseHandlers = { get: get, has: has, ownKeys: ownKeys$1, set: set, deleteProperty: deleteProperty };

  function observable$1(obj) {
    if ( obj === void 0 ) obj = {};

    // if it is already an observable or it should not be wrapped, return it
    if (proxyToRaw.has(obj) || !shouldInstrument(obj)) {
      return obj;
    }
    // if it already has a cached observable wrapper, return it
    // otherwise create a new observable
    return rawToProxy.get(obj) || createObservable$1(obj);
  }

  function createObservable$1(obj) {
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

  function isObservable$1(obj) {
    return proxyToRaw.has(obj);
  }

  const STORE_KEY = 'js-element::ext::store';
  let baseInterceptorAdded = false;
  let observerInterceptorAdded = false;
  let currentCtrl = null;
  function hook(name, fn) {
      if (!baseInterceptorAdded) {
          o$2('init', (() => {
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
          o$2('render', (ctrl, next) => {
              observe(next);
          });
          observerInterceptorAdded = true;
      }
      return isObservable$1(state) ? state : observable$1(state);
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

  var n$1=function(e,t,r,o){var l;t[0]=0;for(var s=1;s<t.length;s++){var a=t[s++],i=t[s]?(t[0]|=a?1:2,r[t[s++]]):t[++s];3===a?o[0]=i:4===a?o[1]=Object.assign(o[1]||{},i):5===a?(o[1]=o[1]||{})[t[++s]]=i:6===a?o[1][t[++s]]+=i+"":a?(l=e.apply(i,n$1(e,i,r,["",null])),o.push(l),i[0]?t[0]|=2:(t[s-2]=0,t[s]=l)):o.push(i);}return o},t$1=new Map;var r$1={},o$1=[],l$1=function(e){this.events[e.type](e);},s$1=e=>null==e?e:e.key,a$1=(e,n,t,r,o)=>{"key"===n||("ref"===n?r!==t&&(t&&c$1(t,null),r&&c$1(r,e)):"o"===n[0]&&"n"===n[1]?((e.events||(e.events={}))[n=n.slice(2)]=r)?t||e.addEventListener(n,l$1):e.removeEventListener(n,l$1):!o&&"list"!==n&&"form"!==n&&(n in e||e.__alwaysSetProps&&"class"!==n&&!n.includes("-"))?(e[n]=null==r?"":r,e.__alwaysSetProps&&(e.__props[n]=r,e.__ctrl.refresh())):null==r||!1===r?e.removeAttribute(n):e.setAttribute(n,r));},i$1=(e,n)=>{var t=e.props,r=3===e.type?document.createTextNode(e.tag):(n=n||"svg"===e.tag)?document.createElementNS("http://www.w3.org/2000/svg",e.tag,{is:t.is}):document.createElement(e.tag,{is:t.is});for(var o in t)a$1(r,o,null,t[o],n);for(var l=0;l<e.children.length;l++)r.appendChild(i$1(e.children[l]=u$1(e.children[l]),n));return e.node=r},p$1=(e,n,t,r,o)=>{if(t===r);else if(null!=t&&3===t.type&&3===r.type)t.tag!==r.tag&&(n.nodeValue=r.tag);else if(null==t||t.tag!==r.tag)t&&d$1(t),n=e.insertBefore(i$1(r=u$1(r),o),n),t&&e.removeChild(t.node);else {var l,c,f,h,g=t.props,v=r.props,m=t.children,y=r.children,_=0,C=0,w=m.length-1,E=y.length-1;for(var A in o=o||"svg"===r.tag,{...g,...v})("value"===A||"selected"===A||"checked"===A?n[A]:g[A]!==v[A])&&a$1(n,A,g[A],v[A],o);for(;C<=E&&_<=w&&null!=(f=s$1(m[_]))&&f===s$1(y[C]);)p$1(n,m[_].node,m[_++],y[C]=u$1(y[C++]),o);for(;C<=E&&_<=w&&null!=(f=s$1(m[w]))&&f===s$1(y[E]);)p$1(n,m[w].node,m[w--],y[E]=u$1(y[E--]),o);if(_>w)for(;C<=E;)n.insertBefore(i$1(y[C]=u$1(y[C++]),o),(c=m[_])&&c.node);else if(C>E)for(;_<=w;)n.removeChild(m[_].node),d$1(m[_++]);else {var N={},b={};for(A=_;A<=w;A++)null!=(f=m[A].key)&&(N[f]=m[A]);for(;C<=E;)f=s$1(c=m[_]),h=s$1(y[C]=u$1(y[C])),b[f]||null!=h&&h===s$1(m[_+1])?(null==f&&(n.removeChild(c.node),d$1(c)),_++):null==h||1===t.type?(null==f&&(p$1(n,c&&c.node,c,y[C],o),C++),_++):(f===h?(p$1(n,c.node,c,y[C],o),b[h]=!0,_++):null!=(l=N[h])?(p$1(n,n.insertBefore(l.node,c&&c.node),l,y[C],o),b[h]=!0):p$1(n,c&&c.node,null,y[C],o),C++);for(;_<=w;)null==s$1(c=m[_++])&&(n.removeChild(c.node),d$1(c));for(var A in N)null==b[A]&&(n.removeChild(N[A].node),d$1(N[A]));}}return r.node=n},u$1=e=>!0!==e&&!1!==e&&e?e:g$1(""),c$1=(e,n)=>e&&("function"==typeof e?e(n):e.current=n),d$1=e=>e&&e.props&&e.props.ref&&c$1(e.props.ref,null),f$1=e=>3===e.nodeType?g$1(e.nodeValue,e):h$1(e.nodeName.toLowerCase(),r$1,o$1.map.call(e.childNodes,f$1),1,e),h$1=(e,n,t,r,o)=>({tag:e,props:n,key:n.key,children:t,type:r,node:o}),g$1=(e,n)=>h$1(e,r$1,o$1,3,n),v$1=(e,n,t=o$1)=>h$1(e,n||r$1,Array.isArray(t)?t:[t]),m$1=(e,n)=>((e=p$1(e.parentNode,e,e.vdom||f$1(e),n)).vdom=n,e);const {createComponentType:y$1,createCustomElementClass:_$1,registerElement:C$1}=h$4.prototype.toString.__getHiddenAPI(),{define:w$1,render:E$1,impl:A$1}=h$4({isMountable:e=>!!e&&!0===e.isVElement,patchContent:function(e,n){if(n.hasChildNodes())m$1(n.firstChild,e);else {const t=document.createElement("span");n.append(t),m$1(t,e);}}});(function(e){var r=t$1.get(this);return r||(r=new Map,t$1.set(this,r)),(r=n$1(this,r.get(e)||(r.set(e,r=function(e){for(var n,t,r=1,o="",l="",s=[0],a=function(e){1===r&&(e||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?s.push(0,e,o):3===r&&(e||o)?(s.push(3,e,o),r=2):2===r&&"..."===o&&e?s.push(4,e,0):2===r&&o&&!e?s.push(5,0,!0,o):r>=5&&((o||!e&&5===r)&&(s.push(r,0,o,t),r=6),e&&(s.push(r,e,0,t),r=6)),o="";},i=0;i<e.length;i++){i&&(1===r&&a(),a(i));for(var p=0;p<e[i].length;p++)n=e[i][p],1===r?"<"===n?(a(),s=[s],r=3):o+=n:4===r?"--"===o&&">"===n?(r=1,o=""):o=n+o[0]:l?n===l?l="":o+=n:'"'===n||"'"===n?l=n:">"===n?(a(),r=1):r&&("="===n?(r=5,t=o,o=""):"/"===n&&(r<5||">"===e[i][p+1])?(a(),3===r&&(s=s[0]),r=s,(s=s[0]).push(2,0,r),r=0):" "===n||"\t"===n||"\n"===n||"\r"===n?(a(),r=2):o+=n),3===r&&"!--"===o&&(r=4,s=s[0]);}return a(),s}(e)),r),arguments,[])).length>1?r:r[0]}).bind(x$1);const b$1=new Map;function k$1(e){return "number"==typeof e||"string"==typeof e?g$1(e,null):e}function x$1(e,n){const t=arguments.length;let r="function"==typeof e?e.tagName:e;if(!r&&"function"==typeof e){const n=(e,n)=>{e.__alwaysSetProps=!0,e.__props={},e.__ctrl=n;},t=e.name?L(e.name.replace("$","x")):"ce";if(b$1.has(t)){const e=b$1.get(t);b$1.set(t,e+1),r=t+"--n"+(e+1);}else b$1.set(t,1),r=t+"--n1";e=_$1(r,n,e,E$1),Object.defineProperty(e,"tagName",{value:r}),C$1(r,e);}const o=t>2?[]:S$1;if(t>2)for(let e=2;e<t;++e){const n=arguments[e];if(Array.isArray(n))for(let e=0;e<n.length;++e)o.push(k$1(n[e]));else o.push(k$1(n));}const l=v$1(r,n||j$1,o);return l.isVElement=!0,l}const S$1=[],j$1={};function L(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[\s_]+/g,"-").toLowerCase()}

  var t=new WeakMap,n=Symbol("iteration key");function r(e,t,n){var r=t.get(n);r&&r.forEach(e.add,e);}function o(e){e.delete(this);}var a=[],u=!1;function c(e,t,n,r){if(e.unobserved)return Reflect.apply(t,n,r);if(-1===a.indexOf(e)){!function(e){e.cleaners&&e.cleaners.forEach(o,e),e.cleaners=[];}(e);try{return a.push(e),Reflect.apply(t,n,r)}finally{a.pop();}}}function s(e){var r=a[a.length-1];r&&(f(r,e),function(e,r){var o=r.target,a=r.key;"iterate"===r.type&&(a=n);var u=t.get(o),c=u.get(a);c||(c=new Set,u.set(a,c)),c.has(e)||(c.add(e),e.cleaners.push(c));}(r,e));}function i(e){(function(e){var o=e.target,a=e.key,u=e.type,c=t.get(o),s=new Set;if("clear"===u?c.forEach((function(e,t){r(s,c,t);})):r(s,c,a),"add"===u||"delete"===u||"clear"===u){var i=Array.isArray(o)?"length":n;r(s,c,i);}return s})(e).forEach(l,e);}function l(e){f(e,this),"function"==typeof e.scheduler?e.scheduler(e):"object"==typeof e.scheduler?e.scheduler.add(e):e();}function f(e,t){if(e.debugger&&!u)try{u=!0,e.debugger(t);}finally{u=!1;}}function p(){return a.length>0}var y=Symbol("is reaction");var g=new WeakMap,d=new WeakMap,h=Object.prototype.hasOwnProperty;function v(e){var t=d.get(e);return p()&&"object"==typeof e&&null!==e?t||E(e):t||e}function b(e,t){var n=e.next;return e.next=function(){var r=n.call(e),o=r.done,a=r.value;return o||(t?a[1]=v(a[1]):a=v(a)),{done:o,value:a}},e}var m={has:function(e){var t=g.get(this),n=Reflect.getPrototypeOf(this);return s({target:t,key:e,type:"has"}),n.has.apply(t,arguments)},get:function(e){var t=g.get(this),n=Reflect.getPrototypeOf(this);return s({target:t,key:e,type:"get"}),v(n.get.apply(t,arguments))},add:function(e){var t=g.get(this),n=Reflect.getPrototypeOf(this),r=n.has.call(t,e),o=n.add.apply(t,arguments);return r||i({target:t,key:e,value:e,type:"add"}),o},set:function(e,t){var n=g.get(this),r=Reflect.getPrototypeOf(this),o=r.has.call(n,e),a=r.get.call(n,e),u=r.set.apply(n,arguments);return o?t!==a&&i({target:n,key:e,value:t,oldValue:a,type:"set"}):i({target:n,key:e,value:t,type:"add"}),u},delete:function(e){var t=g.get(this),n=Reflect.getPrototypeOf(this),r=n.has.call(t,e),o=n.get?n.get.call(t,e):void 0,a=n.delete.apply(t,arguments);return r&&i({target:t,key:e,oldValue:o,type:"delete"}),a},clear:function(){var e=g.get(this),t=Reflect.getPrototypeOf(this),n=0!==e.size,r=e instanceof Map?new Map(e):new Set(e),o=t.clear.apply(e,arguments);return n&&i({target:e,oldTarget:r,type:"clear"}),o},forEach:function(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];var r=g.get(this),o=Reflect.getPrototypeOf(this);s({target:r,type:"iterate"});var a,u=function(t){for(var n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];return e.apply(void 0,[v(t)].concat(n))};return (a=o.forEach).call.apply(a,[r,u].concat(t))},keys:function(){var e=g.get(this),t=Reflect.getPrototypeOf(this);return s({target:e,type:"iterate"}),t.keys.apply(e,arguments)},values:function(){var e=g.get(this),t=Reflect.getPrototypeOf(this);s({target:e,type:"iterate"});var n=t.values.apply(e,arguments);return b(n,!1)},entries:function(){var e=g.get(this),t=Reflect.getPrototypeOf(this);s({target:e,type:"iterate"});var n=t.entries.apply(e,arguments);return b(n,!0)},get size(){var e=g.get(this),t=Reflect.getPrototypeOf(this);return s({target:e,type:"iterate"}),Reflect.get(t,"size",e)}};m[Symbol.iterator]=function(){var e=g.get(this),t=Reflect.getPrototypeOf(this);s({target:e,type:"iterate"});var n=t[Symbol.iterator].apply(e,arguments);return b(n,e instanceof Map)};var w={get:function(e,t,n){return e=h.call(m,t)?m:e,Reflect.get(e,t,n)}},k="object"==typeof window?window:Function("return this")(),O=new Map([[Map,w],[Set,w],[WeakMap,w],[WeakSet,w],[Object,!1],[Array,!1],[Int8Array,!1],[Uint8Array,!1],[Uint8ClampedArray,!1],[Int16Array,!1],[Uint16Array,!1],[Int32Array,!1],[Uint32Array,!1],[Float32Array,!1],[Float64Array,!1]]);function S(e){return O.get(e.constructor)}var j=Object.prototype.hasOwnProperty,R=new Set(Object.getOwnPropertyNames(Symbol).map((function(e){return Symbol[e]})).filter((function(e){return "symbol"==typeof e})));var P={get:function(e,t,n){var r=Reflect.get(e,t,n);if("symbol"==typeof t&&R.has(t))return r;s({target:e,key:t,receiver:n,type:"get"});var o=d.get(r);if(p()&&"object"==typeof r&&null!==r){if(o)return o;var a=Reflect.getOwnPropertyDescriptor(e,t);if(!a||!1!==a.writable||!1!==a.configurable)return E(r)}return o||r},has:function(e,t){var n=Reflect.has(e,t);return s({target:e,key:t,type:"has"}),n},ownKeys:function(e){return s({target:e,type:"iterate"}),Reflect.ownKeys(e)},set:function(e,t,n,r){"object"==typeof n&&null!==n&&(n=g.get(n)||n);var o=j.call(e,t),a=e[t],u=Reflect.set(e,t,n,r);return e!==g.get(r)||(o?n!==a&&i({target:e,key:t,value:n,oldValue:a,receiver:r,type:"set"}):i({target:e,key:t,value:n,receiver:r,type:"add"})),u},deleteProperty:function(e,t){var n=j.call(e,t),r=e[t],o=Reflect.deleteProperty(e,t);return n&&i({target:e,key:t,oldValue:r,type:"delete"}),o}};function E(e){return void 0===e&&(e={}),g.has(e)||"function"==typeof(n=e.constructor)&&n.name in k&&k[n.name]===n&&!O.has(n)?e:d.get(e)||function(e){var n=S(e)||P,r=new Proxy(e,n);return d.set(e,r),g.set(r,e),function(e){t.set(e,new Map);}(e),r}(e);var n;}const M="js-element::ext::store";let U=!1,A=!1,x=null;function H(t,n){return U||(o$2("init",((e,t)=>{x=e;try{t();}finally{x=null;}})),U=!0),(...e)=>{if(!x)throw new Error(`Hook function "${t}" has been invoked outside of component initialization phase`);return n(...e)}}function C(e){const t=x,n=t.getHost();let r=null;const o=new Promise((e=>{r=()=>e(null);}));let a=e.defaultValue;return t.beforeMount((()=>{const r={context:e,callback:e=>{a=e,t.refresh();},cancelled:o};n.dispatchEvent(new CustomEvent("$$context$$",{detail:r,bubbles:!0,composed:!0}));})),t.beforeUnmount((()=>r())),()=>a}H("useCtx",(function(e){if(e&&"context"===e.kind)return C(e);const t={};return Object.entries(e).forEach((([n,r])=>{Object.defineProperty(t,n,{get:"context"===r.kind?C(r):e[n]});})),t}));const I=H("useHost",(()=>x.getHost()));H("useMethods",((e,t)=>{e&&t&&(e.current=t);}));H("useRefresher",(function(){return x.refresh}));H("useStatus",(function(){const e=x;return {isMounted:e.isMounted,hasUpdated:e.hasUpdated}}));H("useDefaults",(function(e,t){const n=x,r=Object.assign({},t,e);return n.beforeUpdate((()=>{for(const e in r)delete r[e];Object.assign(r,t,e);})),r}));const N=H("useValue",(function(e){let t=e,n=e;const r=x;return [()=>n,e=>{t="function"==typeof e?e(t):e,r.onceBeforeUpdate((()=>{n=t;})),r.refresh();}]})),T=H("useState",(function(e){let t,n=!1;const r=x,o={...e};return t={...o},[o,(e,a)=>{n=!0,"string"==typeof e?t[e]="function"==typeof a?a(t[e]):a:"function"==typeof e?Object.assign(t,e(t)):Object.assign(t,e),r.onceBeforeUpdate((()=>{n&&(Object.assign(o,t),n=!1);})),r.refresh();}]}));H("useReactive",(function(t){return A||(o$2("render",((e,t)=>{!function(e,t){void 0===t&&(t={});var n=e[y]?e:function t(){return c(t,e,this,arguments)};n.scheduler=t.scheduler,n.debugger=t.debugger,n[y]=!0,t.lazy||n();}(t);})),A=!0),n=t,g.has(n)?t:E(t);var n;}));H("useStyles",((...e)=>{const t=x,n=(...e)=>{!function(e,t){if(t instanceof HTMLStyleElement)e.appendChild(t);else {const n=t.join("\n\n/* =============== */\n\n"),r=document.createElement("style");r.appendChild(document.createTextNode(n)),e.appendChild(r);}}(t.getHost().shadowRoot.firstChild,e);};return n.apply(null,e),n}));H("useEmitter",(function(){const e=x.getHost();return (t,n)=>{e.dispatchEvent(t),n&&n(t);}}));H("useMemo",(function(e,t){let n,r;return {get value(){const o=t();return n&&ue(n,o)||(r=e.apply(null,o)),n=o,r}}}));H("useAfterMount",(function(e){let t;const n=x;n.afterMount((()=>{t=e();})),n.beforeUnmount((()=>{"function"==typeof t&&t(),t=null;}));}));const G=H("useBeforeUpdate",(function(e){let t;const n=x;n.beforeMount((()=>{t=e();})),n.afterUpdate((()=>{"function"==typeof t&&t();})),n.beforeUnmount((()=>{"function"==typeof t&&t(),t=null;}));}));H("useAfterUpdate",(function(e){let t;const n=x;n.afterUpdate((()=>{"function"==typeof t&&t(),t=e();})),n.beforeUnmount((()=>{"function"==typeof t&&t(),t=null;}));}));H("useBeforeUnmount",(function(e){x.beforeUnmount(e);}));const X=H("useEffect",(function(e,t){let n,r=null;const o=x,a=()=>{let o=void 0===t;if(!o){const e=t();o=null===r||null===e||!ue(r,e),r=e;}o&&(n&&n(),n=e());};o.afterMount(a),o.afterUpdate(a),o.beforeUnmount((()=>n&&n()));})),Y=H("useInterval",((e,t)=>{const n="function"==typeof t?t:()=>t;X((()=>{const t=setInterval(e,n());return ()=>clearInterval(t)}),(()=>[n()]));}));H("useTimer",((e,t=_)=>{let n=0;const r="function"==typeof e?e:()=>e,[o,a]=N(t(n++));return Y((()=>{a(t(n++));}),(()=>r())),o}));function _(){return new Date}const ee={result:void 0,error:void 0,state:"pending"};H("usePromise",(function(e,t){const[n,r]=T(ee);let o=-1;return X((()=>{++o,"pending"!==n.state&&r(ee);const t=o;e().then((e=>{o===t&&r({result:e,state:"resolved"});})).catch((e=>{o===t&&r({error:e instanceof Error?e:new Error(String(e)),state:"rejected"});}));}),"function"==typeof t?t:()=>[]),{getState:()=>n.state,getResult:()=>n.result,getError:()=>n.error}}));H("useActions",(function(e){let t=null;const n=x,r={};n.beforeMount((()=>{if(ce(n,{type:M,payload:{setStore(e){t=e;}}}),!t)throw new Error(`Store for actions not available (-> ${n.getName()})`)}));for(const n of Object.keys(e))r[n]=(...r)=>{t.dispatch(e[n](...r));};return r}));function ue(e,t){let n=Array.isArray(e)&&Array.isArray(t)&&e.length===t.length;if(n)for(let r=0;r<e.length;++r)if(e[r]!==t[r]){n=!1;break}return n}function ce(e,t){e.getHost().dispatchEvent(new CustomEvent("js-element/hooks::send+receive"+t.type,{bubbles:!0,composed:!0,detail:t}));}

  var niceErrors = {
    0: "Invalid value for configuration 'enforceActions', expected 'never', 'always' or 'observed'",
    1: function _(annotationType, key) {
      return "Cannot apply '" + annotationType + "' to '" + key.toString() + "': Field not found.";
    },
    5: "'keys()' can only be used on observable objects, arrays, sets and maps",
    6: "'values()' can only be used on observable objects, arrays, sets and maps",
    7: "'entries()' can only be used on observable objects, arrays and maps",
    8: "'set()' can only be used on observable objects, arrays and maps",
    9: "'remove()' can only be used on observable objects, arrays and maps",
    10: "'has()' can only be used on observable objects, arrays and maps",
    11: "'get()' can only be used on observable objects, arrays and maps",
    12: "Invalid annotation",
    13: "Dynamic observable objects cannot be frozen",
    14: "Intercept handlers should return nothing or a change object",
    15: "Observable arrays cannot be frozen",
    16: "Modification exception: the internal structure of an observable array was changed.",
    17: function _(index, length) {
      return "[mobx.array] Index out of bounds, " + index + " is larger than " + length;
    },
    18: "mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js",
    19: function _(other) {
      return "Cannot initialize from classes that inherit from Map: " + other.constructor.name;
    },
    20: function _(other) {
      return "Cannot initialize map from " + other;
    },
    21: function _(dataStructure) {
      return "Cannot convert to map from '" + dataStructure + "'";
    },
    22: "mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js",
    23: "It is not possible to get index atoms from arrays",
    24: function _(thing) {
      return "Cannot obtain administration from " + thing;
    },
    25: function _(property, name) {
      return "the entry '" + property + "' does not exist in the observable map '" + name + "'";
    },
    26: "please specify a property",
    27: function _(property, name) {
      return "no observable property '" + property.toString() + "' found on the observable object '" + name + "'";
    },
    28: function _(thing) {
      return "Cannot obtain atom from " + thing;
    },
    29: "Expecting some object",
    30: "invalid action stack. did you forget to finish an action?",
    31: "missing option for computed: get",
    32: function _(name, derivation) {
      return "Cycle detected in computation " + name + ": " + derivation;
    },
    33: function _(name) {
      return "The setter of computed value '" + name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?";
    },
    34: function _(name) {
      return "[ComputedValue '" + name + "'] It is not possible to assign a new value to a computed value.";
    },
    35: "There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`",
    36: "isolateGlobalState should be called before MobX is running any reactions",
    37: function _(method) {
      return "[mobx] `observableArray." + method + "()` mutates the array in-place, which is not allowed inside a derivation. Use `array.slice()." + method + "()` instead";
    }
  };
  var errors = 'development' !== "production" ? niceErrors : {};
  function die(error) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if ('development' !== "production") {
      var e = typeof error === "string" ? error : errors[error];
      if (typeof e === "function") e = e.apply(null, args);
      throw new Error("[MobX] " + e);
    }

    throw new Error(typeof error === "number" ? "[MobX] minified error nr: " + error + (args.length ? " " + args.map(String).join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts" : "[MobX] " + error);
  }

  var mockGlobal = {};
  function getGlobal() {
    if (typeof globalThis !== "undefined") {
      return globalThis;
    }

    if (typeof window !== "undefined") {
      return window;
    }

    if (typeof global !== "undefined") {
      return global;
    }

    if (typeof self !== "undefined") {
      return self;
    }

    return mockGlobal;
  }

  var assign = Object.assign;
  var getDescriptor = Object.getOwnPropertyDescriptor;
  var defineProperty = Object.defineProperty;
  var objectPrototype = Object.prototype;
  var EMPTY_ARRAY = [];
  Object.freeze(EMPTY_ARRAY);
  var EMPTY_OBJECT = {};
  Object.freeze(EMPTY_OBJECT);
  var hasProxy = typeof Proxy !== "undefined";
  var plainObjectString = /*#__PURE__*/Object.toString();
  function assertProxies() {
    if (!hasProxy) {
      die('development' !== "production" ? "`Proxy` objects are not available in the current environment. Please configure MobX to enable a fallback implementation.`" : "Proxy not available");
    }
  }
  function warnAboutProxyRequirement(msg) {
    if ('development' !== "production" && globalState.verifyProxies) {
      die("MobX is currently configured to be able to run in ES5 mode, but in ES5 MobX won't be able to " + msg);
    }
  }
  function getNextId() {
    return ++globalState.mobxGuid;
  }
  /**
   * Makes sure that the provided function is invoked at most once.
   */

  function once(func) {
    var invoked = false;
    return function () {
      if (invoked) return;
      invoked = true;
      return func.apply(this, arguments);
    };
  }
  var noop = function noop() {};
  function isFunction(fn) {
    return typeof fn === "function";
  }
  function isStringish(value) {
    var t = typeof value;

    switch (t) {
      case "string":
      case "symbol":
      case "number":
        return true;
    }

    return false;
  }
  function isObject(value) {
    return value !== null && typeof value === "object";
  }
  function isPlainObject(value) {
    var _proto$constructor;

    if (!isObject(value)) return false;
    var proto = Object.getPrototypeOf(value);
    if (proto == null) return true;
    return ((_proto$constructor = proto.constructor) == null ? void 0 : _proto$constructor.toString()) === plainObjectString;
  } // https://stackoverflow.com/a/37865170

  function isGenerator(obj) {
    var constructor = obj == null ? void 0 : obj.constructor;
    if (!constructor) return false;
    if ("GeneratorFunction" === constructor.name || "GeneratorFunction" === constructor.displayName) return true;
    return false;
  }
  function addHiddenProp(object, propName, value) {
    defineProperty(object, propName, {
      enumerable: false,
      writable: true,
      configurable: true,
      value: value
    });
  }
  function addHiddenFinalProp(object, propName, value) {
    defineProperty(object, propName, {
      enumerable: false,
      writable: false,
      configurable: true,
      value: value
    });
  }
  function createInstanceofPredicate(name, theClass) {
    var propName = "isMobX" + name;
    theClass.prototype[propName] = true;
    return function (x) {
      return isObject(x) && x[propName] === true;
    };
  }
  function isES6Map(thing) {
    return thing instanceof Map;
  }
  function isES6Set(thing) {
    return thing instanceof Set;
  }
  var hasGetOwnPropertySymbols = typeof Object.getOwnPropertySymbols !== "undefined";
  /**
   * Returns the following: own enumerable keys and symbols.
   */

  function getPlainObjectKeys(object) {
    var keys = Object.keys(object); // Not supported in IE, so there are not going to be symbol props anyway...

    if (!hasGetOwnPropertySymbols) return keys;
    var symbols = Object.getOwnPropertySymbols(object);
    if (!symbols.length) return keys;
    return [].concat(keys, symbols.filter(function (s) {
      return objectPrototype.propertyIsEnumerable.call(object, s);
    }));
  } // From Immer utils
  // Returns all own keys, including non-enumerable and symbolic

  var ownKeys = typeof Reflect !== "undefined" && Reflect.ownKeys ? Reflect.ownKeys : hasGetOwnPropertySymbols ? function (obj) {
    return Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj));
  } :
  /* istanbul ignore next */
  Object.getOwnPropertyNames;
  function stringifyKey(key) {
    if (typeof key === "string") return key;
    if (typeof key === "symbol") return key.toString();
    return new String(key).toString();
  }
  function toPrimitive(value) {
    return value === null ? null : typeof value === "object" ? "" + value : value;
  }
  function hasProp(target, prop) {
    return objectPrototype.hasOwnProperty.call(target, prop);
  } // From Immer utils

  var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(target) {
    // Polyfill needed for Hermes and IE, see https://github.com/facebook/hermes/issues/274
    var res = {}; // Note: without polyfill for ownKeys, symbols won't be picked up

    ownKeys(target).forEach(function (key) {
      res[key] = getDescriptor(target, key);
    });
    return res;
  };

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it;

    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;
        return function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    it = o[Symbol.iterator]();
    return it.next.bind(it);
  }

  var storedAnnotationsSymbol = /*#__PURE__*/Symbol("mobx-stored-annotations");
  /**
   * Creates a function that acts as
   * - decorator
   * - annotation object
   */

  function createDecoratorAnnotation(annotation) {
    function decorator(target, property) {
      storeAnnotation(target, property, annotation);
    }

    return Object.assign(decorator, annotation);
  }
  /**
   * Stores annotation to prototype,
   * so it can be inspected later by `makeObservable` called from constructor
   */

  function storeAnnotation(prototype, key, annotation) {
    if (!hasProp(prototype, storedAnnotationsSymbol)) {
      addHiddenProp(prototype, storedAnnotationsSymbol, _extends({}, prototype[storedAnnotationsSymbol]));
    } // @override must override something


    if ('development' !== "production" && isOverride(annotation) && !hasProp(prototype[storedAnnotationsSymbol], key)) {
      var fieldName = prototype.constructor.name + ".prototype." + key.toString();
      die("'" + fieldName + "' is decorated with 'override', " + "but no such decorated member was found on prototype.");
    } // Cannot re-decorate


    assertNotDecorated(prototype, annotation, key); // Ignore override

    if (!isOverride(annotation)) {
      prototype[storedAnnotationsSymbol][key] = annotation;
    }
  }

  function assertNotDecorated(prototype, annotation, key) {
    if ('development' !== "production" && !isOverride(annotation) && hasProp(prototype[storedAnnotationsSymbol], key)) {
      var fieldName = prototype.constructor.name + ".prototype." + key.toString();
      var currentAnnotationType = prototype[storedAnnotationsSymbol][key].annotationType_;
      var requestedAnnotationType = annotation.annotationType_;
      die("Cannot apply '@" + requestedAnnotationType + "' to '" + fieldName + "':" + ("\nThe field is already decorated with '@" + currentAnnotationType + "'.") + "\nRe-decorating fields is not allowed." + "\nUse '@override' decorator for methods overriden by subclass.");
    }
  }

  var $mobx = /*#__PURE__*/Symbol("mobx administration");
  var Atom = /*#__PURE__*/function () {
    // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed

    /**
     * Create a new atom. For debugging purposes it is recommended to give it a name.
     * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
     */
    function Atom(name_) {
      if (name_ === void 0) {
        name_ = 'development' !== "production" ? "Atom@" + getNextId() : "Atom";
      }

      this.name_ = void 0;
      this.isPendingUnobservation_ = false;
      this.isBeingObserved_ = false;
      this.observers_ = new Set();
      this.diffValue_ = 0;
      this.lastAccessedBy_ = 0;
      this.lowestObserverState_ = IDerivationState_.NOT_TRACKING_;
      this.onBOL = void 0;
      this.onBUOL = void 0;
      this.name_ = name_;
    } // onBecomeObservedListeners


    var _proto = Atom.prototype;

    _proto.onBO = function onBO() {
      if (this.onBOL) {
        this.onBOL.forEach(function (listener) {
          return listener();
        });
      }
    };

    _proto.onBUO = function onBUO() {
      if (this.onBUOL) {
        this.onBUOL.forEach(function (listener) {
          return listener();
        });
      }
    }
    /**
     * Invoke this method to notify mobx that your atom has been used somehow.
     * Returns true if there is currently a reactive context.
     */
    ;

    _proto.reportObserved = function reportObserved$1() {
      return reportObserved(this);
    }
    /**
     * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
     */
    ;

    _proto.reportChanged = function reportChanged() {
      startBatch();
      propagateChanged(this);
      endBatch();
    };

    _proto.toString = function toString() {
      return this.name_;
    };

    return Atom;
  }();
  var isAtom = /*#__PURE__*/createInstanceofPredicate("Atom", Atom);
  function createAtom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
    if (onBecomeObservedHandler === void 0) {
      onBecomeObservedHandler = noop;
    }

    if (onBecomeUnobservedHandler === void 0) {
      onBecomeUnobservedHandler = noop;
    }

    var atom = new Atom(name); // default `noop` listener will not initialize the hook Set

    if (onBecomeObservedHandler !== noop) {
      onBecomeObserved(atom, onBecomeObservedHandler);
    }

    if (onBecomeUnobservedHandler !== noop) {
      onBecomeUnobserved(atom, onBecomeUnobservedHandler);
    }

    return atom;
  }

  function identityComparer(a, b) {
    return a === b;
  }

  function structuralComparer(a, b) {
    return deepEqual(a, b);
  }

  function shallowComparer(a, b) {
    return deepEqual(a, b, 1);
  }

  function defaultComparer(a, b) {
    return Object.is(a, b);
  }

  var comparer = {
    identity: identityComparer,
    structural: structuralComparer,
    "default": defaultComparer,
    shallow: shallowComparer
  };

  function deepEnhancer(v, _, name) {
    // it is an observable already, done
    if (isObservable(v)) return v; // something that can be converted and mutated?

    if (Array.isArray(v)) return observable.array(v, {
      name: name
    });
    if (isPlainObject(v)) return observable.object(v, undefined, {
      name: name
    });
    if (isES6Map(v)) return observable.map(v, {
      name: name
    });
    if (isES6Set(v)) return observable.set(v, {
      name: name
    });
    return v;
  }
  function shallowEnhancer(v, _, name) {
    if (v === undefined || v === null) return v;
    if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v) || isObservableSet(v)) return v;
    if (Array.isArray(v)) return observable.array(v, {
      name: name,
      deep: false
    });
    if (isPlainObject(v)) return observable.object(v, undefined, {
      name: name,
      deep: false
    });
    if (isES6Map(v)) return observable.map(v, {
      name: name,
      deep: false
    });
    if (isES6Set(v)) return observable.set(v, {
      name: name,
      deep: false
    });
    if ('development' !== "production") die("The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
  }
  function referenceEnhancer(newValue) {
    // never turn into an observable
    return newValue;
  }
  function refStructEnhancer(v, oldValue) {
    if ('development' !== "production" && isObservable(v)) die("observable.struct should not be used with observable values");
    if (deepEqual(v, oldValue)) return oldValue;
    return v;
  }

  var OVERRIDE = "override";
  function isOverride(annotation) {
    return annotation.annotationType_ === OVERRIDE;
  }

  function createActionAnnotation(name, options) {
    return {
      annotationType_: name,
      options_: options,
      make_: make_$1,
      extend_: extend_$1
    };
  }

  function make_$1(adm, key) {
    var _this$options_$bound, _this$options_, _adm$target_$storedAn;

    var annotated = false;
    var source = adm.target_;
    var bound = (_this$options_$bound = (_this$options_ = this.options_) == null ? void 0 : _this$options_.bound) != null ? _this$options_$bound : false;

    while (source && source !== objectPrototype) {
      var descriptor = getDescriptor(source, key);

      if (descriptor) {
        // Instance or bound
        // Keep first because the operation can be intercepted
        // and we don't want to end up with partially annotated proto chain
        if (source === adm.target_ || bound) {
          var actionDescriptor = createActionDescriptor(adm, this, key, descriptor);
          var definePropertyOutcome = adm.defineProperty_(key, actionDescriptor);

          if (!definePropertyOutcome) {
            // Intercepted
            return;
          }

          annotated = true; // Don't annotate protos if bound

          if (bound) {
            break;
          }
        } // Prototype


        if (source !== adm.target_) {
          if (isAction(descriptor.value)) {
            // A prototype could have been annotated already by other constructor,
            // rest of the proto chain must be annotated already
            annotated = true;
            break;
          }

          var _actionDescriptor = createActionDescriptor(adm, this, key, descriptor, false);

          defineProperty(source, key, _actionDescriptor);
          annotated = true;
        }
      }

      source = Object.getPrototypeOf(source);
    }

    if (annotated) {
      recordAnnotationApplied(adm, this, key);
    } else if (!((_adm$target_$storedAn = adm.target_[storedAnnotationsSymbol]) == null ? void 0 : _adm$target_$storedAn[key])) {
      // Throw on missing key, except for decorators:
      // Decorator annotations are collected from whole prototype chain.
      // When called from super() some props may not exist yet.
      // However we don't have to worry about missing prop,
      // because the decorator must have been applied to something.
      die(1, this.annotationType_, adm.name_ + "." + key.toString());
    }
  }

  function extend_$1(adm, key, descriptor, proxyTrap) {
    var actionDescriptor = createActionDescriptor(adm, this, key, descriptor);
    return adm.defineProperty_(key, actionDescriptor, proxyTrap);
  }

  function assertActionDescriptor(adm, _ref, key, _ref2) {
    var annotationType_ = _ref.annotationType_;
    var value = _ref2.value;

    if ('development' !== "production" && !isFunction(value)) {
      die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' can only be used on properties with a function value."));
    }
  }

  function createActionDescriptor(adm, annotation, key, descriptor, // provides ability to disable safeDescriptors for prototypes
  safeDescriptors) {
    var _annotation$options_, _annotation$options_$, _annotation$options_2, _annotation$options_$2, _annotation$options_3;

    if (safeDescriptors === void 0) {
      safeDescriptors = globalState.safeDescriptors;
    }

    assertActionDescriptor(adm, annotation, key, descriptor);
    var value = descriptor.value;

    if ((_annotation$options_ = annotation.options_) == null ? void 0 : _annotation$options_.bound) {
      var _adm$proxy_;

      value = value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
    }

    return {
      value: createAction((_annotation$options_$ = (_annotation$options_2 = annotation.options_) == null ? void 0 : _annotation$options_2.name) != null ? _annotation$options_$ : key.toString(), value, (_annotation$options_$2 = (_annotation$options_3 = annotation.options_) == null ? void 0 : _annotation$options_3.autoAction) != null ? _annotation$options_$2 : false),
      // Non-configurable for classes
      // prevents accidental field redefinition in subclass
      configurable: safeDescriptors ? adm.isPlainObject_ : true,
      // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
      enumerable: false,
      // Non-obsevable, therefore non-writable
      // Also prevents rewriting in subclass constructor
      writable: safeDescriptors ? false : true
    };
  }

  function createFlowAnnotation(name, options) {
    return {
      annotationType_: name,
      options_: options,
      make_: make_$2,
      extend_: extend_$2
    };
  }

  function make_$2(adm, key) {
    var _adm$target_$storedAn;

    var annotated = false;
    var source = adm.target_;

    while (source && source !== objectPrototype) {
      var descriptor = getDescriptor(source, key);

      if (descriptor) {
        if (source !== adm.target_) {
          // Prototype
          if (isFlow(descriptor.value)) {
            // A prototype could have been annotated already by other constructor,
            // rest of the proto chain must be annotated already
            annotated = true;
            break;
          }

          var flowDescriptor = createFlowDescriptor(adm, this, key, descriptor, false);
          defineProperty(source, key, flowDescriptor);
        } else {
          var _flowDescriptor = createFlowDescriptor(adm, this, key, descriptor);

          var definePropertyOutcome = adm.defineProperty_(key, _flowDescriptor);

          if (!definePropertyOutcome) {
            // Intercepted
            return;
          }
        }

        annotated = true;
      }

      source = Object.getPrototypeOf(source);
    }

    if (annotated) {
      recordAnnotationApplied(adm, this, key);
    } else if (!((_adm$target_$storedAn = adm.target_[storedAnnotationsSymbol]) == null ? void 0 : _adm$target_$storedAn[key])) {
      // Throw on missing key, except for decorators:
      // Decorator annotations are collected from whole prototype chain.
      // When called from super() some props may not exist yet.
      // However we don't have to worry about missing prop,
      // because the decorator must have been applied to something.
      die(1, this.annotationType_, adm.name_ + "." + key.toString());
    }
  }

  function extend_$2(adm, key, descriptor, proxyTrap) {
    var flowDescriptor = createFlowDescriptor(adm, this, key, descriptor);
    return adm.defineProperty_(key, flowDescriptor, proxyTrap);
  }

  function assertFlowDescriptor(adm, _ref, key, _ref2) {
    var annotationType_ = _ref.annotationType_;
    var value = _ref2.value;

    if ('development' !== "production" && !isFunction(value)) {
      die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' can only be used on properties with a generator function value."));
    }
  }

  function createFlowDescriptor(adm, annotation, key, descriptor, // provides ability to disable safeDescriptors for prototypes
  safeDescriptors) {
    if (safeDescriptors === void 0) {
      safeDescriptors = globalState.safeDescriptors;
    }

    assertFlowDescriptor(adm, annotation, key, descriptor);
    return {
      value: flow(descriptor.value),
      // Non-configurable for classes
      // prevents accidental field redefinition in subclass
      configurable: safeDescriptors ? adm.isPlainObject_ : true,
      // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
      enumerable: false,
      // Non-obsevable, therefore non-writable
      // Also prevents rewriting in subclass constructor
      writable: safeDescriptors ? false : true
    };
  }

  function createComputedAnnotation(name, options) {
    return {
      annotationType_: name,
      options_: options,
      make_: make_$3,
      extend_: extend_$3
    };
  }

  function make_$3(adm, key) {
    var _adm$target_$storedAn;

    var source = adm.target_;

    while (source && source !== objectPrototype) {
      var descriptor = getDescriptor(source, key);

      if (descriptor) {
        assertComputedDescriptor(adm, this, key, descriptor);
        var definePropertyOutcome = adm.defineComputedProperty_(key, _extends({}, this.options_, {
          get: descriptor.get,
          set: descriptor.set
        }));

        if (!definePropertyOutcome) {
          // Intercepted
          return;
        }

        recordAnnotationApplied(adm, this, key);
        return;
      }

      source = Object.getPrototypeOf(source);
    }

    if (!((_adm$target_$storedAn = adm.target_[storedAnnotationsSymbol]) == null ? void 0 : _adm$target_$storedAn[key])) {
      // Throw on missing key, except for decorators:
      // Decorator annotations are collected from whole prototype chain.
      // When called from super() some props may not exist yet.
      // However we don't have to worry about missing prop,
      // because the decorator must have been applied to something.
      die(1, this.annotationType_, adm.name_ + "." + key.toString());
    }
  }

  function extend_$3(adm, key, descriptor, proxyTrap) {
    assertComputedDescriptor(adm, this, key, descriptor);
    return adm.defineComputedProperty_(key, _extends({}, this.options_, {
      get: descriptor.get,
      set: descriptor.set
    }), proxyTrap);
  }

  function assertComputedDescriptor(adm, _ref, key, _ref2) {
    var annotationType_ = _ref.annotationType_;
    var get = _ref2.get;

    if ('development' !== "production" && !get) {
      die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' can only be used on getter(+setter) properties."));
    }
  }

  function createObservableAnnotation(name, options) {
    return {
      annotationType_: name,
      options_: options,
      make_: make_$4,
      extend_: extend_$4
    };
  }

  function make_$4(adm, key) {
    var _adm$target_$storedAn;

    var source = adm.target_; // Copy props from proto as well, see test:
    // "decorate should work with Object.create"

    while (source && source !== objectPrototype) {
      var descriptor = getDescriptor(source, key);

      if (descriptor) {
        var _this$options_$enhanc, _this$options_;

        assertObservableDescriptor(adm, this, key, descriptor);
        var definePropertyOutcome = adm.defineObservableProperty_(key, descriptor.value, (_this$options_$enhanc = (_this$options_ = this.options_) == null ? void 0 : _this$options_.enhancer) != null ? _this$options_$enhanc : deepEnhancer);

        if (!definePropertyOutcome) {
          // Intercepted
          return;
        }

        recordAnnotationApplied(adm, this, key);
        return;
      }

      source = Object.getPrototypeOf(source);
    }

    if (!((_adm$target_$storedAn = adm.target_[storedAnnotationsSymbol]) == null ? void 0 : _adm$target_$storedAn[key])) {
      // Throw on missing key, except for decorators:
      // Decorator annotations are collected from whole prototype chain.
      // When called from super() some props may not exist yet.
      // However we don't have to worry about missing prop,
      // because the decorator must have been applied to something.
      die(1, this.annotationType_, adm.name_ + "." + key.toString());
    }
  }

  function extend_$4(adm, key, descriptor, proxyTrap) {
    var _this$options_$enhanc2, _this$options_2;

    assertObservableDescriptor(adm, this, key, descriptor);
    return adm.defineObservableProperty_(key, descriptor.value, (_this$options_$enhanc2 = (_this$options_2 = this.options_) == null ? void 0 : _this$options_2.enhancer) != null ? _this$options_$enhanc2 : deepEnhancer, proxyTrap);
  }

  function assertObservableDescriptor(adm, _ref, key, descriptor) {
    var annotationType_ = _ref.annotationType_;

    if ('development' !== "production" && !("value" in descriptor)) {
      die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' cannot be used on getter/setter properties"));
    }
  }

  // in the majority of cases

  var defaultCreateObservableOptions = {
    deep: true,
    name: undefined,
    defaultDecorator: undefined,
    proxy: true
  };
  Object.freeze(defaultCreateObservableOptions);
  function asCreateObservableOptions(thing) {
    return thing || defaultCreateObservableOptions;
  }
  var observableAnnotation = /*#__PURE__*/createObservableAnnotation("observable");
  var observableRefAnnotation = /*#__PURE__*/createObservableAnnotation("observable.ref", {
    enhancer: referenceEnhancer
  });
  var observableShallowAnnotation = /*#__PURE__*/createObservableAnnotation("observable.shallow", {
    enhancer: shallowEnhancer
  });
  var observableStructAnnotation = /*#__PURE__*/createObservableAnnotation("observable.struct", {
    enhancer: refStructEnhancer
  });
  var observableDecoratorAnnotation = /*#__PURE__*/createDecoratorAnnotation(observableAnnotation);
  function getEnhancerFromOptions(options) {
    return options.deep === true ? deepEnhancer : options.deep === false ? referenceEnhancer : getEnhancerFromAnnotation(options.defaultDecorator);
  }
  function getAnnotationFromOptions(options) {
    return options ? options.deep === true ? observableAnnotation : options.deep === false ? observableRefAnnotation : options.defaultDecorator : undefined;
  }
  function getEnhancerFromAnnotation(annotation) {
    var _annotation$options_$, _annotation$options_;

    return !annotation ? deepEnhancer : (_annotation$options_$ = (_annotation$options_ = annotation.options_) == null ? void 0 : _annotation$options_.enhancer) != null ? _annotation$options_$ : deepEnhancer;
  }
  /**
   * Turns an object, array or function into a reactive structure.
   * @param v the value which should become observable.
   */

  function createObservable(v, arg2, arg3) {
    // @observable someProp;
    if (isStringish(arg2)) {
      storeAnnotation(v, arg2, observableAnnotation);
      return;
    } // already observable - ignore


    if (isObservable(v)) return v; // plain object

    if (isPlainObject(v)) return observable.object(v, arg2, arg3); // Array

    if (Array.isArray(v)) return observable.array(v, arg2); // Map

    if (isES6Map(v)) return observable.map(v, arg2); // Set

    if (isES6Set(v)) return observable.set(v, arg2); // other object - ignore

    if (typeof v === "object" && v !== null) return v; // anything else

    return observable.box(v, arg2);
  }

  Object.assign(createObservable, observableDecoratorAnnotation);
  var observableFactories = {
    box: function box(value, options) {
      var o = asCreateObservableOptions(options);
      return new ObservableValue(value, getEnhancerFromOptions(o), o.name, true, o.equals);
    },
    array: function array(initialValues, options) {
      var o = asCreateObservableOptions(options);
      return (globalState.useProxies === false || o.proxy === false ? createLegacyArray : createObservableArray)(initialValues, getEnhancerFromOptions(o), o.name);
    },
    map: function map(initialValues, options) {
      var o = asCreateObservableOptions(options);
      return new ObservableMap(initialValues, getEnhancerFromOptions(o), o.name);
    },
    set: function set(initialValues, options) {
      var o = asCreateObservableOptions(options);
      return new ObservableSet(initialValues, getEnhancerFromOptions(o), o.name);
    },
    object: function object(props, decorators, options) {
      return extendObservable(globalState.useProxies === false || (options == null ? void 0 : options.proxy) === false ? asObservableObject({}, options) : asDynamicObservableObject({}, options), props, decorators);
    },
    ref: /*#__PURE__*/createDecoratorAnnotation(observableRefAnnotation),
    shallow: /*#__PURE__*/createDecoratorAnnotation(observableShallowAnnotation),
    deep: observableDecoratorAnnotation,
    struct: /*#__PURE__*/createDecoratorAnnotation(observableStructAnnotation)
  }; // eslint-disable-next-line

  var observable = /*#__PURE__*/assign(createObservable, observableFactories);

  var COMPUTED = "computed";
  var COMPUTED_STRUCT = "computed.struct";
  var computedAnnotation = /*#__PURE__*/createComputedAnnotation(COMPUTED);
  var computedStructAnnotation = /*#__PURE__*/createComputedAnnotation(COMPUTED_STRUCT, {
    equals: comparer.structural
  });
  /**
   * Decorator for class properties: @computed get value() { return expr; }.
   * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
   */

  var computed = function computed(arg1, arg2) {
    if (isStringish(arg2)) {
      // @computed
      return storeAnnotation(arg1, arg2, computedAnnotation);
    }

    if (isPlainObject(arg1)) {
      // @computed({ options })
      return createDecoratorAnnotation(createComputedAnnotation(COMPUTED, arg1));
    } // computed(expr, options?)


    if ('development' !== "production") {
      if (!isFunction(arg1)) die("First argument to `computed` should be an expression.");
      if (isFunction(arg2)) die("A setter as second argument is no longer supported, use `{ set: fn }` option instead");
    }

    var opts = isPlainObject(arg2) ? arg2 : {};
    opts.get = arg1;
    opts.name || (opts.name = arg1.name || "");
    /* for generated name */

    return new ComputedValue(opts);
  };
  Object.assign(computed, computedAnnotation);
  computed.struct = /*#__PURE__*/createDecoratorAnnotation(computedStructAnnotation);

  var _getDescriptor$config, _getDescriptor;
  // mobx versions

  var currentActionId = 0;
  var nextActionId = 1;
  var isFunctionNameConfigurable = (_getDescriptor$config = (_getDescriptor = /*#__PURE__*/getDescriptor(function () {}, "name")) == null ? void 0 : _getDescriptor.configurable) != null ? _getDescriptor$config : false; // we can safely recycle this object

  var tmpNameDescriptor = {
    value: "action",
    configurable: true,
    writable: false,
    enumerable: false
  };
  function createAction(actionName, fn, autoAction, ref) {
    if (autoAction === void 0) {
      autoAction = false;
    }

    if ('development' !== "production") {
      if (!isFunction(fn)) die("`action` can only be invoked on functions");
      if (typeof actionName !== "string" || !actionName) die("actions should have valid names, got: '" + actionName + "'");
    }

    function res() {
      return executeAction(actionName, autoAction, fn, ref || this, arguments);
    }

    res.isMobxAction = true;

    if (isFunctionNameConfigurable) {
      tmpNameDescriptor.value = actionName;
      Object.defineProperty(res, "name", tmpNameDescriptor);
    }

    return res;
  }
  function executeAction(actionName, canRunAsDerivation, fn, scope, args) {
    var runInfo = _startAction(actionName, canRunAsDerivation, scope, args);

    try {
      return fn.apply(scope, args);
    } catch (err) {
      runInfo.error_ = err;
      throw err;
    } finally {
      _endAction(runInfo);
    }
  }
  function _startAction(actionName, canRunAsDerivation, // true for autoAction
  scope, args) {
    var notifySpy_ = 'development' !== "production" && isSpyEnabled() && !!actionName;
    var startTime_ = 0;

    if ('development' !== "production" && notifySpy_) {
      startTime_ = Date.now();
      var flattenedArgs = args ? Array.from(args) : EMPTY_ARRAY;
      spyReportStart({
        type: ACTION,
        name: actionName,
        object: scope,
        arguments: flattenedArgs
      });
    }

    var prevDerivation_ = globalState.trackingDerivation;
    var runAsAction = !canRunAsDerivation || !prevDerivation_;
    startBatch();
    var prevAllowStateChanges_ = globalState.allowStateChanges; // by default preserve previous allow

    if (runAsAction) {
      untrackedStart();
      prevAllowStateChanges_ = allowStateChangesStart(true);
    }

    var prevAllowStateReads_ = allowStateReadsStart(true);
    var runInfo = {
      runAsAction_: runAsAction,
      prevDerivation_: prevDerivation_,
      prevAllowStateChanges_: prevAllowStateChanges_,
      prevAllowStateReads_: prevAllowStateReads_,
      notifySpy_: notifySpy_,
      startTime_: startTime_,
      actionId_: nextActionId++,
      parentActionId_: currentActionId
    };
    currentActionId = runInfo.actionId_;
    return runInfo;
  }
  function _endAction(runInfo) {
    if (currentActionId !== runInfo.actionId_) {
      die(30);
    }

    currentActionId = runInfo.parentActionId_;

    if (runInfo.error_ !== undefined) {
      globalState.suppressReactionErrors = true;
    }

    allowStateChangesEnd(runInfo.prevAllowStateChanges_);
    allowStateReadsEnd(runInfo.prevAllowStateReads_);
    endBatch();
    if (runInfo.runAsAction_) untrackedEnd(runInfo.prevDerivation_);

    if ('development' !== "production" && runInfo.notifySpy_) {
      spyReportEnd({
        time: Date.now() - runInfo.startTime_
      });
    }

    globalState.suppressReactionErrors = false;
  }
  function allowStateChangesStart(allowStateChanges) {
    var prev = globalState.allowStateChanges;
    globalState.allowStateChanges = allowStateChanges;
    return prev;
  }
  function allowStateChangesEnd(prev) {
    globalState.allowStateChanges = prev;
  }

  var _Symbol$toPrimitive;
  var CREATE = "create";
  _Symbol$toPrimitive = Symbol.toPrimitive;
  var ObservableValue = /*#__PURE__*/function (_Atom) {
    _inheritsLoose(ObservableValue, _Atom);

    function ObservableValue(value, enhancer, name_, notifySpy, equals) {
      var _this;

      if (name_ === void 0) {
        name_ = 'development' !== "production" ? "ObservableValue@" + getNextId() : "ObservableValue";
      }

      if (notifySpy === void 0) {
        notifySpy = true;
      }

      if (equals === void 0) {
        equals = comparer["default"];
      }

      _this = _Atom.call(this, name_) || this;
      _this.enhancer = void 0;
      _this.name_ = void 0;
      _this.equals = void 0;
      _this.hasUnreportedChange_ = false;
      _this.interceptors_ = void 0;
      _this.changeListeners_ = void 0;
      _this.value_ = void 0;
      _this.dehancer = void 0;
      _this.enhancer = enhancer;
      _this.name_ = name_;
      _this.equals = equals;
      _this.value_ = enhancer(value, undefined, name_);

      if ('development' !== "production" && notifySpy && isSpyEnabled()) {
        // only notify spy if this is a stand-alone observable
        spyReport({
          type: CREATE,
          object: _assertThisInitialized(_this),
          observableKind: "value",
          debugObjectName: _this.name_,
          newValue: "" + _this.value_
        });
      }

      return _this;
    }

    var _proto = ObservableValue.prototype;

    _proto.dehanceValue = function dehanceValue(value) {
      if (this.dehancer !== undefined) return this.dehancer(value);
      return value;
    };

    _proto.set = function set(newValue) {
      var oldValue = this.value_;
      newValue = this.prepareNewValue_(newValue);

      if (newValue !== globalState.UNCHANGED) {
        var notifySpy = isSpyEnabled();

        if ('development' !== "production" && notifySpy) {
          spyReportStart({
            type: UPDATE,
            object: this,
            observableKind: "value",
            debugObjectName: this.name_,
            newValue: newValue,
            oldValue: oldValue
          });
        }

        this.setNewValue_(newValue);
        if ('development' !== "production" && notifySpy) spyReportEnd();
      }
    };

    _proto.prepareNewValue_ = function prepareNewValue_(newValue) {
      checkIfStateModificationsAreAllowed(this);

      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this,
          type: UPDATE,
          newValue: newValue
        });
        if (!change) return globalState.UNCHANGED;
        newValue = change.newValue;
      } // apply modifier


      newValue = this.enhancer(newValue, this.value_, this.name_);
      return this.equals(this.value_, newValue) ? globalState.UNCHANGED : newValue;
    };

    _proto.setNewValue_ = function setNewValue_(newValue) {
      var oldValue = this.value_;
      this.value_ = newValue;
      this.reportChanged();

      if (hasListeners(this)) {
        notifyListeners(this, {
          type: UPDATE,
          object: this,
          newValue: newValue,
          oldValue: oldValue
        });
      }
    };

    _proto.get = function get() {
      this.reportObserved();
      return this.dehanceValue(this.value_);
    };

    _proto.intercept_ = function intercept_(handler) {
      return registerInterceptor(this, handler);
    };

    _proto.observe_ = function observe_(listener, fireImmediately) {
      if (fireImmediately) listener({
        observableKind: "value",
        debugObjectName: this.name_,
        object: this,
        type: UPDATE,
        newValue: this.value_,
        oldValue: undefined
      });
      return registerListener(this, listener);
    };

    _proto.raw = function raw() {
      // used by MST ot get undehanced value
      return this.value_;
    };

    _proto.toJSON = function toJSON() {
      return this.get();
    };

    _proto.toString = function toString() {
      return this.name_ + "[" + this.value_ + "]";
    };

    _proto.valueOf = function valueOf() {
      return toPrimitive(this.get());
    };

    _proto[_Symbol$toPrimitive] = function () {
      return this.valueOf();
    };

    return ObservableValue;
  }(Atom);

  var _Symbol$toPrimitive$1;
  /**
   * A node in the state dependency root that observes other nodes, and can be observed itself.
   *
   * ComputedValue will remember the result of the computation for the duration of the batch, or
   * while being observed.
   *
   * During this time it will recompute only when one of its direct dependencies changed,
   * but only when it is being accessed with `ComputedValue.get()`.
   *
   * Implementation description:
   * 1. First time it's being accessed it will compute and remember result
   *    give back remembered result until 2. happens
   * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
   * 3. When it's being accessed, recompute if any shallow dependency changed.
   *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
   *    go to step 2. either way
   *
   * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
   */

  _Symbol$toPrimitive$1 = Symbol.toPrimitive;
  var ComputedValue = /*#__PURE__*/function () {
    // nodes we are looking at. Our value depends on these nodes
    // during tracking it's an array with new observed observers
    // to check for cycles
    // N.B: unminified as it is used by MST

    /**
     * Create a new computed value based on a function expression.
     *
     * The `name` property is for debug purposes only.
     *
     * The `equals` property specifies the comparer function to use to determine if a newly produced
     * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
     * compares based on identity comparison (===), and `structuralComparer` deeply compares the structure.
     * Structural comparison can be convenient if you always produce a new aggregated object and
     * don't want to notify observers if it is structurally the same.
     * This is useful for working with vectors, mouse coordinates etc.
     */
    function ComputedValue(options) {
      this.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
      this.observing_ = [];
      this.newObserving_ = null;
      this.isBeingObserved_ = false;
      this.isPendingUnobservation_ = false;
      this.observers_ = new Set();
      this.diffValue_ = 0;
      this.runId_ = 0;
      this.lastAccessedBy_ = 0;
      this.lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
      this.unboundDepsCount_ = 0;
      this.value_ = new CaughtException(null);
      this.name_ = void 0;
      this.triggeredBy_ = void 0;
      this.isComputing_ = false;
      this.isRunningSetter_ = false;
      this.derivation = void 0;
      this.setter_ = void 0;
      this.isTracing_ = TraceMode.NONE;
      this.scope_ = void 0;
      this.equals_ = void 0;
      this.requiresReaction_ = void 0;
      this.keepAlive_ = void 0;
      this.onBOL = void 0;
      this.onBUOL = void 0;
      if (!options.get) die(31);
      this.derivation = options.get;
      this.name_ = options.name || ('development' !== "production" ? "ComputedValue@" + getNextId() : "ComputedValue");

      if (options.set) {
        this.setter_ = createAction('development' !== "production" ? this.name_ + "-setter" : "ComputedValue-setter", options.set);
      }

      this.equals_ = options.equals || (options.compareStructural || options.struct ? comparer.structural : comparer["default"]);
      this.scope_ = options.context;
      this.requiresReaction_ = !!options.requiresReaction;
      this.keepAlive_ = !!options.keepAlive;
    }

    var _proto = ComputedValue.prototype;

    _proto.onBecomeStale_ = function onBecomeStale_() {
      propagateMaybeChanged(this);
    };

    _proto.onBO = function onBO() {
      if (this.onBOL) {
        this.onBOL.forEach(function (listener) {
          return listener();
        });
      }
    };

    _proto.onBUO = function onBUO() {
      if (this.onBUOL) {
        this.onBUOL.forEach(function (listener) {
          return listener();
        });
      }
    }
    /**
     * Returns the current value of this computed value.
     * Will evaluate its computation first if needed.
     */
    ;

    _proto.get = function get() {
      if (this.isComputing_) die(32, this.name_, this.derivation);

      if (globalState.inBatch === 0 && // !globalState.trackingDerivatpion &&
      this.observers_.size === 0 && !this.keepAlive_) {
        if (shouldCompute(this)) {
          this.warnAboutUntrackedRead_();
          startBatch(); // See perf test 'computed memoization'

          this.value_ = this.computeValue_(false);
          endBatch();
        }
      } else {
        reportObserved(this);

        if (shouldCompute(this)) {
          var prevTrackingContext = globalState.trackingContext;
          if (this.keepAlive_ && !prevTrackingContext) globalState.trackingContext = this;
          if (this.trackAndCompute()) propagateChangeConfirmed(this);
          globalState.trackingContext = prevTrackingContext;
        }
      }

      var result = this.value_;
      if (isCaughtException(result)) throw result.cause;
      return result;
    };

    _proto.set = function set(value) {
      if (this.setter_) {
        if (this.isRunningSetter_) die(33, this.name_);
        this.isRunningSetter_ = true;

        try {
          this.setter_.call(this.scope_, value);
        } finally {
          this.isRunningSetter_ = false;
        }
      } else die(34, this.name_);
    };

    _proto.trackAndCompute = function trackAndCompute() {
      // N.B: unminified as it is used by MST
      var oldValue = this.value_;
      var wasSuspended =
      /* see #1208 */
      this.dependenciesState_ === IDerivationState_.NOT_TRACKING_;
      var newValue = this.computeValue_(true);

      if ('development' !== "production" && isSpyEnabled()) {
        spyReport({
          observableKind: "computed",
          debugObjectName: this.name_,
          object: this.scope_,
          type: "update",
          oldValue: this.value_,
          newValue: newValue
        });
      }

      var changed = wasSuspended || isCaughtException(oldValue) || isCaughtException(newValue) || !this.equals_(oldValue, newValue);

      if (changed) {
        this.value_ = newValue;
      }

      return changed;
    };

    _proto.computeValue_ = function computeValue_(track) {
      this.isComputing_ = true; // don't allow state changes during computation

      var prev = allowStateChangesStart(false);
      var res;

      if (track) {
        res = trackDerivedFunction(this, this.derivation, this.scope_);
      } else {
        if (globalState.disableErrorBoundaries === true) {
          res = this.derivation.call(this.scope_);
        } else {
          try {
            res = this.derivation.call(this.scope_);
          } catch (e) {
            res = new CaughtException(e);
          }
        }
      }

      allowStateChangesEnd(prev);
      this.isComputing_ = false;
      return res;
    };

    _proto.suspend_ = function suspend_() {
      if (!this.keepAlive_) {
        clearObserving(this);
        this.value_ = undefined; // don't hold on to computed value!
      }
    };

    _proto.observe_ = function observe_(listener, fireImmediately) {
      var _this = this;

      var firstTime = true;
      var prevValue = undefined;
      return autorun(function () {
        // TODO: why is this in a different place than the spyReport() function? in all other observables it's called in the same place
        var newValue = _this.get();

        if (!firstTime || fireImmediately) {
          var prevU = untrackedStart();
          listener({
            observableKind: "computed",
            debugObjectName: _this.name_,
            type: UPDATE,
            object: _this,
            newValue: newValue,
            oldValue: prevValue
          });
          untrackedEnd(prevU);
        }

        firstTime = false;
        prevValue = newValue;
      });
    };

    _proto.warnAboutUntrackedRead_ = function warnAboutUntrackedRead_() {
      if (!('development' !== "production")) return;

      if (this.requiresReaction_ === true) {
        die("[mobx] Computed value " + this.name_ + " is read outside a reactive context");
      }

      if (this.isTracing_ !== TraceMode.NONE) {
        console.log("[mobx.trace] '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute");
      }

      if (globalState.computedRequiresReaction) {
        console.warn("[mobx] Computed value " + this.name_ + " is being read outside a reactive context. Doing a full recompute");
      }
    };

    _proto.toString = function toString() {
      return this.name_ + "[" + this.derivation.toString() + "]";
    };

    _proto.valueOf = function valueOf() {
      return toPrimitive(this.get());
    };

    _proto[_Symbol$toPrimitive$1] = function () {
      return this.valueOf();
    };

    return ComputedValue;
  }();
  var isComputedValue = /*#__PURE__*/createInstanceofPredicate("ComputedValue", ComputedValue);

  var IDerivationState_;

  (function (IDerivationState_) {
    // before being run or (outside batch and not being observed)
    // at this point derivation is not holding any data about dependency tree
    IDerivationState_[IDerivationState_["NOT_TRACKING_"] = -1] = "NOT_TRACKING_"; // no shallow dependency changed since last computation
    // won't recalculate derivation
    // this is what makes mobx fast

    IDerivationState_[IDerivationState_["UP_TO_DATE_"] = 0] = "UP_TO_DATE_"; // some deep dependency changed, but don't know if shallow dependency changed
    // will require to check first if UP_TO_DATE or POSSIBLY_STALE
    // currently only ComputedValue will propagate POSSIBLY_STALE
    //
    // having this state is second big optimization:
    // don't have to recompute on every dependency change, but only when it's needed

    IDerivationState_[IDerivationState_["POSSIBLY_STALE_"] = 1] = "POSSIBLY_STALE_"; // A shallow dependency has changed since last computation and the derivation
    // will need to recompute when it's needed next.

    IDerivationState_[IDerivationState_["STALE_"] = 2] = "STALE_";
  })(IDerivationState_ || (IDerivationState_ = {}));

  var TraceMode;

  (function (TraceMode) {
    TraceMode[TraceMode["NONE"] = 0] = "NONE";
    TraceMode[TraceMode["LOG"] = 1] = "LOG";
    TraceMode[TraceMode["BREAK"] = 2] = "BREAK";
  })(TraceMode || (TraceMode = {}));

  var CaughtException = function CaughtException(cause) {
    this.cause = void 0;
    this.cause = cause; // Empty
  };
  function isCaughtException(e) {
    return e instanceof CaughtException;
  }
  /**
   * Finds out whether any dependency of the derivation has actually changed.
   * If dependenciesState is 1 then it will recalculate dependencies,
   * if any dependency changed it will propagate it by changing dependenciesState to 2.
   *
   * By iterating over the dependencies in the same order that they were reported and
   * stopping on the first change, all the recalculations are only called for ComputedValues
   * that will be tracked by derivation. That is because we assume that if the first x
   * dependencies of the derivation doesn't change then the derivation should run the same way
   * up until accessing x-th dependency.
   */

  function shouldCompute(derivation) {
    switch (derivation.dependenciesState_) {
      case IDerivationState_.UP_TO_DATE_:
        return false;

      case IDerivationState_.NOT_TRACKING_:
      case IDerivationState_.STALE_:
        return true;

      case IDerivationState_.POSSIBLY_STALE_:
        {
          // state propagation can occur outside of action/reactive context #2195
          var prevAllowStateReads = allowStateReadsStart(true);
          var prevUntracked = untrackedStart(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.

          var obs = derivation.observing_,
              l = obs.length;

          for (var i = 0; i < l; i++) {
            var obj = obs[i];

            if (isComputedValue(obj)) {
              if (globalState.disableErrorBoundaries) {
                obj.get();
              } else {
                try {
                  obj.get();
                } catch (e) {
                  // we are not interested in the value *or* exception at this moment, but if there is one, notify all
                  untrackedEnd(prevUntracked);
                  allowStateReadsEnd(prevAllowStateReads);
                  return true;
                }
              } // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
              // and `derivation` is an observer of `obj`
              // invariantShouldCompute(derivation)


              if (derivation.dependenciesState_ === IDerivationState_.STALE_) {
                untrackedEnd(prevUntracked);
                allowStateReadsEnd(prevAllowStateReads);
                return true;
              }
            }
          }

          changeDependenciesStateTo0(derivation);
          untrackedEnd(prevUntracked);
          allowStateReadsEnd(prevAllowStateReads);
          return false;
        }
    }
  }
  function checkIfStateModificationsAreAllowed(atom) {
    if (!('development' !== "production")) {
      return;
    }

    var hasObservers = atom.observers_.size > 0; // Should not be possible to change observed state outside strict mode, except during initialization, see #563

    if (!globalState.allowStateChanges && (hasObservers || globalState.enforceActions === "always")) console.warn("[MobX] " + (globalState.enforceActions ? "Since strict-mode is enabled, changing (observed) observable values without using an action is not allowed. Tried to modify: " : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, a computed value or the render function of a React component? You can wrap side effects in 'runInAction' (or decorate functions with 'action') if needed. Tried to modify: ") + atom.name_);
  }
  function checkIfStateReadsAreAllowed(observable) {
    if ('development' !== "production" && !globalState.allowStateReads && globalState.observableRequiresReaction) {
      console.warn("[mobx] Observable " + observable.name_ + " being read outside a reactive context");
    }
  }
  /**
   * Executes the provided function `f` and tracks which observables are being accessed.
   * The tracking information is stored on the `derivation` object and the derivation is registered
   * as observer of any of the accessed observables.
   */

  function trackDerivedFunction(derivation, f, context) {
    var prevAllowStateReads = allowStateReadsStart(true); // pre allocate array allocation + room for variation in deps
    // array will be trimmed by bindDependencies

    changeDependenciesStateTo0(derivation);
    derivation.newObserving_ = new Array(derivation.observing_.length + 100);
    derivation.unboundDepsCount_ = 0;
    derivation.runId_ = ++globalState.runId;
    var prevTracking = globalState.trackingDerivation;
    globalState.trackingDerivation = derivation;
    globalState.inBatch++;
    var result;

    if (globalState.disableErrorBoundaries === true) {
      result = f.call(context);
    } else {
      try {
        result = f.call(context);
      } catch (e) {
        result = new CaughtException(e);
      }
    }

    globalState.inBatch--;
    globalState.trackingDerivation = prevTracking;
    bindDependencies(derivation);
    warnAboutDerivationWithoutDependencies(derivation);
    allowStateReadsEnd(prevAllowStateReads);
    return result;
  }

  function warnAboutDerivationWithoutDependencies(derivation) {
    if (!('development' !== "production")) return;
    if (derivation.observing_.length !== 0) return;

    if (globalState.reactionRequiresObservable || derivation.requiresObservable_) {
      console.warn("[mobx] Derivation " + derivation.name_ + " is created/updated without reading any observable value");
    }
  }
  /**
   * diffs newObserving with observing.
   * update observing to be newObserving with unique observables
   * notify observers that become observed/unobserved
   */


  function bindDependencies(derivation) {
    // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
    var prevObserving = derivation.observing_;
    var observing = derivation.observing_ = derivation.newObserving_;
    var lowestNewObservingDerivationState = IDerivationState_.UP_TO_DATE_; // Go through all new observables and check diffValue: (this list can contain duplicates):
    //   0: first occurrence, change to 1 and keep it
    //   1: extra occurrence, drop it

    var i0 = 0,
        l = derivation.unboundDepsCount_;

    for (var i = 0; i < l; i++) {
      var dep = observing[i];

      if (dep.diffValue_ === 0) {
        dep.diffValue_ = 1;
        if (i0 !== i) observing[i0] = dep;
        i0++;
      } // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
      // not hitting the condition


      if (dep.dependenciesState_ > lowestNewObservingDerivationState) {
        lowestNewObservingDerivationState = dep.dependenciesState_;
      }
    }

    observing.length = i0;
    derivation.newObserving_ = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
    // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
    //   0: it's not in new observables, unobserve it
    //   1: it keeps being observed, don't want to notify it. change to 0

    l = prevObserving.length;

    while (l--) {
      var _dep = prevObserving[l];

      if (_dep.diffValue_ === 0) {
        removeObserver(_dep, derivation);
      }

      _dep.diffValue_ = 0;
    } // Go through all new observables and check diffValue: (now it should be unique)
    //   0: it was set to 0 in last loop. don't need to do anything.
    //   1: it wasn't observed, let's observe it. set back to 0


    while (i0--) {
      var _dep2 = observing[i0];

      if (_dep2.diffValue_ === 1) {
        _dep2.diffValue_ = 0;
        addObserver(_dep2, derivation);
      }
    } // Some new observed derivations may become stale during this derivation computation
    // so they have had no chance to propagate staleness (#916)


    if (lowestNewObservingDerivationState !== IDerivationState_.UP_TO_DATE_) {
      derivation.dependenciesState_ = lowestNewObservingDerivationState;
      derivation.onBecomeStale_();
    }
  }

  function clearObserving(derivation) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
    var obs = derivation.observing_;
    derivation.observing_ = [];
    var i = obs.length;

    while (i--) {
      removeObserver(obs[i], derivation);
    }

    derivation.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
  }
  function untracked(action) {
    var prev = untrackedStart();

    try {
      return action();
    } finally {
      untrackedEnd(prev);
    }
  }
  function untrackedStart() {
    var prev = globalState.trackingDerivation;
    globalState.trackingDerivation = null;
    return prev;
  }
  function untrackedEnd(prev) {
    globalState.trackingDerivation = prev;
  }
  function allowStateReadsStart(allowStateReads) {
    var prev = globalState.allowStateReads;
    globalState.allowStateReads = allowStateReads;
    return prev;
  }
  function allowStateReadsEnd(prev) {
    globalState.allowStateReads = prev;
  }
  /**
   * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
   *
   */

  function changeDependenciesStateTo0(derivation) {
    if (derivation.dependenciesState_ === IDerivationState_.UP_TO_DATE_) return;
    derivation.dependenciesState_ = IDerivationState_.UP_TO_DATE_;
    var obs = derivation.observing_;
    var i = obs.length;

    while (i--) {
      obs[i].lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
    }
  }
  var MobXGlobals = function MobXGlobals() {
    this.version = 6;
    this.UNCHANGED = {};
    this.trackingDerivation = null;
    this.trackingContext = null;
    this.runId = 0;
    this.mobxGuid = 0;
    this.inBatch = 0;
    this.pendingUnobservations = [];
    this.pendingReactions = [];
    this.isRunningReactions = false;
    this.allowStateChanges = false;
    this.allowStateReads = true;
    this.enforceActions = true;
    this.spyListeners = [];
    this.globalReactionErrorHandlers = [];
    this.computedRequiresReaction = false;
    this.reactionRequiresObservable = false;
    this.observableRequiresReaction = false;
    this.disableErrorBoundaries = false;
    this.suppressReactionErrors = false;
    this.useProxies = true;
    this.verifyProxies = false;
    this.safeDescriptors = true;
  };
  var canMergeGlobalState = true;
  var globalState = /*#__PURE__*/function () {
    var global = /*#__PURE__*/getGlobal();
    if (global.__mobxInstanceCount > 0 && !global.__mobxGlobals) canMergeGlobalState = false;
    if (global.__mobxGlobals && global.__mobxGlobals.version !== new MobXGlobals().version) canMergeGlobalState = false;

    if (!canMergeGlobalState) {
      setTimeout(function () {
        {
          die(35);
        }
      }, 1);
      return new MobXGlobals();
    } else if (global.__mobxGlobals) {
      global.__mobxInstanceCount += 1;
      if (!global.__mobxGlobals.UNCHANGED) global.__mobxGlobals.UNCHANGED = {}; // make merge backward compatible

      return global.__mobxGlobals;
    } else {
      global.__mobxInstanceCount = 1;
      return global.__mobxGlobals = /*#__PURE__*/new MobXGlobals();
    }
  }();
  //     const list = observable.observers
  //     const map = observable.observersIndexes
  //     const l = list.length
  //     for (let i = 0; i < l; i++) {
  //         const id = list[i].__mapid
  //         if (i) {
  //             invariant(map[id] === i, "INTERNAL ERROR maps derivation.__mapid to index in list") // for performance
  //         } else {
  //             invariant(!(id in map), "INTERNAL ERROR observer on index 0 shouldn't be held in map.") // for performance
  //         }
  //     }
  //     invariant(
  //         list.length === 0 || Object.keys(map).length === list.length - 1,
  //         "INTERNAL ERROR there is no junk in map"
  //     )
  // }

  function addObserver(observable, node) {
    // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
    // invariantObservers(observable);
    observable.observers_.add(node);
    if (observable.lowestObserverState_ > node.dependenciesState_) observable.lowestObserverState_ = node.dependenciesState_; // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
  }
  function removeObserver(observable, node) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
    // invariantObservers(observable);
    observable.observers_["delete"](node);

    if (observable.observers_.size === 0) {
      // deleting last observer
      queueForUnobservation(observable);
    } // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");

  }
  function queueForUnobservation(observable) {
    if (observable.isPendingUnobservation_ === false) {
      // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
      observable.isPendingUnobservation_ = true;
      globalState.pendingUnobservations.push(observable);
    }
  }
  /**
   * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
   * During a batch `onBecomeUnobserved` will be called at most once per observable.
   * Avoids unnecessary recalculations.
   */

  function startBatch() {
    globalState.inBatch++;
  }
  function endBatch() {
    if (--globalState.inBatch === 0) {
      runReactions(); // the batch is actually about to finish, all unobserving should happen here.

      var list = globalState.pendingUnobservations;

      for (var i = 0; i < list.length; i++) {
        var observable = list[i];
        observable.isPendingUnobservation_ = false;

        if (observable.observers_.size === 0) {
          if (observable.isBeingObserved_) {
            // if this observable had reactive observers, trigger the hooks
            observable.isBeingObserved_ = false;
            observable.onBUO();
          }

          if (observable instanceof ComputedValue) {
            // computed values are automatically teared down when the last observer leaves
            // this process happens recursively, this computed might be the last observabe of another, etc..
            observable.suspend_();
          }
        }
      }

      globalState.pendingUnobservations = [];
    }
  }
  function reportObserved(observable) {
    checkIfStateReadsAreAllowed(observable);
    var derivation = globalState.trackingDerivation;

    if (derivation !== null) {
      /**
       * Simple optimization, give each derivation run an unique id (runId)
       * Check if last time this observable was accessed the same runId is used
       * if this is the case, the relation is already known
       */
      if (derivation.runId_ !== observable.lastAccessedBy_) {
        observable.lastAccessedBy_ = derivation.runId_; // Tried storing newObserving, or observing, or both as Set, but performance didn't come close...

        derivation.newObserving_[derivation.unboundDepsCount_++] = observable;

        if (!observable.isBeingObserved_ && globalState.trackingContext) {
          observable.isBeingObserved_ = true;
          observable.onBO();
        }
      }

      return true;
    } else if (observable.observers_.size === 0 && globalState.inBatch > 0) {
      queueForUnobservation(observable);
    }

    return false;
  } // function invariantLOS(observable: IObservable, msg: string) {
  //     // it's expensive so better not run it in produciton. but temporarily helpful for testing
  //     const min = getObservers(observable).reduce((a, b) => Math.min(a, b.dependenciesState), 2)
  //     if (min >= observable.lowestObserverState) return // <- the only assumption about `lowestObserverState`
  //     throw new Error(
  //         "lowestObserverState is wrong for " +
  //             msg +
  //             " because " +
  //             min +
  //             " < " +
  //             observable.lowestObserverState
  //     )
  // }

  /**
   * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
   * It will propagate changes to observers from previous run
   * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
   * Hopefully self reruning autoruns aren't a feature people should depend on
   * Also most basic use cases should be ok
   */
  // Called by Atom when its value changes

  function propagateChanged(observable) {
    // invariantLOS(observable, "changed start");
    if (observable.lowestObserverState_ === IDerivationState_.STALE_) return;
    observable.lowestObserverState_ = IDerivationState_.STALE_; // Ideally we use for..of here, but the downcompiled version is really slow...

    observable.observers_.forEach(function (d) {
      if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
        if ('development' !== "production" && d.isTracing_ !== TraceMode.NONE) {
          logTraceInfo(d, observable);
        }

        d.onBecomeStale_();
      }

      d.dependenciesState_ = IDerivationState_.STALE_;
    }); // invariantLOS(observable, "changed end");
  } // Called by ComputedValue when it recalculate and its value changed

  function propagateChangeConfirmed(observable) {
    // invariantLOS(observable, "confirmed start");
    if (observable.lowestObserverState_ === IDerivationState_.STALE_) return;
    observable.lowestObserverState_ = IDerivationState_.STALE_;
    observable.observers_.forEach(function (d) {
      if (d.dependenciesState_ === IDerivationState_.POSSIBLY_STALE_) d.dependenciesState_ = IDerivationState_.STALE_;else if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_ // this happens during computing of `d`, just keep lowestObserverState up to date.
      ) observable.lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
    }); // invariantLOS(observable, "confirmed end");
  } // Used by computed when its dependency changed, but we don't wan't to immediately recompute.

  function propagateMaybeChanged(observable) {
    // invariantLOS(observable, "maybe start");
    if (observable.lowestObserverState_ !== IDerivationState_.UP_TO_DATE_) return;
    observable.lowestObserverState_ = IDerivationState_.POSSIBLY_STALE_;
    observable.observers_.forEach(function (d) {
      if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
        d.dependenciesState_ = IDerivationState_.POSSIBLY_STALE_;

        if ('development' !== "production" && d.isTracing_ !== TraceMode.NONE) {
          logTraceInfo(d, observable);
        }

        d.onBecomeStale_();
      }
    }); // invariantLOS(observable, "maybe end");
  }

  function logTraceInfo(derivation, observable) {
    console.log("[mobx.trace] '" + derivation.name_ + "' is invalidated due to a change in: '" + observable.name_ + "'");

    if (derivation.isTracing_ === TraceMode.BREAK) {
      var lines = [];
      printDepTree(getDependencyTree(derivation), lines, 1); // prettier-ignore

      new Function("debugger;\n/*\nTracing '" + derivation.name_ + "'\n\nYou are entering this break point because derivation '" + derivation.name_ + "' is being traced and '" + observable.name_ + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue ? derivation.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
    }
  }

  function printDepTree(tree, lines, depth) {
    if (lines.length >= 1000) {
      lines.push("(and many more)");
      return;
    }

    lines.push("" + new Array(depth).join("\t") + tree.name); // MWE: not the fastest, but the easiest way :)

    if (tree.dependencies) tree.dependencies.forEach(function (child) {
      return printDepTree(child, lines, depth + 1);
    });
  }

  var Reaction = /*#__PURE__*/function () {
    // nodes we are looking at. Our value depends on these nodes
    function Reaction(name_, onInvalidate_, errorHandler_, requiresObservable_) {
      if (name_ === void 0) {
        name_ = 'development' !== "production" ? "Reaction@" + getNextId() : "Reaction";
      }

      if (requiresObservable_ === void 0) {
        requiresObservable_ = false;
      }

      this.name_ = void 0;
      this.onInvalidate_ = void 0;
      this.errorHandler_ = void 0;
      this.requiresObservable_ = void 0;
      this.observing_ = [];
      this.newObserving_ = [];
      this.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
      this.diffValue_ = 0;
      this.runId_ = 0;
      this.unboundDepsCount_ = 0;
      this.isDisposed_ = false;
      this.isScheduled_ = false;
      this.isTrackPending_ = false;
      this.isRunning_ = false;
      this.isTracing_ = TraceMode.NONE;
      this.name_ = name_;
      this.onInvalidate_ = onInvalidate_;
      this.errorHandler_ = errorHandler_;
      this.requiresObservable_ = requiresObservable_;
    }

    var _proto = Reaction.prototype;

    _proto.onBecomeStale_ = function onBecomeStale_() {
      this.schedule_();
    };

    _proto.schedule_ = function schedule_() {
      if (!this.isScheduled_) {
        this.isScheduled_ = true;
        globalState.pendingReactions.push(this);
        runReactions();
      }
    };

    _proto.isScheduled = function isScheduled() {
      return this.isScheduled_;
    }
    /**
     * internal, use schedule() if you intend to kick off a reaction
     */
    ;

    _proto.runReaction_ = function runReaction_() {
      if (!this.isDisposed_) {
        startBatch();
        this.isScheduled_ = false;
        var prev = globalState.trackingContext;
        globalState.trackingContext = this;

        if (shouldCompute(this)) {
          this.isTrackPending_ = true;

          try {
            this.onInvalidate_();

            if ('development' !== "production" && this.isTrackPending_ && isSpyEnabled()) {
              // onInvalidate didn't trigger track right away..
              spyReport({
                name: this.name_,
                type: "scheduled-reaction"
              });
            }
          } catch (e) {
            this.reportExceptionInDerivation_(e);
          }
        }

        globalState.trackingContext = prev;
        endBatch();
      }
    };

    _proto.track = function track(fn) {
      if (this.isDisposed_) {
        return; // console.warn("Reaction already disposed") // Note: Not a warning / error in mobx 4 either
      }

      startBatch();
      var notify = isSpyEnabled();
      var startTime;

      if ('development' !== "production" && notify) {
        startTime = Date.now();
        spyReportStart({
          name: this.name_,
          type: "reaction"
        });
      }

      this.isRunning_ = true;
      var prevReaction = globalState.trackingContext; // reactions could create reactions...

      globalState.trackingContext = this;
      var result = trackDerivedFunction(this, fn, undefined);
      globalState.trackingContext = prevReaction;
      this.isRunning_ = false;
      this.isTrackPending_ = false;

      if (this.isDisposed_) {
        // disposed during last run. Clean up everything that was bound after the dispose call.
        clearObserving(this);
      }

      if (isCaughtException(result)) this.reportExceptionInDerivation_(result.cause);

      if ('development' !== "production" && notify) {
        spyReportEnd({
          time: Date.now() - startTime
        });
      }

      endBatch();
    };

    _proto.reportExceptionInDerivation_ = function reportExceptionInDerivation_(error) {
      var _this = this;

      if (this.errorHandler_) {
        this.errorHandler_(error, this);
        return;
      }

      if (globalState.disableErrorBoundaries) throw error;
      var message = 'development' !== "production" ? "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'" : "[mobx] uncaught error in '" + this + "'";

      if (!globalState.suppressReactionErrors) {
        console.error(message, error);
        /** If debugging brought you here, please, read the above message :-). Tnx! */
      } else if ('development' !== "production") console.warn("[mobx] (error in reaction '" + this.name_ + "' suppressed, fix error of causing action below)"); // prettier-ignore


      if ('development' !== "production" && isSpyEnabled()) {
        spyReport({
          type: "error",
          name: this.name_,
          message: message,
          error: "" + error
        });
      }

      globalState.globalReactionErrorHandlers.forEach(function (f) {
        return f(error, _this);
      });
    };

    _proto.dispose = function dispose() {
      if (!this.isDisposed_) {
        this.isDisposed_ = true;

        if (!this.isRunning_) {
          // if disposed while running, clean up later. Maybe not optimal, but rare case
          startBatch();
          clearObserving(this);
          endBatch();
        }
      }
    };

    _proto.getDisposer_ = function getDisposer_() {
      var r = this.dispose.bind(this);
      r[$mobx] = this;
      return r;
    };

    _proto.toString = function toString() {
      return "Reaction[" + this.name_ + "]";
    };

    _proto.trace = function trace$1(enterBreakPoint) {
      if (enterBreakPoint === void 0) {
        enterBreakPoint = false;
      }

      trace(this, enterBreakPoint);
    };

    return Reaction;
  }();
  /**
   * Magic number alert!
   * Defines within how many times a reaction is allowed to re-trigger itself
   * until it is assumed that this is gonna be a never ending loop...
   */

  var MAX_REACTION_ITERATIONS = 100;

  var reactionScheduler = function reactionScheduler(f) {
    return f();
  };

  function runReactions() {
    // Trampolining, if runReactions are already running, new reactions will be picked up
    if (globalState.inBatch > 0 || globalState.isRunningReactions) return;
    reactionScheduler(runReactionsHelper);
  }

  function runReactionsHelper() {
    globalState.isRunningReactions = true;
    var allReactions = globalState.pendingReactions;
    var iterations = 0; // While running reactions, new reactions might be triggered.
    // Hence we work with two variables and check whether
    // we converge to no remaining reactions after a while.

    while (allReactions.length > 0) {
      if (++iterations === MAX_REACTION_ITERATIONS) {
        console.error('development' !== "production" ? "Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." + (" Probably there is a cycle in the reactive function: " + allReactions[0]) : "[mobx] cycle in reaction: " + allReactions[0]);
        allReactions.splice(0); // clear reactions
      }

      var remainingReactions = allReactions.splice(0);

      for (var i = 0, l = remainingReactions.length; i < l; i++) {
        remainingReactions[i].runReaction_();
      }
    }

    globalState.isRunningReactions = false;
  }

  var isReaction = /*#__PURE__*/createInstanceofPredicate("Reaction", Reaction);

  function isSpyEnabled() {
    return 'development' !== "production" && !!globalState.spyListeners.length;
  }
  function spyReport(event) {
    if (!('development' !== "production")) return; // dead code elimination can do the rest

    if (!globalState.spyListeners.length) return;
    var listeners = globalState.spyListeners;

    for (var i = 0, l = listeners.length; i < l; i++) {
      listeners[i](event);
    }
  }
  function spyReportStart(event) {
    if (!('development' !== "production")) return;

    var change = _extends({}, event, {
      spyReportStart: true
    });

    spyReport(change);
  }
  var END_EVENT = {
    type: "report-end",
    spyReportEnd: true
  };
  function spyReportEnd(change) {
    if (!('development' !== "production")) return;
    if (change) spyReport(_extends({}, change, {
      type: "report-end",
      spyReportEnd: true
    }));else spyReport(END_EVENT);
  }
  function spy(listener) {
    if (!('development' !== "production")) {
      console.warn("[mobx.spy] Is a no-op in production builds");
      return function () {};
    } else {
      globalState.spyListeners.push(listener);
      return once(function () {
        globalState.spyListeners = globalState.spyListeners.filter(function (l) {
          return l !== listener;
        });
      });
    }
  }

  var ACTION = "action";
  var ACTION_BOUND = "action.bound";
  var AUTOACTION = "autoAction";
  var AUTOACTION_BOUND = "autoAction.bound";
  var DEFAULT_ACTION_NAME = "<unnamed action>";
  var actionAnnotation = /*#__PURE__*/createActionAnnotation(ACTION);
  var actionBoundAnnotation = /*#__PURE__*/createActionAnnotation(ACTION_BOUND, {
    bound: true
  });
  var autoActionAnnotation = /*#__PURE__*/createActionAnnotation(AUTOACTION, {
    autoAction: true
  });
  var autoActionBoundAnnotation = /*#__PURE__*/createActionAnnotation(AUTOACTION_BOUND, {
    autoAction: true,
    bound: true
  });

  function createActionFactory(autoAction) {
    var res = function action(arg1, arg2) {
      // action(fn() {})
      if (isFunction(arg1)) return createAction(arg1.name || DEFAULT_ACTION_NAME, arg1, autoAction); // action("name", fn() {})

      if (isFunction(arg2)) return createAction(arg1, arg2, autoAction); // @action

      if (isStringish(arg2)) {
        return storeAnnotation(arg1, arg2, autoAction ? autoActionAnnotation : actionAnnotation);
      } // action("name") & @action("name")


      if (isStringish(arg1)) {
        return createDecoratorAnnotation(createActionAnnotation(autoAction ? AUTOACTION : ACTION, {
          name: arg1,
          autoAction: autoAction
        }));
      }

      if ('development' !== "production") die("Invalid arguments for `action`");
    };

    return res;
  }

  var action = /*#__PURE__*/createActionFactory(false);
  Object.assign(action, actionAnnotation);
  var autoAction = /*#__PURE__*/createActionFactory(true);
  Object.assign(autoAction, autoActionAnnotation);
  action.bound = /*#__PURE__*/createDecoratorAnnotation(actionBoundAnnotation);
  autoAction.bound = /*#__PURE__*/createDecoratorAnnotation(autoActionBoundAnnotation);
  function isAction(thing) {
    return isFunction(thing) && thing.isMobxAction === true;
  }

  /**
   * Creates a named reactive view and keeps it alive, so that the view is always
   * updated if one of the dependencies changes, even when the view is not further used by something else.
   * @param view The reactive view
   * @returns disposer function, which can be used to stop the view from being updated in the future.
   */

  function autorun(view, opts) {
    var _opts$name, _opts;

    if (opts === void 0) {
      opts = EMPTY_OBJECT;
    }

    if ('development' !== "production") {
      if (!isFunction(view)) die("Autorun expects a function as first argument");
      if (isAction(view)) die("Autorun does not accept actions since actions are untrackable");
    }

    var name = (_opts$name = (_opts = opts) == null ? void 0 : _opts.name) != null ? _opts$name : 'development' !== "production" ? view.name || "Autorun@" + getNextId() : "Autorun";
    var runSync = !opts.scheduler && !opts.delay;
    var reaction;

    if (runSync) {
      // normal autorun
      reaction = new Reaction(name, function () {
        this.track(reactionRunner);
      }, opts.onError, opts.requiresObservable);
    } else {
      var scheduler = createSchedulerFromOptions(opts); // debounced autorun

      var isScheduled = false;
      reaction = new Reaction(name, function () {
        if (!isScheduled) {
          isScheduled = true;
          scheduler(function () {
            isScheduled = false;
            if (!reaction.isDisposed_) reaction.track(reactionRunner);
          });
        }
      }, opts.onError, opts.requiresObservable);
    }

    function reactionRunner() {
      view(reaction);
    }

    reaction.schedule_();
    return reaction.getDisposer_();
  }

  var run = function run(f) {
    return f();
  };

  function createSchedulerFromOptions(opts) {
    return opts.scheduler ? opts.scheduler : opts.delay ? function (f) {
      return setTimeout(f, opts.delay);
    } : run;
  }

  var ON_BECOME_OBSERVED = "onBO";
  var ON_BECOME_UNOBSERVED = "onBUO";
  function onBecomeObserved(thing, arg2, arg3) {
    return interceptHook(ON_BECOME_OBSERVED, thing, arg2, arg3);
  }
  function onBecomeUnobserved(thing, arg2, arg3) {
    return interceptHook(ON_BECOME_UNOBSERVED, thing, arg2, arg3);
  }

  function interceptHook(hook, thing, arg2, arg3) {
    var atom = typeof arg3 === "function" ? getAtom(thing, arg2) : getAtom(thing);
    var cb = isFunction(arg3) ? arg3 : arg2;
    var listenersKey = hook + "L";

    if (atom[listenersKey]) {
      atom[listenersKey].add(cb);
    } else {
      atom[listenersKey] = new Set([cb]);
    }

    return function () {
      var hookListeners = atom[listenersKey];

      if (hookListeners) {
        hookListeners["delete"](cb);

        if (hookListeners.size === 0) {
          delete atom[listenersKey];
        }
      }
    };
  }

  function extendObservable(target, properties, annotations, options) {
    if ('development' !== "production") {
      if (arguments.length > 4) die("'extendObservable' expected 2-4 arguments");
      if (typeof target !== "object") die("'extendObservable' expects an object as first argument");
      if (isObservableMap(target)) die("'extendObservable' should not be used on maps, use map.merge instead");
      if (!isPlainObject(properties)) die("'extendObservabe' only accepts plain objects as second argument");
      if (isObservable(properties) || isObservable(annotations)) die("Extending an object with another observable (object) is not supported");
    } // Pull descriptors first, so we don't have to deal with props added by administration ($mobx)


    var descriptors = getOwnPropertyDescriptors(properties);
    var adm = asObservableObject(target, options)[$mobx];
    startBatch();

    try {
      ownKeys(descriptors).forEach(function (key) {
        adm.extend_(key, descriptors[key], // must pass "undefined" for { key: undefined }
        !annotations ? true : key in annotations ? annotations[key] : true);
      });
    } finally {
      endBatch();
    }

    return target;
  }

  function getDependencyTree(thing, property) {
    return nodeToDependencyTree(getAtom(thing, property));
  }

  function nodeToDependencyTree(node) {
    var result = {
      name: node.name_
    };
    if (node.observing_ && node.observing_.length > 0) result.dependencies = unique(node.observing_).map(nodeToDependencyTree);
    return result;
  }

  function unique(list) {
    return Array.from(new Set(list));
  }

  var generatorId = 0;
  function FlowCancellationError() {
    this.message = "FLOW_CANCELLED";
  }
  FlowCancellationError.prototype = /*#__PURE__*/Object.create(Error.prototype);
  var flowAnnotation = /*#__PURE__*/createFlowAnnotation("flow");
  var flow = /*#__PURE__*/Object.assign(function flow(arg1, arg2) {
    // @flow
    if (isStringish(arg2)) {
      return storeAnnotation(arg1, arg2, flowAnnotation);
    } // flow(fn)


    if ('development' !== "production" && arguments.length !== 1) die("Flow expects single argument with generator function");
    var generator = arg1;
    var name = generator.name || "<unnamed flow>"; // Implementation based on https://github.com/tj/co/blob/master/index.js

    var res = function res() {
      var ctx = this;
      var args = arguments;
      var runId = ++generatorId;
      var gen = action(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
      var rejector;
      var pendingPromise = undefined;
      var promise = new Promise(function (resolve, reject) {
        var stepId = 0;
        rejector = reject;

        function onFulfilled(res) {
          pendingPromise = undefined;
          var ret;

          try {
            ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.next).call(gen, res);
          } catch (e) {
            return reject(e);
          }

          next(ret);
        }

        function onRejected(err) {
          pendingPromise = undefined;
          var ret;

          try {
            ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen["throw"]).call(gen, err);
          } catch (e) {
            return reject(e);
          }

          next(ret);
        }

        function next(ret) {
          if (isFunction(ret == null ? void 0 : ret.then)) {
            // an async iterator
            ret.then(next, reject);
            return;
          }

          if (ret.done) return resolve(ret.value);
          pendingPromise = Promise.resolve(ret.value);
          return pendingPromise.then(onFulfilled, onRejected);
        }

        onFulfilled(undefined); // kick off the process
      });
      promise.cancel = action(name + " - runid: " + runId + " - cancel", function () {
        try {
          if (pendingPromise) cancelPromise(pendingPromise); // Finally block can return (or yield) stuff..

          var _res = gen["return"](undefined); // eat anything that promise would do, it's cancelled!


          var yieldedPromise = Promise.resolve(_res.value);
          yieldedPromise.then(noop, noop);
          cancelPromise(yieldedPromise); // maybe it can be cancelled :)
          // reject our original promise

          rejector(new FlowCancellationError());
        } catch (e) {
          rejector(e); // there could be a throwing finally block
        }
      });
      return promise;
    };

    res.isMobXFlow = true;
    return res;
  }, flowAnnotation);

  function cancelPromise(promise) {
    if (isFunction(promise.cancel)) promise.cancel();
  }
  function isFlow(fn) {
    return (fn == null ? void 0 : fn.isMobXFlow) === true;
  }

  function _isObservable(value, property) {
    if (!value) return false;

    if (property !== undefined) {
      if ('development' !== "production" && (isObservableMap(value) || isObservableArray(value))) return die("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.");

      if (isObservableObject(value)) {
        return value[$mobx].values_.has(property);
      }

      return false;
    } // For first check, see #701


    return isObservableObject(value) || !!value[$mobx] || isAtom(value) || isReaction(value) || isComputedValue(value);
  }

  function isObservable(value) {
    if ('development' !== "production" && arguments.length !== 1) die("isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property");
    return _isObservable(value);
  }

  function trace() {
    if (!('development' !== "production")) die("trace() is not available in production builds");
    var enterBreakPoint = false;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (typeof args[args.length - 1] === "boolean") enterBreakPoint = args.pop();
    var derivation = getAtomFromArgs(args);

    if (!derivation) {
      return die("'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
    }

    if (derivation.isTracing_ === TraceMode.NONE) {
      console.log("[mobx.trace] '" + derivation.name_ + "' tracing enabled");
    }

    derivation.isTracing_ = enterBreakPoint ? TraceMode.BREAK : TraceMode.LOG;
  }

  function getAtomFromArgs(args) {
    switch (args.length) {
      case 0:
        return globalState.trackingDerivation;

      case 1:
        return getAtom(args[0]);

      case 2:
        return getAtom(args[0], args[1]);
    }
  }

  /**
   * During a transaction no views are updated until the end of the transaction.
   * The transaction will be run synchronously nonetheless.
   *
   * @param action a function that updates some reactive state
   * @returns any value that was returned by the 'action' parameter.
   */

  function transaction(action, thisArg) {
    if (thisArg === void 0) {
      thisArg = undefined;
    }

    startBatch();

    try {
      return action.apply(thisArg);
    } finally {
      endBatch();
    }
  }

  function getAdm(target) {
    return target[$mobx];
  } // Optimization: we don't need the intermediate objects and could have a completely custom administration for DynamicObjects,
  // and skip either the internal values map, or the base object with its property descriptors!


  var objectProxyTraps = {
    has: function has(target, name) {
      if ('development' !== "production" && globalState.trackingDerivation) warnAboutProxyRequirement("detect new properties using the 'in' operator. Use 'has' from 'mobx' instead.");
      return getAdm(target).has_(name);
    },
    get: function get(target, name) {
      return getAdm(target).get_(name);
    },
    set: function set(target, name, value) {
      var _getAdm$set_;

      if (!isStringish(name)) return false;

      if ('development' !== "production" && !getAdm(target).values_.has(name)) {
        warnAboutProxyRequirement("add a new observable property through direct assignment. Use 'set' from 'mobx' instead.");
      } // null (intercepted) -> true (success)


      return (_getAdm$set_ = getAdm(target).set_(name, value, true)) != null ? _getAdm$set_ : true;
    },
    deleteProperty: function deleteProperty(target, name) {
      var _getAdm$delete_;

      if ('development' !== "production") {
        warnAboutProxyRequirement("delete properties from an observable object. Use 'remove' from 'mobx' instead.");
      }

      if (!isStringish(name)) return false; // null (intercepted) -> true (success)

      return (_getAdm$delete_ = getAdm(target).delete_(name, true)) != null ? _getAdm$delete_ : true;
    },
    defineProperty: function defineProperty(target, name, descriptor) {
      var _getAdm$definePropert;

      if ('development' !== "production") {
        warnAboutProxyRequirement("define property on an observable object. Use 'defineProperty' from 'mobx' instead.");
      } // null (intercepted) -> true (success)


      return (_getAdm$definePropert = getAdm(target).defineProperty_(name, descriptor)) != null ? _getAdm$definePropert : true;
    },
    ownKeys: function ownKeys(target) {
      if ('development' !== "production" && globalState.trackingDerivation) warnAboutProxyRequirement("iterate keys to detect added / removed properties. Use `keys` from 'mobx' instead.");
      return getAdm(target).ownKeys_();
    },
    preventExtensions: function preventExtensions(target) {
      die(13);
    }
  };
  function asDynamicObservableObject(target, options) {
    var _target$$mobx, _target$$mobx$proxy_;

    assertProxies();
    target = asObservableObject(target, options);
    return (_target$$mobx$proxy_ = (_target$$mobx = target[$mobx]).proxy_) != null ? _target$$mobx$proxy_ : _target$$mobx.proxy_ = new Proxy(target, objectProxyTraps);
  }

  function hasInterceptors(interceptable) {
    return interceptable.interceptors_ !== undefined && interceptable.interceptors_.length > 0;
  }
  function registerInterceptor(interceptable, handler) {
    var interceptors = interceptable.interceptors_ || (interceptable.interceptors_ = []);
    interceptors.push(handler);
    return once(function () {
      var idx = interceptors.indexOf(handler);
      if (idx !== -1) interceptors.splice(idx, 1);
    });
  }
  function interceptChange(interceptable, change) {
    var prevU = untrackedStart();

    try {
      // Interceptor can modify the array, copy it to avoid concurrent modification, see #1950
      var interceptors = [].concat(interceptable.interceptors_ || []);

      for (var i = 0, l = interceptors.length; i < l; i++) {
        change = interceptors[i](change);
        if (change && !change.type) die(14);
        if (!change) break;
      }

      return change;
    } finally {
      untrackedEnd(prevU);
    }
  }

  function hasListeners(listenable) {
    return listenable.changeListeners_ !== undefined && listenable.changeListeners_.length > 0;
  }
  function registerListener(listenable, handler) {
    var listeners = listenable.changeListeners_ || (listenable.changeListeners_ = []);
    listeners.push(handler);
    return once(function () {
      var idx = listeners.indexOf(handler);
      if (idx !== -1) listeners.splice(idx, 1);
    });
  }
  function notifyListeners(listenable, change) {
    var prevU = untrackedStart();
    var listeners = listenable.changeListeners_;
    if (!listeners) return;
    listeners = listeners.slice();

    for (var i = 0, l = listeners.length; i < l; i++) {
      listeners[i](change);
    }

    untrackedEnd(prevU);
  }

  var SPLICE = "splice";
  var UPDATE = "update";
  var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859

  var arrayTraps = {
    get: function get(target, name) {
      var adm = target[$mobx];
      if (name === $mobx) return adm;
      if (name === "length") return adm.getArrayLength_();

      if (typeof name === "string" && !isNaN(name)) {
        return adm.get_(parseInt(name));
      }

      if (hasProp(arrayExtensions, name)) {
        return arrayExtensions[name];
      }

      return target[name];
    },
    set: function set(target, name, value) {
      var adm = target[$mobx];

      if (name === "length") {
        adm.setArrayLength_(value);
      }

      if (typeof name === "symbol" || isNaN(name)) {
        target[name] = value;
      } else {
        // numeric string
        adm.set_(parseInt(name), value);
      }

      return true;
    },
    preventExtensions: function preventExtensions() {
      die(15);
    }
  };
  var ObservableArrayAdministration = /*#__PURE__*/function () {
    // this is the prop that gets proxied, so can't replace it!
    function ObservableArrayAdministration(name, enhancer, owned_, legacyMode_) {
      if (name === void 0) {
        name = 'development' !== "production" ? "ObservableArray@" + getNextId() : "ObservableArray";
      }

      this.owned_ = void 0;
      this.legacyMode_ = void 0;
      this.atom_ = void 0;
      this.values_ = [];
      this.interceptors_ = void 0;
      this.changeListeners_ = void 0;
      this.enhancer_ = void 0;
      this.dehancer = void 0;
      this.proxy_ = void 0;
      this.lastKnownLength_ = 0;
      this.owned_ = owned_;
      this.legacyMode_ = legacyMode_;
      this.atom_ = new Atom(name);

      this.enhancer_ = function (newV, oldV) {
        return enhancer(newV, oldV, 'development' !== "production" ? name + "[..]" : "ObservableArray[..]");
      };
    }

    var _proto = ObservableArrayAdministration.prototype;

    _proto.dehanceValue_ = function dehanceValue_(value) {
      if (this.dehancer !== undefined) return this.dehancer(value);
      return value;
    };

    _proto.dehanceValues_ = function dehanceValues_(values) {
      if (this.dehancer !== undefined && values.length > 0) return values.map(this.dehancer);
      return values;
    };

    _proto.intercept_ = function intercept_(handler) {
      return registerInterceptor(this, handler);
    };

    _proto.observe_ = function observe_(listener, fireImmediately) {
      if (fireImmediately === void 0) {
        fireImmediately = false;
      }

      if (fireImmediately) {
        listener({
          observableKind: "array",
          object: this.proxy_,
          debugObjectName: this.atom_.name_,
          type: "splice",
          index: 0,
          added: this.values_.slice(),
          addedCount: this.values_.length,
          removed: [],
          removedCount: 0
        });
      }

      return registerListener(this, listener);
    };

    _proto.getArrayLength_ = function getArrayLength_() {
      this.atom_.reportObserved();
      return this.values_.length;
    };

    _proto.setArrayLength_ = function setArrayLength_(newLength) {
      if (typeof newLength !== "number" || newLength < 0) die("Out of range: " + newLength);
      var currentLength = this.values_.length;
      if (newLength === currentLength) return;else if (newLength > currentLength) {
        var newItems = new Array(newLength - currentLength);

        for (var i = 0; i < newLength - currentLength; i++) {
          newItems[i] = undefined;
        } // No Array.fill everywhere...


        this.spliceWithArray_(currentLength, 0, newItems);
      } else this.spliceWithArray_(newLength, currentLength - newLength);
    };

    _proto.updateArrayLength_ = function updateArrayLength_(oldLength, delta) {
      if (oldLength !== this.lastKnownLength_) die(16);
      this.lastKnownLength_ += delta;
      if (this.legacyMode_ && delta > 0) reserveArrayBuffer(oldLength + delta + 1);
    };

    _proto.spliceWithArray_ = function spliceWithArray_(index, deleteCount, newItems) {
      var _this = this;

      checkIfStateModificationsAreAllowed(this.atom_);
      var length = this.values_.length;
      if (index === undefined) index = 0;else if (index > length) index = length;else if (index < 0) index = Math.max(0, length + index);
      if (arguments.length === 1) deleteCount = length - index;else if (deleteCount === undefined || deleteCount === null) deleteCount = 0;else deleteCount = Math.max(0, Math.min(deleteCount, length - index));
      if (newItems === undefined) newItems = EMPTY_ARRAY;

      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this.proxy_,
          type: SPLICE,
          index: index,
          removedCount: deleteCount,
          added: newItems
        });
        if (!change) return EMPTY_ARRAY;
        deleteCount = change.removedCount;
        newItems = change.added;
      }

      newItems = newItems.length === 0 ? newItems : newItems.map(function (v) {
        return _this.enhancer_(v, undefined);
      });

      if (this.legacyMode_ || 'development' !== "production") {
        var lengthDelta = newItems.length - deleteCount;
        this.updateArrayLength_(length, lengthDelta); // checks if internal array wasn't modified
      }

      var res = this.spliceItemsIntoValues_(index, deleteCount, newItems);
      if (deleteCount !== 0 || newItems.length !== 0) this.notifyArraySplice_(index, newItems, res);
      return this.dehanceValues_(res);
    };

    _proto.spliceItemsIntoValues_ = function spliceItemsIntoValues_(index, deleteCount, newItems) {
      if (newItems.length < MAX_SPLICE_SIZE) {
        var _this$values_;

        return (_this$values_ = this.values_).splice.apply(_this$values_, [index, deleteCount].concat(newItems));
      } else {
        var res = this.values_.slice(index, index + deleteCount);
        var oldItems = this.values_.slice(index + deleteCount);
        this.values_.length = index + newItems.length - deleteCount;

        for (var i = 0; i < newItems.length; i++) {
          this.values_[index + i] = newItems[i];
        }

        for (var _i = 0; _i < oldItems.length; _i++) {
          this.values_[index + newItems.length + _i] = oldItems[_i];
        }

        return res;
      }
    };

    _proto.notifyArrayChildUpdate_ = function notifyArrayChildUpdate_(index, newValue, oldValue) {
      var notifySpy = !this.owned_ && isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        observableKind: "array",
        object: this.proxy_,
        type: UPDATE,
        debugObjectName: this.atom_.name_,
        index: index,
        newValue: newValue,
        oldValue: oldValue
      } : null; // The reason why this is on right hand side here (and not above), is this way the uglifier will drop it, but it won't
      // cause any runtime overhead in development mode without NODE_ENV set, unless spying is enabled

      if ('development' !== "production" && notifySpy) spyReportStart(change);
      this.atom_.reportChanged();
      if (notify) notifyListeners(this, change);
      if ('development' !== "production" && notifySpy) spyReportEnd();
    };

    _proto.notifyArraySplice_ = function notifyArraySplice_(index, added, removed) {
      var notifySpy = !this.owned_ && isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        observableKind: "array",
        object: this.proxy_,
        debugObjectName: this.atom_.name_,
        type: SPLICE,
        index: index,
        removed: removed,
        added: added,
        removedCount: removed.length,
        addedCount: added.length
      } : null;
      if ('development' !== "production" && notifySpy) spyReportStart(change);
      this.atom_.reportChanged(); // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe

      if (notify) notifyListeners(this, change);
      if ('development' !== "production" && notifySpy) spyReportEnd();
    };

    _proto.get_ = function get_(index) {
      if (index < this.values_.length) {
        this.atom_.reportObserved();
        return this.dehanceValue_(this.values_[index]);
      }

      console.warn('development' !== "production" ? "[mobx] Out of bounds read: " + index : "[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + this.values_.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
    };

    _proto.set_ = function set_(index, newValue) {
      var values = this.values_;

      if (index < values.length) {
        // update at index in range
        checkIfStateModificationsAreAllowed(this.atom_);
        var oldValue = values[index];

        if (hasInterceptors(this)) {
          var change = interceptChange(this, {
            type: UPDATE,
            object: this.proxy_,
            index: index,
            newValue: newValue
          });
          if (!change) return;
          newValue = change.newValue;
        }

        newValue = this.enhancer_(newValue, oldValue);
        var changed = newValue !== oldValue;

        if (changed) {
          values[index] = newValue;
          this.notifyArrayChildUpdate_(index, newValue, oldValue);
        }
      } else if (index === values.length) {
        // add a new item
        this.spliceWithArray_(index, 0, [newValue]);
      } else {
        // out of bounds
        die(17, index, values.length);
      }
    };

    return ObservableArrayAdministration;
  }();
  function createObservableArray(initialValues, enhancer, name, owned) {
    if (name === void 0) {
      name = 'development' !== "production" ? "ObservableArray@" + getNextId() : "ObservableArray";
    }

    if (owned === void 0) {
      owned = false;
    }

    assertProxies();
    var adm = new ObservableArrayAdministration(name, enhancer, owned, false);
    addHiddenFinalProp(adm.values_, $mobx, adm);
    var proxy = new Proxy(adm.values_, arrayTraps);
    adm.proxy_ = proxy;

    if (initialValues && initialValues.length) {
      var prev = allowStateChangesStart(true);
      adm.spliceWithArray_(0, 0, initialValues);
      allowStateChangesEnd(prev);
    }

    return proxy;
  } // eslint-disable-next-line

  var arrayExtensions = {
    clear: function clear() {
      return this.splice(0);
    },
    replace: function replace(newItems) {
      var adm = this[$mobx];
      return adm.spliceWithArray_(0, adm.values_.length, newItems);
    },
    // Used by JSON.stringify
    toJSON: function toJSON() {
      return this.slice();
    },

    /*
     * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
     * since these functions alter the inner structure of the array, the have side effects.
     * Because the have side effects, they should not be used in computed function,
     * and for that reason the do not call dependencyState.notifyObserved
     */
    splice: function splice(index, deleteCount) {
      for (var _len = arguments.length, newItems = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        newItems[_key - 2] = arguments[_key];
      }

      var adm = this[$mobx];

      switch (arguments.length) {
        case 0:
          return [];

        case 1:
          return adm.spliceWithArray_(index);

        case 2:
          return adm.spliceWithArray_(index, deleteCount);
      }

      return adm.spliceWithArray_(index, deleteCount, newItems);
    },
    spliceWithArray: function spliceWithArray(index, deleteCount, newItems) {
      return this[$mobx].spliceWithArray_(index, deleteCount, newItems);
    },
    push: function push() {
      var adm = this[$mobx];

      for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        items[_key2] = arguments[_key2];
      }

      adm.spliceWithArray_(adm.values_.length, 0, items);
      return adm.values_.length;
    },
    pop: function pop() {
      return this.splice(Math.max(this[$mobx].values_.length - 1, 0), 1)[0];
    },
    shift: function shift() {
      return this.splice(0, 1)[0];
    },
    unshift: function unshift() {
      var adm = this[$mobx];

      for (var _len3 = arguments.length, items = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        items[_key3] = arguments[_key3];
      }

      adm.spliceWithArray_(0, 0, items);
      return adm.values_.length;
    },
    reverse: function reverse() {
      // reverse by default mutates in place before returning the result
      // which makes it both a 'derivation' and a 'mutation'.
      if (globalState.trackingDerivation) {
        die(37, "reverse");
      }

      this.replace(this.slice().reverse());
      return this;
    },
    sort: function sort() {
      // sort by default mutates in place before returning the result
      // which goes against all good practices. Let's not change the array in place!
      if (globalState.trackingDerivation) {
        die(37, "sort");
      }

      var copy = this.slice();
      copy.sort.apply(copy, arguments);
      this.replace(copy);
      return this;
    },
    remove: function remove(value) {
      var adm = this[$mobx];
      var idx = adm.dehanceValues_(adm.values_).indexOf(value);

      if (idx > -1) {
        this.splice(idx, 1);
        return true;
      }

      return false;
    }
  };
  /**
   * Wrap function from prototype
   * Without this, everything works as well, but this works
   * faster as everything works on unproxied values
   */

  addArrayExtension("concat", simpleFunc);
  addArrayExtension("flat", simpleFunc);
  addArrayExtension("includes", simpleFunc);
  addArrayExtension("indexOf", simpleFunc);
  addArrayExtension("join", simpleFunc);
  addArrayExtension("lastIndexOf", simpleFunc);
  addArrayExtension("slice", simpleFunc);
  addArrayExtension("toString", simpleFunc);
  addArrayExtension("toLocaleString", simpleFunc); // map

  addArrayExtension("every", mapLikeFunc);
  addArrayExtension("filter", mapLikeFunc);
  addArrayExtension("find", mapLikeFunc);
  addArrayExtension("findIndex", mapLikeFunc);
  addArrayExtension("flatMap", mapLikeFunc);
  addArrayExtension("forEach", mapLikeFunc);
  addArrayExtension("map", mapLikeFunc);
  addArrayExtension("some", mapLikeFunc); // reduce

  addArrayExtension("reduce", reduceLikeFunc);
  addArrayExtension("reduceRight", reduceLikeFunc);

  function addArrayExtension(funcName, funcFactory) {
    if (typeof Array.prototype[funcName] === "function") {
      arrayExtensions[funcName] = funcFactory(funcName);
    }
  } // Report and delegate to dehanced array


  function simpleFunc(funcName) {
    return function () {
      var adm = this[$mobx];
      adm.atom_.reportObserved();
      var dehancedValues = adm.dehanceValues_(adm.values_);
      return dehancedValues[funcName].apply(dehancedValues, arguments);
    };
  } // Make sure callbacks recieve correct array arg #2326


  function mapLikeFunc(funcName) {
    return function (callback, thisArg) {
      var _this2 = this;

      var adm = this[$mobx];
      adm.atom_.reportObserved();
      var dehancedValues = adm.dehanceValues_(adm.values_);
      return dehancedValues[funcName](function (element, index) {
        return callback.call(thisArg, element, index, _this2);
      });
    };
  } // Make sure callbacks recieve correct array arg #2326


  function reduceLikeFunc(funcName) {
    return function () {
      var _this3 = this;

      var adm = this[$mobx];
      adm.atom_.reportObserved();
      var dehancedValues = adm.dehanceValues_(adm.values_); // #2432 - reduce behavior depends on arguments.length

      var callback = arguments[0];

      arguments[0] = function (accumulator, currentValue, index) {
        return callback(accumulator, currentValue, index, _this3);
      };

      return dehancedValues[funcName].apply(dehancedValues, arguments);
    };
  }

  var isObservableArrayAdministration = /*#__PURE__*/createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
  function isObservableArray(thing) {
    return isObject(thing) && isObservableArrayAdministration(thing[$mobx]);
  }

  var _Symbol$iterator, _Symbol$toStringTag;
  var ObservableMapMarker = {};
  var ADD = "add";
  var DELETE = "delete"; // just extend Map? See also https://gist.github.com/nestharus/13b4d74f2ef4a2f4357dbd3fc23c1e54
  // But: https://github.com/mobxjs/mobx/issues/1556

  _Symbol$iterator = Symbol.iterator;
  _Symbol$toStringTag = Symbol.toStringTag;
  var ObservableMap = /*#__PURE__*/function () {
    // hasMap, not hashMap >-).
    function ObservableMap(initialData, enhancer_, name_) {
      if (enhancer_ === void 0) {
        enhancer_ = deepEnhancer;
      }

      if (name_ === void 0) {
        name_ = 'development' !== "production" ? "ObservableMap@" + getNextId() : "ObservableMap";
      }

      this.enhancer_ = void 0;
      this.name_ = void 0;
      this[$mobx] = ObservableMapMarker;
      this.data_ = void 0;
      this.hasMap_ = void 0;
      this.keysAtom_ = void 0;
      this.interceptors_ = void 0;
      this.changeListeners_ = void 0;
      this.dehancer = void 0;
      this.enhancer_ = enhancer_;
      this.name_ = name_;

      if (!isFunction(Map)) {
        die(18);
      }

      this.keysAtom_ = createAtom('development' !== "production" ? this.name_ + ".keys()" : "ObservableMap.keys()");
      this.data_ = new Map();
      this.hasMap_ = new Map();
      this.merge(initialData);
    }

    var _proto = ObservableMap.prototype;

    _proto.has_ = function has_(key) {
      return this.data_.has(key);
    };

    _proto.has = function has(key) {
      var _this = this;

      if (!globalState.trackingDerivation) return this.has_(key);
      var entry = this.hasMap_.get(key);

      if (!entry) {
        var newEntry = entry = new ObservableValue(this.has_(key), referenceEnhancer, 'development' !== "production" ? this.name_ + "." + stringifyKey(key) + "?" : "ObservableMap.key?", false);
        this.hasMap_.set(key, newEntry);
        onBecomeUnobserved(newEntry, function () {
          return _this.hasMap_["delete"](key);
        });
      }

      return entry.get();
    };

    _proto.set = function set(key, value) {
      var hasKey = this.has_(key);

      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          type: hasKey ? UPDATE : ADD,
          object: this,
          newValue: value,
          name: key
        });
        if (!change) return this;
        value = change.newValue;
      }

      if (hasKey) {
        this.updateValue_(key, value);
      } else {
        this.addValue_(key, value);
      }

      return this;
    };

    _proto["delete"] = function _delete(key) {
      var _this2 = this;

      checkIfStateModificationsAreAllowed(this.keysAtom_);

      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          type: DELETE,
          object: this,
          name: key
        });
        if (!change) return false;
      }

      if (this.has_(key)) {
        var notifySpy = isSpyEnabled();
        var notify = hasListeners(this);

        var _change = notify || notifySpy ? {
          observableKind: "map",
          debugObjectName: this.name_,
          type: DELETE,
          object: this,
          oldValue: this.data_.get(key).value_,
          name: key
        } : null;

        if ('development' !== "production" && notifySpy) spyReportStart(_change);
        transaction(function () {
          _this2.keysAtom_.reportChanged();

          _this2.updateHasMapEntry_(key, false);

          var observable = _this2.data_.get(key);

          observable.setNewValue_(undefined);

          _this2.data_["delete"](key);
        });
        if (notify) notifyListeners(this, _change);
        if ('development' !== "production" && notifySpy) spyReportEnd();
        return true;
      }

      return false;
    };

    _proto.updateHasMapEntry_ = function updateHasMapEntry_(key, value) {
      var entry = this.hasMap_.get(key);

      if (entry) {
        entry.setNewValue_(value);
      }
    };

    _proto.updateValue_ = function updateValue_(key, newValue) {
      var observable = this.data_.get(key);
      newValue = observable.prepareNewValue_(newValue);

      if (newValue !== globalState.UNCHANGED) {
        var notifySpy = isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy ? {
          observableKind: "map",
          debugObjectName: this.name_,
          type: UPDATE,
          object: this,
          oldValue: observable.value_,
          name: key,
          newValue: newValue
        } : null;
        if ('development' !== "production" && notifySpy) spyReportStart(change);
        observable.setNewValue_(newValue);
        if (notify) notifyListeners(this, change);
        if ('development' !== "production" && notifySpy) spyReportEnd();
      }
    };

    _proto.addValue_ = function addValue_(key, newValue) {
      var _this3 = this;

      checkIfStateModificationsAreAllowed(this.keysAtom_);
      transaction(function () {
        var observable = new ObservableValue(newValue, _this3.enhancer_, 'development' !== "production" ? _this3.name_ + "." + stringifyKey(key) : "ObservableMap.key", false);

        _this3.data_.set(key, observable);

        newValue = observable.value_; // value might have been changed

        _this3.updateHasMapEntry_(key, true);

        _this3.keysAtom_.reportChanged();
      });
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: ADD,
        object: this,
        name: key,
        newValue: newValue
      } : null;
      if ('development' !== "production" && notifySpy) spyReportStart(change);
      if (notify) notifyListeners(this, change);
      if ('development' !== "production" && notifySpy) spyReportEnd();
    };

    _proto.get = function get(key) {
      if (this.has(key)) return this.dehanceValue_(this.data_.get(key).get());
      return this.dehanceValue_(undefined);
    };

    _proto.dehanceValue_ = function dehanceValue_(value) {
      if (this.dehancer !== undefined) {
        return this.dehancer(value);
      }

      return value;
    };

    _proto.keys = function keys() {
      this.keysAtom_.reportObserved();
      return this.data_.keys();
    };

    _proto.values = function values() {
      var self = this;
      var keys = this.keys();
      return makeIterable({
        next: function next() {
          var _keys$next = keys.next(),
              done = _keys$next.done,
              value = _keys$next.value;

          return {
            done: done,
            value: done ? undefined : self.get(value)
          };
        }
      });
    };

    _proto.entries = function entries() {
      var self = this;
      var keys = this.keys();
      return makeIterable({
        next: function next() {
          var _keys$next2 = keys.next(),
              done = _keys$next2.done,
              value = _keys$next2.value;

          return {
            done: done,
            value: done ? undefined : [value, self.get(value)]
          };
        }
      });
    };

    _proto[_Symbol$iterator] = function () {
      return this.entries();
    };

    _proto.forEach = function forEach(callback, thisArg) {
      for (var _iterator = _createForOfIteratorHelperLoose(this), _step; !(_step = _iterator()).done;) {
        var _step$value = _step.value,
            key = _step$value[0],
            value = _step$value[1];
        callback.call(thisArg, value, key, this);
      }
    }
    /** Merge another object into this object, returns this. */
    ;

    _proto.merge = function merge(other) {
      var _this4 = this;

      if (isObservableMap(other)) {
        other = new Map(other);
      }

      transaction(function () {
        if (isPlainObject(other)) getPlainObjectKeys(other).forEach(function (key) {
          return _this4.set(key, other[key]);
        });else if (Array.isArray(other)) other.forEach(function (_ref) {
          var key = _ref[0],
              value = _ref[1];
          return _this4.set(key, value);
        });else if (isES6Map(other)) {
          if (other.constructor !== Map) die(19, other);
          other.forEach(function (value, key) {
            return _this4.set(key, value);
          });
        } else if (other !== null && other !== undefined) die(20, other);
      });
      return this;
    };

    _proto.clear = function clear() {
      var _this5 = this;

      transaction(function () {
        untracked(function () {
          for (var _iterator2 = _createForOfIteratorHelperLoose(_this5.keys()), _step2; !(_step2 = _iterator2()).done;) {
            var key = _step2.value;

            _this5["delete"](key);
          }
        });
      });
    };

    _proto.replace = function replace(values) {
      var _this6 = this;

      // Implementation requirements:
      // - respect ordering of replacement map
      // - allow interceptors to run and potentially prevent individual operations
      // - don't recreate observables that already exist in original map (so we don't destroy existing subscriptions)
      // - don't _keysAtom.reportChanged if the keys of resulting map are indentical (order matters!)
      // - note that result map may differ from replacement map due to the interceptors
      transaction(function () {
        // Convert to map so we can do quick key lookups
        var replacementMap = convertToMap(values);
        var orderedData = new Map(); // Used for optimization

        var keysReportChangedCalled = false; // Delete keys that don't exist in replacement map
        // if the key deletion is prevented by interceptor
        // add entry at the beginning of the result map

        for (var _iterator3 = _createForOfIteratorHelperLoose(_this6.data_.keys()), _step3; !(_step3 = _iterator3()).done;) {
          var key = _step3.value;

          // Concurrently iterating/deleting keys
          // iterator should handle this correctly
          if (!replacementMap.has(key)) {
            var deleted = _this6["delete"](key); // Was the key removed?


            if (deleted) {
              // _keysAtom.reportChanged() was already called
              keysReportChangedCalled = true;
            } else {
              // Delete prevented by interceptor
              var value = _this6.data_.get(key);

              orderedData.set(key, value);
            }
          }
        } // Merge entries


        for (var _iterator4 = _createForOfIteratorHelperLoose(replacementMap.entries()), _step4; !(_step4 = _iterator4()).done;) {
          var _step4$value = _step4.value,
              _key = _step4$value[0],
              _value = _step4$value[1];

          // We will want to know whether a new key is added
          var keyExisted = _this6.data_.has(_key); // Add or update value


          _this6.set(_key, _value); // The addition could have been prevent by interceptor


          if (_this6.data_.has(_key)) {
            // The update could have been prevented by interceptor
            // and also we want to preserve existing values
            // so use value from _data map (instead of replacement map)
            var _value2 = _this6.data_.get(_key);

            orderedData.set(_key, _value2); // Was a new key added?

            if (!keyExisted) {
              // _keysAtom.reportChanged() was already called
              keysReportChangedCalled = true;
            }
          }
        } // Check for possible key order change


        if (!keysReportChangedCalled) {
          if (_this6.data_.size !== orderedData.size) {
            // If size differs, keys are definitely modified
            _this6.keysAtom_.reportChanged();
          } else {
            var iter1 = _this6.data_.keys();

            var iter2 = orderedData.keys();
            var next1 = iter1.next();
            var next2 = iter2.next();

            while (!next1.done) {
              if (next1.value !== next2.value) {
                _this6.keysAtom_.reportChanged();

                break;
              }

              next1 = iter1.next();
              next2 = iter2.next();
            }
          }
        } // Use correctly ordered map


        _this6.data_ = orderedData;
      });
      return this;
    };

    _proto.toString = function toString() {
      return "[object ObservableMap]";
    };

    _proto.toJSON = function toJSON() {
      return Array.from(this);
    };

    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    _proto.observe_ = function observe_(listener, fireImmediately) {
      if ('development' !== "production" && fireImmediately === true) die("`observe` doesn't support fireImmediately=true in combination with maps.");
      return registerListener(this, listener);
    };

    _proto.intercept_ = function intercept_(handler) {
      return registerInterceptor(this, handler);
    };

    _createClass(ObservableMap, [{
      key: "size",
      get: function get() {
        this.keysAtom_.reportObserved();
        return this.data_.size;
      }
    }, {
      key: _Symbol$toStringTag,
      get: function get() {
        return "Map";
      }
    }]);

    return ObservableMap;
  }(); // eslint-disable-next-line

  var isObservableMap = /*#__PURE__*/createInstanceofPredicate("ObservableMap", ObservableMap);

  function convertToMap(dataStructure) {
    if (isES6Map(dataStructure) || isObservableMap(dataStructure)) {
      return dataStructure;
    } else if (Array.isArray(dataStructure)) {
      return new Map(dataStructure);
    } else if (isPlainObject(dataStructure)) {
      var map = new Map();

      for (var key in dataStructure) {
        map.set(key, dataStructure[key]);
      }

      return map;
    } else {
      return die(21, dataStructure);
    }
  }

  var _Symbol$iterator$1, _Symbol$toStringTag$1;
  var ObservableSetMarker = {};
  _Symbol$iterator$1 = Symbol.iterator;
  _Symbol$toStringTag$1 = Symbol.toStringTag;
  var ObservableSet = /*#__PURE__*/function () {
    function ObservableSet(initialData, enhancer, name_) {
      if (enhancer === void 0) {
        enhancer = deepEnhancer;
      }

      if (name_ === void 0) {
        name_ = 'development' !== "production" ? "ObservableSet@" + getNextId() : "ObservableSet";
      }

      this.name_ = void 0;
      this[$mobx] = ObservableSetMarker;
      this.data_ = new Set();
      this.atom_ = void 0;
      this.changeListeners_ = void 0;
      this.interceptors_ = void 0;
      this.dehancer = void 0;
      this.enhancer_ = void 0;
      this.name_ = name_;

      if (!isFunction(Set)) {
        die(22);
      }

      this.atom_ = createAtom(this.name_);

      this.enhancer_ = function (newV, oldV) {
        return enhancer(newV, oldV, name_);
      };

      if (initialData) {
        this.replace(initialData);
      }
    }

    var _proto = ObservableSet.prototype;

    _proto.dehanceValue_ = function dehanceValue_(value) {
      if (this.dehancer !== undefined) {
        return this.dehancer(value);
      }

      return value;
    };

    _proto.clear = function clear() {
      var _this = this;

      transaction(function () {
        untracked(function () {
          for (var _iterator = _createForOfIteratorHelperLoose(_this.data_.values()), _step; !(_step = _iterator()).done;) {
            var value = _step.value;

            _this["delete"](value);
          }
        });
      });
    };

    _proto.forEach = function forEach(callbackFn, thisArg) {
      for (var _iterator2 = _createForOfIteratorHelperLoose(this), _step2; !(_step2 = _iterator2()).done;) {
        var value = _step2.value;
        callbackFn.call(thisArg, value, value, this);
      }
    };

    _proto.add = function add(value) {
      var _this2 = this;

      checkIfStateModificationsAreAllowed(this.atom_);

      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          type: ADD,
          object: this,
          newValue: value
        });
        if (!change) return this; // ideally, value = change.value would be done here, so that values can be
        // changed by interceptor. Same applies for other Set and Map api's.
      }

      if (!this.has(value)) {
        transaction(function () {
          _this2.data_.add(_this2.enhancer_(value, undefined));

          _this2.atom_.reportChanged();
        });
        var notifySpy = 'development' !== "production" && isSpyEnabled();
        var notify = hasListeners(this);

        var _change = notify || notifySpy ? {
          observableKind: "set",
          debugObjectName: this.name_,
          type: ADD,
          object: this,
          newValue: value
        } : null;

        if (notifySpy && 'development' !== "production") spyReportStart(_change);
        if (notify) notifyListeners(this, _change);
        if (notifySpy && 'development' !== "production") spyReportEnd();
      }

      return this;
    };

    _proto["delete"] = function _delete(value) {
      var _this3 = this;

      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          type: DELETE,
          object: this,
          oldValue: value
        });
        if (!change) return false;
      }

      if (this.has(value)) {
        var notifySpy = 'development' !== "production" && isSpyEnabled();
        var notify = hasListeners(this);

        var _change2 = notify || notifySpy ? {
          observableKind: "set",
          debugObjectName: this.name_,
          type: DELETE,
          object: this,
          oldValue: value
        } : null;

        if (notifySpy && 'development' !== "production") spyReportStart(_change2);
        transaction(function () {
          _this3.atom_.reportChanged();

          _this3.data_["delete"](value);
        });
        if (notify) notifyListeners(this, _change2);
        if (notifySpy && 'development' !== "production") spyReportEnd();
        return true;
      }

      return false;
    };

    _proto.has = function has(value) {
      this.atom_.reportObserved();
      return this.data_.has(this.dehanceValue_(value));
    };

    _proto.entries = function entries() {
      var nextIndex = 0;
      var keys = Array.from(this.keys());
      var values = Array.from(this.values());
      return makeIterable({
        next: function next() {
          var index = nextIndex;
          nextIndex += 1;
          return index < values.length ? {
            value: [keys[index], values[index]],
            done: false
          } : {
            done: true
          };
        }
      });
    };

    _proto.keys = function keys() {
      return this.values();
    };

    _proto.values = function values() {
      this.atom_.reportObserved();
      var self = this;
      var nextIndex = 0;
      var observableValues = Array.from(this.data_.values());
      return makeIterable({
        next: function next() {
          return nextIndex < observableValues.length ? {
            value: self.dehanceValue_(observableValues[nextIndex++]),
            done: false
          } : {
            done: true
          };
        }
      });
    };

    _proto.replace = function replace(other) {
      var _this4 = this;

      if (isObservableSet(other)) {
        other = new Set(other);
      }

      transaction(function () {
        if (Array.isArray(other)) {
          _this4.clear();

          other.forEach(function (value) {
            return _this4.add(value);
          });
        } else if (isES6Set(other)) {
          _this4.clear();

          other.forEach(function (value) {
            return _this4.add(value);
          });
        } else if (other !== null && other !== undefined) {
          die("Cannot initialize set from " + other);
        }
      });
      return this;
    };

    _proto.observe_ = function observe_(listener, fireImmediately) {
      // ... 'fireImmediately' could also be true?
      if ('development' !== "production" && fireImmediately === true) die("`observe` doesn't support fireImmediately=true in combination with sets.");
      return registerListener(this, listener);
    };

    _proto.intercept_ = function intercept_(handler) {
      return registerInterceptor(this, handler);
    };

    _proto.toJSON = function toJSON() {
      return Array.from(this);
    };

    _proto.toString = function toString() {
      return "[object ObservableSet]";
    };

    _proto[_Symbol$iterator$1] = function () {
      return this.values();
    };

    _createClass(ObservableSet, [{
      key: "size",
      get: function get() {
        this.atom_.reportObserved();
        return this.data_.size;
      }
    }, {
      key: _Symbol$toStringTag$1,
      get: function get() {
        return "Set";
      }
    }]);

    return ObservableSet;
  }(); // eslint-disable-next-line

  var isObservableSet = /*#__PURE__*/createInstanceofPredicate("ObservableSet", ObservableSet);

  var inferredAnnotationsSymbol = /*#__PURE__*/Symbol("mobx-inferred-annotations");
  var descriptorCache = /*#__PURE__*/Object.create(null);
  var REMOVE = "remove";
  var ObservableObjectAdministration = /*#__PURE__*/function () {
    function ObservableObjectAdministration(target_, values_, name_, // Used anytime annotation is not explicitely provided
    defaultAnnotation_, // Bind automatically inferred actions?
    autoBind_) {
      if (values_ === void 0) {
        values_ = new Map();
      }

      if (defaultAnnotation_ === void 0) {
        defaultAnnotation_ = observable;
      }

      if (autoBind_ === void 0) {
        autoBind_ = false;
      }

      this.target_ = void 0;
      this.values_ = void 0;
      this.name_ = void 0;
      this.defaultAnnotation_ = void 0;
      this.autoBind_ = void 0;
      this.keysAtom_ = void 0;
      this.changeListeners_ = void 0;
      this.interceptors_ = void 0;
      this.proxy_ = void 0;
      this.isPlainObject_ = void 0;
      this.appliedAnnotations_ = void 0;
      this.pendingKeys_ = void 0;
      this.target_ = target_;
      this.values_ = values_;
      this.name_ = name_;
      this.defaultAnnotation_ = defaultAnnotation_;
      this.autoBind_ = autoBind_;
      this.keysAtom_ = new Atom('development' !== "production" ? this.name_ + ".keys" : "ObservableObject.keys"); // Optimization: we use this frequently

      this.isPlainObject_ = isPlainObject(this.target_);

      if ('development' !== "production" && !isAnnotation(this.defaultAnnotation_)) {
        die("defaultAnnotation must be valid annotation");
      }

      if ('development' !== "production" && typeof this.autoBind_ !== "boolean") {
        die("autoBind must be boolean");
      }

      if ('development' !== "production") {
        // Prepare structure for tracking which fields were already annotated
        this.appliedAnnotations_ = {};
      }
    }

    var _proto = ObservableObjectAdministration.prototype;

    _proto.getObservablePropValue_ = function getObservablePropValue_(key) {
      return this.values_.get(key).get();
    };

    _proto.setObservablePropValue_ = function setObservablePropValue_(key, newValue) {
      var observable = this.values_.get(key);

      if (observable instanceof ComputedValue) {
        observable.set(newValue);
        return true;
      } // intercept


      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          type: UPDATE,
          object: this.proxy_ || this.target_,
          name: key,
          newValue: newValue
        });
        if (!change) return null;
        newValue = change.newValue;
      }

      newValue = observable.prepareNewValue_(newValue); // notify spy & observers

      if (newValue !== globalState.UNCHANGED) {
        var notify = hasListeners(this);
        var notifySpy = 'development' !== "production" && isSpyEnabled();

        var _change = notify || notifySpy ? {
          type: UPDATE,
          observableKind: "object",
          debugObjectName: this.name_,
          object: this.proxy_ || this.target_,
          oldValue: observable.value_,
          name: key,
          newValue: newValue
        } : null;

        if ('development' !== "production" && notifySpy) spyReportStart(_change);
        observable.setNewValue_(newValue);
        if (notify) notifyListeners(this, _change);
        if ('development' !== "production" && notifySpy) spyReportEnd();
      }

      return true;
    };

    _proto.get_ = function get_(key) {
      if (globalState.trackingDerivation && !hasProp(this.target_, key)) {
        // Key doesn't exist yet, subscribe for it in case it's added later
        this.has_(key);
      }

      return this.target_[key];
    }
    /**
     * @param {PropertyKey} key
     * @param {any} value
     * @param {Annotation|boolean} annotation true - infer from descriptor, false - copy as is
     * @param {boolean} proxyTrap whether it's called from proxy trap
     * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
     */
    ;

    _proto.set_ = function set_(key, value, proxyTrap) {
      if (proxyTrap === void 0) {
        proxyTrap = false;
      }

      // Don't use .has(key) - we care about own
      if (hasProp(this.target_, key)) {
        // Existing prop
        if (this.values_.has(key)) {
          // Observable (can be intercepted)
          return this.setObservablePropValue_(key, value);
        } else if (proxyTrap) {
          // Non-observable - proxy
          return Reflect.set(this.target_, key, value);
        } else {
          // Non-observable
          this.target_[key] = value;
          return true;
        }
      } else {
        // New prop
        return this.extend_(key, {
          value: value,
          enumerable: true,
          writable: true,
          configurable: true
        }, this.defaultAnnotation_, proxyTrap);
      }
    } // Trap for "in"
    ;

    _proto.has_ = function has_(key) {
      if (!globalState.trackingDerivation) {
        // Skip key subscription outside derivation
        return key in this.target_;
      }

      this.pendingKeys_ || (this.pendingKeys_ = new Map());
      var entry = this.pendingKeys_.get(key);

      if (!entry) {
        entry = new ObservableValue(key in this.target_, referenceEnhancer, 'development' !== "production" ? this.name_ + "." + stringifyKey(key) + "?" : "ObservableObject.key?", false);
        this.pendingKeys_.set(key, entry);
      }

      return entry.get();
    }
    /**
     * @param {PropertyKey} key
     * @param {Annotation|boolean} annotation true - infer from object or it's prototype, false - ignore
     */
    ;

    _proto.make_ = function make_(key, annotation) {
      if (annotation === true) {
        annotation = this.inferAnnotation_(key);
      }

      if (annotation === false) {
        return;
      }

      assertAnnotable(this, annotation, key);
      annotation.make_(this, key);
    }
    /**
     * @param {PropertyKey} key
     * @param {PropertyDescriptor} descriptor
     * @param {Annotation|boolean} annotation true - infer from descriptor, false - copy as is
     * @param {boolean} proxyTrap whether it's called from proxy trap
     * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
     */
    ;

    _proto.extend_ = function extend_(key, descriptor, annotation, proxyTrap) {
      if (proxyTrap === void 0) {
        proxyTrap = false;
      }

      if (annotation === true) {
        annotation = inferAnnotationFromDescriptor(descriptor, this.defaultAnnotation_, this.autoBind_);
      }

      if (annotation === false) {
        return this.defineProperty_(key, descriptor, proxyTrap);
      }

      assertAnnotable(this, annotation, key);
      var outcome = annotation.extend_(this, key, descriptor, proxyTrap);

      if (outcome) {
        recordAnnotationApplied(this, annotation, key);
      }

      return outcome;
    };

    _proto.inferAnnotation_ = function inferAnnotation_(key) {
      var _this$target_$inferre;

      // Inherited is fine - annotation cannot differ in subclass
      var annotation = (_this$target_$inferre = this.target_[inferredAnnotationsSymbol]) == null ? void 0 : _this$target_$inferre.get(key);
      if (annotation) return annotation;
      var current = this.target_;

      while (current && current !== objectPrototype) {
        var descriptor = getDescriptor(current, key);

        if (descriptor) {
          annotation = inferAnnotationFromDescriptor(descriptor, this.defaultAnnotation_, this.autoBind_);
          break;
        }

        current = Object.getPrototypeOf(current);
      } // Not found (false means ignore)


      if (annotation === undefined) {
        die(1, "true", key);
      } // Cache the annotation.
      // Note we can do this only because annotation and field can't change.


      if (!this.isPlainObject_) {
        // We could also place it on furthest proto, shoudn't matter
        var closestProto = Object.getPrototypeOf(this.target_);

        if (!hasProp(closestProto, inferredAnnotationsSymbol)) {
          addHiddenProp(closestProto, inferredAnnotationsSymbol, new Map());
        }

        closestProto[inferredAnnotationsSymbol].set(key, annotation);
      }

      return annotation;
    }
    /**
     * @param {PropertyKey} key
     * @param {PropertyDescriptor} descriptor
     * @param {boolean} proxyTrap whether it's called from proxy trap
     * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
     */
    ;

    _proto.defineProperty_ = function defineProperty_(key, descriptor, proxyTrap) {
      if (proxyTrap === void 0) {
        proxyTrap = false;
      }

      try {
        startBatch(); // Delete

        var deleteOutcome = this.delete_(key);

        if (!deleteOutcome) {
          // Failure or intercepted
          return deleteOutcome;
        } // ADD interceptor


        if (hasInterceptors(this)) {
          var change = interceptChange(this, {
            object: this.proxy_ || this.target_,
            name: key,
            type: ADD,
            newValue: descriptor.value
          });
          if (!change) return null;
          var newValue = change.newValue;

          if (descriptor.value !== newValue) {
            descriptor = _extends({}, descriptor, {
              value: newValue
            });
          }
        } // Define


        if (proxyTrap) {
          if (!Reflect.defineProperty(this.target_, key, descriptor)) {
            return false;
          }
        } else {
          defineProperty(this.target_, key, descriptor);
        } // Notify


        this.notifyPropertyAddition_(key, descriptor.value);
      } finally {
        endBatch();
      }

      return true;
    } // If original descriptor becomes relevant, move this to annotation directly
    ;

    _proto.defineObservableProperty_ = function defineObservableProperty_(key, value, enhancer, proxyTrap) {
      if (proxyTrap === void 0) {
        proxyTrap = false;
      }

      try {
        startBatch(); // Delete

        var deleteOutcome = this.delete_(key);

        if (!deleteOutcome) {
          // Failure or intercepted
          return deleteOutcome;
        } // ADD interceptor


        if (hasInterceptors(this)) {
          var change = interceptChange(this, {
            object: this.proxy_ || this.target_,
            name: key,
            type: ADD,
            newValue: value
          });
          if (!change) return null;
          value = change.newValue;
        }

        var cachedDescriptor = getCachedObservablePropDescriptor(key);
        var descriptor = {
          configurable: globalState.safeDescriptors ? this.isPlainObject_ : true,
          enumerable: true,
          get: cachedDescriptor.get,
          set: cachedDescriptor.set
        }; // Define

        if (proxyTrap) {
          if (!Reflect.defineProperty(this.target_, key, descriptor)) {
            return false;
          }
        } else {
          defineProperty(this.target_, key, descriptor);
        }

        var _observable = new ObservableValue(value, enhancer, 'development' !== "production" ? this.name_ + "." + key.toString() : "ObservableObject.key", false);

        this.values_.set(key, _observable); // Notify (value possibly changed by ObservableValue)

        this.notifyPropertyAddition_(key, _observable.value_);
      } finally {
        endBatch();
      }

      return true;
    } // If original descriptor becomes relevant, move this to annotation directly
    ;

    _proto.defineComputedProperty_ = function defineComputedProperty_(key, options, proxyTrap) {
      if (proxyTrap === void 0) {
        proxyTrap = false;
      }

      try {
        startBatch(); // Delete

        var deleteOutcome = this.delete_(key);

        if (!deleteOutcome) {
          // Failure or intercepted
          return deleteOutcome;
        } // ADD interceptor


        if (hasInterceptors(this)) {
          var change = interceptChange(this, {
            object: this.proxy_ || this.target_,
            name: key,
            type: ADD,
            newValue: undefined
          });
          if (!change) return null;
        }

        options.name || (options.name = 'development' !== "production" ? this.name_ + "." + key.toString() : "ObservableObject.key");
        options.context = this.proxy_ || this.target_;
        var cachedDescriptor = getCachedObservablePropDescriptor(key);
        var descriptor = {
          configurable: globalState.safeDescriptors ? this.isPlainObject_ : true,
          enumerable: false,
          get: cachedDescriptor.get,
          set: cachedDescriptor.set
        }; // Define

        if (proxyTrap) {
          if (!Reflect.defineProperty(this.target_, key, descriptor)) {
            return false;
          }
        } else {
          defineProperty(this.target_, key, descriptor);
        }

        this.values_.set(key, new ComputedValue(options)); // Notify

        this.notifyPropertyAddition_(key, undefined);
      } finally {
        endBatch();
      }

      return true;
    }
    /**
     * @param {PropertyKey} key
     * @param {PropertyDescriptor} descriptor
     * @param {boolean} proxyTrap whether it's called from proxy trap
     * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
     */
    ;

    _proto.delete_ = function delete_(key, proxyTrap) {
      if (proxyTrap === void 0) {
        proxyTrap = false;
      }

      // No such prop
      if (!hasProp(this.target_, key)) {
        return true;
      } // Intercept


      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this.proxy_ || this.target_,
          name: key,
          type: REMOVE
        }); // Cancelled

        if (!change) return null;
      } // Delete


      try {
        var _this$pendingKeys_, _this$pendingKeys_$ge;

        startBatch();
        var notify = hasListeners(this);
        var notifySpy = 'development' !== "production" && isSpyEnabled();

        var _observable2 = this.values_.get(key); // Value needed for spies/listeners


        var value = undefined; // Optimization: don't pull the value unless we will need it

        if (!_observable2 && (notify || notifySpy)) {
          var _getDescriptor;

          value = (_getDescriptor = getDescriptor(this.target_, key)) == null ? void 0 : _getDescriptor.value;
        } // delete prop (do first, may fail)


        if (proxyTrap) {
          if (!Reflect.deleteProperty(this.target_, key)) {
            return false;
          }
        } else {
          delete this.target_[key];
        } // Allow re-annotating this field


        if ('development' !== "production") {
          delete this.appliedAnnotations_[key];
        } // Clear observable


        if (_observable2) {
          this.values_["delete"](key); // for computed, value is undefined

          if (_observable2 instanceof ObservableValue) {
            value = _observable2.value_;
          } // Notify: autorun(() => obj[key]), see #1796


          propagateChanged(_observable2);
        } // Notify "keys/entries/values" observers


        this.keysAtom_.reportChanged(); // Notify "has" observers
        // "in" as it may still exist in proto

        (_this$pendingKeys_ = this.pendingKeys_) == null ? void 0 : (_this$pendingKeys_$ge = _this$pendingKeys_.get(key)) == null ? void 0 : _this$pendingKeys_$ge.set(key in this.target_); // Notify spies/listeners

        if (notify || notifySpy) {
          var _change2 = {
            type: REMOVE,
            observableKind: "object",
            object: this.proxy_ || this.target_,
            debugObjectName: this.name_,
            oldValue: value,
            name: key
          };
          if ('development' !== "production" && notifySpy) spyReportStart(_change2);
          if (notify) notifyListeners(this, _change2);
          if ('development' !== "production" && notifySpy) spyReportEnd();
        }
      } finally {
        endBatch();
      }

      return true;
    }
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    ;

    _proto.observe_ = function observe_(callback, fireImmediately) {
      if ('development' !== "production" && fireImmediately === true) die("`observe` doesn't support the fire immediately property for observable objects.");
      return registerListener(this, callback);
    };

    _proto.intercept_ = function intercept_(handler) {
      return registerInterceptor(this, handler);
    };

    _proto.notifyPropertyAddition_ = function notifyPropertyAddition_(key, value) {
      var _this$pendingKeys_2, _this$pendingKeys_2$g;

      var notify = hasListeners(this);
      var notifySpy = 'development' !== "production" && isSpyEnabled();

      if (notify || notifySpy) {
        var change = notify || notifySpy ? {
          type: ADD,
          observableKind: "object",
          debugObjectName: this.name_,
          object: this.proxy_ || this.target_,
          name: key,
          newValue: value
        } : null;
        if ('development' !== "production" && notifySpy) spyReportStart(change);
        if (notify) notifyListeners(this, change);
        if ('development' !== "production" && notifySpy) spyReportEnd();
      }

      (_this$pendingKeys_2 = this.pendingKeys_) == null ? void 0 : (_this$pendingKeys_2$g = _this$pendingKeys_2.get(key)) == null ? void 0 : _this$pendingKeys_2$g.set(true); // Notify "keys/entries/values" observers

      this.keysAtom_.reportChanged();
    };

    _proto.ownKeys_ = function ownKeys_() {
      this.keysAtom_.reportObserved();
      return ownKeys(this.target_);
    };

    _proto.keys_ = function keys_() {
      // Returns enumerable && own, but unfortunately keysAtom will report on ANY key change.
      // There is no way to distinguish between Object.keys(object) and Reflect.ownKeys(object) - both are handled by ownKeys trap.
      // We can either over-report in Object.keys(object) or under-report in Reflect.ownKeys(object)
      // We choose to over-report in Object.keys(object), because:
      // - typically it's used with simple data objects
      // - when symbolic/non-enumerable keys are relevant Reflect.ownKeys works as expected
      this.keysAtom_.reportObserved();
      return Object.keys(this.target_);
    };

    return ObservableObjectAdministration;
  }();
  function asObservableObject(target, options) {
    var _options$name;

    if ('development' !== "production" && options && isObservableObject(target)) {
      die("Options can't be provided for already observable objects.");
    }

    if (hasProp(target, $mobx)) {
      if ('development' !== "production" && !(getAdministration(target) instanceof ObservableObjectAdministration)) {
        die("Cannot convert '" + getDebugName(target) + "' into observable object:" + "\nThe target is already observable of different type." + "\nExtending builtins is not supported.");
      }

      return target;
    }

    if ('development' !== "production" && !Object.isExtensible(target)) die("Cannot make the designated object observable; it is not extensible");
    var name = (_options$name = options == null ? void 0 : options.name) != null ? _options$name : 'development' !== "production" ? (isPlainObject(target) ? "ObservableObject" : target.constructor.name) + "@" + getNextId() : "ObservableObject";
    var adm = new ObservableObjectAdministration(target, new Map(), String(name), getAnnotationFromOptions(options), options == null ? void 0 : options.autoBind);
    addHiddenProp(target, $mobx, adm);
    return target;
  }
  var isObservableObjectAdministration = /*#__PURE__*/createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);

  function getCachedObservablePropDescriptor(key) {
    return descriptorCache[key] || (descriptorCache[key] = {
      get: function get() {
        return this[$mobx].getObservablePropValue_(key);
      },
      set: function set(value) {
        return this[$mobx].setObservablePropValue_(key, value);
      }
    });
  }

  function isObservableObject(thing) {
    if (isObject(thing)) {
      return isObservableObjectAdministration(thing[$mobx]);
    }

    return false;
  }
  function recordAnnotationApplied(adm, annotation, key) {
    var _adm$target_$storedAn;

    if ('development' !== "production") {
      adm.appliedAnnotations_[key] = annotation;
    } // Remove applied decorator annotation so we don't try to apply it again in subclass constructor


    (_adm$target_$storedAn = adm.target_[storedAnnotationsSymbol]) == null ? true : delete _adm$target_$storedAn[key];
  }

  function assertAnnotable(adm, annotation, key) {
    // Valid annotation
    if ('development' !== "production" && !isAnnotation(annotation)) {
      die("Cannot annotate '" + adm.name_ + "." + key.toString() + "': Invalid annotation.");
    }
    /*
    // Configurable, not sealed, not frozen
    // Possibly not needed, just a little better error then the one thrown by engine.
    // Cases where this would be useful the most (subclass field initializer) are not interceptable by this.
    if (__DEV__) {
        const configurable = getDescriptor(adm.target_, key)?.configurable
        const frozen = Object.isFrozen(adm.target_)
        const sealed = Object.isSealed(adm.target_)
        if (!configurable || frozen || sealed) {
            const fieldName = `${adm.name_}.${key.toString()}`
            const requestedAnnotationType = annotation.annotationType_
            let error = `Cannot apply '${requestedAnnotationType}' to '${fieldName}':`
            if (frozen) {
                error += `\nObject is frozen.`
            }
            if (sealed) {
                error += `\nObject is sealed.`
            }
            if (!configurable) {
                error += `\nproperty is not configurable.`
                // Mention only if caused by us to avoid confusion
                if (hasProp(adm.appliedAnnotations!, key)) {
                    error += `\nTo prevent accidental re-definition of a field by a subclass, `
                    error += `all annotated fields of non-plain objects (classes) are not configurable.`
                }
            }
            die(error)
        }
    }
    */
    // Not annotated


    if ('development' !== "production" && !isOverride(annotation) && hasProp(adm.appliedAnnotations_, key)) {
      var fieldName = adm.name_ + "." + key.toString();
      var currentAnnotationType = adm.appliedAnnotations_[key].annotationType_;
      var requestedAnnotationType = annotation.annotationType_;
      die("Cannot apply '" + requestedAnnotationType + "' to '" + fieldName + "':" + ("\nThe field is already annotated with '" + currentAnnotationType + "'.") + "\nRe-annotating fields is not allowed." + "\nUse 'override' annotation for methods overriden by subclass.");
    }
  }

  /**
   * This array buffer contains two lists of properties, so that all arrays
   * can recycle their property definitions, which significantly improves performance of creating
   * properties on the fly.
   */

  var OBSERVABLE_ARRAY_BUFFER_SIZE = 0; // Typescript workaround to make sure ObservableArray extends Array

  var StubArray = function StubArray() {};

  function inherit(ctor, proto) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(ctor.prototype, proto);
    } else if (ctor.prototype.__proto__ !== undefined) {
      ctor.prototype.__proto__ = proto;
    } else {
      ctor.prototype = proto;
    }
  }

  inherit(StubArray, Array.prototype); // Weex proto freeze protection was here,
  // but it is unclear why the hack is need as MobX never changed the prototype
  // anyway, so removed it in V6

  var LegacyObservableArray = /*#__PURE__*/function (_StubArray) {
    _inheritsLoose(LegacyObservableArray, _StubArray);

    function LegacyObservableArray(initialValues, enhancer, name, owned) {
      var _this;

      if (name === void 0) {
        name = 'development' !== "production" ? "ObservableArray@" + getNextId() : "ObservableArray";
      }

      if (owned === void 0) {
        owned = false;
      }

      _this = _StubArray.call(this) || this;
      var adm = new ObservableArrayAdministration(name, enhancer, owned, true);
      adm.proxy_ = _assertThisInitialized(_this);
      addHiddenFinalProp(_assertThisInitialized(_this), $mobx, adm);

      if (initialValues && initialValues.length) {
        var prev = allowStateChangesStart(true); // @ts-ignore

        _this.spliceWithArray(0, 0, initialValues);

        allowStateChangesEnd(prev);
      }

      return _this;
    }

    var _proto = LegacyObservableArray.prototype;

    _proto.concat = function concat() {
      this[$mobx].atom_.reportObserved();

      for (var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++) {
        arrays[_key] = arguments[_key];
      }

      return Array.prototype.concat.apply(this.slice(), //@ts-ignore
      arrays.map(function (a) {
        return isObservableArray(a) ? a.slice() : a;
      }));
    };

    _proto[Symbol.iterator] = function () {
      var self = this;
      var nextIndex = 0;
      return makeIterable({
        next: function next() {
          // @ts-ignore
          return nextIndex < self.length ? {
            value: self[nextIndex++],
            done: false
          } : {
            done: true,
            value: undefined
          };
        }
      });
    };

    _createClass(LegacyObservableArray, [{
      key: "length",
      get: function get() {
        return this[$mobx].getArrayLength_();
      },
      set: function set(newLength) {
        this[$mobx].setArrayLength_(newLength);
      }
    }, {
      key: Symbol.toStringTag,
      get: function get() {
        return "Array";
      }
    }]);

    return LegacyObservableArray;
  }(StubArray);

  Object.entries(arrayExtensions).forEach(function (_ref) {
    var prop = _ref[0],
        fn = _ref[1];
    if (prop !== "concat") addHiddenProp(LegacyObservableArray.prototype, prop, fn);
  });

  function createArrayEntryDescriptor(index) {
    return {
      enumerable: false,
      configurable: true,
      get: function get() {
        return this[$mobx].get_(index);
      },
      set: function set(value) {
        this[$mobx].set_(index, value);
      }
    };
  }

  function createArrayBufferItem(index) {
    defineProperty(LegacyObservableArray.prototype, "" + index, createArrayEntryDescriptor(index));
  }

  function reserveArrayBuffer(max) {
    if (max > OBSERVABLE_ARRAY_BUFFER_SIZE) {
      for (var index = OBSERVABLE_ARRAY_BUFFER_SIZE; index < max + 100; index++) {
        createArrayBufferItem(index);
      }

      OBSERVABLE_ARRAY_BUFFER_SIZE = max;
    }
  }
  reserveArrayBuffer(1000);
  function createLegacyArray(initialValues, enhancer, name) {
    return new LegacyObservableArray(initialValues, enhancer, name);
  }

  function getAtom(thing, property) {
    if (typeof thing === "object" && thing !== null) {
      if (isObservableArray(thing)) {
        if (property !== undefined) die(23);
        return thing[$mobx].atom_;
      }

      if (isObservableSet(thing)) {
        return thing[$mobx];
      }

      if (isObservableMap(thing)) {
        if (property === undefined) return thing.keysAtom_;
        var observable = thing.data_.get(property) || thing.hasMap_.get(property);
        if (!observable) die(25, property, getDebugName(thing));
        return observable;
      }

      if (isObservableObject(thing)) {
        if (!property) return die(26);

        var _observable = thing[$mobx].values_.get(property);

        if (!_observable) die(27, property, getDebugName(thing));
        return _observable;
      }

      if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
        return thing;
      }
    } else if (isFunction(thing)) {
      if (isReaction(thing[$mobx])) {
        // disposer function
        return thing[$mobx];
      }
    }

    die(28);
  }
  function getAdministration(thing, property) {
    if (!thing) die(29);
    if (property !== undefined) return getAdministration(getAtom(thing, property));
    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) return thing;
    if (isObservableMap(thing) || isObservableSet(thing)) return thing;
    if (thing[$mobx]) return thing[$mobx];
    die(24, thing);
  }
  function getDebugName(thing, property) {
    var named;

    if (property !== undefined) {
      named = getAtom(thing, property);
    } else if (isAction(thing)) {
      return thing.name;
    } else if (isObservableObject(thing) || isObservableMap(thing) || isObservableSet(thing)) {
      named = getAdministration(thing);
    } else {
      // valid for arrays as well
      named = getAtom(thing);
    }

    return named.name_;
  }

  var toString = objectPrototype.toString;
  function deepEqual(a, b, depth) {
    if (depth === void 0) {
      depth = -1;
    }

    return eq(a, b, depth);
  } // Copied from https://github.com/jashkenas/underscore/blob/5c237a7c682fb68fd5378203f0bf22dce1624854/underscore.js#L1186-L1289
  // Internal recursive comparison function for `isEqual`.

  function eq(a, b, depth, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b; // `null` or `undefined` only equal to itself (strict comparison).

    if (a == null || b == null) return false; // `NaN`s are equivalent, but non-reflexive.

    if (a !== a) return b !== b; // Exhaust primitive checks

    var type = typeof a;
    if (!isFunction(type) && type !== "object" && typeof b != "object") return false; // Compare `[[Class]]` names.

    var className = toString.call(a);
    if (className !== toString.call(b)) return false;

    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case "[object RegExp]": // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')

      case "[object String]":
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return "" + a === "" + b;

      case "[object Number]":
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN.
        if (+a !== +a) return +b !== +b; // An `egal` comparison is performed for other numeric values.

        return +a === 0 ? 1 / +a === 1 / b : +a === +b;

      case "[object Date]":
      case "[object Boolean]":
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;

      case "[object Symbol]":
        return typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b);

      case "[object Map]":
      case "[object Set]":
        // Maps and Sets are unwrapped to arrays of entry-pairs, adding an incidental level.
        // Hide this extra level by increasing the depth.
        if (depth >= 0) {
          depth++;
        }

        break;
    } // Unwrap any wrapped objects.


    a = unwrap(a);
    b = unwrap(b);
    var areArrays = className === "[object Array]";

    if (!areArrays) {
      if (typeof a != "object" || typeof b != "object") return false; // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.

      var aCtor = a.constructor,
          bCtor = b.constructor;

      if (aCtor !== bCtor && !(isFunction(aCtor) && aCtor instanceof aCtor && isFunction(bCtor) && bCtor instanceof bCtor) && "constructor" in a && "constructor" in b) {
        return false;
      }
    }

    if (depth === 0) {
      return false;
    } else if (depth < 0) {
      depth = -1;
    } // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.


    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;

    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    } // Add the first object to the stack of traversed objects.


    aStack.push(a);
    bStack.push(b); // Recursively compare objects and arrays.

    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false; // Deep compare the contents, ignoring non-numeric properties.

      while (length--) {
        if (!eq(a[length], b[length], depth - 1, aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = Object.keys(a);
      var key;
      length = keys.length; // Ensure that both objects contain the same number of properties before comparing deep equality.

      if (Object.keys(b).length !== length) return false;

      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(hasProp(b, key) && eq(a[key], b[key], depth - 1, aStack, bStack))) return false;
      }
    } // Remove the first object from the stack of traversed objects.


    aStack.pop();
    bStack.pop();
    return true;
  }

  function unwrap(a) {
    if (isObservableArray(a)) return a.slice();
    if (isES6Map(a) || isObservableMap(a)) return Array.from(a.entries());
    if (isES6Set(a) || isObservableSet(a)) return Array.from(a.entries());
    return a;
  }

  function makeIterable(iterator) {
    iterator[Symbol.iterator] = getSelf;
    return iterator;
  }

  function getSelf() {
    return this;
  }

  /**
   * Infers the best fitting annotation from property descriptor or false if the field shoudn't be annotated
   * - getter(+setter) -> computed
   * - setter w/o getter -> false (ignore)
   * - flow -> false (ignore)
   * - generator -> flow
   * - action -> false (ignore)
   * - function -> action (optionally bound)
   * - other -> defaultAnnotation
   */

  function inferAnnotationFromDescriptor(desc, defaultAnnotation, autoBind) {
    if (desc.get) return computed;
    if (desc.set) return false; // ignore lone setter
    // If already wrapped in action/flow, don't do that another time, but assume it is already set up properly.

    return isFunction(desc.value) ? isGenerator(desc.value) ? isFlow(desc.value) ? false : flow : isAction(desc.value) ? false : autoBind ? autoAction.bound : autoAction : defaultAnnotation;
  }
  function isAnnotation(thing) {
    return (// Can be function
      thing instanceof Object && typeof thing.annotationType_ === "string" && isFunction(thing.make_) && isFunction(thing.extend_)
    );
  }

  /**
   * (c) Michel Weststrate 2015 - 2020
   * MIT Licensed
   *
   * Welcome to the mobx sources! To get an global overview of how MobX internally works,
   * this is a good place to start:
   * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
   *
   * Source folders:
   * ===============
   *
   * - api/     Most of the public static methods exposed by the module can be found here.
   * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
   * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
   * - utils/   Utility stuff.
   *
   */
  ["Symbol", "Map", "Set", "Symbol"].forEach(function (m) {
    var g = getGlobal();

    if (typeof g[m] === "undefined") {
      die("MobX requires global '" + m + "' to be available or polyfilled");
    }
  });

  if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
    // See: https://github.com/andykog/mobx-devtools/
    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
      spy: spy,
      extras: {
        getDebugName: getDebugName
      },
      $mobx: $mobx
    });
  }

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
          o$2('render', (ctlr, next) => {
              autorun(next);
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

  exports.Attr = n$2;
  exports.asComponent = asComponent;
  exports.attr = l$2;
  exports.createCtx = u$2;
  exports.createEvent = d$2;
  exports.createMobxHooks = createMobxHooks;
  exports.createRef = f$2;
  exports.createStoreHook = createStoreHook;
  exports.createStoreHooks = createStoreHooks;
  exports.define = define;
  exports.defineProvider = p$2;
  exports.event = w$2;
  exports.h = h$2;
  exports.hook = hook;
  exports.html = html;
  exports.impl = impl;
  exports.initStore = initStore;
  exports.intercept = o$2;
  exports.prop = T$1;
  exports.ref = P$1;
  exports.render = render;
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

  Object.defineProperty(exports, '__esModule', { value: true });

})));
