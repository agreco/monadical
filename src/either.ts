
import notNil from "./notNil";

type T = any;

export default class Either<T> {

  _value: T;

  public constructor (value: T) {
    this._value = value;
  }

  public get value (): T {
    return this._value;
  }

  public static left <U>(value: U): Left<U> {
    return new Left(value);
  }

  public static right <U>(value: U): Right<U> {
    return new Right(value);
  }

  public static of <U>(value: U): Right<U> {
    return Either.right(value);
  }

  public static nullable <U>(value: U): Right<U> | Left<U> {
    return notNil(value) ? Either.right(value) : Either.left(value);
  }
};

export class Right<U> extends Either<T> {

  public get isRight (): boolean {
    return true;
  }

  public get isLeft (): boolean {
    return false;
  }

  public map <V>(func: (a: any) => V): Right<V> {
    return Either.of(func(this._value));
  }

  public getOrElse (val: T): T {
    return this._value;
  }

  public orElse (): Right<T> {
    return this;
  }

  public chain <V>(func: (a: any) => V): V {
    return func(this._value);
  }

  public getOrElseThrow (_: any): Right<U>  {
    return this._value;
  }

  public filter <U>(func: (a: any) => any): Right<U> | Left<U> {
    return Either.nullable(func(this._value) ? this._value : null);
  }

  public toString (): string {
    return `Right[${this._value}]`;
  }
}

export class Left<U> extends Either<T> {

  public get value (): TypeError {
    throw new TypeError("Value extraction invalid for type Left[U].");
  }

  public get isRight (): boolean {
    return false;
  }

  public get isLeft (): boolean {
    return true;
  }

  public map <U>(_: any): Left<U> {
    return this;
  }

  public getOrElse <U>(defaultVal: U): U {
    return defaultVal;
  }

  public orElse <V>(func: (a: any) => V): V {
    return func(this._value);
  }

  public chain (func: (a: any) => any): Left<U> {
    return this;
  }

  public getOrElseThrow (val: string): Error {
    throw new Error(val);
  }

  public filter (func: (a: any) => any): Left<U> {
    return this;
  }

  public toString (): string {
    return `Left[${this._value}]`;
  }
}
