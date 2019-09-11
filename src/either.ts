
import notNil from './notNil';

type EitherTransform<A, T, L, R> = A extends Left<L, R> ? Left<L, T> : Right<L, T>

export default abstract class Either<L, R> {

  public static left <L, R>(value: L): Left<L, R> {
    return new Left<L, R>(value);
  }

  public static right <L, R>(value: R): Right<L, R> {
    return new Right<L, R>(value);
  }

  public static of <L, R>(value: R): Right<L, R> {
    return Either.right<L, R>(value);
  }

  public static nullable <L, R>(value: R): Either<L, R> {
    return (!notNil(value) ? Either.left<L, R>(null) : Either.right<L, R>(value)) as unknown as Either<L, R>;
  }

  abstract isRight (): boolean;

  abstract isLeft (): boolean;

  abstract chain <T>(func: (a: L | R) => T): Left<L, R> | T;

  abstract getOrElse <T>(defaultVal: T): T | R;

  abstract getOrElseThrow (func: (val: L | R) => Error): R | Error;

  abstract filter <T>(func: (val: T) => boolean): EitherTransform<this, T, L, R>;

  abstract join (): Left<L, R> | Right<L, R>;

  abstract orElse <T>(func: (val: L | R) => T): T | Right<L, R>;

  abstract map <T>(func: (val: L | R) => T): EitherTransform<this, T, L, R>;
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

  public filter <T>(func: (val: T) => boolean): EitherTransform<this, T, L, R> {
    return Either.nullable(func(this._value as unknown as T) ? this._value : null) as unknown as EitherTransform<this, T, L, R>;
  }

  public join <T>(): Right<L, R> {
    return (!(this._value instanceof Right) ? this : this._value.join());
  }

  public orElse <T>(func: (val: R) => T): Right<L, R> {
    return this;
  }

  public map <T>(func: (val: R) => T): EitherTransform<this, T, L, R> {
    return Either.right(func(this._value)) as unknown as EitherTransform<this, T, L, R>;
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

  public isRight (): boolean {
    return false;
  }

  public isLeft (): boolean {
    return true;
  }

  public chain <T>(func: (a: R) => T): Left<L, R> {
    return this;
  }

  public getOrElse <T>(defaultVal: T): T {
    return defaultVal;
  }

  public getOrElseThrow (func: (val: L) => Error): R | Error {
    throw func(this._value);
  }

  public filter <T>(func: (val: T) => boolean): EitherTransform<this, T, L, R> {
    return this as unknown as EitherTransform<this, T, L, R>;
  }

  public join (): Left<L, R> {
    return (!(this._value instanceof Left) ? this : this._value.join());
  }

  public orElse <T>(func: (val: L) => T): T {
    return func(this._value);
  }

  public map <T>(_: (val: R) => T): EitherTransform<this, T, L, R> {
    return this as unknown as EitherTransform<this, T, L, R>;
  }
}
