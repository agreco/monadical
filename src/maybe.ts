
import notNil from "./notNil";

export default abstract class Maybe<J, N> {

  public get value (): unknown {
    return this;
  }

  public static just <J, N>(val: J): Just<J, N> {
    return new Just<J, N>(val);
  }

  public static nothing <J, N>(): Nothing<J, N> {
    return new Nothing<J, N>();
  }

  public static of <J, N>(val: J): Just<J, N> {
    return Maybe.just(val);
  }

  public static nullable <J, N = void>(val: J): Maybe<J, N> {
    return (!notNil(val) ? Maybe.nothing<J, N>() : Maybe.just<J, N>(val));
  }

  abstract isNothing (): boolean;

  abstract isJust (): boolean;

  abstract chain <T>(func: (a: (J | N)) => T): Nothing<J, N> | T;

  abstract getOrElse (defaultVal: any): any | J;

  abstract filter (func: (val: J | N) => boolean): Maybe<J, N>;

  abstract map <T>(func: (val: (J | N)) => T): Maybe<T, N>;
}

export class Just<J, N> extends Maybe<J, N> {

  private readonly _value: J;

  public constructor (value: J) {
    super();
    this._value = value;
  }

  public get value (): J {
    return this._value;
  }

  public toString (): string {
    return `Just[ ${ this._value } ]`;
  }

  public isJust (): boolean {
    return true;
  }

  public isNothing (): boolean {
    return false;
  }

  public chain <T>(func: (a: J) => T): T {
    return func(this._value) as T;
  }

  public filter <N>(func: (a: J) => boolean): Maybe<J, N> {
    return Maybe.nullable(func(this._value) ? this._value : null) as Maybe<J, N>;
  }

  public getOrElse <T>(defaultVal: T): J {
    return this._value;
  }

  public map <T>(func: (a: J) => T): Maybe<T, N> {
    return Maybe.just(func(this._value)) as unknown as Maybe<T, N>;
  }
}

export class Nothing<J, N> extends Maybe<J, N>{

  private readonly _value: N;

  public constructor () {
    super();
  }

  public get value (): N {
    return this._value;
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

  public chain <T>(func: (val: J) => T): Nothing<J, N> {
    return this;
  }

  public filter (func: (val: J) => boolean): Nothing<J, N>  {
    return this;
  }

  public getOrElse (defaultVal: any): any {
    return defaultVal;
  }

  public map <T>(func: (val: J) => T): Maybe<T, N> {
    return this as unknown as Maybe<T, N>;
  }
}
