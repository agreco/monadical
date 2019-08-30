
import test from "ava";
import isBoolean from '../src/isBoolean';

test('true isBoolean', t => t.is(isBoolean(true), true));

test('false isBoolean', t => t.is(isBoolean(false), true));

test('expression isBoolean', t =>  t.is(isBoolean(null === void 0 || undefined === 'undefined'), true));

test('null isBoolean', t => t.is(isBoolean(null), false));

test('undefined isBoolean', t => t.is(isBoolean(undefined), false));

test('void 0 isBoolean', t => t.is(isBoolean(void 0), false));

test('1 isBoolean', t => t.is(isBoolean(1), false));

test('0 isBoolean', t => t.is(isBoolean(0), false));

test('NaN isBoolean', t => t.is(isBoolean(NaN), false));

test('Infinity isBoolean', t => t.is(isBoolean(Infinity), false));

test('function isBoolean', t => {
  function Func () {}
  Func.prototype.expand = "test";
  const MyFunc = new (Func as any)(); // TS nonsense
  
  t.is(isBoolean(MyFunc), false);
});

test('object isBoolean', t => t.is(isBoolean({}), false));

test('array isBoolean', t => t.is(isBoolean([]), false));

test('string isBoolean', t => t.is(isBoolean(''), false));

test('Map isBoolean', t => t.is(isBoolean(new Map()), false));

test('Set isBoolean', t => t.is(isBoolean(new Set()), false));
