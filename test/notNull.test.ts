
import notNull from '../src/notNull';

test('string notNull', () => expect(notNull('Hello world')).toBe(true));

test('expression notNull', () => expect(notNull('a'.length === 1 && 'Hello world')).toBe(true));

test('empty String notNull', () => expect(notNull('')).toBe(true));

test('[1, 2, 3] notNull', () => expect(notNull([1, 2, 3])).toBe(true));

test('null notNull', () => expect(notNull(null)).toBe( false));

test('undefined notNull', () => expect(notNull(undefined)).toBe(true));

test('void 0 notNull', () => expect(notNull(void 0)).toBe(true));

test('1 notNull', () => expect(notNull(1)).toBe(true));

test('0 notNull', () => expect(notNull(0)).toBe(true));

test('NaN notNull', () => expect(notNull(NaN)).toBe(true));

test('Infinity notNull', () => expect(notNull(Infinity)).toBe(true));

test('function notNull', () => {
  function Func () {}
  Func.prototype.expand = "test";
  const MyFunc = new (Func as any)(); // TS nonsense
  
  expect(notNull(MyFunc)).toBe( true);
});

test('object notNull', () => expect(notNull({})).toBe(true));

test('Map notNull', () => expect(notNull(new Map())).toBe(true));

test('Set notNull', () => expect(notNull(new Set())).toBe(true));
