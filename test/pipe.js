
import test from "ava";
import pipe from '../src/pipe';

test('pipe a b c', t => {
  const a = x => x - 2;
  const b = n => n * 2;
  const c = pipe(a, b);

  t.is(c(10, 2), 18);
});
