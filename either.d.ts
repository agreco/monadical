declare type EitherTransform<A, T, L, R> = A extends Left<L, R> ? Left<L, T> : Right<L, T>;
export default abstract class Either<L, R> {
    static left<L, R>(value: L): Left<L, R>;
    static right<L, R>(value: R): Right<L, R>;
    static of<L, R>(value: R): Right<L, R>;
    static nullable<L, R>(value: R): Either<L, R>;
    abstract isRight(): boolean;
    abstract isLeft(): boolean;
    abstract chain<T>(func: (a: L | R) => T): Left<L, R> | T;
    abstract getOrElse<T>(defaultVal: T): T | R;
    abstract getOrElseThrow(func: (val: L | R) => Error): R | Error;
    abstract filter<T>(func: (val: T) => boolean): EitherTransform<this, T, L, R>;
    abstract join(): Left<L, R> | Right<L, R>;
    abstract orElse<T>(func: (val: L | R) => T): T | Right<L, R>;
    abstract map<T>(func: (val: L | R) => T): EitherTransform<this, T, L, R>;
}
export declare class Right<L, R> extends Either<L, R> {
    private readonly _value;
    constructor(value: R);
    toString(): string;
    readonly value: R;
    isRight(): boolean;
    isLeft(): boolean;
    chain<T>(func: (a: R) => T): T;
    getOrElse<T>(defaultVal: T): R;
    getOrElseThrow(func: (val: L | R) => Error): R | Error;
    filter<T>(func: (val: T) => boolean): EitherTransform<this, T, L, R>;
    join<T>(): Right<L, R>;
    orElse<T>(func: (val: R) => T): Right<L, R>;
    map<T>(func: (val: R) => T): EitherTransform<this, T, L, R>;
}
export declare class Left<L, R> extends Either<L, R> {
    private readonly _value;
    constructor(value: L);
    toString(): string;
    isRight(): boolean;
    isLeft(): boolean;
    chain<T>(func: (a: R) => T): Left<L, R>;
    getOrElse<T>(defaultVal: T): T;
    getOrElseThrow(func: (val: L) => Error): R | Error;
    filter<T>(func: (val: T) => boolean): EitherTransform<this, T, L, R>;
    join(): Left<L, R>;
    orElse<T>(func: (val: L) => T): T;
    map<T>(_: (val: R) => T): EitherTransform<this, T, L, R>;
}
export {};
