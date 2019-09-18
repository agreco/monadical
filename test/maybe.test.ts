
import Maybe, { Just, Nothing } from '../src/maybe';
import identity from '../src/identity';

interface IData {
  data: number | string
}

test('Maybe value', () => {
  
  const x: Just<number> = Maybe.of(10);
  expect(x.value).toBe(10);
});

test('Maybe.just value', async () => {
  
  const val: number = 10;
  const x: Just<number> = Maybe.of(val);
  expect(x.isJust()).toBe(true);
  expect(x.isNothing()).toBe(false);
  expect(x.value).toBe(10);
  expect(x.getOrElse('A default value')).toBe(10);
  
  const { data } = await Promise.resolve({ data: 'Resolved value' }).then(identity);
  const y: Maybe<IData, void> = Maybe.nullable(data);
  expect(y.isJust()).toBe(true);
  expect(y.isNothing()).toBe(false);
  expect(y.getOrElse('An error occurred')).toBe('Resolved value');
});

test('Maybe.just is chainable', () => {

  const xa: Just<number> = Maybe.of(10);
  expect(xa.map((x: number) => x*x).map((x: number) => (x - 10)).chain((x: number) => x * 2)).toBe(180);
});

test('Maybe.just is filterable', () => {

  const xa: Just<number> = Maybe.of(10);

  expect(xa.map((x: number) => x * x).filter((x: number) => x >= 90).map((x: number) => x).chain(identity)).toBe(100);
  expect(xa.map((x: number) => x * x).filter((x: number) => x >= 90).getOrElse('An error occurred')).toBe(100);
  expect(xa.map((x: number) => x * x).filter((x: number) => x >= 90).filter((x: number) => x >= 90).chain(identity)).toBe(100);
});

test('Maybe.nothing value', async () => {

  const x: Nothing<number> = Maybe.nothing(10);
  expect(x.isJust()).toBe(false);
  expect(x.isNothing()).toBe(true);
  expect(x.getOrElse('A default value')).toBe('A default value');

  const { data } = await Promise.reject({ data: void 0 }).catch(identity);
  const y: Maybe<IData, void> = Maybe.nullable<IData, void>(data);
  expect(y.isJust()).toBe(false);
  expect(y.isNothing()).toBe(true);
  expect(y.getOrElse('An error occurred')).toBe('An error occurred');
});

test('Maybe.nothing is filterable', () => {

  const xa: Nothing<number> = Maybe.nothing(10);
  expect(xa.map((x: number) => x*x).map((x: number) => (x - 10)).filter((x: number) => x >= 90).chain((x: number) => x * 2)).toBe(10);

  const ya: Nothing<string> = Maybe.nothing('A test');
  expect(ya.map((x: number) => x*x).map((x: number) => (x - 10)).filter((x: number) => x >= 90).chain((x: number) => x * 2)).toBe('A test');
});

test('Maybe.nothing is chainable', () => {
  
  const xa: Nothing<number> = Maybe.nothing(10);
  expect(xa.map((x: number) => x*x).map((x: number) => (x - 10)).chain((x: number) => x * 2)).toBe(10);

  const ya: Nothing<string> = Maybe.nothing('A test');
  expect(ya.map((x: number) => x*x).map((x: number) => (x - 10)).chain((x: number) => x * 2)).toBe('A test');
});
