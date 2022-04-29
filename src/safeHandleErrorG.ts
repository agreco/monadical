import { EitherResult, FuncSpreadable, Monadical, SafeHandleErrorG } from './index';
import curry from './curry';
import Either from './either';
import isFunction from './isFunction';

const safeHandleErrorG: SafeHandleErrorG = curry(function* <T>(
  errorHandler: FuncSpreadable,
  res: Monadical<T> | object
): Generator<any, EitherResult<T>, any> {
  const result = yield res;
  const { error } = isFunction(result.getOrElse) ? result.getOrElse(() => ({ error: new Error() })) : result;

  if (error) {
    yield errorHandler(error);
    return yield Promise.resolve(Either.left<T, any>(result));
  } else {
    return yield Promise.resolve(Either.right<any, T>(result));
  }
});

export default safeHandleErrorG;
