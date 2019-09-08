
import Maybe from './maybe';
import curry from './curry';
import { TFunc1, TLift } from './index';

const lift = <J, N>():TLift<J, N> => curry(<J, N>(func: TFunc1<J>, val: J): Maybe<J, N> => {
  return Maybe.nullable<J, N>(func(val));
});

export default lift;
