
import test from "ava";
import isDefined from '../src/isDefined';

test('undefined isDefined', t => t.is(isDefined(undefined), false));

test('void 0 isDefined', t => t.is(isDefined(void 0), false));

test('null isDefined', t => t.is(isDefined(null), true));

test('[1, 2, 3] isDefined', t => t.is(isDefined([1, 2, 3]), true));

test('[] isDefined', t => t.is(isDefined([]), true));

test('1 isDefined', t => t.is(isDefined(1), true));

test('0 isDefined', t => t.is(isDefined(0), true));

test('NaN isDefined', t => t.is(isDefined(NaN), true));

test('Infinity isDefined', t => t.is(isDefined(Infinity), true));

test('function isDefined', t => {
  function Func () {}
  Func.prototype.expand = "test";
  const MyFunc = new (Func as any)(); // TS nonsense
  
  t.is(isDefined(MyFunc), true);
});

test('object isDefined', t => t.is(isDefined({}), true));

test('string isDefined', t => t.is(isDefined(''), true));

test('Map isDefined', t => t.is(isDefined(new Map()), true));

test('Set isDefined', t => t.is(isDefined(new Set()), true));
