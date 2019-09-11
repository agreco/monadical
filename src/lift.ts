
import Maybe from './maybe';
import curry from './curry';
import { Func1, Lift } from './index';

const lift = <J, N>():Lift<J, N> => curry(<J, N>(func: Func1<J>, val: J): Maybe<J, N> => {
  return Maybe.nullable<J, N>(func(val));
});

export default lift;
