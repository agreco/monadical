
import test from 'ava';
import Either, { Right, Left } from '../src/either';
import identity from '../src/identity';

test('Either.right value', async t => {
  const x: Right<number> = Either.of(10);
  t.is(x.isRight(), true);
  t.is(x.isLeft(), false);
  t.is(x.value, 10);
  
  const { y }: { y: Right<number> } = { y: Either.of(10) };
  t.is(y.isRight(), true);
  t.is(y.isLeft(), false);
  t.is(y.value, 10);
  
  const { z }: { z: Right<number> } = { z: Either.of(10) };
  t.is(z.isRight(), true);
  t.is(z.isLeft(), false);
  t.is(z.map(identity).getOrElse('A default value'), 10);
});

test('Either.right is chainable', t => {
  const xa: Right<number> = Either.of(10);
  t.is(xa.map((x: number) => x*x).map((x: number) => (x - 10)).chain((x: number) => x * 2), 180);
});

test('Either.right does not throw', t => {
  const ya: Right<number> = Either.of(10);
  t.notThrows(() => ya.map(x => x*x).map(x => (x - 10)).getOrElseThrow((val: number) => new Error()));
});

test('Either.right is filterable', t => {
  const xa: Right<number> = Either.of(10);

  t.is(xa.map((x: number) => x * x).filter((x: number) => x >= 90).orElse(identity).chain(identity), 100);
  t.is(xa.map((x: number) => x * x).filter((x: number) => x >= 90).map((x: number) => x).chain(identity), 100);
  t.is(xa.map((x: number) => x * x).filter((x: number) => x >= 90).getOrElse('An error occurred'), 100);
  t.is(xa.map((x: number) => x * x).filter((x: number) => x >= 90).getOrElseThrow(() => new Error), 100);
  t.is(xa.map((x: number) => x * x).filter((x: number) => x >= 90).filter((x: number) => x >= 90).chain(identity), 100);
});

test('Either.left value', async t => {
  const x: Left<string> = Either.left('Not found error');
  t.is(x.isRight(), false);
  t.is(x.isLeft(), true);
  t.is(x.orElse((x: string) => x), 'Not found error');
  
  const { y }: { y: Left<string> } = await Promise.reject({ y: Either.left('An error occurred') }).catch(identity);
  t.is(y.isRight(), false);
  t.is(y.isLeft(), true);
  t.is(y.orElse(identity), 'An error occurred');
  
  const { z }: { z: Left<string> } = await Promise.reject({ z: Either.left('An error occurred') }).catch(identity);
  t.is(z.isRight(), false);
  t.is(z.isLeft(), true);
  t.is(z.getOrElse('A default value'), 'A default value');
});

test('Either.left is chainable', t => {
  const xa: Left<string> = Either.left('An error occurred');
  t.is(xa.map((x: number) => x*x).filter((x: number) => x >= 90).chain((x: number) => x * 2).getOrElse('A default value'), 'A default value');
});

test('Either.left throws', t => {
  const ya: Left<string> = Either.left('An error occurred');
  t.throws(() => (ya.map((x: number) => x*x).getOrElseThrow(() => new Error('Yes an error occurred'))));
});

test('Either.left is filterable', t => {
  const xa: Left<string> = Either.left('An error occurred');

  t.is(xa.map((x: number) => x * x).filter((x: number) => x >= 90).orElse((x: string) => x), 'An error occurred');
  t.is(xa.map((x: number) => x * x).filter((x: number) => x >= 90).map((x: number) => x).chain(identity).getOrElse('A default value'), 'A default value');
  t.is(xa.map((x: number) => x * x).filter((x: number) => x >= 90).getOrElse('An error occurred'), 'An error occurred');
  t.throws(() => xa.map((x: number) => x * x).filter((x: number) => x >= 90).getOrElseThrow((x: string) => new Error(x)));
  t.is(xa.map((x: number) => x * x).filter((x: number) => x >= 90).filter((x: number) => x >= 90).chain(identity).getOrElse('A default value'), 'A default value');
});
