
import test from "ava";
import isMap from '../src/isMap';

test('expression isMap', t => {
  const M = new (Map as any)([['a', 'b', 'c']]); // TS nonsense
  t.is(isMap('a'.length === 1 && M), true)
});

test('Map isMap', t => t.is(isMap(new Map()), true));

test('[1, 2, 3] isMap', t => t.is(isMap([1, 2, 3]), false));

test('null isMap', t => t.is(isMap(null), false));

test('undefined isMap', t => t.is(isMap(undefined), false));

test('void 0 isMap', t => t.is(isMap(void 0), false));

test('1 isMap', t => t.is(isMap(1), false));

test('0 isMap', t => t.is(isMap(0), false));

test('NaN isMap', t => t.is(isMap(NaN), false));

test('Infinity isMap', t => t.is(isMap(Infinity), false));

test('function isMap', t => {
  function Func () {}
  Func.prototype.expand = "test";
  const MyFunc = new (Func as any)(); // TS nonsense
  
  t.is(isMap(MyFunc), false);
});

test('object isMap', t => t.is(isMap({}), false));

test('string isMap', t => t.is(isMap(''), false));

test('Set isMap', t => t.is(isMap(new Set()), false));
