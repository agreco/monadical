import Maybe, { Just, Nothing } from '../src/maybe';
import Empty from '../src/empty';
import identity from '../src/identity';

interface Data {
  data: number | string;
}

test('Maybe Just.value', () => {
  const x: Just<number, void> = Maybe.of(10);
  expect(x.value).toBe(10);
});

test('Either Nothing.value', () => {
  const x: Nothing<number, void> = Maybe.nothing();
  expect(x.value).toBe(void 0);
});

test('Maybe.just value', async () => {
  const val: number = 10;
  const x: Just<number, void> = Maybe.of(val);
  expect(x.isJust()).toBe(true);
  expect(x.isNothing()).toBe(false);
  expect(x.value).toBe(10);
  expect(x.getOrElse('A default value')).toBe(10);

  const { data } = await Promise.resolve({ data: 'Resolved value' }).then(identity);
  const y: Maybe<Data, void> = Maybe.nullable(data);
  expect(y.isJust()).toBe(true);
  expect(y.isNothing()).toBe(false);
  expect(y.getOrElse('An error occurred')).toBe('Resolved value');
});

test('Maybe.just is chainable', () => {
  const xa: Just<number, Empty> = Maybe.of(10);
  expect(
    xa
      .map((x: number) => x * x)
      .map((x: number) => x - 10)
      .chain((x: number) => x * 2)
  ).toBe(180);
});

test('Maybe.just is filterable', () => {
  const xa: Just<number, Empty> = Maybe.of(10);

  expect(
    xa
      .map((x: number) => x * x)
      .filter((x: number) => x >= 90)
      .map((x: number) => x)
      .chain(identity)
  ).toBe(100);
  expect(
    xa
      .map((x: number) => x * x)
      .filter((x: number) => x >= 90)
      .getOrElse('An error occurred')
  ).toBe(100);
  expect(
    xa
      .map((x: number) => x * x)
      .filter((x: number) => x >= 90)
      .filter((x: number) => x >= 90)
      .chain(identity)
  ).toBe(100);
});

test('Maybe.nothing value', async () => {
  const x: Nothing<number, void> = Maybe.nothing();
  expect(x.isJust()).toBe(false);
  expect(x.isNothing()).toBe(true);
  expect(x.value).toBe(void 0);

  const { data } = await Promise.reject({ data: void 0 }).catch(identity);
  const y: Maybe<Data, void> = Maybe.nullable<Data, void>(data);
  expect(y.isJust()).toBe(false);
  expect(y.isNothing()).toBe(true);
  expect(y.value).toBe(void 0);
});

test('Maybe.nothing is filterable', () => {
  const xa: Maybe<number, void> = Maybe.nothing<number, void>();
  const xVal: Maybe<number, void> = xa
    .map((x: number) => x * x)
    .map((x: number) => x - 10)
    .filter((x: number) => x >= 90);

  expect(xVal.isNothing()).toBe(true);

  const ya: Maybe<number, void> = Maybe.nothing<number, void>();
  const yVal: number | Nothing<number, void> = ya
    .map((x: number) => x * x)
    .map((x: number) => x - 10)
    .filter((x: number) => x >= 90)
    .chain((x: number) => x * 2);

  expect(yVal).not.toBe('A test');
});

test('Maybe.nothing is chainable', () => {
  const xa: Maybe<number, void> = Maybe.nothing<number, void>();

  const xVal: number | Nothing<number, void> = xa
    .map((x: number) => x * x)
    .map((x: number) => x - 10)
    .chain((x: number) => x * 2);

  expect(xVal instanceof Nothing).toBe(true);
});

test('Maybe.nullable value', async () => {
  const maybeA: Maybe<string, void> = Maybe.nullable<string>('');
  expect(maybeA.value).toBe('');

  const maybeB: Maybe<string, void> = Maybe.nullable<string>(void 0);
  expect(maybeB.value).toBe(void 0);

  let x: string = 'a value';
  x = await Promise.resolve(void 0);
  const maybeC: Maybe<string, void> = Maybe.nullable<string>(x);
  expect(maybeC.map((x: string) => x.length.toString()).map((x: string) => x.split('')[0]).value).toBe(void 0);
});
