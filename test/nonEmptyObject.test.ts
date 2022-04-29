import nonEmptyObject from '../src/nonEmptyObject';
import noop from '../src/noop';

test('null nonEmptyObject', () => expect(nonEmptyObject(null)).toBe(false));

test('undefined nonEmptyObject', () => expect(nonEmptyObject(undefined)).toBe(false));

test('void 0 nonEmptyObject', () => expect(nonEmptyObject(void 0)).toBe(false));

test('true nonEmptyObject', () => expect(nonEmptyObject(true)).toBe(false));

test('false nonEmptyObject', () => expect(nonEmptyObject(false)).toBe(false));

test('1 nonEmptyObject', () => expect(nonEmptyObject(1)).toBe(false));

test('0 nonEmptyObject', () => expect(nonEmptyObject(0)).toBe(false));

test('NaN nonEmptyObject', () => expect(nonEmptyObject(NaN)).toBe(false));

test('Infinity nonEmptyObject', () => expect(nonEmptyObject(Infinity)).toBe(false));

test('function nonEmptyObject', () => {
  function Func() {}
  Func.prototype.expand = 'test';
  const MyFunc = new (Func as any)();

  expect(nonEmptyObject(noop)).toBe(false);
  expect(nonEmptyObject(Func)).toBe(false);
  expect(nonEmptyObject(MyFunc)).toBe(false);
  expect(nonEmptyObject(MyFunc.expand)).toBe(false);
});

test('object nonEmptyObject', () => expect(nonEmptyObject({})).toBe(false));
test('object with field length 0 not nonEmptyObject', () => expect(nonEmptyObject({ length: 0 })).toBe(true));
test('object with field length 1 not nonEmptyObject', () => expect(nonEmptyObject({ length: 1 })).toBe(true));
test('object not nonEmptyObject', () => expect(nonEmptyObject({ a: 'b', length: 1 })).toBe(true));

test('array nonEmptyObject', () => expect(nonEmptyObject([])).toBe(false));
test('array not nonEmptyObject', () => expect(nonEmptyObject(['1', 2, 3, new Map(), 'abc'])).toBe(false));

test('string nonEmptyObject', () => expect(nonEmptyObject('')).toBe(false));
test('string not nonEmptyObject', () => expect(nonEmptyObject('A value')).toBe(false));

test('Map nonEmptyObject', () => expect(nonEmptyObject(new Map())).toBe(false));
test('Map not nonEmptyObject', () => {
  const M = new (Map as any)([['a', 'b', 'c']]);
  expect(nonEmptyObject(M)).toBe(false);
});

test('Set nonEmptyObject', () => expect(nonEmptyObject(new Set())).toBe(false));
test('Set not nonEmptyObject', () => expect(nonEmptyObject(new Set(['a', 'b', 'c']))).toBe(false));
