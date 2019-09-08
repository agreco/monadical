
import test from 'ava';
import Maybe, { Just, Nothing } from '../src/maybe';
import identity from '../src/identity';

interface IData {
  data: number | string
}

test('Maybe value', t => {
  
  const x: Just<number> = Maybe.of(10);
  t.is(x.value, 10);
});

test('Maybe.just value', async t => {
  
  const val: number = 10;
  const x: Just<number> = Maybe.of(val);
  t.is(x.isJust(), true);
  t.is(x.isNothing(), false);
  t.is(x.value, 10);
  t.is(x.getOrElse('A default value'), 10);
  
  const { data } = await Promise.resolve({ data: 'Resolved value' }).then(identity);
  const y: Maybe<IData, void> = Maybe.nullable(data);
  t.is(y.isJust(), true);
  t.is(y.isNothing(), false);
  t.is(y.getOrElse('An error occurred'), 'Resolved value');
});

test('Maybe.just is chainable', t => {

  const xa: Just<number> = Maybe.of(10);
  t.is(xa.map((x: number) => x*x).map((x: number) => (x - 10)).chain((x: number) => x * 2), 180);
});

test('Maybe.just is filterable', t => {

  const xa: Just<number> = Maybe.of(10);

  t.is(xa.map((x: number) => x * x).filter((x: number) => x >= 90).map((x: number) => x).chain(identity), 100);
  t.is(xa.map((x: number) => x * x).filter((x: number) => x >= 90).getOrElse('An error occurred'), 100);
  t.is(xa.map((x: number) => x * x).filter((x: number) => x >= 90).filter((x: number) => x >= 90).chain(identity), 100);
});

test('Maybe.nothing value', async t => {

  const x: Nothing<number> = Maybe.nothing(10);
  t.is(x.isJust(), false);
  t.is(x.isNothing(), true);
  t.is(x.getOrElse('A default value'), 'A default value');

  const { data } = await Promise.reject({ data: void 0 }).catch(identity);
  const y: Maybe<IData, void> = Maybe.nullable<IData, void>(data);
  t.is(y.isJust(), false);
  t.is(y.isNothing(), true);
  t.is(y.getOrElse('An error occurred'), 'An error occurred');
});

test('Maybe.nothing is filterable', t => {

  const xa: Nothing<number> = Maybe.nothing(10);
  t.is(xa.map((x: number) => x*x).map((x: number) => (x - 10)).filter((x: number) => x >= 90).chain((x: number) => x * 2), 10);

  const ya: Nothing<string> = Maybe.nothing('A test');
  t.is(ya.map((x: number) => x*x).map((x: number) => (x - 10)).filter((x: number) => x >= 90).chain((x: number) => x * 2), 'A test');
});

test('Maybe.nothing is chainable', t => {
  
  const xa: Nothing<number> = Maybe.nothing(10);
  t.is(xa.map((x: number) => x*x).map((x: number) => (x - 10)).chain((x: number) => x * 2), 10);

  const ya: Nothing<string> = Maybe.nothing('A test');
  t.is(ya.map((x: number) => x*x).map((x: number) => (x - 10)).chain((x: number) => x * 2), 'A test');
});
