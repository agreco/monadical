
import test from "ava";
import isString from '../src/isString';

test('string isString', t => t.is(isString('Hello world'), true));

test('expression isString', t => t.is(isString('a'.length === 1 && 'Hello world'), true));

test('empty String isString', t => t.is(isString(''), true));

test('[1, 2, 3] isString', t => t.is(isString([1, 2, 3]), false));

test('null isString', t => t.is(isString(null), false));

test('undefined isString', t => t.is(isString(undefined), false));

test('void 0 isString', t => t.is(isString(void 0), false));

test('1 isString', t => t.is(isString(1), false));

test('0 isString', t => t.is(isString(0), false));

test('NaN isString', t => t.is(isString(NaN), false));

test('Infinity isString', t => t.is(isString(Infinity), false));

test('function isString', t => {
  function Func () {}
  Func.prototype.expand = "test";
  const MyFunc = new (Func as any)(); // TS nonsense
  
  t.is(isString(MyFunc), false);
});

test('object isString', t => t.is(isString({}), false));

test('Map isString', t => t.is(isString(new Map()), false));

test('Set isString', t => t.is(isString(new Set()), false));
