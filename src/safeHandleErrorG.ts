
import { EitherResult, FuncSpreadable, SafeHandleErrorG, SafeHandleResult } from './index';
import curry from './curry';
import Either from './either';

const safeHandleErrorG: SafeHandleErrorG =
  curry(<T>(errorHandler: FuncSpreadable, res: Generator<any, SafeHandleResult, any>): EitherResult<T> => {

    const result = res.next ? res.next().value : res;
    const { error } = result;

    if (error) {
      errorHandler(error);
      return Either.left<T, any>(result);
    } else {
      return Either.right<any, T>(result);
    }
  });

export default safeHandleErrorG;
