
import notNil from './notNil';
import { IEither } from './index';

export default class Either<L, R> implements IEither<L, R> {

  public isRight (): boolean {
    return false;
  }

  public isLeft (): boolean {
    return false;
  }

  public static left <L, R>(value: L): Left<L> {
    return new Left<L>(value);
  }

  public static right <L, R>(value: R): Right<R> {
    return new Right<R>(value);
  }

  public static of <R>(value: R): Right<R> {
    return Either.right(value);
  }
  
  public static nullable <L, R>(value: R): Either<L, R>  {
    return (!notNil(value) ? Either.left(null) : Either.right(value)) as unknown as Either<L, R>;
  }

  public chain <T>(func: (a: (L | R)) => T): T {
    return;
  }

  public getOrElse <T>(defaultVal: T): T | R {
    return;
  }

  public getOrElseThrow (func: (val: (L | R)) => Error): R | Error {
    return;
  }

  public map (func: (val: (L | R)) => (L | R)): Either<L, R> {
    return;
  }

  public orElse <T>(func: (defaultVal: (L | R)) => T): Either<L, R> {
    return;
  }

  public filter (func: (val: L | R) => boolean): Either<L, R> {
    return;
  }
};

export class Right<R> {

  private readonly _value: R;

  public constructor (value: R) {
    this._value = value;
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

  public map (func: (val: R) => R): Right<R> {
    return Either.of<R>(func(this._value));
  }

  public getOrElse (_: any): R {
    return this._value;
  }

  public orElse (_: any): Right<R> {
    return this;
  }

  public chain <T>(func: (a: R) => T): T {
    return func(this._value);
  }

  public getOrElseThrow (_: any): R {
    return this._value;
  }

  public filter <L>(func: (val: R) => boolean): Either<L, R> {
    return Either.nullable(func(this._value) ? this._value : null);
  }

  public toString (): string {
    return `Right[ ${ this._value } ]`;
  }
}

export class Left<L> {

  private readonly _value: L;

  public constructor (value: L) {
    this._value = value;
  }

  public isRight (): boolean {
    return false;
  }

  public isLeft (): boolean {
    return true;
  }

  public chain (_: any): Left<L> {
    return this;
  }

  public getOrElse <T>(defaultVal: T): T {
    return defaultVal;
  }

  public map (_: any): Left<L> {
    return this;
  }

  public orElse <T>(func: (val: L) => T): T {
    return func(this._value);
  }

  public filter (_: any): Left<L> {
    return this;
  }

  public getOrElseThrow (func: (val: L) => Error): Error {
    throw func(this._value);
  }

  public toString (): string {
    return `Left[ ${ this._value } ]`;
  }
}
