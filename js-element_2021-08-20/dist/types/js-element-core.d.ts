import { intercept, Attr, Ctrl } from './lib/base';
export { elem, prop };
export { adapt, attr, event, createCtx, createEvent, createRef, ref };
export { defineProvider, intercept, Attr };
export { Component, Context, Ctrl };
export { MethodsOf, Ref, Listener, TypedEvent };
declare type Props = Record<string, any>;
declare type PropsClass<P extends Props> = {
    new (): P;
};
declare type Ref<T> = {
    current: T | null;
};
declare type Listener<T extends Event> = (ev: T) => void;
declare type TypedEvent<T extends string, D = null> = CustomEvent<D> & {
    type: T;
};
declare type Context<T> = {
    kind: 'context';
    defaultValue: T;
};
declare type Component<P = {}> = {
    (props?: Partial<P> | JSX.HTMLAttributes<HTMLElement>): HTMLElement;
    tagName: string;
};
declare type MethodsOf<C> = C extends Component<infer P> ? P extends {
    ref?: Ref<infer M>;
} ? M extends Record<string, (...args: any[]) => any> ? M : never : never : never;
declare function attr<T>(type: {
    mapPropToAttr(value: T): string | null;
    mapAttrToProp(value: string | null): T;
}, reflect?: boolean): (proto: object, propName: string) => void;
declare function createCtx<T>(defaultValue?: T): Context<T>;
declare function defineProvider<T>(tagName: string, ctx: Context<T>): Component<{
    value: T;
}>;
declare function createRef<T = any>(value?: T | null): Ref<T>;
declare function createEvent<T extends string, D = null>(type: T, detail?: D, options?: {
    bubbles: boolean;
    cancelable?: boolean;
}): TypedEvent<T, D>;
declare function adapt<M, N>(config: {
    isMountable(what: any): boolean;
    patchContent(node: M | N | null, container: Element): void;
}): {
    define: {
        <P extends Props = {}>(config: {
            tag: string;
            props?: PropsClass<P> | undefined;
            slots?: string[] | undefined;
            uses?: string[] | undefined;
            styles?: string | string[] | (() => string | string[]) | undefined;
            init: () => () => N;
        }): Component<P>;
        (name: string, init: () => () => N): Component<{}>;
        <P_1 extends Props>(tag: string, propsClass: PropsClass<P_1>, init: (props: P_1) => () => N): Component<P_1>;
        <P_2 extends Props = {}>(config: {
            tag: string;
            props?: PropsClass<P_2> | undefined;
            slots?: string[] | undefined;
            uses?: (object | Function)[] | undefined;
            styles?: string | string[] | (() => string | string[]) | undefined;
        }): {
            (init: (props: P_2) => () => N): Component<P_2>;
            bind(init: (props: P_2) => () => N): Component<P_2>;
            main(init: (props: P_2) => () => N): Component<P_2>;
            init(init: (props: P_2) => () => N): Component<P_2>;
        };
    };
    render: (content: M | null, container: string | Element) => void;
    impl: <T extends Props>(constructor: new () => T, fn: (data: T) => () => N) => Component<T>;
};
declare function elem(tag: string): (constructor: Function) => void;
declare function elem(config: {
    tag: string;
    slots?: string[];
}): (constructor: Function) => void;
declare function prop<T>(attr?: {
    mapPropToAttr(value: T): string | null;
    mapAttrToProp(value: string | null): T;
}, reflect?: boolean): (proto: any, propName: string) => void;
declare function event<T>(type: string): (proto: any, propName: string) => void;
declare function ref<T>(): (proto: any, propName: string) => void;
