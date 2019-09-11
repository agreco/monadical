import { Func1, Func1Optional } from './index';
export default class IO<T> {
    effect: Func1Optional;
    constructor(effect: Func1Optional);
    map<U>(func: Func1<U>): IO<Func1<U>>;
    chain(func: Func1Optional): any;
    run(): any;
    static of<U>(val: U): IO<U>;
    static from<T>(func: Func1Optional): IO<T>;
    static lift<U>(val: U): IO<U>;
}
