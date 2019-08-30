
import test from 'ava';
import Either, { Right, Left } from '../src/either';
import identity from '../src/identity';

test('Either value', t => {
  const x: Either<number> = new Either(10);
  t.is(x.value, 10);
});

test('Either.right value', async t => {
  const x: Right<number> = Either.of(10);
  t.is(x.isRight, true);
  t.is(x.isLeft, false);
  t.is(x.value, 10);
  
  const { y }: { y: Right<number> } = { y: Either.of(10) };
  t.is(y.isRight, true);
  t.is(y.isLeft, false);
  t.is(y.value, 10);
  
  const { z }: { z: Right<number> } = await Promise.resolve({ z: Either.of(10) });
  t.is(z.isRight, true);
  t.is(z.isLeft, false);
  t.is(z.map(identity).getOrElse('A default value'), 10);
});

test('Either.right is chainable', t => {
  const xa: Right<number> = Either.of(10);
  t.is(xa.map(x => x*x).map(x => (x - 10)).chain(x => x * 2), 180);
});

test('Either.right does not throw', t => {
  const ya: Right<number> = Either.of(10);
  t.notThrows(() => ya.map(x => x*x).map(x => (x - 10)).getOrElseThrow(new Error()));
});

test('Either.right is filterable', t => {
  const xa = Either.of(10);
  t.is(xa.map(x => x*x).map(x => (x - 10)).filter(x => x >= 90).getOrElse('An error occurred'), 90);
});

test('Either.left value', async t => {
  const x: Left<string> = Either.left('Not found error');
  t.is(x.isRight, false);
  t.is(x.isLeft, true);
  t.is(x.orElse(identity), 'Not found error');
  
  const { y }: { y: Left<string> } = await Promise.reject({ y: Either.left('An error occurred') }).catch(identity);
  t.is(y.isRight, false);
  t.is(y.isLeft, true);
  t.is(y.orElse(identity), 'An error occurred');
  
  const { z }: { z: Left<string> } = await Promise.reject({ z: Either.left('An error occurred') }).catch(identity);
  t.is(z.isRight, false);
  t.is(z.isLeft, true);
  t.is(z.getOrElse('A default value'), 'A default value');
});

test('Either.left is chainable', t => {
  const xa: Left<string> = Either.left('An error occurred');
  t.is(
    xa.map((x: number) => x*x).map((x: number) => (x - 10)).chain(x => x * 2).orElse(identity),
    'An error occurred'
  );
});

test('Either.left throws', t => {
  const ya: Left<string> = Either.left('An error occurred');
  t.throws(() => (
    ya.map((x: number) => x*x).map((x: number) => (x - 10)).chain(x => x * 2).getOrElseThrow('Yes an error occurred')
  ));
});

test('Either.left is filterable', t => {
  const xa: Left<string> = Either.left('An error occurred');
  t.is(
    xa.map((x: number) => x*x).map((x: number) => (x - 10)).filter(x => x >= 90).getOrElse('Yep error occurred'),
    'Yep error occurred'
  );
});
