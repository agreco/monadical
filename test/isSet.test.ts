
import isSet from '../src/isSet';

test('expression isSet', () => {
  const S = new (Set as any)(['a', 'b', 'c']); // TS nonsense
  expect(isSet('a'.length === 1 && S)).toBe(true);
});

test('Set isSet', () => expect(isSet(new Set())).toBe(true));

test('[1, 2, 3] isSet', () => expect(isSet([1, 2, 3])).toBe(false));

test('null isSet', () => expect(isSet(null)).toBe(false));

test('undefined isSet', () => expect(isSet(undefined)).toBe(false));

test('void 0 isSet', () => expect(isSet(void 0)).toBe(false));

test('1 isSet', () => expect(isSet(1)).toBe(false));

test('0 isSet', () => expect(isSet(0)).toBe(false));

test('NaN isSet', () => expect(isSet(NaN)).toBe(false));

test('Infinity isSet', () => expect(isSet(Infinity)).toBe(false));

test('function isSet', () => {
  function Func () {}
  Func.prototype.expand = "test";
  const MyFunc = new (Func as any)(); // TS nonsense
  
  expect(isSet(MyFunc)).toBe(false);
});

test('object isSet', () => expect(isSet({})).toBe(false));

test('string isSet', () => expect(isSet('')).toBe(false));

test('Map isSet', () => expect(isSet(new Map())).toBe(false));
