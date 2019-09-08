import { TFunc1, TFunc1Optional } from './index';
export default class IO<T> {
    effect: TFunc1Optional;
    constructor(effect: TFunc1Optional);
    map<U>(func: TFunc1<U>): IO<TFunc1<U>>;
    chain(func: TFunc1Optional): any;
    run(): any;
    static of<U>(val: U): IO<U>;
    static from<T>(func: TFunc1Optional): IO<T>;
    static lift<U>(val: U): IO<U>;
}
