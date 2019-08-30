
import test from 'ava';
import getPropOrElse from '../src/getPropOrElse';

test('getPropOrElse will return an object property', t => {
  const prop: number = getPropOrElse('a.b.c', { a: { b: { c: 13 }}}, 'A default value');
  t.is(prop, 13);
});

test('getPropOrElse will return the default value', t => {
  const prop: string = getPropOrElse('a.b.c', { a: { b: {}}}, 'A default value');
  t.is(prop, 'A default value');
});

test('getPropOrElse will return an empty object when default value is nil', t => {
  const prop: {} = getPropOrElse('a.b.c', { a: { b: {}}}, void 0);
  t.deepEqual(prop, {});
});

test('getPropOrElse will return undefined', t => {
  let prop: undefined = getPropOrElse('', { a: { b: {}}}, {});
  t.deepEqual(prop, undefined);

  prop = getPropOrElse(null, { a: { b: {} } }, {});
  t.deepEqual(prop, undefined);

  prop = getPropOrElse('a.b.c', null, {});
  t.deepEqual(prop, undefined);
});
