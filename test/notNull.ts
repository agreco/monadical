
import test from "ava";
import notNull from '../src/notNull';

test('string notNull', t => t.is(notNull('Hello world'), true));

test('expression notNull', t => t.is(notNull('a'.length === 1 && 'Hello world'), true));

test('empty String notNull', t => t.is(notNull(''), true));

test('[1, 2, 3] notNull', t => t.is(notNull([1, 2, 3]), true));

test('null notNull', t => t.is(notNull(null), false));

test('undefined notNull', t => t.is(notNull(undefined), true));

test('void 0 notNull', t => t.is(notNull(void 0), true));

test('1 notNull', t => t.is(notNull(1), true));

test('0 notNull', t => t.is(notNull(0), true));

test('NaN notNull', t => t.is(notNull(NaN), true));

test('Infinity notNull', t => t.is(notNull(Infinity), true));

test('function notNull', t => {
  function Func () {}
  Func.prototype.expand = "test";
  const MyFunc = new (Func as any)(); // TS nonsense
  
  t.is(notNull(MyFunc), true);
});

test('object notNull', t => t.is(notNull({}), true));

test('Map notNull', t => t.is(notNull(new Map()), true));

test('Set notNull', t => t.is(notNull(new Set()), true));
