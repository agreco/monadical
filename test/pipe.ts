
import test from "ava";
import pipe from '../src/pipe';

test('pipe a b c', t => {
  
  type TPipeTest = {
    (x: number): (n: number) => number;
    (x: number, n: number): number;
  };
  
  const a: (x: number) => number = (x: number): number => x - 2;
  const b: (x: number) => number = (n: number): number => n * 2;
  const c: (x: number, n: number) => number = pipe(a, b);

  t.is(c(10, 2), 18);
});
