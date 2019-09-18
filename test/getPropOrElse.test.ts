
import getPropOrElse from '../src/getPropOrElse';

test('getPropOrElse will return an object property', () => {
  const prop: number = getPropOrElse('a.b.c', { a: { b: { c: 13 }}}, 'A default value');
  expect(prop).toBe(13);
});

test('getPropOrElse will return the default value', () => {
  const prop: string = getPropOrElse('a.b.c', { a: { b: {}}}, 'A default value');
  expect(prop).toBe('A default value');
});

test('getPropOrElse will return an empty object when default value is nil', () => {
  const prop: {} = getPropOrElse('a.b.c', { a: { b: {}}}, void 0);
  expect(prop).toEqual({});
});

test('getPropOrElse will return undefined', () => {
  let prop: undefined = getPropOrElse('', { a: { b: {}}}, {});
  expect(prop).toEqual(undefined);

  prop = getPropOrElse(null, { a: { b: {} } }, {});
  expect(prop).toEqual(undefined);

  prop = getPropOrElse('a.b.c', null, {});
  expect(prop).toEqual(undefined);
});
