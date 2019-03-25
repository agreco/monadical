
import test from 'ava';
import curry from '../src/curry';
import isFunction from "../src/isFunction";

test('curry will return a function with unfulfilled arguments', t => {
  const x = curry((a, b, c) => a + b + c);
  t.true(isFunction(x(1)));
  t.true(isFunction(x(1)(2)));
  t.is(x(1)(2)(3), 6);
});
