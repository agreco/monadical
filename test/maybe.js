
import test from 'ava';
import Maybe from '../src/maybe';
import identity from '../src/identity';

test('Maybe value', t => {
  const x = new Maybe.of(10);
  t.is(x.value, 10);
});

test('Maybe.just value', async t => {
  const x = Maybe.of(10);
  t.is(x.isJust, true);
  t.is(x.isNothing, false);
  t.is(x.value, 10);
  
  const { data } = await Promise.resolve({ data: 10 });
  const y = Maybe.nullable(data);
  
  t.is(y.isJust, true);
  t.is(y.isNothing, false);
  t.is(y.value, 10);
  t.is(y.getOrElse('A default value'), 10);
});

test('Maybe.just is chainable', t => {
  const xa = Maybe.of(10);
  t.is(xa.map(x => x*x).map(x => (x - 10)).chain(x => x * 2), 180);
});

test('Maybe.just is filterable', t => {
  const xa = Maybe.of(10);
  t.is(xa.map(x => x*x).map(x => (x - 10)).filter(x => x >= 90).getOrElse('An error occurred'), 90);
});

test('Maybe.nothing value', async t => {
  const x = Maybe.nothing();
  t.is(x.isJust, false);
  t.is(x.isNothing, true);
  t.is(x.getOrElse('A default value'), 'A default value');
  
  const { data } = await Promise.reject({ data: void 0  }).catch(identity);
  const y = Maybe.nullable(data);
  t.is(y.isJust, false);
  t.is(y.isNothing, true);
  t.is(y.getOrElse('An error occurred'), 'An error occurred');
});

test('Maybe.nothing is chainable', t => {
  const xa = Maybe.nothing();
  t.is(xa.map(x => x*x).map(x => (x - 10)).chain(x => x * 2).filter(x => x >= 10), void 0);
});

test('Maybe.nothing is filterable', t => {
  const xa = Maybe.nothing();
  t.is(xa.map(x => x*x).map(x => (x - 10)).filter(x => x >= 90), void 0);
});


