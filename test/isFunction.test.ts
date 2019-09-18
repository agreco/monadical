
import isFunction from '../src/isFunction';

test('expression isFunction', () => {
  const z = (x: number): number => x;
  
  expect(isFunction(z)).toBe(true);
  expect(isFunction((x: number): number => x)).toBe(true);
  expect(isFunction('a'.length === 1 && ((x: number): number => x))).toBe(true);
});

test('function isFunction', () => {
  function Func () {}
  Func.prototype.expand = "test";
  const MyFunc: any = new (Func as any)(); // TS nonsense
  
  expect(isFunction(Func)).toBe(true);
  expect(isFunction(new (Func as any)())).toBe(false);
  expect(isFunction(MyFunc)).toBe(false);
});

test('null isFunction', () => expect(isFunction(null)).toBe(false));

test('undefined isFunction', () => expect(isFunction(undefined)).toBe(false));

test('[1, 2, 3] isFunction', () => expect(isFunction([1, 2, 3])).toBe(false));

test('void 0 isFunction', () => expect(isFunction(void 0)).toBe(false));

test('1 isFunction', () => expect(isFunction(1)).toBe(false));

test('0 isFunction', () => expect(isFunction(0)).toBe(false));

test('NaN isFunction', () => expect(isFunction(NaN)).toBe(false));

test('Infinity isFunction', () => expect(isFunction(Infinity)).toBe(false));

test('object isFunction', () => expect(isFunction({})).toBe(false));

test('string isFunction', () => expect(isFunction('')).toBe(false));

test('Map isFunction', () => expect(isFunction(new Map())).toBe(false));

test('Set isFunction', () => expect(isFunction(new Set())).toBe(false));
