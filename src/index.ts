export type Monadical<M> = {
  isLeft?: () => boolean;
  isRight?: () => boolean;
  isJust?: () => boolean;
  isNothing?: () => boolean;
  orElse?: () => any;
  chain: (arg: any) => any;
  map: <T>(arg: (val: any) => T) => M;
  getOrElse: <T>(arg: T) => M | T;
  filter: (func: (a: any) => boolean) => M;
};

export type Either<L, R> = {
  isRight(): boolean;
  isLeft(): boolean;
  chain<T>(func: (a: L | R) => T): Left<L, R> | T;
  getOrElse(defaultVal: any): any | R;
  getOrElseThrow(func: (val: L | R) => Error): R | Error;
  filter(func: (val: L | R) => boolean): Either<L, R>;
  join(): Left<L, R> | Right<L, R>;
  orElse(func: (val: L | R) => any): Right<L, R> | any;
  map<T>(func: (val: L | R) => T): Either<L, T>;
  value(): unknown;
  left<L, R>(val: L): Left<L, R>;
  right<L, R>(val: R): Right<L, R>;
  of<L, R>(val: R): Right<L, R>;
  nullable<T>(value: T): Either<void, T>;
};

export type Left<L, R> = {
  readonly _value: L;
  (value: L): Left<L, R>;
  toString(): string;
  value(): L;
  isRight(): boolean;
  isLeft(): boolean;
  chain<T>(func: (val: R) => T): Left<L, R>;
  getOrElse(defaultVal: any): any;
  getOrElseThrow(func: (val: L) => Error): R | Error;
  filter(func: (val: R) => boolean): Left<L, R>;
  join(): Left<L, R>;
  orElse(func: (val: L) => any): any;
  map<T>(func: (val: L) => T): Either<L, T>;
};

export type Right<L, R> = {
  readonly _value: R;
  (value: R): Right<L, R>;
  toString(): string;
  value(): R;
  isRight(): boolean;
  isLeft(): boolean;
  chain<T>(func: (a: R) => T): T;
  getOrElse<T>(defaultVal: T): R;
  getOrElseThrow(func: (val: L | R) => Error): R | Error;
  filter(func: (val: R) => boolean): Either<L, R>;
  join<T>(): Right<L, R>;
  orElse(func: (val: R) => any): Right<L, R>;
  map<T>(func: (val: R) => T): Either<L, T>;
};

export type Maybe<J, N> = {
  value(): unknown;
  just<J, N>(val: J): Just<J, N>;
  nothing<J, N>(): Nothing<J, N>;
  of<J, N>(val: J): Just<J, N>;
  nullable<J, N = void>(val: J): Maybe<J, N>;
  isNothing(): boolean;
  isJust(): boolean;
  chain<T>(func: (a: J | N) => T): Nothing<J, N> | T;
  getOrElse(defaultVal: any): any | J;
  filter(func: (val: J | N) => boolean): Maybe<J, N>;
  map<T>(func: (val: J | N) => T): Maybe<T, N>;
};

export type Just<J, N> = {
  readonly _value: J;
  (value: J): Just<J, N>;
  value(): J;
  toString(): string;
  isJust(): boolean;
  isNothing(): boolean;
  chain<T>(func: (a: J) => T): T;
  filter<N>(func: (a: J) => boolean): Maybe<J, N>;
  getOrElse<T>(defaultVal: T): J;
  map<T>(func: (a: J) => T): Maybe<T, N>;
};

export type Nothing<J, N> = {
  readonly _value: N;
  (): Nothing<J, N>;
  value(): N;
  toString(): string;
  isJust(): boolean;
  isNothing(): boolean;
  chain<T>(func: (val: J) => T): Nothing<J, N>;
  filter(func: (val: J) => boolean): Nothing<J, N>;
  getOrElse(defaultVal: any): any;
  map<T>(func: (val: J) => T): Maybe<T, N>;
};

export type EitherResult<T> = Either<any, T>;

export type MaybeResult<T> = Maybe<T, any>;

export type GetPropOrElse = {
  (path: string): (obj: object) => (defaultVal: any) => any;
  (path: string, obj: object): (defaultVal: any) => any;
  (path: string, obj: object, defaultVal: any): any;
};

