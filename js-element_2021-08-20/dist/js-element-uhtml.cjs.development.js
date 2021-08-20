'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('js-element/core');
var uhtml = require('uhtml');

const { define, render } = core.adapt({
    isMountable: (it) => it instanceof uhtml.Hole,
    patchContent: (content, target) => uhtml.render(target, content)
});

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
Object.defineProperty(exports, 'intercept', {
  enumerable: true,
  get: function () {
    return core.intercept;
  }
});
Object.defineProperty(exports, 'Hole', {
  enumerable: true,
  get: function () {
    return uhtml.Hole;
  }
});
Object.defineProperty(exports, 'html', {
  enumerable: true,
  get: function () {
    return uhtml.html;
  }
});
Object.defineProperty(exports, 'svg', {
  enumerable: true,
  get: function () {
    return uhtml.svg;
  }
});
exports.define = define;
exports.render = render;
