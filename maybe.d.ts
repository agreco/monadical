export default abstract class Maybe<J, N> {
    get value(): unknown;
    static just<J, N>(val: J): Just<J, N>;
    static nothing<J, N>(): Nothing<J, N>;
    static of<J, N>(val: J): Just<J, N>;
    static nullable<J, N = void>(val: J): Maybe<J, N>;
    abstract isNothing(): boolean;
    abstract isJust(): boolean;
    abstract chain<T>(func: (a: (J | N)) => T): Nothing<J, N> | T;
    abstract getOrElse(defaultVal: any): any | J;
    abstract filter(func: (val: J | N) => boolean): Maybe<J, N>;
    abstract map<T>(func: (val: (J | N)) => T): Maybe<T, N>;
}
export declare class Just<J, N> extends Maybe<J, N> {
    private readonly _value;
    constructor(value: J);
    get value(): J;
    toString(): string;
    isJust(): boolean;
    isNothing(): boolean;
    chain<T>(func: (a: J) => T): T;
    filter<N>(func: (a: J) => boolean): Maybe<J, N>;
    getOrElse<T>(defaultVal: T): J;
    map<T>(func: (a: J) => T): Maybe<T, N>;
}
export declare class Nothing<J, N> extends Maybe<J, N> {
    private readonly _value;
    constructor();
    get value(): N;
    toString(): string;
    isJust(): boolean;
    isNothing(): boolean;
    chain<T>(func: (val: J) => T): Nothing<J, N>;
    filter(func: (val: J) => boolean): Nothing<J, N>;
    getOrElse(defaultVal: any): any;
    map<T>(func: (val: J) => T): Maybe<T, N>;
}
