
import { Monadical } from '../src';
import compose from '../src/compose';
import curry from '../src/curry';
import extractG from '../src/extractG';

describe('extractG', () => {

  const safeGenFunc: (val: string) => Generator<any, Monadical<string>, any> =
    curry(function* (val: string): Generator<any, Monadical<string>, any> {
      return yield { id: val, name: 'Antonio G. Greco', githubUrl: 'https://github.com/agreco' };
    });

  test('extract a value from a generator', async () => {

    const extractIdFunc = compose(extractG, safeGenFunc);
    const profile = await extractIdFunc('a-b-c-d-e');

    expect(profile).toStrictEqual({ id: 'a-b-c-d-e', name: 'Antonio G. Greco', githubUrl: 'https://github.com/agreco' });
  });
});
