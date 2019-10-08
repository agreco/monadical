
import { ChainG } from './index';
import curry from './curry';
import chainC from './chainC';

const chainG: ChainG =
  curry(function* <T>(func: <V>(a: V) => any, container: Generator<any, T, any>): Generator<any, T, any> {
    return chainC(func, yield container);
  });

export default chainG;
