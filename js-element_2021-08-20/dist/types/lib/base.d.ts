export { createCustomElementClass, intercept, Attr, Ctrl, PropConfig };
declare type PropConfig = {
    propName: string;
    hasAttr: false;
} | {
    propName: string;
    hasAttr: true;
    attrName: string;
    reflect: boolean;
    mapPropToAttr: (value: any) => string | null;
    mapAttrToProp: (value: string | null) => any;
};
declare type Ctrl = {
    getName(): string;
    getHost(): HTMLElement;
    isInitialized(): boolean;
    isMounted(): boolean;
    hasUpdated(): boolean;
    refresh(): void;
    beforeMount(taks: () => void): void;
    afterMount(task: () => void): void;
    onceBeforeUpdate(task: () => void): void;
    beforeUpdate(task: () => void): void;
    afterUpdate(task: () => void): void;
    beforeUnmount(task: () => void): void;
};
declare type InterceptFn = (ctrl: Ctrl, next: () => void) => void;
declare const Attr: {
    string: {
        mapPropToAttr: (it: string | null) => string | null;
        mapAttrToProp: (it: string | null) => string | null;
    };
    number: {
        mapPropToAttr: (it: number | null) => string | null;
        mapAttrToProp: (it: string | null) => number | null;
    };
    boolean: {
        mapPropToAttr: (it: boolean | null) => "" | null;
        mapAttrToProp: (it: string | null) => boolean;
    };
};
declare function intercept(point: 'init' | 'render', fn: InterceptFn): void;
declare function createCustomElementClass<C>(name: string, prepare: (host: HTMLElement, ctrl: Ctrl) => void, init: (host: HTMLElement, ctrl: Ctrl) => () => C, render: (content: C, target: HTMLElement) => void, propConfigs?: PropConfig[] | null, onPropChange?: ((ctrl: Ctrl, propName: string, value: any) => void) | null): {
    new (): HTMLElement;
};
