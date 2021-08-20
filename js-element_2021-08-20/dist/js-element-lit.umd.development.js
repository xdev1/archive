(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('js-element/core'), require('lit-html')) :
  typeof define === 'function' && define.amd ? define(['exports', 'js-element/core', 'lit-html'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.jsElement = {}, global.jsElement.core, global.litHtml));
}(this, (function (exports, core, litHtml) { 'use strict';

  const { define, render } = core.adapt({
      isMountable: (it) => it instanceof litHtml.TemplateResult,
      patchContent: (content, container) => litHtml.render(content, container)
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
  Object.defineProperty(exports, 'TemplateResult', {
    enumerable: true,
    get: function () {
      return litHtml.TemplateResult;
    }
  });
  Object.defineProperty(exports, 'html', {
    enumerable: true,
    get: function () {
      return litHtml.html;
    }
  });
  Object.defineProperty(exports, 'svg', {
    enumerable: true,
    get: function () {
      return litHtml.svg;
    }
  });
  exports.define = define;
  exports.render = render;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
