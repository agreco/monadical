
import notNil from "./notNil";

export default class Maybe<J, N> {

  public isNothing (): boolean {
    return false;
  };
  
  public isJust (): boolean {
    return false;
  }
  
  public static just <J, N>(val: J): Just<J> {
    return new Just<J>(val);
  }
  
  public static nothing <J, N>(_: N): Nothing<N> {
    return new Nothing<N>(_);
  }
  
  public static of <J>(val: J): Just<J> {
    return Maybe.just(val);
  }
  
  public static nullable <J, N>(val: J): Maybe<J, N> {
    return (notNil(val) ? Maybe.just(val) : Maybe.nothing(void 0)) as unknown as Maybe<J, N>;
  }

  public getOrElse <T, N>(_: N): T | N {
    return;
  }

  public chain <T>(_: (a: (J | N)) => T): T {
    return;
  }

  public map (_: (val: (J | N)) => (J | N)): Maybe<J, N> {
    return;
  }

  public filter (_: (val: J | N) => boolean): Maybe<J, N> {
    return;
  }
}

export class Just<J> {

  private readonly _value: J;

  public constructor (value: J) {
    this._value = value;
  }

  public get value (): J {
    return this._value;
  }

  public isJust (): boolean {
    return true;
  }
  
  public isNothing (): boolean {
    return false;
  }
  
  public map (func: (a: J) => J): Just<J> {
    return Maybe.of<J>(func(this._value));
  }
  
  public chain <T>(func: (a: J) => T): T {
    return func(this._value);
  }
  
  public getOrElse (_: any): J {
    return this._value;
  }
  
  public filter <N>(func: (a: J) => boolean): Maybe<J, N> {
    return Maybe.nullable(func(this._value) ? this._value : null);
  }

  public toString (): string {
    return `Just[ ${ this._value } ]`;
  }
}

export class Nothing<N> {

  private readonly _value: N;

  public constructor (value: N) {
    this._value = value;
  }

  public toString (): string {
    return `Nothing[]`;
  }
  
  public isJust (): boolean {
    return false;
  }
  
  public isNothing (): boolean {
    return true;
  }
  
  public map (_: any): Nothing<N> {
    return this;
  }
  
  public chain (_: any): N {
    return this._value;
  }
  
  public getOrElse <T>(defaultVal: T): T {
    return defaultVal;
  }
  
  public filter (_: any): Nothing<N>  {
    return this;
  }
}
