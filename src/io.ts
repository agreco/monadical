
import { TFunc1, TFunc1Optional } from './index';
import isFunction from './isFunction';

export default class IO<T> {
  
  effect: TFunc1Optional;
  
  public constructor (effect: TFunc1Optional) {
    if (!isFunction(effect)) {
      throw new TypeError('Invalid parameter passed to IO. Please provide a function.');
    }
    
    this.effect = effect;
  }
  
  public map <U>(func: TFunc1<U>): IO<TFunc1<U>> {
    return new IO(() => func(this.effect()));
  }
  
  public chain (func: TFunc1Optional): any {
    return func(this.effect());
  }
  
  public run (): any {
    return this.effect();
  }
  
  public static of <U>(val: U): IO<U> {
    return new IO(() => val);
  }
  
  public static from <T>(func: TFunc1Optional): IO<T> {
    return new IO(func);
  }

  public static lift <U>(val: U): IO<U> {
    return IO.of(val);
  }
}
