
import { FuncT } from './types';
import isFunction from './isFunction';

export default class IO<T> {
  
  effect: FuncT;
  
  public constructor (effect: FuncT) {
    if (!isFunction(effect)) {
      throw new TypeError('Invalid parameter passed to IO. Please provide a function.');
    }
    
    this.effect = effect;
  }
  
  public map (func: FuncT): IO<FuncT> {
    return new IO(() => func(this.effect()));
  }
  
  public chain (func: FuncT): any {
    return func(this.effect());
  }
  
  public run (): any {
    return this.effect();
  }
  
  public static of <U>(val: U): IO<U> {
    return new IO(() => val);
  }
  
  public static from <T>(func: FuncT): IO<T> {
    return new IO(func);
  }
  
  public static lift <U>(val: U): IO<U> {
    return IO.of(val);
  }
}
