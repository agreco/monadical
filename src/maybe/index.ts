import notNil from '../notNil';
import Maybe, { Just, Nothing } from './typings';

export default abstract class MaybeClass<J, N> implements Maybe<J, N> {
  value: J | N;
  
  public static just<J, N>(maybeJustVal: J): Maybe<J, N> {
    return new JustClass<J, N>(maybeJustVal);
  }

  public static nothing<J, N = void>(maybeNothingVal: N = void 0): Maybe<J, N> {
    return new NothingClass<J, N>(maybeNothingVal);
  }

  public static of<J, N>(maybeOfVal: J): Maybe<J, N> {
    return MaybeClass.just<J, N>(maybeOfVal);
  }

  public static nullable<J, N>(maybeNullableVal: J | N): Maybe<J, N> {
    return !notNil(maybeNullableVal)
      ? MaybeClass.nothing<J, N>(maybeNullableVal as N)
      : MaybeClass.just<J, N>(maybeNullableVal as J);
  }

  public abstract isNothing(): boolean;

  public abstract isJust(): boolean;

  public abstract getOrElse(maybeDefaultVal: any | J): any | J;

  public abstract map<T>(func: (maybeMapVal: J) => T): Maybe<T, N>;

  public abstract chain<T>(func: (maybeChainVal: J) => T): Maybe<T, N> | T;

  public abstract filter(func: (maybeFilterVal: J) => boolean): Maybe<J, N>;
}

class JustClass<J, N> extends MaybeClass<J, N> implements Just<J, N> {
  constructor(justConstructorVal: J | N) {
    super();
    this.value = justConstructorVal;
  }
  
  public toString(): string {
    return `Just[ ${this.value} ]`;
  }
  
  public isJust(): boolean {
    return true;
  }
  
  public isNothing(): boolean {
    return false;
  }
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public getOrElse<T>(_: T): J {
    return this.value as J;
  }
  
  public map<T>(func: (justMapVal: J) => T): Maybe<T, N> {
    return MaybeClass.just(func(this.value as J));
  }
  
  public chain<T>(func: (justChainVal: J) => T): T {
    return func(this.value as J);
  }
  
  public filter(func: (justFilterVal: J) => boolean): Maybe<J, N> {
    return MaybeClass.nullable<J, N>(func(this.value as J) ? this.value : null);
  }
}

export { JustClass as Just };
export { NothingClass as Nothing };

export class NothingClass<J, N> extends MaybeClass<J, N> implements Nothing<J, N> {
  constructor(nothingConstructorVal: J | N) {
    super();
    this.value = nothingConstructorVal;
  }
  
  public toString(): string {
    return `Nothing[]`;
  }
  
  public isJust(): boolean {
    return false;
  }
  
  public isNothing(): boolean {
    return true;
  }
  
  public getOrElse(nothingDefaultVal: any): any {
    return nothingDefaultVal;
  }
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public map<T>(_: (nothingMapVal: J) => T): Maybe<T, N> {
    return this as unknown as Maybe<T, N>;
  }
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public chain<T>(_: (nothingChainVal: J) => T): Maybe<T, N> {
    return this as unknown as Maybe<T, N>;
  }
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public filter(_: (nothingFilterVal: J) => boolean): Maybe<J, N> {
    return this;
  }
}
