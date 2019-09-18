
import { MapC, Monadical } from '../src';
import compose from '../src/compose';
import curry from '../src/curry';
import mapG from '../src/mapG';
import normaliseStr from '../src/normaliseStr';
import Either from '../src/either';

describe('mapG', () => {

  const safeGenFunc: (val: string) => Generator<any, Monadical<string>, any> =
    curry(function* (val: string): Generator<any, Monadical<string>, any> {
      return yield Either.nullable<string>(val);
    });

  test('map a function of a monadic type from a generator', async () => {

    const mapNormalise: MapC = mapG((a: string) => normaliseStr('-')(a));
    const extractIdFunc = compose(mapNormalise, safeGenFunc);
    const id = await extractIdFunc('            a-b-c-d-e                           ').getOrElse('Missing id');

    expect(id).toBe('abcde');
  });
});