export type ExtractG = {
  <T>(a: T): any;
};

export type MapC = {
  <T, V>(func: T): (container: Monadical<V>) => any;
  <T, V>(func: T, container: Monadical<V>): any;
};

export type MapG = {
  <T>(a: T): <V>(b: V) => MapC;
  <T, V>(a: T, b: V): MapC;
};

export type ChainC = {
  <T, V>(func: T): (container: Monadical<V>) => any;
  <T, V>(func: T, container: Monadical<V>): any;
};

export type ChainG = {
  <T>(a: T): <V>(b: V) => ChainC;
  <T, V>(a: T, b: V): ChainC;
};

export type GetOrElseC = {
  <T, V>(val: T): (container: Monadical<V>) => any;
  <T, V>(val: T, container: Monadical<V>): any;
};

export type GetOrElseG = {
  <T>(a: T): <V>(b: V) => GetOrElseC;
  <T, V>(a: T, b: V): GetOrElseC;
};

export type SafeHandleResult = {
  error: Error;
};

export type SafeHandleErrorG = {
  <T>(a: (error: any) => Generator<any, any, any>): (b: Generator<any, T, any>) => EitherResult<T>;
  <T>(a: (error: any) => Generator<any, any, any>, b: Generator<any, T, any>): EitherResult<T>;
};

export type SafeUnpackG = {
  <T>(errorHandler: (error: any) => Generator<any, any, any>, defaultVal: any): FuncSpreadT<T>;
};

export type LiftToMaybe<J, N> = {
  (func: Func1<J>): (value: J) => Maybe<J, N>;
  (func: Func1<J>, value: J): Maybe<J, N>;
};

export type LiftToEither<L, R> = {
  (func: Func1<R>): (value: R) => Either<L, R>;
  (func: Func1<R>, value: R): Either<L, R>;
};

export interface GenFuncSpread<T> {
  (...val: any[]): T;
}

export type IndexableAny = {
  [key: string]: any;
};

export type Indexable<T> = {
  [key: string]: T;
};

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
  <T>(a: T): <V>(b: V) => V;
  <T, V>(a: T, b: V): V;
};

export type GetProps = {
  (a: any[]): (b: IndexableAny) => any[];
  (a: any[], b: IndexableAny): any[];
};

export type ValidLength = {
  (a: string): (b: number) => boolean;
  (a: string, b: number): boolean;
};

export type Joiner = {
  (a: string): <T>(b: T[]) => string;
  <T>(a: string, b: T[]): string;
};

export type FuncSpreadT<T> = (...args: any[]) => T;
export type FuncSpreadable = (...args: any[]) => any;
export type Func1Optional = <A>(a?: A) => any;
export type Func1<A> = (a: A) => A;

export type Curry10<A, B, C, D, E, F, G, H, I, J, R> = {
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J): R;
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I): Curry1<I, R>;
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H): Curry2<H, I, R>;
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G): Curry3<H, I, J, R>;
  (a: A, b: B, c: C, d: D, e: E, f: F): Curry4<G, H, I, J, R>;
  (a: A, b: B, c: C, d: D, e: E): Curry5<F, G, H, I, J, R>;
  (a: A, b: B, c: C, d: D): Curry6<E, F, G, H, I, J, R>;
  (a: A, b: B, c: C): Curry7<D, E, F, G, H, I, J, R>;
  (a: A, b: B): Curry8<C, D, E, F, G, H, I, J, R>;
  (a: A): Curry9<B, C, D, E, F, G, H, I, J, R>;
};

export type Curry9<A, B, C, D, E, F, G, H, I, R> = {
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I): R;
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H): Curry1<I, R>;
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G): Curry2<H, I, R>;
  (a: A, b: B, c: C, d: D, e: E, f: F): Curry3<G, H, I, R>;
  (a: A, b: B, c: C, d: D, e: E): Curry4<F, G, H, I, R>;
  (a: A, b: B, c: C, d: D): Curry5<E, F, G, H, I, R>;
  (a: A, b: B, c: C): Curry6<D, E, F, G, H, I, R>;
  (a: A, b: B): Curry7<C, D, E, F, G, H, I, R>;
  (a: A): Curry8<B, C, D, E, F, G, H, I, R>;
};

