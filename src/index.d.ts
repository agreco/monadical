
import Container from './container';
import Maybe, { Just, Nothing } from './maybe';
import Either from "./either";

export interface ICurry {
  <T1, T2, R>(func: (p1: T1, p2: T2) => R): (p: T1) => (p: T2) => R;
  <T1, T2, T3, R>(func: (p1: T1, p2: T2, p3: T3) => R): (p: T1) => (p: T2) => (p: T3) => R;
  <T1, T2, T3, T4, R>(func: (p1: T1, p2: T2, p3: T3, p4: T4) => R): (p: T1) => (p: T2) => (p: T3) => (p: T4) => R;
  <T1, T2, T3, T4, T5, R>(func: (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5) => R): (p: T1) => (p: T2) => (p: T3) => (p: T4) => (p: T5) => R;
  <T1, T2, T3, T4, T5, T6, R>(func: (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6) => R): (p: T1) => (p: T2) => (p: T3) => (p: T4) => (p: T5) => (p: T6) => R;
}

export interface IEither<L, R> {
  toString (): string
  isRight (): boolean
  isLeft (): boolean
  map (func: (val: L | R) => L | R): Either<L, R>
  getOrElse (defaultVal: L): L | R
  orElse <T>(func: (defaultVal: L | R) => T): Either<L, R>
  chain <T>(func: (a: L | R) => T): T
  getOrElseThrow (func: (val: L | R) => Error): R | Error
  filter (func: (val: L | R) => boolean): Either<L, R>
}

export type TGetPropOrElse = {
  (path: string): (obj: object) => (defaultVal: any) => any;
  (path: string, obj: object): (defaultVal: any) => any;
  (path: string, obj: object, defaultVal: any): any;
};

export type TMapC = {
  (f: TFunc1<any>): (container: TMonadical) => Container<any>
  (f: TFunc1<any>, container: TMonadical): Container<any>
};

export type TChainC = {
  (f: TFunc1<any>): (container: TMonadical) => any
  (f: TFunc1<any>, container: TMonadical): any
};

export type TGetOrElseC = {
  (message: string): (container: TMonadical) => any
  (message: string, container: TMonadical): any
};

export type TLift<J, N> = {
  (func: TFunc1<J>): (value: J) => Maybe<J, N>
  (func: TFunc1<J>, value: J): Maybe<J, N>
}

export interface IGenFuncSpread<T> {
  (...val: any[]): T
}

export type TIndexableAny = {
  [ key: string ]: any;
}

export type TFuncSpreadable = (...val: any[]) => any;
export type TFunc1Optional = <A>(a?: A) => any;
export type TFunc1<A> = (a: A) => any;

export type TMonadical = {
  chain: (arg: any) => any,
  map: (arg: TFunc1<any>) => TMonadical,
  getOrElse: (arg: any) => TMonadical | any
};
