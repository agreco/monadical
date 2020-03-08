import { Monadical } from '../src';
import compose from '../src/compose';
import curry from '../src/curry';
import extractG from '../src/extractG';
import co from 'co';

describe('extractG', () => {
  const safeGenFunc: (val: string) => Generator<any, Monadical<string>, any> = curry(function*(
    val: string
  ): Generator<any, Monadical<string>, any> {
    return yield { id: val, name: 'Antonio G. Greco', githubUrl: 'https://github.com/agreco' };
  });

  test(
    'extract a value from a generator',
    co.wrap(function*() {
      const extractIdFunc = compose(extractG, safeGenFunc);
      const profile = yield extractIdFunc('a-b-c-d-e');

      expect(profile).toStrictEqual({
        id: 'a-b-c-d-e',
        name: 'Antonio G. Greco',
        githubUrl: 'https://github.com/agreco'
      });
    })
  );
});
