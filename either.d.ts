import { IEither } from './index';
export default class Either<L, R> implements IEither<L, R> {
    isRight(): boolean;
    isLeft(): boolean;
    static left<L, R>(value: L): Left<L>;
    static right<L, R>(value: R): Right<R>;
    static of<R>(value: R): Right<R>;
    static nullable<L, R>(value: R): Either<L, R>;
    chain<T>(func: (a: (L | R)) => T): T;
    getOrElse<T>(defaultVal: T): T | R;
    getOrElseThrow(func: (val: (L | R)) => Error): R | Error;
    map(func: (val: (L | R)) => (L | R)): Either<L, R>;
    orElse<T>(func: (defaultVal: (L | R)) => T): Either<L, R>;
    filter(func: (val: L | R) => boolean): Either<L, R>;
}
export declare class Right<R> {
    private readonly _value;
    constructor(value: R);
    readonly value: R;
    isRight(): boolean;
    isLeft(): boolean;
    map(func: (val: R) => R): Right<R>;
    getOrElse(_: any): R;
    orElse(_: any): Right<R>;
    chain<T>(func: (a: R) => T): T;
    getOrElseThrow(_: any): R;
    filter<L>(func: (val: R) => boolean): Either<L, R>;
    toString(): string;
}
export declare class Left<L> {
    private readonly _value;
    constructor(value: L);
    isRight(): boolean;
    isLeft(): boolean;
    chain(_: any): Left<L>;
    getOrElse<T>(defaultVal: T): T;
    map(_: any): Left<L>;
    orElse<T>(func: (val: L) => T): T;
    filter(_: any): Left<L>;
    getOrElseThrow(func: (val: L) => Error): Error;
    toString(): string;
}
