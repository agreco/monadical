
import test from 'ava';
import curry from '../src/curry';
import isFunction from "../src/isFunction";

test('curry will return a function with unfulfilled arguments', t => {
  
  const y: (...args: number[]) => number = curry((a: number, b: number, c: number) => a + b + c);
  t.is(y(1, 2, 3), 6);
  
  const x: (a: number) => (b: number) => (c: number) => number = curry((a: number, b: number, c: number) => a + b + c);
  t.true(isFunction(x(1)));
  t.true(isFunction(x(1)(2)));
  t.is(x(1)(2)(3), 6);
});
