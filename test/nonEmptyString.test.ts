import nonEmptyString from '../src/nonEmptyString';
import noop from '../src/noop';

test('null nonEmptyString', () => expect(nonEmptyString(null)).toBe(false));

test('undefined nonEmptyString', () => expect(nonEmptyString(undefined)).toBe(false));

test('void 0 nonEmptyString', () => expect(nonEmptyString(void 0)).toBe(false));

test('true nonEmptyString', () => expect(nonEmptyString(true)).toBe(false));

test('false nonEmptyString', () => expect(nonEmptyString(false)).toBe(false));

test('1 nonEmptyString', () => expect(nonEmptyString(1)).toBe(false));

test('0 nonEmptyString', () => expect(nonEmptyString(0)).toBe(false));

test('NaN nonEmptyString', () => expect(nonEmptyString(NaN)).toBe(false));

test('Infinity nonEmptyString', () => expect(nonEmptyString(Infinity)).toBe(false));

test('function nonEmptyString', () => {
  function Func() {}
  Func.prototype.expand = 'test';
  const MyFunc = new (Func as any)();
  
  expect(nonEmptyString(noop)).toBe(false);
  expect(nonEmptyString(Func)).toBe(false);
  expect(nonEmptyString(MyFunc)).toBe(false);
  expect(nonEmptyString(MyFunc.expand)).toBe(true);
});

test('object nonEmptyString', () => expect(nonEmptyString({})).toBe(false));
test('object with field length 0 not nonEmptyString', () => expect(nonEmptyString({ length: 0 })).toBe(false));
test('object with field length 1 not nonEmptyString', () => expect(nonEmptyString({ length: 1 })).toBe(false));
test('object not nonEmptyString', () => expect(nonEmptyString({ a: 'b', length: 1 })).toBe(false));

test('array nonEmptyString', () => expect(nonEmptyString([])).toBe(false));
test('array not nonEmptyString', () => expect(nonEmptyString(['1', 2, 3, new Map(), 'abc'])).toBe(false));

test('string nonEmptyString', () => expect(nonEmptyString('')).toBe(false));
test('string not nonEmptyString', () => expect(nonEmptyString('A value')).toBe(true));

test('Map nonEmptyString', () => expect(nonEmptyString(new Map())).toBe(false));
test('Map not nonEmptyString', () => {
  const M = new (Map as any)([['a', 'b', 'c']]);
  expect(nonEmptyString(M)).toBe(false);
});

test('Set nonEmptyString', () => expect(nonEmptyString(new Set())).toBe(false));
test('Set not nonEmptyString', () => expect(nonEmptyString(new Set(['a', 'b', 'c']))).toBe(false));
