
import test from 'ava';
import compose from '../src/compose';

test('compose f g h', t => {
  
  const e = x => x - 2;
  const f = n => n * 2;
  const g = (x, y) => x*y;
  const h = compose(e, f, g);

  t.is(h(10, 2), 38);
});

