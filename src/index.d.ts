
import Maybe from './maybe';

export type Monadical<M> = {
  chain: (arg: any) => any;
  map: <T>(arg: T) => M;
  getOrElse: <T>(arg: T) => M | T;
  filter: (func: (a: any) => boolean) => M;
};

export interface Curry {
  <T1, T2, T3, T4, T5, T6, R>(func: (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6) => R): (p: T1) => (p: T2) => (p: T3) => (p: T4) => (p: T5) => (p: T6) => R;
  <T1, T2, T3, T4, T5, R>(func: (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5) => R): (p: T1) => (p: T2) => (p: T3) => (p: T4) => (p: T5) => R;
  <T1, T2, T3, T4, R>(func: (p1: T1, p2: T2, p3: T3, p4: T4) => R): (p: T1) => (p: T2) => (p: T3) => (p: T4) => R;
  <T1, T2, T3, R>(func: (p1: T1, p2: T2, p3: T3) => R): (p: T1) => (p: T2) => (p: T3) => R;
  <T1, T2, R>(func: (p1: T1, p2: T2) => R): (p: T1) => (p: T2) => R;
  <T1, R>(func: (p1: T1) => R): (p: T1) => R;
}

export type GetPropOrElse = {
  (path: string): (obj: object) => (defaultVal: any) => any;
  (path: string, obj: object): (defaultVal: any) => any;
  (path: string, obj: object, defaultVal: any): any;
};

export type MapC = {
  <T, V>(func: T): (container: Monadical<V>) => any;
  <T, V>(func: T, container: Monadical<V>): any;
};

export type ChainC = {
  <T, V>(func: T): (container: Monadical<V>) => any;
  <T, V>(func: T, container: Monadical<V>): any;
};

export type GetOrElseC = {
  <T, V>(val: T): (container: Monadical<V>) => any;
  <T, V>(val: T, container: Monadical<V>): any;
};

export type Lift<J, N> = {
  (func: Func1<J>): (value: J) => Maybe<J, N>
  (func: Func1<J>, value: J): Maybe<J, N>
}

export interface GenFuncSpread<T> {
  (...val: any[]): T
}

export type IndexableAny = {
  [ key: string ]: any;
}

export type FuncSpreadable = (...val: any[]) => any;
export type Func1Optional = <A>(a?: A) => any;
export type Func1<A> = (a: A) => A;
