import { adapt } from 'js-element/core';
export { Attr, attr, createEvent, createRef, defineProvider, intercept } from 'js-element/core';
import { TemplateResult, render as render$1 } from 'lit-html';
export { TemplateResult, html, svg } from 'lit-html';

const { define, render } = adapt({
    isMountable: (it) => it instanceof TemplateResult,
    patchContent: (content, container) => render$1(content, container)
});

export { define, render };
