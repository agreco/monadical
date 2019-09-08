export default class Maybe<J, N> {
    isNothing(): boolean;
    isJust(): boolean;
    static just<J, N>(val: J): Just<J>;
    static nothing<J, N>(_: N): Nothing<N>;
    static of<J>(val: J): Just<J>;
    static nullable<J, N>(val: J): Maybe<J, N>;
    getOrElse<T, N>(_: N): T | N;
    chain<T>(_: (a: (J | N)) => T): T;
    map(_: (val: (J | N)) => (J | N)): Maybe<J, N>;
    filter(_: (val: J | N) => boolean): Maybe<J, N>;
}
export declare class Just<J> {
    private readonly _value;
    constructor(value: J);
    readonly value: J;
    isJust(): boolean;
    isNothing(): boolean;
    map(func: (a: J) => J): Just<J>;
    chain<T>(func: (a: J) => T): T;
    getOrElse(_: any): J;
    filter<N>(func: (a: J) => boolean): Maybe<J, N>;
    toString(): string;
}
export declare class Nothing<N> {
    private readonly _value;
    constructor(value: N);
    toString(): string;
    isJust(): boolean;
    isNothing(): boolean;
    map(_: any): Nothing<N>;
    chain(_: any): N;
    getOrElse<T>(defaultVal: T): T;
    filter(_: any): Nothing<N>;
}
