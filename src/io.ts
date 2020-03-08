import { Func1, Func1Optional } from './index';
import isFunction from './isFunction';

export default class IO<T> {
  effect: Func1Optional;

  public constructor(effect: Func1Optional) {
    if (!isFunction(effect)) {
      throw new TypeError('Invalid parameter passed to IO. Please provide a function.');
    }

    this.effect = effect;
  }

  public map<U>(func: Func1<U>): IO<Func1<U>> {
    return new IO(() => func(this.effect()));
  }

  public chain(func: Func1Optional): any {
    return func(this.effect());
  }

  public run(): any {
    return this.effect();
  }

  public static of<U>(val: U): IO<U> {
    return new IO(() => val);
  }

  public static from<T>(func: Func1Optional): IO<T> {
    return new IO(func);
  }

  public static lift<U>(val: U): IO<U> {
    return IO.of(val);
  }
}
