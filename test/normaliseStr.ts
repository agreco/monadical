
import compose from '../src/compose';
import curry from '../src/curry';
import extractG from '../src/extractG';
import normaliseStr from '../src/normaliseStr';
import Either from '../src/either';

describe('normaliseStr', () => {

  test('normalise a string', () => {
    const normaliseDashedStrA: (a: string) => string = normaliseStr('-');
    expect(normaliseDashedStrA('    a-b-c-d-e    ')).toBe('abcde');

    const normaliseDashedStrB: (a: string) => string = normaliseStr('-');
    expect(normaliseDashedStrB('     -     ')).toBe('');

    const normaliseDashedStrC: (a: string) => string = normaliseStr('-');
    expect(normaliseDashedStrC('-')).toBe('')
  });

  test('normalise a string with an incorrect delimiter', () => {
    const normaliseDashedStrA: (a: string) => string = normaliseStr(';');
    expect(normaliseDashedStrA('    a-b-c-d-e    ')).toBe('a-b-c-d-e');

    const normaliseDashedStrB: (a: string) => string = normaliseStr(';');
    expect(normaliseDashedStrB('a-b-c-d-e')).toBe('a-b-c-d-e');
  });

  test('normalise an empty string', () => {
    const normaliseDashedStrA: (a: string) => string = normaliseStr(';');
    expect(normaliseDashedStrA('        ')).toBe('');

    const normaliseDashedStrB: (a: string) => string = normaliseStr(';');
    expect(normaliseDashedStrB('')).toBe('');
  });

  test('extractG - extract value from a generator', async () => {
    const safeGenFunc: (val: string) => Generator<any, any, any> =
      curry(function* (val: string): Generator<any, any, any> {
        yield Either.nullable<string>(val);
      });

    const extractIdFunc = compose(extractG, safeGenFunc);
    const id = extractIdFunc('a-b-c-d-e');

    expect(id.getOrElse('missing id')).toBe('a-b-c-d-e');
  });
});

