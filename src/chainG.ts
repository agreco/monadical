
import { ChainC, ChainG, Monadical } from './index';
import curry from './curry';
import chainC from './chainC';

const chainG: ChainG =
  curry(<T>(func: <V>(a: V) => any, container: Generator<any, Monadical<T>, any>): ChainC => {
    return chainC(func, container.next ? container.next().value : container);
  });

export default chainG;
