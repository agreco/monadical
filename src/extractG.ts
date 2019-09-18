
import { ExtractG } from './index';
import curry from './curry';

const extractG: ExtractG =
  curry(<T>(val: Generator<any, T, any>): T => {
    return val.next ? val.next().value : val;
  });

export default extractG;
