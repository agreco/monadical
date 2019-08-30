
import test from "ava";
import isArray from '../src/isArray';

test('[[\'a\']] isArray', t => t.is(isArray([['a']]), true));

test('new Array() isArray', t => t.is(isArray(new Array(1, 2, 3)), true));

test('[] isArray', t => t.is(isArray([]), true));

test('expression isArray', t =>  t.is(isArray('a'.length === 1 && []), true));

test('null isArray', t => t.is(isArray(null), false));

test('undefined isArray', t => t.is(isArray(undefined), false));

test('void 0 isArray', t => t.is(isArray(void 0), false));

test('1 isArray', t => t.is(isArray(1), false));

test('0 isArray', t => t.is(isArray(0), false));

test('NaN isArray', t => t.is(isArray(NaN), false));

test('Infinity isArray', t => t.is(isArray(Infinity), false));

test('function isArray', t => {
  function Func () {}
  Func.prototype.expand = "test";
  const MyFunc = new (Func as any)(); // TS nonsense
  
  t.is(isArray(MyFunc), false);
});

test('object isArray', t => t.is(isArray({}), false));

test('string isArray', t => t.is(isArray(''), false));

test('Map isArray', t => t.is(isArray(new Map()), false));

test('Set isArray', t => t.is(isArray(new Set()), false));
