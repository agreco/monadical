
import isBoolean from '../src/isBoolean';

test('true isBoolean', () => expect(isBoolean(true)).toBe(true));

test('false isBoolean', () => expect(isBoolean(false)).toBe(true));

test('expression isBoolean', () =>  expect(isBoolean(null === void 0 || undefined === 'undefined')).toBe(true));

test('null isBoolean', () => expect(isBoolean(null)).toBe(false));

test('undefined isBoolean', () => expect(isBoolean(undefined)).toBe(false));

test('void 0 isBoolean', () => expect(isBoolean(void 0)).toBe(false));

test('1 isBoolean', () => expect(isBoolean(1)).toBe(false));

test('0 isBoolean', () => expect(isBoolean(0)).toBe(false));

test('NaN isBoolean', () => expect(isBoolean(NaN)).toBe(false));

test('Infinity isBoolean', () => expect(isBoolean(Infinity)).toBe(false));

test('function isBoolean', () => {
  function Func () {}
  Func.prototype.expand = "test";
  const MyFunc = new (Func as any)(); // TS nonsense
  
  expect(isBoolean(MyFunc)).toBe(false);
});

test('object isBoolean', () => expect(isBoolean({})).toBe(false));

test('array isBoolean', () => expect(isBoolean([])).toBe(false));

test('string isBoolean', () => expect(isBoolean('')).toBe(false));

test('Map isBoolean', () => expect(isBoolean(new Map())).toBe(false));

test('Set isBoolean', () => expect(isBoolean(new Set())).toBe(false));
