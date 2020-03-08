import isDefined from '../src/isDefined';

test('undefined isDefined', () => expect(isDefined(undefined)).toBe(false));

test('void 0 isDefined', () => expect(isDefined(void 0)).toBe(false));

test('null isDefined', () => expect(isDefined(null)).toBe(true));

test('[1, 2, 3] isDefined', () => expect(isDefined([1, 2, 3])).toBe(true));

test('[] isDefined', () => expect(isDefined([])).toBe(true));

test('1 isDefined', () => expect(isDefined(1)).toBe(true));

test('0 isDefined', () => expect(isDefined(0)).toBe(true));

test('NaN isDefined', () => expect(isDefined(NaN)).toBe(true));

test('Infinity isDefined', () => expect(isDefined(Infinity)).toBe(true));

test('function isDefined', () => {
  function Func() {}
  Func.prototype.expand = 'test';
  const MyFunc = new (Func as any)(); // TS nonsense

  expect(isDefined(MyFunc)).toBe(true);
});

test('object isDefined', () => expect(isDefined({})).toBe(true));

test('string isDefined', () => expect(isDefined('')).toBe(true));

test('Map isDefined', () => expect(isDefined(new Map())).toBe(true));

test('Set isDefined', () => expect(isDefined(new Set())).toBe(true));
