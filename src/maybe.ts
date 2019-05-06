
import notNil from "./notNil";

type T = any;

export default class Maybe<T> {
  
  _value: T = void 0;
 
  public get isNothing (): boolean {
    return false;
  };
  
  public get isJust (): boolean {
    return false;
  }
  
  public static just <T>(val: T): Just<T> {
    return new Just(val);
  }
  
  public static nothing <T>(val: T): Nothing<T> {
    return new Nothing();
  }
  
  public static of <T>(val: T): Just<T> {
    return Maybe.just(val);
  }
  
  public static nullable <U>(val: U): Just<U> | Nothing<U> {
    return notNil(val) ? Maybe.just(val) : Maybe.nothing(val);
  }
}

export class Just<U> extends Maybe<T> {
  
  _value: T;
  
  public constructor (value: T) {
    super();
    this._value = value;
  }
  
  public get value (): T {
    return this._value;
  }
  
  public map <V>(func: (a: any) => V): Just<V> | Nothing<V> {
    return Maybe.nullable(func(this._value));
  }
  
  public chain <V>(func: (a: any) => V): V {
    return func(this._value);
  }
  
  public getOrElse <A>(val: A): T {
    return this._value;
  }
  
  public filter <U>(func: (a: any) => any): Just<U> | Nothing<U>  {
    return Maybe.nullable(func(this._value) ? this._value : null);
  }
  
  public get isJust (): boolean {
    return true;
  }
  
  public toString (): string {
    return `Just[${this._value}]`;
  }
}

export class Nothing<U> extends Maybe<T> {
  
  public get value (): TypeError {
    throw new TypeError('Value extraction invalid for type Nothing[].');
  }
  
  public get isNothing () {
    return true;
  }
  
  public map (func: (a: any) => any): Nothing<U> {
    return this;
  }
  
  public chain (func: (a: any) => any) {
    return this;
  }
  
  public getOrElse <V>(val: V): V {
    return val;
  }
  
  public filter (func: (a: any) => any): Nothing<U> {
    return this._value;
  }
  
  public toString (): string {
    return 'Nothing[]';
  }
}
