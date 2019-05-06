
import Maybe, { Just, Nothing } from './maybe';
import curry from './curry';
import { FuncT } from './types';

const lift = curry((func: FuncT, value: any): Just<any> | Nothing<any> => {
  return Maybe.nullable(func(value));
});

export default lift;
