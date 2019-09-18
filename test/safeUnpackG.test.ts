
import { FuncSpreadable, SafeHandleResult } from '../src';
import compose from '../src/compose';
import curry from '../src/curry';
import safeUnpackG from '../src/safeUnpackG';
import Either, { Left } from '../src/either';

describe('safeUnpackG', () => {

  type P = { name: string, githubUrl: string, id: string };

  test('Unpack a generator containing an monadic type wrapping an error', async () => {
    const profileRetrievalWithError: <T>(val: string) => any =
      curry(function* (val: string): Generator<any, Left<SafeHandleResult, any>, any> {
        return yield Either.nullable({ error: new Error(`Missing profile with id: ${val}`), data: null });
      });

    let errorState: SafeHandleResult = { error: new Error('ErrorState -> Missing re-initialisation of this error') };
    const errorHandler: FuncSpreadable = curry((state: SafeHandleResult, err: Error) => state.error = err);
    const safelyGetProfile = compose(safeUnpackG(errorHandler(errorState)), profileRetrievalWithError);
    const profile = await safelyGetProfile('a-b-c-d-e')
      .getOrElse(`Unfortunately the following error occurred: ${ errorState.error.message }`);

    expect(profile).toStrictEqual('Unfortunately the following error occurred: Missing profile with id: a-b-c-d-e');
    expect(errorState.error.message).toBe('Missing profile with id: a-b-c-d-e');
  });

  test('Unpack a generator containing an monadic type wrapping profile data', async () => {
    const profileRetrieval: <T>(val: string) => any =
      curry(function* (val: string): Generator<any, SafeHandleResult, any> {
        const profile: P = { id: val, name: 'Antonio G. Greco', githubUrl: 'https://github.com/agreco' };
        return yield Either.nullable({ data: profile });
      });

    let errorState: SafeHandleResult = { error: new Error('ErrorState -> Missing re-initialisation of this error') };
    const errorHandler: FuncSpreadable = curry((state: SafeHandleResult, err: Error) => state.error = err);
    const safelyGetProfile = compose(safeUnpackG(errorHandler(errorState)), profileRetrieval);
    const profile = await safelyGetProfile('a-b-c-d-e')
      .getOrElse(`Unfortunately the following error occurred: ${ errorState.error.message }`);

    expect(profile.data).toStrictEqual({ id: 'a-b-c-d-e', name: 'Antonio G. Greco', githubUrl: 'https://github.com/agreco' });
    expect(errorState.error.message).toBe('ErrorState -> Missing re-initialisation of this error');
  })
});
