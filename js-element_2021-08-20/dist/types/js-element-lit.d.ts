import { TemplateResult } from 'lit-html';
export { html, svg, TemplateResult } from 'lit-html';
export { attr, createEvent, createRef, defineProvider, intercept, Attr, Component, Context, Listener, MethodsOf, Ref, TypedEvent } from 'js-element/core';
export declare const define: {
    <P extends {
        [x: string]: any;
    } = {}>(config: {
        tag: string;
        props?: (new () => P) | undefined;
        slots?: string[] | undefined;
        uses?: string[] | undefined;
        styles?: string | string[] | (() => string | string[]) | undefined;
        init: () => () => TemplateResult;
    }): import("js-element/core").Component<P>;
    (name: string, init: () => () => TemplateResult): import("js-element/core").Component<{}>;
    <P_1 extends {
        [x: string]: any;
    }>(tag: string, propsClass: new () => P_1, init: (props: P_1) => () => TemplateResult): import("js-element/core").Component<P_1>;
    <P_2 extends {
        [x: string]: any;
    } = {}>(config: {
        tag: string;
        props?: (new () => P_2) | undefined;
        slots?: string[] | undefined;
        uses?: (object | Function)[] | undefined;
        styles?: string | string[] | (() => string | string[]) | undefined;
    }): {
        (init: (props: P_2) => () => TemplateResult): import("js-element/core").Component<P_2>;
        bind(init: (props: P_2) => () => TemplateResult): import("js-element/core").Component<P_2>;
        main(init: (props: P_2) => () => TemplateResult): import("js-element/core").Component<P_2>;
        init(init: (props: P_2) => () => TemplateResult): import("js-element/core").Component<P_2>;
    };
}, render: (content: TemplateResult | null, container: string | Element) => void;
