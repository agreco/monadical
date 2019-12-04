
import { ExtractG } from './index';
import curry from './curry';

const extractG: ExtractG =
  curry(function* <T>(val: Generator<any, T, any>): any {
    return yield val;
  });

export default extractG;
