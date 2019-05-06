
import test from 'ava';
import Empty from '../src/empty';

test('mapping over an empty value', t => {
  const x = new Empty();
  t.is(x.map(10), x);
});

test('fmap over an empty value', t => {
  const x = new Empty();
  t.is((x.fmap(10)).toString(), 'Empty[]');
});
