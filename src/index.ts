
import alt from './alt';
import compose from './compose';
import Container from './container';
import chainC from './chainC';
import curry from './curry';
import Either, { Left, Right } from './either';
import Empty from './empty';
import getOrElseC from './getOrElseC';
import getPropOrElse from './getPropOrElse';
import identity from './identity';
import IO from './io';
import isDefined from './isDefined';
import isFunction from './isFunction';
import { liftToMaybe, liftToEither } from './lift';
import mapC from './mapC';
import Maybe from './maybe';
import isNaN from './isNaN';
import noop from './noop';
import notNil from './notNil';
import notNull from './notNull';
import pipe from './pipe';
import seq from './seq';
import * as utils from './utils';
import { collapse, joiner, trim, validLength } from './utils';
import chainG from './chainG';
import safeUnpackG from './safeUnpackG';
import extractG from './extractG';
import getProps from './getProps';
import mapG from './mapG';
import normaliseStr from './normaliseStr';
import safeHandleErrorG from './safeHandleErrorG';
import visualSideEffect from './visualSideEffect';
import readVal from './readVal';
import writeVal from './writeVal';
import isArray from './isArray';
import isBoolean from './isBoolean';
import isEmpty from './isEmpty';
import isMap from './isMap';
import isNumber from './isNumber';
import isObject from './isObject';
import isString from './isString';
import isSet from './isSet';
import notEmpty from './notEmpty';
import partial from './partial';

export type Monadical<M> = {
  isLeft?: () => boolean;
  isRight?: () => boolean;
  isJust?: () => boolean;
  isNothing?: () => boolean;
  orElse?: () => any
  chain: (arg: any) => any;
  map: <T>(arg: (val: any) => T) => M;
  getOrElse: <T>(arg: T) => M | T;
  filter: (func: (a: any) => boolean) => M;
};

export type EitherResult<T> = Either<any, T>;

export type MaybeResult<T> = Maybe<T, any>;

export type GetPropOrElse = {
  (path: string): (obj: object) => (defaultVal: any) => any;
  (path: string, obj: object): (defaultVal: any) => any;
  (path: string, obj: object, defaultVal: any): any;
};

export type ExtractG = {
  <T>(a: T): any
};

export type MapC = {
  <T, V>(func: T): (container: Monadical<V>) => any;
  <T, V>(func: T, container: Monadical<V>): any;
};

export type MapG = {
  <T>(a: T): <V>(b: V) => MapC
  <T, V>(a: T, b: V): MapC
};

export type ChainC = {
  <T, V>(func: T): (container: Monadical<V>) => any;
  <T, V>(func: T, container: Monadical<V>): any;
};

export type ChainG = {
  <T>(a: T): <V>(b: V) => ChainC
  <T, V>(a: T, b: V): ChainC
}

export type GetOrElseC = {
  <T, V>(val: T): (container: Monadical<V>) => any;
  <T, V>(val: T, container: Monadical<V>): any;
};

export type GetOrElseG = {
  <T>(a: T): <V>(b: V) => GetOrElseC
  <T, V>(a: T, b: V): GetOrElseC
}

export type SafeHandleResult = {
  error: Error
}

export type SafeHandleErrorG = {
  <T>(a: (error: any) => Generator<any, any, any>): (b: Generator<any, T, any>) => EitherResult<T>
  <T>(a: (error: any) => Generator<any, any, any>, b: Generator<any, T, any>):  EitherResult<T>
}

export type SafeUnpackG = {
  <T>(errorHandler: (error: any) => Generator<any, any, any>, defaultVal: any): FuncSpreadT<T>
}

export type LiftToMaybe<J, N> = {
  (func: Func1<J>): (value: J) => Maybe<J, N>
  (func: Func1<J>, value: J): Maybe<J, N>
}

export type LiftToEither<L, R> = {
  (func: Func1<R>): (value: R) => Either<L, R>
  (func: Func1<R>, value: R): Either<L, R>
}

export interface GenFuncSpread<T> {
  (...val: any[]): T
}

export type IndexableAny = {
  [ key: string ]: any;
}

export type Indexable<T> = {
  [ key: string ]: T;
}

export type ReadableValue = {
  <T, V>(a: T): (b: string) => () => V;
  <T, V>(a: T, b: string): () => V;
};

export type Collapse = {
  (a: string): (b: string) => string;
  (a: string, b: string): string;
};

export type Normalise = (delim: string) => (a: string) => string;

export type WritableValue = {
  <T>(a: T): (b: string) => <U>(c: U) => () => U;
  <T>(a: T, b: string): <U>(c: U) => () => U;
  <T, U>(a: T, b: string, c: U): () => U;
};

export type Mappable = {
  <T>(a: T): <V>(b: V) => V
  <T, V>(a: T, b: V): V
};

export type GetProps = {
  (a: any[]): (b: IndexableAny) => any[];
  (a: any[], b: IndexableAny): any[]
};

export type ValidLength = {
  (a: string): (b: number) => boolean
  (a: string, b: number): boolean
};

export type Joiner = {
  (a: string): <T>(b: T[]) => string
  <T>(a: string, b: T[]): string
};

export type FuncSpreadT<T> = (...args: any[]) => T;
export type FuncSpreadable = (...args: any[]) => any;
export type Func1Optional = <A>(a?: A) => any;
export type Func1<A> = (a: A) => A;

export interface Curry {
  <T1, T2, T3, T4, T5, T6, R>(func: (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6) => R): (p: T1) => (p: T2) => (p: T3) => (p: T4) => (p: T5) => (p: T6) => R;
  <T1, T2, T3, T4, T5, R>(func: (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5) => R): (p: T1) => (p: T2) => (p: T3) => (p: T4) => (p: T5) => R;
  <T1, T2, T3, T4, R>(func: (p1: T1, p2: T2, p3: T3, p4: T4) => R): (p: T1) => (p: T2) => (p: T3) => (p: T4) => R;
  <T1, T2, T3, R>(func: (p1: T1, p2: T2, p3: T3) => R): (p: T1) => (p: T2) => (p: T3) => R;
  <T1, T2, R>(func: (p1: T1, p2: T2) => R): (p: T1) => (p: T2) => R;
  <T1, R>(func: (p1: T1) => R): (p: T1) => R;
}

export {
  alt,
  chainC,
  chainG,
  compose,
  Container,
  curry,
  Either,
  Left,
  Right,
  Empty,
  extractG,
  getOrElseC,
  getPropOrElse,
  getProps,
  identity,
  IO,
  isArray,
  isBoolean,
  isDefined,
  isEmpty,
  isFunction,
  isMap,
  isNaN,
  isNumber,
  isObject,
  isSet,
  isString,
  liftToMaybe,
  liftToEither,
  mapC,
  mapG,
  Maybe,
  noop,
  normaliseStr,
  notEmpty,
  notNil,
  notNull,
  partial,
  pipe,
  readVal,
  safeHandleErrorG,
  safeUnpackG,
  seq,
  collapse,
  joiner,
  trim,
  validLength,
  visualSideEffect,
  writeVal,
  utils
}
