(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('js-element/core')) :
  typeof define === 'function' && define.amd ? define(['exports', 'js-element/core'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.jsElement = {}, global.jsElement.core));
}(this, (function (exports, core) { 'use strict';

  var n=function(t,s,r,e){var u;s[0]=0;for(var h=1;h<s.length;h++){var p=s[h++],a=s[h]?(s[0]|=p?1:2,r[s[h++]]):s[++h];3===p?e[0]=a:4===p?e[1]=Object.assign(e[1]||{},a):5===p?(e[1]=e[1]||{})[s[++h]]=a:6===p?e[1][s[++h]]+=a+"":p?(u=t.apply(a,n(t,a,r,["",null])),e.push(u),a[0]?s[0]|=2:(s[h-2]=0,s[h]=u)):e.push(a);}return e},t=new Map;function htm(s){var r=t.get(this);return r||(r=new Map,t.set(this,r)),(r=n(this,r.get(s)||(r.set(s,r=function(n){for(var t,s,r=1,e="",u="",h=[0],p=function(n){1===r&&(n||(e=e.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?h.push(0,n,e):3===r&&(n||e)?(h.push(3,n,e),r=2):2===r&&"..."===e&&n?h.push(4,n,0):2===r&&e&&!n?h.push(5,0,!0,e):r>=5&&((e||!n&&5===r)&&(h.push(r,0,e,s),r=6),n&&(h.push(r,n,0,s),r=6)),e="";},a=0;a<n.length;a++){a&&(1===r&&p(),p(a));for(var l=0;l<n[a].length;l++)t=n[a][l],1===r?"<"===t?(p(),h=[h],r=3):e+=t:4===r?"--"===e&&">"===t?(r=1,e=""):e=t+e[0]:u?t===u?u="":e+=t:'"'===t||"'"===t?u=t:">"===t?(p(),r=1):r&&("="===t?(r=5,s=e,e=""):"/"===t&&(r<5||">"===n[a][l+1])?(p(),3===r&&(h=h[0]),r=h,(h=h[0]).push(2,0,r),r=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(p(),r=2):e+=t),3===r&&"!--"===e&&(r=4,h=h[0]);}return p(),h}(s)),r),arguments,[])).length>1?r:r[0]}

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
  var h$1 = (tag, props, children = EMPTY_ARR$1) => createVNode(tag, props || EMPTY_OBJ$1, Array.isArray(children) ? children : [children]);
  var patch = (node, vdom) => (((node = patchNode(node.parentNode, node, node.vdom || recycleNode(node), vdom)).vdom = vdom),
      node);

  const { createComponentType, createCustomElementClass, registerElement } = core.adapt.prototype.toString.__getHiddenAPI();
  const { define, render, impl } = core.adapt({
      isMountable: (it) => !!it && it.isVElement === true,
      patchContent: renderContent
  });
  const html = htm.bind(h);
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
  function h(type, props) {
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
      const ret = h$1(tagName, props || EMPTY_OBJ, children);
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

  Object.defineProperty(exports, 'Attr', {
    enumerable: true,
    get: function () {
      return core.Attr;
    }
  });
  Object.defineProperty(exports, 'attr', {
    enumerable: true,
    get: function () {
      return core.attr;
    }
  });
  Object.defineProperty(exports, 'createCtx', {
    enumerable: true,
    get: function () {
      return core.createCtx;
    }
  });
  Object.defineProperty(exports, 'createEvent', {
    enumerable: true,
    get: function () {
      return core.createEvent;
    }
  });
  Object.defineProperty(exports, 'createRef', {
    enumerable: true,
    get: function () {
      return core.createRef;
    }
  });
  Object.defineProperty(exports, 'defineProvider', {
    enumerable: true,
    get: function () {
      return core.defineProvider;
    }
  });
  Object.defineProperty(exports, 'event', {
    enumerable: true,
    get: function () {
      return core.event;
    }
  });
  Object.defineProperty(exports, 'intercept', {
    enumerable: true,
    get: function () {
      return core.intercept;
    }
  });
  Object.defineProperty(exports, 'prop', {
    enumerable: true,
    get: function () {
      return core.prop;
    }
  });
  Object.defineProperty(exports, 'ref', {
    enumerable: true,
    get: function () {
      return core.ref;
    }
  });
  exports.asComponent = asComponent;
  exports.define = define;
  exports.h = h;
  exports.html = html;
  exports.impl = impl;
  exports.render = render;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
