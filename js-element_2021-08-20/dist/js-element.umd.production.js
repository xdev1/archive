!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("js-element/core")):"function"==typeof define&&define.amd?define(["exports","js-element/core"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).jsElement={},e.jsElement.core)}(this,(function(e,t){"use strict";var n=function(e,t,r,o){var l;t[0]=0;for(var i=1;i<t.length;i++){var s=t[i++],u=t[i]?(t[0]|=s?1:2,r[t[i++]]):t[++i];3===s?o[0]=u:4===s?o[1]=Object.assign(o[1]||{},u):5===s?(o[1]=o[1]||{})[t[++i]]=u:6===s?o[1][t[++i]]+=u+"":s?(l=e.apply(u,n(e,u,r,["",null])),o.push(l),u[0]?t[0]|=2:(t[i-2]=0,t[i]=l)):o.push(u)}return o},r=new Map;var o={},l=[],i=function(e){this.events[e.type](e)},s=e=>null==e?e:e.key,u=(e,t,n,r,o)=>{"key"===t||("ref"===t?r!==n&&(n&&c(n,null),r&&c(r,e)):"o"===t[0]&&"n"===t[1]?((e.events||(e.events={}))[t=t.slice(2)]=r)?n||e.addEventListener(t,i):e.removeEventListener(t,i):!o&&"list"!==t&&"form"!==t&&(t in e||e.__alwaysSetProps&&"class"!==t&&!t.includes("-"))?(e[t]=null==r?"":r,e.__alwaysSetProps&&(e.__props[t]=r,e.__ctrl.refresh())):null==r||!1===r?e.removeAttribute(t):e.setAttribute(t,r))},a=(e,t)=>{var n=e.props,r=3===e.type?document.createTextNode(e.tag):(t=t||"svg"===e.tag)?document.createElementNS("http://www.w3.org/2000/svg",e.tag,{is:n.is}):document.createElement(e.tag,{is:n.is});for(var o in n)u(r,o,null,n[o],t);for(var l=0;l<e.children.length;l++)r.appendChild(a(e.children[l]=p(e.children[l]),t));return e.node=r},f=(e,t,n,r,o)=>{if(n===r);else if(null!=n&&3===n.type&&3===r.type)n.tag!==r.tag&&(t.nodeValue=r.tag);else if(null==n||n.tag!==r.tag)n&&d(n),t=e.insertBefore(a(r=p(r),o),t),n&&e.removeChild(n.node);else{var l,i,c,h,m=n.props,g=r.props,y=n.children,v=r.children,b=0,_=0,j=y.length-1,P=v.length-1;for(var C in o=o||"svg"===r.tag,{...m,...g})("value"===C||"selected"===C||"checked"===C?t[C]:m[C]!==g[C])&&u(t,C,m[C],g[C],o);for(;_<=P&&b<=j&&null!=(c=s(y[b]))&&c===s(v[_]);)f(t,y[b].node,y[b++],v[_]=p(v[_++]),o);for(;_<=P&&b<=j&&null!=(c=s(y[j]))&&c===s(v[P]);)f(t,y[j].node,y[j--],v[P]=p(v[P--]),o);if(b>j)for(;_<=P;)t.insertBefore(a(v[_]=p(v[_++]),o),(i=y[b])&&i.node);else if(_>P)for(;b<=j;)t.removeChild(y[b].node),d(y[b++]);else{var E={},O={};for(C=b;C<=j;C++)null!=(c=y[C].key)&&(E[c]=y[C]);for(;_<=P;)c=s(i=y[b]),h=s(v[_]=p(v[_])),O[c]||null!=h&&h===s(y[b+1])?(null==c&&(t.removeChild(i.node),d(i)),b++):null==h||1===n.type?(null==c&&(f(t,i&&i.node,i,v[_],o),_++),b++):(c===h?(f(t,i.node,i,v[_],o),O[h]=!0,b++):null!=(l=E[h])?(f(t,t.insertBefore(l.node,i&&i.node),l,v[_],o),O[h]=!0):f(t,i&&i.node,null,v[_],o),_++);for(;b<=j;)null==s(i=y[b++])&&(t.removeChild(i.node),d(i));for(var C in E)null==O[C]&&(t.removeChild(E[C].node),d(E[C]))}}return r.node=t},p=e=>!0!==e&&!1!==e&&e?e:g(""),c=(e,t)=>e&&("function"==typeof e?e(t):e.current=t),d=e=>e&&e.props&&e.props.ref&&c(e.props.ref,null),h=e=>3===e.nodeType?g(e.nodeValue,e):m(e.nodeName.toLowerCase(),o,l.map.call(e.childNodes,h),1,e),m=(e,t,n,r,o)=>({tag:e,props:t,key:t.key,children:n,type:r,node:o}),g=(e,t)=>m(e,o,l,3,t),y=(e,t,n=l)=>m(e,t||o,Array.isArray(n)?n:[n]),v=(e,t)=>((e=f(e.parentNode,e,e.vdom||h(e),t)).vdom=t,e);const{createComponentType:b,createCustomElementClass:_,registerElement:j}=t.adapt.prototype.toString.__getHiddenAPI(),{define:P,render:C,impl:E}=t.adapt({isMountable:e=>!!e&&!0===e.isVElement,patchContent:function(e,t){if(t.hasChildNodes())v(t.firstChild,e);else{const n=document.createElement("span");t.append(n),v(n,e)}}}),O=function(e){var t=r.get(this);return t||(t=new Map,r.set(this,t)),(t=n(this,t.get(e)||(t.set(e,t=function(e){for(var t,n,r=1,o="",l="",i=[0],s=function(e){1===r&&(e||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?i.push(0,e,o):3===r&&(e||o)?(i.push(3,e,o),r=2):2===r&&"..."===o&&e?i.push(4,e,0):2===r&&o&&!e?i.push(5,0,!0,o):r>=5&&((o||!e&&5===r)&&(i.push(r,0,o,n),r=6),e&&(i.push(r,e,0,n),r=6)),o=""},u=0;u<e.length;u++){u&&(1===r&&s(),s(u));for(var a=0;a<e[u].length;a++)t=e[u][a],1===r?"<"===t?(s(),i=[i],r=3):o+=t:4===r?"--"===o&&">"===t?(r=1,o=""):o=t+o[0]:l?t===l?l="":o+=t:'"'===t||"'"===t?l=t:">"===t?(s(),r=1):r&&("="===t?(r=5,n=o,o=""):"/"===t&&(r<5||">"===e[u][a+1])?(s(),3===r&&(i=i[0]),r=i,(i=i[0]).push(2,0,r),r=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(s(),r=2):o+=t),3===r&&"!--"===o&&(r=4,i=i[0])}return s(),i}(e)),t),arguments,[])).length>1?t:t[0]}.bind(N),w=new Map;function A(e){return"number"==typeof e||"string"==typeof e?g(e,null):e}function N(e,t){const n=arguments.length;let r="function"==typeof e?e.tagName:e;if(!r&&"function"==typeof e){const t=(e,t)=>{e.__alwaysSetProps=!0,e.__props={},e.__ctrl=t},n=e.name?M(e.name.replace("$","x")):"ce";if(w.has(n)){const e=w.get(n);w.set(n,e+1),r=n+"--n"+(e+1)}else w.set(n,1),r=n+"--n1";e=_(r,t,e,C),Object.defineProperty(e,"tagName",{value:r}),j(r,e)}const o=n>2?[]:x;if(n>2)for(let e=2;e<n;++e){const t=arguments[e];if(Array.isArray(t))for(let e=0;e<t.length;++e)o.push(A(t[e]));else o.push(A(t))}const l=y(r,t||k,o);return l.isVElement=!0,l}const x=[],k={};function M(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[\s_]+/g,"-").toLowerCase()}Object.defineProperty(e,"Attr",{enumerable:!0,get:function(){return t.Attr}}),Object.defineProperty(e,"attr",{enumerable:!0,get:function(){return t.attr}}),Object.defineProperty(e,"createCtx",{enumerable:!0,get:function(){return t.createCtx}}),Object.defineProperty(e,"createEvent",{enumerable:!0,get:function(){return t.createEvent}}),Object.defineProperty(e,"createRef",{enumerable:!0,get:function(){return t.createRef}}),Object.defineProperty(e,"defineProvider",{enumerable:!0,get:function(){return t.defineProvider}}),Object.defineProperty(e,"event",{enumerable:!0,get:function(){return t.event}}),Object.defineProperty(e,"intercept",{enumerable:!0,get:function(){return t.intercept}}),Object.defineProperty(e,"prop",{enumerable:!0,get:function(){return t.prop}}),Object.defineProperty(e,"ref",{enumerable:!0,get:function(){return t.ref}}),e.asComponent=function(e,t,n){return b(e)},e.define=P,e.h=N,e.html=O,e.impl=E,e.render=C,Object.defineProperty(e,"__esModule",{value:!0})}));
