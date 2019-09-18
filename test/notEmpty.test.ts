
import notEmpty from '../src/notEmpty';
import noop from '../src/noop';

test('null notEmpty', () => expect(notEmpty(null)).toBe(false));

test('undefined notEmpty', () => expect(notEmpty(undefined)).toBe(false));

test('void 0 notEmpty', () => expect(notEmpty(void 0)).toBe(false));

test('true notEmpty', () => expect(notEmpty(true)).toBe(false));

test('false notEmpty', () => expect(notEmpty(false)).toBe(false));

test('1 notEmpty', () => expect(notEmpty(1)).toBe(false));

test('0 notEmpty', () => expect(notEmpty(0)).toBe(false));

test('NaN notEmpty', () => expect(notEmpty(NaN)).toBe(false));

test('Infinity notEmpty', () => expect(notEmpty(Infinity)).toBe(false));

test('function notEmpty', () => {
  function Func () {}
  Func.prototype.expand = "test";
  const MyFunc = new (Func as any)(); // TS nonsense

  expect(notEmpty(noop)).toBe(false);
  expect(notEmpty(noop())).toBe(false);
  expect(notEmpty(Func)).toBe(false);
  expect(notEmpty(MyFunc)).toBe(false);
  expect(notEmpty(MyFunc.expand)).toBe(true);
});

test('object notEmpty', () => expect(notEmpty({})).toBe(false));
test('object with field length 0 not notEmpty', () => expect(notEmpty({ length: 0 })).toBe(true));
test('object with field length 1 not notEmpty', () => expect(notEmpty({ length: 1 })).toBe(true));
test('object not notEmpty', () => expect(notEmpty({ a: 'b', length: 1 })).toBe(true));

test('array notEmpty', () => expect(notEmpty([])).toBe(false));
test('array not notEmpty', () => expect(notEmpty(['1', 2, 3, new Map(), 'abc'])).toBe(true));

test('string notEmpty', () => expect(notEmpty('')).toBe(false));
test('string not notEmpty', () => expect(notEmpty('A value')).toBe(true));

test('Map notEmpty', () => expect(notEmpty(new Map())).toBe(false));
test('Map not notEmpty', () => {
  const M = new (Map as any)([['a', 'b', 'c']]); // TS nonsense
  expect(notEmpty(M)).toBe(true)
});

test('Set notEmpty', () => expect(notEmpty(new Set())).toBe(false));
test('Set not notEmpty', () => expect(notEmpty(new Set(['a', 'b', 'c']))).toBe(true));
