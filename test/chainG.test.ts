import { ChainC, Monadical } from '../src';
import normaliseStr from '../src/normaliseStr';
import Maybe from '../src/maybe';
import Either from '../src/either';
import chainG from '../src/chainG';
import compose from '../src/compose';
import curry from '../src/curry';
import co from 'co';

describe('chainG', () => {
  const safeGenFunc: (val: string) => Generator<any, Monadical<string>, any> = curry(function*(
    val: string
  ): Generator<any, Monadical<string>, any> {
    return yield Promise.resolve(Either.nullable<string>(val));
  });

  test(
    'chain a function of the data-type, Either.Right, from a generator',
    co.wrap(function*() {
      const normaliseChain: ChainC = chainG(normaliseStr('-'));
      const extractIdFunc = compose(normaliseChain, safeGenFunc);
      const result: string = yield extractIdFunc('a-b-c-d-e');

      expect(result).toBe('abcde');
    })
  );

  test(
    'chain a function of the data-type, Either.Left, from a generator',
    co.wrap(function*() {
      const normaliseChain: ChainC = chainG(normaliseStr('-'));
      const extractIdFunc = compose(normaliseChain, safeGenFunc);
      const result: Monadical<string> = yield extractIdFunc(null);

      expect(result.getOrElse('Missing id')).toBe('Missing id');
    })
  );

  test(
    'chain a function of the data-type, Either.Right, to a data-type Maybe.Just, from a generator',
    co.wrap(function*() {
      const chainToMaybe: ChainC = chainG((a: string) => Maybe.of(normaliseStr('-')(a)));
      const extractIdFunc = compose(chainToMaybe, safeGenFunc);
      const result: Monadical<string> = yield extractIdFunc('a-b-c-d-e');

      expect(result.getOrElse('Missing id')).toBe('abcde');
    })
  );

  test(
    'chain a function of the data-type, Either.Left, to a data-type Maybe.Just, from a generator',
    co.wrap(function*() {
      const chainToMaybe: ChainC = chainG((a: string) => Maybe.of(normaliseStr('-')(a)));
      const extractIdFunc = compose(chainToMaybe, safeGenFunc);
      const result: Monadical<string> = yield extractIdFunc(null);

      expect(result.isLeft()).toBe(true);
      expect(result.getOrElse('Missing id')).toBe('Missing id');
    })
  );
});
