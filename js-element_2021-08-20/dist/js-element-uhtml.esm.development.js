import { adapt } from 'js-element/core';
export { Attr, attr, createEvent, createRef, defineProvider, intercept } from 'js-element/core';
import { Hole, render as render$1 } from 'uhtml';
export { Hole, html, svg } from 'uhtml';

const { define, render } = adapt({
    isMountable: (it) => it instanceof Hole,
    patchContent: (content, target) => render$1(target, content)
});

export { define, render };
