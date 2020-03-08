import isEmpty from '../src/isEmpty';
import noop from '../src/noop';

test('null isEmpty', () => expect(isEmpty(null)).toBe(true));

test('undefined isEmpty', () => expect(isEmpty(undefined)).toBe(true));

test('void 0 isEmpty', () => expect(isEmpty(void 0)).toBe(true));

test('true isEmpty', () => expect(isEmpty(true)).toBe(true));

test('false isEmpty', () => expect(isEmpty(false)).toBe(true));

test('1 isEmpty', () => expect(isEmpty(1)).toBe(true));

test('0 isEmpty', () => expect(isEmpty(0)).toBe(true));

test('NaN isEmpty', () => expect(isEmpty(NaN)).toBe(true));

test('Infinity isEmpty', () => expect(isEmpty(Infinity)).toBe(true));

test('function isEmpty', () => {
  function Func() {}
  Func.prototype.expand = 'test';
  const MyFunc = new (Func as any)(); // TS nonsense

  expect(isEmpty(Func)).toBe(true);
  expect(isEmpty(MyFunc)).toBe(true);
  expect(isEmpty(noop)).toBe(true);
  expect(isEmpty(noop())).toBe(true);
});

test('object isEmpty', () => expect(isEmpty({})).toBe(true));
test('object with field length 0 not isEmpty', () => expect(isEmpty({ length: 0 })).toBe(false));
test('object with field length 1 not isEmpty', () => expect(isEmpty({ length: 1 })).toBe(false));
test('object not isEmpty', () => expect(isEmpty({ a: 'b', length: 1 })).toBe(false));

test('array isEmpty', () => expect(isEmpty([])).toBe(true));
test('array not isEmpty', () => expect(isEmpty(['1', 2, 3, new Map(), 'abc'])).toBe(false));

test('string isEmpty', () => expect(isEmpty('')).toBe(true));
test('string not isEmpty', () => expect(isEmpty('A value')).toBe(false));

test('Map isEmpty', () => expect(isEmpty(new Map())).toBe(true));
test('Map not isEmpty', () => {
  const M = new (Map as any)([['a', 'b', 'c']]); // TS nonsense
  expect(isEmpty(M)).toBe(false);
});

test('Set isEmpty', () => expect(isEmpty(new Set())).toBe(true));
test('Set not isEmpty', () => expect(isEmpty(new Set(['a', 'b', 'c']))).toBe(false));
