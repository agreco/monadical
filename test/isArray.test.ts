import isArray from '../src/isArray';

test("[['a']] isArray", () => expect(isArray([['a']])).toBe(true));

test('new Array() isArray', () => expect(isArray([1, 2, 3])).toBe(true));

test('[] isArray', () => expect(isArray([])).toBe(true));

test('expression isArray', () => expect(isArray('a'.length === 1 && [])).toBe(true));

test('null isArray', () => expect(isArray(null)).toBe(false));

test('undefined isArray', () => expect(isArray(undefined)).toBe(false));

test('void 0 isArray', () => expect(isArray(void 0)).toBe(false));

test('1 isArray', () => expect(isArray(1)).toBe(false));

test('0 isArray', () => expect(isArray(0)).toBe(false));

test('NaN isArray', () => expect(isArray(NaN)).toBe(false));

test('Infinity isArray', () => expect(isArray(Infinity)).toBe(false));

test('function isArray', () => {
  function Func() {}
  Func.prototype.expand = 'test';
  const MyFunc = new (Func as any)(); // TS nonsense

  expect(isArray(MyFunc)).toBe(false);
});

test('object isArray', () => expect(isArray({})).toBe(false));

test('string isArray', () => expect(isArray('')).toBe(false));

test('Map isArray', () => expect(isArray(new Map())).toBe(false));

test('Set isArray', () => expect(isArray(new Set())).toBe(false));
