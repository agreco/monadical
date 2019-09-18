
import curry from '../src/curry';
import isFunction from "../src/isFunction";

test('curry will return a function with unfulfilled arguments', () => {
  
  const y: (...args: number[]) => number = curry((a: number, b: number, c: number) => a + b + c);
  expect(y(1, 2, 3)).toBe(6);
  
  const x: (a: number) => (b: number) => (c: number) => number = curry((a: number, b: number, c: number) => a + b + c);
  expect(isFunction(x(1))).toBe(true);
  expect(isFunction(x(1)(2))).toBe(true);
  expect(x(1)(2)(3)).toBe(6);
});
