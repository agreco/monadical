
import test from "ava";
import isFunction from '../src/isFunction';

test('expression isFunction', t => {
  const z = (x: number): number => x;
  
  t.is(isFunction(z), true);
  t.is(isFunction((x: number): number => x), true);
  t.is(isFunction('a'.length === 1 && ((x: number): number => x)), true)
});

test('function isFunction', t => {
  function Func () {}
  Func.prototype.expand = "test";
  const MyFunc: any = new (Func as any)(); // TS nonsense
  
  t.is(isFunction(Func), true);
  t.is(isFunction(new (Func as any)()), false);
  t.is(isFunction(MyFunc), false);
});

test('null isFunction', t => t.is(isFunction(null), false));

test('undefined isFunction', t => t.is(isFunction(undefined), false));

test('[1, 2, 3] isFunction', t => t.is(isFunction([1, 2, 3]), false));

test('void 0 isFunction', t => t.is(isFunction(void 0), false));

test('1 isFunction', t => t.is(isFunction(1), false));

test('0 isFunction', t => t.is(isFunction(0), false));

test('NaN isFunction', t => t.is(isFunction(NaN), false));

test('Infinity isFunction', t => t.is(isFunction(Infinity), false));

test('object isFunction', t => t.is(isFunction({}), false));

test('string isFunction', t => t.is(isFunction(''), false));

test('Map isFunction', t => t.is(isFunction(new Map()), false));

test('Set isFunction', t => t.is(isFunction(new Set()), false));
