export default class Maybe<J, N> {
    _value: J;
    toString(): string;
    readonly isNothing: boolean;
    readonly isJust: boolean;
    static just<J, N>(val: J): Just<J>;
    static nothing<J, N>(val: J): Nothing<N>;
    static of<J, N>(val: J): Just<J>;
    static nullable<J, N>(val: J): Just<J> | Nothing<N>;
    readonly value: J;
}
export declare class Just<J> extends Maybe<J, any> {
    constructor(value: J);
    toString(): string;
    readonly isJust: boolean;
    readonly isNothing: boolean;
    map<J, N>(func: (a: any) => J): Just<J> | Nothing<N>;
    chain<J, N>(func: (a: any) => J): J | Just<J> | Nothing<N>;
    getOrElse<T>(val: T): any;
    filter<J, N>(func: (a: any) => boolean): Just<J> | Nothing<N>;
}
export declare class Nothing<N> extends Maybe<any, N> {
    toString(): string;
    readonly isJust: boolean;
    readonly isNothing: boolean;
    map<J, N>(func: (a: any) => J): Just<J> | Nothing<N>;
    chain<J, N>(func: (a: any) => J): J | Just<J> | Nothing<N>;
    getOrElse<T>(val: T): any;
    filter<J, N>(func: (a: any) => boolean): Just<J> | Nothing<N>;
}
