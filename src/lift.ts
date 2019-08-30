
import Maybe, { Just, Nothing } from './maybe';
import curry from './curry';
import { TFunc1, TLift } from './types';

const lift = <J, N>(): TLift<J, N> => {
  return curry((func: TFunc1<J>, value: J): Just<J> | Nothing<N> => {
    return Maybe.nullable<J, N>(func(value));
  });
};

export default lift;
