type Maybe<J, N> = {
  value: J | N;
  isNothing: () => boolean;
  isJust: () => boolean;
  map<T>(func: (maybeMapVal: J) => T): Maybe<T, N>;
  chain<T>(func: (maybeChainVal: J) => T): Maybe<T, N> | T;
  getOrElse(maybeDefaultVal: any): any | J;
  filter(func: (maybeFilterVal: J) => boolean): Maybe<J, N>;
}

export default Maybe;

export interface Just<J, N> extends Maybe<J, N> {
  getOrElse(justDefaultVal: any): J;
  chain<T>(func: (justChainVal: J) => T): T;
}

export interface Nothing<J, N> extends Maybe<J, N> {
  getOrElse(nothingDefaultVal: any): any;
  chain<T>(func: (nothingChainVal: J) => T): Maybe<T, N>;
}
