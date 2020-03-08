import compose from '../src/compose';
import { GenFuncSpread } from '../src';

test('compose f g h', () => {
  const e = (x: number) => x - 2;
  const f = (n: number) => n * 2;
  const g = (x: number, y: number) => x * y;
  const h: GenFuncSpread<number> = compose(e, f, g);

  expect(h(10, 2)).toBe(38);
});
