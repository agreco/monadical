import { TChainC, TGetOrElseC, TMapC } from './types';
declare class Container<T> {
    _value: T;
    constructor(value: T);
    get(): T;
    map<U>(f: (x: T) => U): Container<U>;
    join(): Container<T>;
    static of<U>(value: U): Container<U>;
    toString(): string;
}
export default Container;
export declare const mapC: TMapC;
export declare const chainC: TChainC;
export declare const getOrElseC: TGetOrElseC;