export type Curry8<A, B, C, D, E, F, G, H, R> = {
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H): R;
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G): Curry1<H, R>;
  (a: A, b: B, c: C, d: D, e: E, f: F): Curry2<G, H, R>;
  (a: A, b: B, c: C, d: D, e: E): Curry3<F, G, H, R>;
  (a: A, b: B, c: C, d: D): Curry4<E, F, G, H, R>;
  (a: A, b: B, c: C): Curry5<D, E, F, G, H, R>;
  (a: A, b: B): Curry6<C, D, E, F, G, H, R>;
  (a: A): Curry7<B, C, D, E, F, G, H, R>;
};

export type Curry7<A, B, C, D, E, F, G, R> = {
  (a: A, b: B, c: C, d: D, e: E, f: F, g: G): R;
  (a: A, b: B, c: C, d: D, e: E, f: F): Curry1<G, R>;
  (a: A, b: B, c: C, d: D, e: E): Curry2<F, G, R>;
  (a: A, b: B, c: C, d: D): Curry3<E, F, G, R>;
  (a: A, b: B, c: C): Curry4<D, E, F, G, R>;
  (a: A, b: B): Curry5<C, D, E, F, G, R>;
  (a: A): Curry6<B, C, D, E, F, G, R>;
};

export type Curry6<A, B, C, D, E, F, R> = {
  (a: A, b: B, c: C, d: D, e: E, f: F): R;
  (a: A, b: B, c: C, d: D, e: E): Curry1<F, R>;
  (a: A, b: B, c: C, d: D): Curry2<E, F, R>;
  (a: A, b: B, c: C): Curry3<D, E, F, R>;
  (a: A, b: B): Curry4<C, D, E, F, R>;
  (a: A): Curry5<B, C, D, E, F, R>;
};

export type Curry5<A, B, C, D, E, R> = {
  (a: A, b: B, c: C, d: D, e: E): R;
  (a: A, b: B, c: C, d: D): Curry1<E, R>;
  (a: A, b: B, c: C): Curry2<D, E, R>;
  (a: A, b: B): Curry3<C, D, E, R>;
  (a: A): Curry4<B, C, D, E, R>;
};

export type Curry4<A, B, C, D, R> = {
  (a: A, b: B, c: C, d: D): R;
  (a: A, b: B, c: C): Curry1<D, R>;
  (a: A, b: B): Curry2<C, D, R>;
  (a: A): Curry3<B, C, D, R>;
};

export type Curry3<A, B, C, R> = {
  (a: A, b: B, c: C): R;
  (a: A, b: B): Curry1<C, R>;
  (a: A): Curry2<B, C, R>;
};

export type Curry2<A, B, R> = {
  (a: A, b: B): R;
  (a: A): Curry1<B, R>;
};

export type Curry1<A, R> = (a: A) => R;

export type Curry<T, R> = T extends [any, any, any, any, any, any, any, any, any]
  ? Curry10<T[0], T[1], T[2], T[3], T[4], T[5], T[6], T[7], T[8], T[9], R>
  : T extends [any, any, any, any, any, any, any, any, any]
  ? Curry9<T[0], T[1], T[2], T[3], T[4], T[5], T[6], T[7], T[8], R>
  : T extends [any, any, any, any, any, any, any, any]
  ? Curry8<T[0], T[1], T[2], T[3], T[4], T[5], T[6], T[7], R>
  : T extends [any, any, any, any, any, any, any]
  ? Curry7<T[0], T[1], T[2], T[3], T[4], T[5], T[6], R>
  : T extends [any, any, any, any, any, any]
  ? Curry6<T[0], T[1], T[2], T[3], T[4], T[5], R>
  : T extends [any, any, any, any, any]
  ? Curry5<T[0], T[1], T[2], T[3], T[4], R>
  : T extends [any, any, any, any]
  ? Curry4<T[0], T[1], T[2], T[3], R>
  : T extends [any, any, any]
  ? Curry3<T[0], T[1], T[2], R>
  : T extends [any, any]
  ? Curry2<T[0], T[1], R>
  : T extends [any]
  ? Curry1<T[0], R>
  : unknown;
