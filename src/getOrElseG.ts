
import { GetOrElseG } from './index';
import curry from './curry';
import getOrElseC from './getOrElseC';

const getOrElseG: GetOrElseG =
  curry(function* <T>(defaultVal: T, container: Generator<any, T, any>): Generator<any, T, any> {
    return getOrElseC(defaultVal, yield container);
  });

export default getOrElseG;
