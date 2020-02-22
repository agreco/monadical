
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

export type Either<L, R> = {
  isRight (): boolean;
  isLeft (): boolean;
  chain <T>(func: (a: L | R) => T): Left<L, R> | T;
  getOrElse (defaultVal: any): any | R;
  getOrElseThrow (func: (val: L | R) => Error): R | Error;
  filter (func: (val: L | R) => boolean): Either<L, R>;
  join (): Left<L, R> | Right<L, R>;
  orElse (func: (val: L | R) => any): Right<L, R> | any;
  map <T>(func: (val: L | R) => T): Either<L, T>;
  value (): unknown;
  left <L, R>(val: L): Left<L, R>;
  right <L, R>(val: R): Right<L, R>;
  of <L, R>(val: R): Right<L, R>;
  nullable <T>(value: T): Either<void, T>;
};

export type Left<L, R> = {
  readonly _value: L;
  (value: L): Left<L, R>;
  toString (): string;
  value (): L;
  isRight (): boolean;
  isLeft (): boolean;
  chain <T>(func: (val: R) => T): Left<L, R>;
  getOrElse (defaultVal: any): any;
  getOrElseThrow (func: (val: L) => Error): R | Error;
  filter (func: (val: R) => boolean): Left<L, R>;
  join (): Left<L, R>;
  orElse (func: (val: L) => any): any;
  map <T>(func: (val: L) => T): Either<L, T>;
}

export type Right<L, R> = {
  readonly _value: R;
  (value: R): Right<L, R>;
  toString (): string;
  value (): R;
  isRight (): boolean;
  isLeft (): boolean;
  chain <T>(func: (a: R) => T): T;
  getOrElse <T>(defaultVal: T): R;
  getOrElseThrow (func: (val: L | R) => Error): R | Error;
  filter (func: (val: R) => boolean): Either<L, R>;
  join <T>(): Right<L, R>;
  orElse (func: (val: R) => any): Right<L, R>;
  map <T>(func: (val: R) => T): Either<L, T>;
}

export type Maybe<J, N> = {
  value (): unknown;
  just <J, N>(val: J): Just<J, N>;
  nothing <J, N>(): Nothing<J, N>;
  of <J, N>(val: J): Just<J, N>;
  nullable <J, N = void>(val: J): Maybe<J, N>;
  isNothing (): boolean;
  isJust (): boolean;
  chain <T>(func: (a: (J | N)) => T): Nothing<J, N> | T;
  getOrElse (defaultVal: any): any | J;
  filter (func: (val: J | N) => boolean): Maybe<J, N>;
  map <T>(func: (val: (J | N)) => T): Maybe<T, N>;
}

export type Just<J, N> = {
  readonly _value: J;
  (value: J): Just<J, N>;
  value (): J;
  toString (): string;
  isJust (): boolean;
  isNothing (): boolean;
  chain <T>(func: (a: J) => T): T;
  filter <N>(func: (a: J) => boolean): Maybe<J, N>;
  getOrElse <T>(defaultVal: T): J;
  map <T>(func: (a: J) => T): Maybe<T, N>;
}

export type Nothing<J, N> = {
  readonly _value: N;
  (): Nothing<J, N>;
  value (): N;
  toString (): string;
  isJust (): boolean;
  isNothing (): boolean;
  chain <T>(func: (val: J) => T): Nothing<J, N>;
  filter (func: (val: J) => boolean): Nothing<J, N>;
  getOrElse (defaultVal: any): any;
  map <T>(func: (val: J) => T): Maybe<T, N>;
}

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
