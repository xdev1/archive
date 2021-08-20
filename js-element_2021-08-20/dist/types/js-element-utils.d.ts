export { initStore, createMobxHooks };
declare type State = Record<string, any>;
declare type Store<S extends State> = {
    getState(): S;
    subscribe(subscriber: () => void): () => void;
    dispatch(msg: any): void;
    destroy?(): void;
};
declare type InitStoreResult<S extends State> = [
    Store<S>,
    (fn: (state: S) => S) => void,
    () => S
];
declare function initStore<S extends State>(initialState: S): InitStoreResult<S>;
declare function initStore<S extends State>(name: string, initialState: S): InitStoreResult<S>;
declare function createMobxHooks<S extends State>(): [(s: S) => S, () => S];
