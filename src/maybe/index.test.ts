import Maybe, { Nothing } from './';
import identity from '../identity';

describe('Maybe', () => {
  test('Maybe Just.value', () => {
    const x = Maybe.just(10);
    expect(x.value).toBe(10);
  });

  test('Maybe Nothing.value', () => {
    const x = Maybe.nothing(void 0);
    expect(x.value).toBe(void 0);
  });

  test('Maybe.just value', async () => {
    const val: number = 10;
    const x = Maybe.of(val);
    expect(x.isJust()).toBe(true);
    expect(x.isNothing()).toBe(false);
    expect(x.value).toBe(10);
    expect(x.getOrElse('A default value')).toBe(10);

    const { data } = await Promise.resolve({ data: 'Resolved value' }).then(identity);
    const y = Maybe.nullable(data);
    expect(y.isJust()).toBe(true);
    expect(y.isNothing()).toBe(false);
    expect(y.getOrElse('An error occurred')).toBe('Resolved value');
  });

  test('Maybe.just is chainable', () => {
    const xa = Maybe.of(10);
    expect(
      xa
        .map(x => x * x)
        .map(x => x - 10)
        .chain(x => x * 2)
    ).toBe(180);
  });

  test('Maybe.just is filterable', () => {
    const xa = Maybe.of(10);

    expect(
      xa
        .map(x => x * x)
        .filter(x => x >= 90)
        .map(x => x)
        .chain(identity)
    ).toBe(100);

    expect(
      xa
        .map(x => x * x)
        .filter(x => x >= 90)
        .getOrElse('An error occurred')
    ).toBe(100);

    expect(
      xa
        .map(x => x * x)
        .filter(x => x >= 90)
        .filter(x => x >= 90)
        .chain(identity)
    ).toBe(100);
  });

  test('Maybe.nothing value', async () => {
    const x = Maybe.nothing();
    expect(x.isJust()).toBe(false);
    expect(x.isNothing()).toBe(true);
    expect(x.value).toBe(void 0);

    const { data } = await Promise.reject({ data: void 0 }).catch(identity);
    const y = Maybe.nullable(data);
    expect(y.isJust()).toBe(false);
    expect(y.isNothing()).toBe(true);
    expect(y.value).toBe(void 0);
  });

  test('Maybe.nothing is filterable', () => {
    const xa = Maybe.nothing<number, void>();
    const xVal = xa
      .map(x => x * x)
      .map(x => x - 10)
      .filter(x => x >= 90);

    expect(xVal.isNothing()).toBe(true);

    const ya = Maybe.nothing<number, void>();
    const yVal = ya
      .map(x => x * x)
      .map(x => x - 10)
      .filter(x => x >= 90)
      .chain(x => x * 2);

    expect(yVal).not.toBe('A test');
  });

  test('Maybe.nothing is chainable', () => {
    const xa = Maybe.nothing<number, void>();

    const xVal = xa
      .map(x => x * x)
      .map(x => x - 10)
      .chain(x => x * 2);

    expect(xVal instanceof Nothing).toBe(true);
  });

  test('Maybe.nullable value', async () => {
    expect(Maybe.nullable(void 0).value).toBe(void 0);

    let x: string = 'a value';
    x = await Promise.reject(void 0).catch(identity);
    expect(Maybe.nullable<string, void>(x).map(x => x.length.toString()).map(x => x.split('')[0]).value).toBe(void 0);
  });
});
