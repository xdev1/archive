import { Context, Ref } from 'js-element/core';
declare type State = Record<string, any>;
declare type Task = () => void;
declare type Methods = Record<string, (...args: any[]) => any>;
declare type Store<S extends State> = {
    getState(): S;
    subscribe(subscriber: () => void): () => void;
    dispatch(msg: any): void;
    destroy?(): void;
};
declare type StateUpdater<T extends Record<string, any>> = {
    (newState: Partial<T>): void;
    (stateUpdate: (oldState: T) => Partial<T>): void;
    (key: keyof T, newValue: T[typeof key]): void;
    (key: keyof T, valueUpdate: (oldValue: T[typeof key]) => T[typeof key]): void;
};
declare type Message = {
    type: string;
} & Record<string, any>;
declare type MessageCreators = {
    [key: string]: (...args: any[]) => Message;
};
declare type Selectors<S extends State> = {
    [key: string]: (state: S) => any;
};
declare type SelectorsOf<S extends State, U extends Selectors<S>> = {
    [K in keyof U]: U[K] extends (state: S) => infer R ? R : never;
};
export declare function hook<A extends any[], R, F extends {
    (...args: A): R;
}>(name: string, fn: F): F;
declare type CtxConfig = Record<string, Context<any> | (() => any)>;
declare type ResultOfCtxConfig<C extends CtxConfig> = {
    [K in keyof C]: C[K] extends Context<infer R> ? R : C[K] extends () => infer R ? R : never;
};
export declare const useCtx: typeof useCtxFn;
declare function useCtxFn<C extends CtxConfig>(config: C): ResultOfCtxConfig<C>;
declare function useCtxFn<T>(ctx: Context<T>): () => T;
export declare const useHost: () => HTMLElement;
export declare const useMethods: <M extends Methods, R extends Ref<M>>(ref: R | undefined, methods: M | null) => void;
export declare const useRefresher: () => Task;
export declare const useStatus: () => {
    isMounted: () => boolean;
    hasUpdated: () => boolean;
};
export declare const useDefaults: <P extends Record<string, any>, D extends Partial<P>>(props: P, defaults: D) => P & Required<D>;
export declare const useValue: <T>(initialValue: T) => [() => T, (updater: T | ((value: T) => T)) => void];
export declare const useState: <T extends Record<string, any>>(initialState: T) => [T, StateUpdater<T>];
export declare const useReactive: <S extends State>(state: S) => S;
export declare const useStyles: (...styles: string[]) => (...styles: string[]) => void;
export declare const useEmitter: () => <E extends CustomEvent<any>>(ev: E, handler?: ((ev: E) => void) | undefined) => void;
export declare const useMemo: <T, A extends any[], G extends () => A>(getValue: (...args: ReturnType<G>) => T, getDeps: G) => {
    readonly value: T;
};
export declare const useAfterMount: (action: () => void | undefined | null | (() => void)) => void;
export declare const useBeforeMount: (action: () => void | undefined | null | (() => void)) => void;
export declare const useAfterUpdate: (action: () => void | undefined | null | (() => void)) => void;
export declare const useBeforeUnmount: (action: () => void) => void;
export declare const useEffect: (action: () => void | undefined | null | (() => void), getDeps?: (() => any[]) | undefined) => void;
export declare const useInterval: (task: Task, delay: number | (() => number)) => void;
declare type TimerSignature = {
    (delay: number | (() => number)): () => Date;
    <T>(delay: number | (() => number), getValue: (n: number) => T): () => T;
};
export declare const useTimer: TimerSignature;
export declare const usePromise: <T>(getPromise: () => Promise<T>, getDeps?: (() => any[]) | undefined) => {
    getState: () => "pending" | "resolved" | "rejected";
    getResult: () => T | undefined;
    getError: () => Error | undefined;
};
declare type ActionsOf<C extends MessageCreators> = {
    [K in keyof C]: C[K] extends (...args: infer A) => any ? (...args: A) => void : never;
};
export declare const useActions: <C extends MessageCreators>(msgCreators: C) => ActionsOf<C>;
export declare function createStoreHook<S extends State>(store: Store<S>): () => S;
export declare function createStoreHooks<S extends State>(): [
    (store: Store<S>) => void,
    <U extends Selectors<S>>(selectors: U) => SelectorsOf<S, U>
];
export {};
