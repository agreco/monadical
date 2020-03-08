
import { MapC, Monadical } from '../src';
import mapG from '../src/mapG';
import normaliseStr from '../src/normaliseStr';
import Either from '../src/either';
import compose from '../src/compose';
import curry from '../src/curry';
import co from 'co';

describe('mapG', () => {

  const safeGenFunc: (val: string) => Generator<any, Monadical<string>, any> =
    curry(function* (val: string): Generator<any, Monadical<string>, any> {
      return yield Promise.resolve(Either.nullable<string>(val));
    });

  test('map a function over the data type, Either.Right, from a generator', co.wrap(function* () {

    const mapNormalise: MapC = mapG((a: string) => normaliseStr('-')(a));
    const extractIdFunc = compose(mapNormalise, safeGenFunc);
    const result: Monadical<string> = yield extractIdFunc('            a-b-c-d-e                           ');

    expect(result.getOrElse('Missing id')).toBe('abcde');
  }));

  test('map a function over the data type, Either.Left, from a generator', co.wrap(function* () {

    const mapNormalise: MapC = mapG((a: string) => normaliseStr('-')(a));
    const extractIdFunc = compose(mapNormalise, safeGenFunc);
    const result: Monadical<string> = yield extractIdFunc(null);

    expect(result.getOrElse('Missing id')).toBe('Missing id');
  }));
});
