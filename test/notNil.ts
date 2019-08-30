
import test from "ava";
import notNil from '../src/notNil';

test('string notNil', t => t.is(notNil('Hello world'), true));

test('expression notNil', t => t.is(notNil('a'.length === 1 && 'Hello world'), true));

test('empty String notNil', t => t.is(notNil(''), true));

test('[1, 2, 3] notNil', t => t.is(notNil([1, 2, 3]), true));

test('null notNil', t => t.is(notNil(null), false));

test('undefined notNil', t => t.is(notNil(undefined), false));

test('void 0 notNil', t => t.is(notNil(void 0), false));

test('1 notNil', t => t.is(notNil(1), true));

test('0 notNil', t => t.is(notNil(0), true));

test('NaN notNil', t => t.is(notNil(NaN), true));

test('Infinity notNil', t => t.is(notNil(Infinity), true));

test('function notNil', t => {
  function Func () {}
  Func.prototype.expand = "test";
  const MyFunc = new (Func as any)(); // TS nonsense
  
  t.is(notNil(MyFunc), true);
});

test('object notNil', t => t.is(notNil({}), true));

test('Map notNil', t => t.is(notNil(new Map()), true));

test('Set notNil', t => t.is(notNil(new Set()), true));
