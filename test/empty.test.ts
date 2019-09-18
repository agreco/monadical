
import Empty from '../src/empty';

test('mapping over an empty value', () => {
  const x: Empty = new Empty();
  expect(x.map(10)).toBe(x);
});

test('fmap over an empty value', () => {
  const x: Empty = new Empty();
  expect((x.fmap(10)).toString()).toBe('Empty[]');
});
