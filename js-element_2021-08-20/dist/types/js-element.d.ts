import { Component } from 'js-element/core';
export { attr, createCtx, createEvent, createRef, defineProvider, event, intercept, prop, ref, Attr, Ctrl, Component, Context, Listener, MethodsOf, Ref, TypedEvent } from 'js-element/core';
export declare const define: {
    <P extends {
        [x: string]: any;
    } = {}>(config: {
        tag: string;
        props?: (new () => P) | undefined;
        slots?: string[] | undefined;
        uses?: string[] | undefined;
        styles?: string | string[] | (() => string | string[]) | undefined;
        init: () => () => VNode;
    }): Component<P>;
    (name: string, init: () => () => VNode): Component<{}>;
    <P_1 extends {
        [x: string]: any;
    }>(tag: string, propsClass: new () => P_1, init: (props: P_1) => () => VNode): Component<P_1>;
    <P_2 extends {
        [x: string]: any;
    } = {}>(config: {
        tag: string;
        props?: (new () => P_2) | undefined;
        slots?: string[] | undefined;
        uses?: (object | Function)[] | undefined;
        styles?: string | string[] | (() => string | string[]) | undefined;
    }): {
        (init: (props: P_2) => () => VNode): Component<P_2>;
        bind(init: (props: P_2) => () => VNode): Component<P_2>;
        main(init: (props: P_2) => () => VNode): Component<P_2>;
        init(init: (props: P_2) => () => VNode): Component<P_2>;
    };
}, render: (content: VElement<any> | null, container: string | Element) => void, impl: <T extends {
    [x: string]: any;
}>(constructor: new () => T, fn: (data: T) => () => VNode) => Component<T>;
export { h, asComponent, VNode, VElement };
export declare const html: (strings: TemplateStringsArray, ...values: any[]) => VElement<any> | VElement<any>[];
declare type Props = Record<string, any>;
declare type VElement<T extends Props = any> = Record<any, any>;
declare type VNode = null | boolean | number | string | VElement | Iterable<VNode>;
declare function asComponent<P extends Props = any>(tagName: string, customElementClass: {
    new (): HTMLElement;
}, deps?: any[]): Component<P>;
declare function h(type: string, props?: Props | null, ...children: VNode[]): VElement;
declare function h<P extends Props>(type: Component<P>, props?: Partial<P> | null, ...children: VNode[]): VElement;
declare function h<P extends Props>(type: (props: P) => () => VNode, ...children: VNode[]): VElement;
