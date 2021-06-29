import nonEmptyArray from '../src/nonEmptyArray';
import noop from '../src/noop';

test('null nonEmptyArray', () => expect(nonEmptyArray(null)).toBe(false));

test('undefined nonEmptyArray', () => expect(nonEmptyArray(undefined)).toBe(false));

test('void 0 nonEmptyArray', () => expect(nonEmptyArray(void 0)).toBe(false));

test('true nonEmptyArray', () => expect(nonEmptyArray(true)).toBe(false));

test('false nonEmptyArray', () => expect(nonEmptyArray(false)).toBe(false));

test('1 nonEmptyArray', () => expect(nonEmptyArray(1)).toBe(false));

test('0 nonEmptyArray', () => expect(nonEmptyArray(0)).toBe(false));

test('NaN nonEmptyArray', () => expect(nonEmptyArray(NaN)).toBe(false));

test('Infinity nonEmptyArray', () => expect(nonEmptyArray(Infinity)).toBe(false));

test('function nonEmptyArray', () => {
  function Func() {}
  Func.prototype.expand = 'test';
  const MyFunc = new (Func as any)();
  
  expect(nonEmptyArray(noop)).toBe(false);
  expect(nonEmptyArray(Func)).toBe(false);
  expect(nonEmptyArray(MyFunc)).toBe(false);
  expect(nonEmptyArray(MyFunc.expand)).toBe(false);
});

test('object nonEmptyArray', () => expect(nonEmptyArray({})).toBe(false));
test('object with field length 0 not nonEmptyArray', () => expect(nonEmptyArray({ length: 0 })).toBe(false));
test('object with field length 1 not nonEmptyArray', () => expect(nonEmptyArray({ length: 1 })).toBe(false));
test('object not nonEmptyArray', () => expect(nonEmptyArray({ a: 'b', length: 1 })).toBe(false));

test('array nonEmptyArray', () => expect(nonEmptyArray([])).toBe(false));
test('array not nonEmptyArray', () => expect(nonEmptyArray(['1', 2, 3, new Map(), 'abc'])).toBe(true));

test('string nonEmptyArray', () => expect(nonEmptyArray('')).toBe(false));
test('string not nonEmptyArray', () => expect(nonEmptyArray('A value')).toBe(false));

test('Map nonEmptyArray', () => expect(nonEmptyArray(new Map())).toBe(false));
test('Map not nonEmptyArray', () => {
  const M = new (Map as any)([['a', 'b', 'c']]);
  expect(nonEmptyArray(M)).toBe(false);
});

test('Set nonEmptyArray', () => expect(nonEmptyArray(new Set())).toBe(false));
test('Set not nonEmptyArray', () => expect(nonEmptyArray(new Set(['a', 'b', 'c']))).toBe(false));
