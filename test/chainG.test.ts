
import { ChainC, Monadical } from '../src';
import normaliseStr from '../src/normaliseStr';
import compose from '../src/compose';
import curry from '../src/curry';
import Maybe from '../src/maybe';
import Either from '../src/either';
import chainG from '../src/chainG';

describe('chainG', () => {

  const safeGenFunc: (val: string) => Generator<any, Monadical<string>, any> =
    curry(function* (val: string): Generator<any, Monadical<string>, any> {
      return yield Either.nullable<string>(val);
    });

  test('chain a function of a monadic type from a generator', async () => {

    const normaliseChain: ChainC = chainG(normaliseStr('-'));
    const extractIdFunc = compose(normaliseChain, safeGenFunc);
    const id = await extractIdFunc('a-b-c-d-e');

    expect(id).toBe('abcde');
  });

  test('chain a function to a monadic type from a generator', async () => {

    const chainToMaybe: ChainC = chainG((a: string) => Maybe.of(normaliseStr('-')(a)));
    const extractIdFunc = compose(chainToMaybe, safeGenFunc);
    const id = await extractIdFunc('a-b-c-d-e').getOrElse('Missing id');

    expect(id).toBe('abcde');
  });
});
