import isString from '../src/isString';

test('string isString', () => expect(isString('Hello world')).toBe(true));

test('expression isString', () => expect(isString('a'.length === 1 && 'Hello world')).toBe(true));

test('empty String isString', () => expect(isString('')).toBe(true));

test('[1, 2, 3] isString', () => expect(isString([1, 2, 3])).toBe(false));

test('null isString', () => expect(isString(null)).toBe(false));

test('undefined isString', () => expect(isString(undefined)).toBe(false));

test('void 0 isString', () => expect(isString(void 0)).toBe(false));

test('1 isString', () => expect(isString(1)).toBe(false));

test('0 isString', () => expect(isString(0)).toBe(false));

test('NaN isString', () => expect(isString(NaN)).toBe(false));

test('Infinity isString', () => expect(isString(Infinity)).toBe(false));

test('function isString', () => {
  function Func() {}
  Func.prototype.expand = 'test';
  const MyFunc = new (Func as any)(); // TS nonsense

  expect(isString(MyFunc)).toBe(false);
});

test('object isString', () => expect(isString({})).toBe(false));

test('Map isString', () => expect(isString(new Map())).toBe(false));

test('Set isString', () => expect(isString(new Set())).toBe(false));
