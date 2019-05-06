
export interface IIndexableAny {
  [ key: string ]: any;
}

export type FuncT = <A>(a: A | void) => any | void;

export interface IMonadical {
  chain: any,
  map: any,
  getOrElse: any
}
