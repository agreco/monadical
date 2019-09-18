
import pipe from '../src/pipe';

test('pipe a b c', () => {
  
  const a: (x: number) => number = (x: number): number => x - 2;
  const b: (x: number) => number = (n: number): number => n * 2;
  const c: (x: number, n: number) => number = pipe(a, b);

  expect(c(10, 2)).toBe(18);
});
