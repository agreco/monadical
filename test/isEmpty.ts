
import test from "ava";
import isEmpty from '../src/isEmpty';
import noop from '../src/noop';

test('null isEmpty', t => t.is(isEmpty(null), true));

test('undefined isEmpty', t => t.is(isEmpty(undefined), true));

test('void 0 isEmpty', t => t.is(isEmpty(void 0), true));

test('true isEmpty', t => t.is(isEmpty(true), true));

test('false isEmpty', t => t.is(isEmpty(false), true));

test('1 isEmpty', t => t.is(isEmpty(1), true));

test('0 isEmpty', t => t.is(isEmpty(0), true));

test('NaN isEmpty', t => t.is(isEmpty(NaN), true));

test('Infinity isEmpty', t => t.is(isEmpty(Infinity), true));

test('function isEmpty', t => {
  function Func () {}
  Func.prototype.expand = "test";
  const MyFunc = new (Func as any)(); // TS nonsense

  t.is(isEmpty(Func), true);
  t.is(isEmpty(MyFunc), true);
  t.is(isEmpty(noop), true);
  t.is(isEmpty(noop()), true);
});

test('object isEmpty', t => t.is(isEmpty({}), true));
test('object with field length 0 not isEmpty', t => t.is(isEmpty({ length: 0 }), false));
test('object with field length 1 not isEmpty', t => t.is(isEmpty({ length: 1 }), false));
test('object not isEmpty', t => t.is(isEmpty({ a: 'b', length: 1 }), false));

test('array isEmpty', t => t.is(isEmpty([]), true));
test('array not isEmpty', t => t.is(isEmpty(['1', 2, 3, new Map(), 'abc']), false));

test('string isEmpty', t => t.is(isEmpty(''), true));
test('string not isEmpty', t => t.is(isEmpty('A value'), false));

test('Map isEmpty', t => t.is(isEmpty(new Map()), true));
test('Map not isEmpty', t => {
  const M = new (Map as any)([['a', 'b', 'c']]); // TS nonsense
  t.is(isEmpty(M), false)
});

test('Set isEmpty', t => t.is(isEmpty(new Set()), true));
test('Set not isEmpty', t => t.is(isEmpty(new Set(['a', 'b', 'c'])), false));
