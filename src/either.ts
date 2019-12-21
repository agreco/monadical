
import notNil from './notNil';

export default abstract class Either<L, R> {

  abstract isRight (): boolean;

  abstract isLeft (): boolean;

  abstract chain <T>(func: (a: L | R) => T): Left<L, R> | T;

  abstract getOrElse (defaultVal: any): any | R;

  abstract getOrElseThrow (func: (val: L | R) => Error): R | Error;

  abstract filter (func: (val: L | R) => boolean): Either<L, R>;

  abstract join (): Left<L, R> | Right<L, R>;

  abstract orElse (func: (val: L | R) => any): Right<L, R> | any;

  abstract map <T>(func: (val: L | R) => T): Either<L, T>;

  public get value (): unknown {
    return this;
  }

  public static left <L, R>(val: L): Left<L, R> {
    return new Left<L, R>(val);
  }

  public static right <L, R>(val: R): Right<L, R> {
    return new Right<L, R>(val);
  }

  public static of <L, R>(val: R): Right<L, R> {
    return Either.right<L, R>(val);
  }

  public static nullable <T>(value: T): Either<void, T> {
    return (!notNil(value) ? Either.left<void, T>(void 0) : Either.right<void, T>(value)) as Either<void, T>;
  }
};

export class Right<L, R> extends Either<L, R> {

  private readonly _value: R;

  public constructor (value: R) {
    super();
    this._value = value;
  }

  public toString (): string {
    return `Right[ ${ this._value } ]`;
  }

  public get value (): R {
    return this._value;
  }

  public isRight (): boolean {
    return true;
  }

  public isLeft (): boolean {
    return false;
  }

  public chain <T>(func: (a: R) => T): T {
    return func(this._value);
  }

  public getOrElse <T>(defaultVal: T): R {
    return this._value;
  }

  public getOrElseThrow (func: (val: L | R) => Error): R | Error {
    return this._value;
  }

  public filter (func: (val: R) => boolean): Either<L, R> {
    return Either.nullable(func(this._value) ? this._value : null) as Either<L, R>;
  }

  public join <T>(): Right<L, R> {
    return (!(this._value instanceof Right) ? this : this._value.join());
  }

  public orElse (func: (val: R) => any): this {
    return this;
  }

  public map <T>(func: (val: R) => T): Either<L, T> {
    return Either.right(func(this._value)) as unknown as Either<L, T>;
  }
}

export class Left<L, R> extends Either<L, R> {

  private readonly _value: L;

  public constructor (value: L) {
    super();
    this._value = value;
  }

  public toString (): string {
    return `Left[ ${ this._value } ]`;
  }

  public get value (): L {
    return this._value;
  }

  public isRight (): boolean {
    return false;
  }

  public isLeft (): boolean {
    return true;
  }

  public chain <T>(func: (val: R) => T): Left<L, R> {
    return this;
  }

  public getOrElse (defaultVal: any): any {
    return defaultVal;
  }

  public getOrElseThrow (func: (val: L) => Error): R | Error {
    throw func(this._value);
  }

  public filter (func: (val: R) => boolean): this {
    return this;
  }

  public join (): Left<L, R> {
    return (!(this._value instanceof Left) ? this : this._value.join());
  }

  public orElse (func: (val: L) => any): any {
    return func(this._value);
  }

  public map <T>(func: (val: L) => T): Either<L, T> {
    return this as unknown as Either<L, T>;
  }
}
