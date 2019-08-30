
import notNil from "./notNil";

export default class Maybe<J, N> {
  
  _value: J = void 0;
  
  public toString (): string {
    return `Maybe[${ this.value }]`;
  }
  
  public get isNothing (): boolean {
    return false;
  };
  
  public get isJust (): boolean {
    return false;
  }
  
  public static just <J, N>(val: J): Just<J> {
    return new Just<J>(val);
  }
  
  public static nothing <J, N>(val: J): Nothing<N> {
    return new Nothing<N>();
  }
  
  public static of <J, N>(val: J): Just<J> {
    return Maybe.just<J, N>(val);
  }
  
  public static nullable <J, N>(val: J): Just<J> | Nothing<N> {
    return notNil(val) ? Maybe.just<J, N>(val) : Maybe.nothing<J, N>(void 0);
  }
  
  public get value (): J {
    return this._value;
  }
}

export class Just<J> extends Maybe<J, any> {
  
  public constructor (value: J) {
    super();
    this._value = value;
  }
  
  public toString (): string {
    return `Just[${ this.value }]`;
  }
  
  public get isJust (): boolean {
    return true;
  }
  
  public get isNothing (): boolean {
    return false;
  }
  
  public map <J, N>(func: (a: any) => J): Just<J> | Nothing<N> {
    return Maybe.nullable<J, N>(func(this.value));
  }
  
  public chain <J, N>(func: (a: any) => J): J | Just<J> | Nothing<N> {
    return func(this.value);
  }
  
  public getOrElse <T>(val: T): any {
    return this.value;
  }
  
  public filter <J, N>(func: (a: any) => boolean): Just<J> | Nothing<N> {
    return Maybe.nullable(func(this.value) ? this.value : null);
  }
}

export class Nothing<N> extends Maybe<any, N> {
  
  public toString (): string {
    return `Nothing[]`;
  }
  
  public get isJust (): boolean {
    return false;
  }
  
  public get isNothing (): boolean {
    return true;
  }
  
  public map <J, N>(func: (a: any) => J): Just<J> | Nothing<N> {
    return this;
  }
  
  public chain <J, N>(func: (a: any) => J): J | Just<J> | Nothing<N> {
    return this.value;
  }
  
  public getOrElse <T>(val: T): any {
    return val;
  }
  
  public filter <J, N>(func: (a: any) => boolean): Just<J> | Nothing<N>  {
    return this;
  }
}
