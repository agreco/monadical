declare type T = any;
export default class Either<T> {
    _value: T;
    constructor(value: T);
    readonly value: T;
    static left<U>(value: U): Left<U>;
    static right<U>(value: U): Right<U>;
    static of<U>(value: U): Right<U>;
    static nullable<U>(value: U): Right<U> | Left<U>;
}
export declare class Right<U> extends Either<T> {
    readonly isRight: boolean;
    readonly isLeft: boolean;
    map<V>(func: (a: any) => V): Right<V>;
    getOrElse(val: U): U;
    orElse(): Right<U>;
    chain<V>(func: (a: any) => V): V;
    getOrElseThrow(_: any): Right<U>;
    filter<U>(func: (a: any) => any): Right<U> | Left<U>;
    toString(): string;
}
export declare class Left<U> extends Either<T> {
    readonly value: TypeError;
    readonly isRight: boolean;
    readonly isLeft: boolean;
    map<U>(_: any): Left<U>;
    getOrElse<U>(defaultVal: U): U;
    orElse<V>(func: (a: any) => V): V;
    chain(func: (a: any) => any): Left<U>;
    getOrElseThrow(val: string): Error;
    filter(func: (a: any) => any): Left<U>;
    toString(): string;
}
export {};
