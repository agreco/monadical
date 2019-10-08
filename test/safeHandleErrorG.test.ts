
import { FuncSpreadable, Monadical, SafeHandleResult } from '../src';
import compose from '../src/compose';
import curry from '../src/curry';
import safeHandleErrorG from '../src/safeHandleErrorG';
import co from 'co';

describe('safeHandleErrorG', () => {

  type P = { name: string, githubUrl: string, id: string };

  const profileRetrievalWithError: <T>(val: string) => any =
    curry(function* (val: string): Generator<any, SafeHandleResult, any> {
      return yield { error: new Error(`Missing profile with id: ${val}`), data: null };
    });

  const profileRetrieval: <T>(val: string) => any =
    curry(function* (val: string): Generator<any, SafeHandleResult, any> {
      const profile: P = { id: val, name: 'Antonio G. Greco', githubUrl: 'https://github.com/agreco' };
      return yield { data: profile };
    });

  test('Handle result containing error', co.wrap(function* () {

    let errorState: SafeHandleResult = { error: new Error('ErrorState -> Missing re-initialisation of this error') };
    const errorHandler: FuncSpreadable = curry(function* (state: SafeHandleResult, err: Error) { state.error = err });
    const safelyGetProfile = compose(safeHandleErrorG(errorHandler(errorState)), profileRetrievalWithError);
    const result: Monadical<any> = yield safelyGetProfile('a-b-c-d-e');
    const profile = result.getOrElse(`Unfortunately the following error occurred: ${ errorState.error.message }`);

    expect(profile).toStrictEqual('Unfortunately the following error occurred: Missing profile with id: a-b-c-d-e');
    expect(errorState.error.message).toBe('Missing profile with id: a-b-c-d-e');
  }));

  test('Handle result containing profile data', co.wrap(function* () {

    let errorState: SafeHandleResult = { error: new Error('ErrorState -> Missing re-initialisation of this error') };
    const errorHandler: FuncSpreadable = curry(function* (state: SafeHandleResult, err: Error) { state.error = err });
    const safelyGetProfile = compose(safeHandleErrorG(errorHandler(errorState)), profileRetrieval);
    const result: Monadical<any> = yield safelyGetProfile('a-b-c-d-e');
    const profile = result.getOrElse(`Unfortunately the following error occurred: ${ errorState.error.message }`);

    expect(profile.data).toStrictEqual({ id: 'a-b-c-d-e', name: 'Antonio G. Greco', githubUrl: 'https://github.com/agreco' });
    expect(errorState.error.message).toBe('ErrorState -> Missing re-initialisation of this error');
  }));
});

