
import { ChainG, Func1Optional } from './index';
import curry from './curry';
import chainC from './chainC';

const chainG: ChainG =
  curry(function* <T = any>(func: Func1Optional, container: Generator<any, T, any>): Generator<any, T, any> {
    const result = chainC(func, yield container);
    return result.next ? yield result : result;
  });

export default chainG;
