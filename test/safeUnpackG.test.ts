
import { FuncSpreadable, Monadical, SafeHandleResult } from '../src';
import compose from '../src/compose';
import curry from '../src/curry';
import safeUnpackG from '../src/safeUnpackG';
import Either, { Left, Right } from '../src/either';
import co from 'co';

describe('safeUnpackG', () => {

  type P = { name: string, githubUrl: string, id: string };

  test('Unpack a generator containing an monadic type wrapping an error', co.wrap(function* () {
    const profileRetrievalWithError: <T>(val: string) => any =
      curry(function* (val: string): Generator<any, Left<SafeHandleResult, any>, any> {
        return yield Promise.resolve(Either.nullable({ error: new Error(`Missing profile with id: ${val}`), data: null }));
      });

    let errorState: SafeHandleResult = { error: new Error('ErrorState -> Missing re-initialisation of this error') };
    const errorHandler: FuncSpreadable = curry(function* (state: SafeHandleResult, err: Error) { state.error = err });
    const safelyGetProfile = compose(safeUnpackG(errorHandler(errorState), 'Unfortunately the following error occurred: Missing profile with id: a-b-c-d-e'), profileRetrievalWithError);
    const result: Monadical<any> = yield safelyGetProfile('a-b-c-d-e');

    expect(result).toStrictEqual('Unfortunately the following error occurred: Missing profile with id: a-b-c-d-e');
    expect(errorState.error.message).toBe('Missing profile with id: a-b-c-d-e');
  }));

  test('Unpack a generator containing an monadic type wrapping profile data', co.wrap(function* () {
    const profileRetrieval: <T>(val: string) => any =
      curry(function* (val: string): Generator<any, Right<null, {}>, any> {
        const profile: P = { id: val, name: 'Antonio G. Greco', githubUrl: 'https://github.com/agreco' };
        return yield Promise.resolve(Either.nullable({ data: profile }));
      });

    let errorState: SafeHandleResult = { error: new Error('ErrorState -> Missing re-initialisation of this error') };
    const errorHandler: FuncSpreadable = curry(function* (state: SafeHandleResult, err: Error) { state.error = err });
    const safelyGetProfile = compose(safeUnpackG(errorHandler(errorState), 'An Error occurred'), profileRetrieval);
    const result: Monadical<any> = yield safelyGetProfile('a-b-c-d-e');
    const profile = result.getOrElse(`Unfortunately the following error occurred: ${ errorState.error.message }`);

    expect(profile.data).toStrictEqual({ id: 'a-b-c-d-e', name: 'Antonio G. Greco', githubUrl: 'https://github.com/agreco' });
    expect(errorState.error.message).toBe('ErrorState -> Missing re-initialisation of this error');
  }));
});
