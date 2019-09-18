
import notNil from '../src/notNil';

test('string notNil', () => expect(notNil('Hello world')).toBe(true));

test('expression notNil', () => expect(notNil('a'.length === 1 && 'Hello world')).toBe(true));

test('empty String notNil', () => expect(notNil('')).toBe(true));

test('[1, 2, 3] notNil', () => expect(notNil([1, 2, 3])).toBe(true));

test('null notNil', () => expect(notNil(null)).toBe(false));

test('undefined notNil', () => expect(notNil(undefined)).toBe(false));

test('void 0 notNil', () => expect(notNil(void 0)).toBe(false));

test('1 notNil', () => expect(notNil(1)).toBe(true));

test('0 notNil', () => expect(notNil(0)).toBe(true));

test('NaN notNil', () => expect(notNil(NaN)).toBe(true));

test('Infinity notNil', () => expect(notNil(Infinity)).toBe(true));

test('function notNil', () => {
  function Func () {}
  Func.prototype.expand = "test";
  const MyFunc = new (Func as any)(); // TS nonsense
  
  expect(notNil(MyFunc)).toBe(true);
});

test('object notNil', () => expect(notNil({})).toBe(true));

test('Map notNil', () => expect(notNil(new Map())).toBe(true));

test('Set notNil', () => expect(notNil(new Set())).toBe(true));
