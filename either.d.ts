export default abstract class Either<L, R> {
    abstract isRight(): boolean;
    abstract isLeft(): boolean;
    abstract chain<T>(func: (a: L | R) => T): Left<L, R> | T;
    abstract getOrElse(defaultVal: any): any | R;
    abstract getOrElseThrow(func: (val: L | R) => Error): R | Error;
    abstract filter(func: (val: L | R) => boolean): Either<L, R>;
    abstract join(): Left<L, R> | Right<L, R>;
    abstract orElse(func: (val: L | R) => any): Right<L, R> | any;
    abstract map<T>(func: (val: L | R) => T): Either<L, T>;
    get value(): unknown;
    static left<L, R>(val: L): Left<L, R>;
    static right<L, R>(val: R): Right<L, R>;
    static of<L, R>(val: R): Right<L, R>;
    static nullable<T>(value: T): Either<void, T>;
}
export declare class Right<L, R> extends Either<L, R> {
    private readonly _value;
    constructor(value: R);
    toString(): string;
    get value(): R;
    isRight(): boolean;
    isLeft(): boolean;
    chain<T>(func: (a: R) => T): T;
    getOrElse<T>(defaultVal: T): R;
    getOrElseThrow(func: (val: L | R) => Error): R | Error;
    filter(func: (val: R) => boolean): Either<L, R>;
    join<T>(): Right<L, R>;
    orElse(func: (val: R) => any): this;
    map<T>(func: (val: R) => T): Either<L, T>;
}
export declare class Left<L, R> extends Either<L, R> {
    private readonly _value;
    constructor(value: L);
    toString(): string;
    get value(): L;
    isRight(): boolean;
    isLeft(): boolean;
    chain<T>(func: (val: R) => T): Left<L, R>;
    getOrElse(defaultVal: any): any;
    getOrElseThrow(func: (val: L) => Error): R | Error;
    filter(func: (val: R) => boolean): this;
    join(): Left<L, R>;
    orElse(func: (val: L) => any): any;
    map<T>(func: (val: L) => T): Either<L, T>;
}
