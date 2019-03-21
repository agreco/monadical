
import test from "ava";
import compose from '../src/compose';

test('compose f g h', t => {
  const g = x => x - 2;
  const f = n => n * 2;
  const h = compose(f, g);

  t.is(h(10, 2), 18);
});
