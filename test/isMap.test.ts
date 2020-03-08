import isMap from '../src/isMap';

test('expression isMap', () => {
  const M = new (Map as any)([['a', 'b', 'c']]); // TS nonsense
  expect(isMap('a'.length === 1 && M)).toBe(true);
});

test('Map isMap', () => expect(isMap(new Map())).toBe(true));

test('[1, 2, 3] isMap', () => expect(isMap([1, 2, 3])).toBe(false));

test('null isMap', () => expect(isMap(null)).toBe(false));

test('undefined isMap', () => expect(isMap(undefined)).toBe(false));

test('void 0 isMap', () => expect(isMap(void 0)).toBe(false));

test('1 isMap', () => expect(isMap(1)).toBe(false));

test('0 isMap', () => expect(isMap(0)).toBe(false));

test('NaN isMap', () => expect(isMap(NaN)).toBe(false));

test('Infinity isMap', () => expect(isMap(Infinity)).toBe(false));

test('function isMap', () => {
  function Func() {}
  Func.prototype.expand = 'test';
  const MyFunc = new (Func as any)(); // TS nonsense

  expect(isMap(MyFunc)).toBe(false);
});

test('object isMap', () => expect(isMap({})).toBe(false));

test('string isMap', () => expect(isMap('')).toBe(false));

test('Set isMap', () => expect(isMap(new Set())).toBe(false));
