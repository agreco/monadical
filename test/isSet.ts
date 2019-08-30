
import test from "ava";
import isSet from '../src/isSet';

test('expression isSet', t => {
  const S = new (Set as any)(['a', 'b', 'c']); // TS nonsense
  t.is(isSet('a'.length === 1 && S), true)
});

test('Set isSet', t => t.is(isSet(new Set()), true));

test('[1, 2, 3] isSet', t => t.is(isSet([1, 2, 3]), false));

test('null isSet', t => t.is(isSet(null), false));

test('undefined isSet', t => t.is(isSet(undefined), false));

test('void 0 isSet', t => t.is(isSet(void 0), false));

test('1 isSet', t => t.is(isSet(1), false));

test('0 isSet', t => t.is(isSet(0), false));

test('NaN isSet', t => t.is(isSet(NaN), false));

test('Infinity isSet', t => t.is(isSet(Infinity), false));

test('function isSet', t => {
  function Func () {}
  Func.prototype.expand = "test";
  const MyFunc = new (Func as any)(); // TS nonsense
  
  t.is(isSet(MyFunc), false);
});

test('object isSet', t => t.is(isSet({}), false));

test('string isSet', t => t.is(isSet(''), false));

test('Map isSet', t => t.is(isSet(new Map()), false));
