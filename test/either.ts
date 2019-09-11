
import test from 'ava';
import Either, { Right, Left } from '../src/either';
import identity from '../src/identity';

interface IData {
  data: number | string
}

test('Either.right value', async t => {
  const x: Right<null, number> = Either.of(10);
  t.is(x.isRight(), true);
  t.is(x.isLeft(), false);
  t.is(x.value, 10);

  const { y }: { y: Right<null, number> } = { y: Either.of(10) };
  t.is(y.isRight(), true);
  t.is(y.isLeft(), false);
  t.is(y.value, 10);

  const { z }: { z: Right<null, number> } = { z: Either.of(10) };
  t.is(z.isRight(), true);
  t.is(z.isLeft(), false);
  t.is(z.map((z: number) => z).getOrElse('A default value'), 10);

  const { data } = await Promise.resolve({ data: 'Resolved value' }).then(identity);
  const a: Either<void, IData> = Either.nullable(data);
  t.is(a.isLeft(), false);
  t.is(a.isRight(), true);
  t.is(a.map((d: IData) => d).getOrElse('An error occurred'), data);
});

test('Either.right does not throw', t => {
  const ya: Right<null, number> = Either.of(10);
  t.notThrows(() => ya.map(x => x*x).map(x => (x - 10)).getOrElseThrow((val: number) => new Error()));
});

test('Either.right is filterable', t => {
  const either: Right<null, number> = Either.of(10);

  const x =
    either.map((x: number) => x * x)
      .filter((x: number) => x >= 90)
      .orElse((x: number) => `${x}`)
      .chain(x => x);

  t.is(x, 100);

  const y =
    either.map((x: number) => x * x)
      .filter((x: number) => x >= 90)
      .map((x: number) => x)
      .chain((x: number) => x);

  t.is(y, 100);

  const z =
    either.map((x: number) => x * x)
      .filter((x: number) => x >= 90)
      .map((x: number) => x)
      .chain((x: number) => x);

  t.is(z, 100);

  const a =
    either.map((x: number) => x * x)
      .filter((x: number) => x >= 90)
      .map((x: number) => x)
      .chain((x: number) => x);

  t.is(a, 100);

  const b =
    either.map((x: number) => x * x)
      .filter((x: number) => x >= 90)
      .map((x: number) => x)
      .chain((x: number) => x);

  t.is(b, 100);
});

test('Either.left value', async t => {
  const x: Left<string, null> = Either.left('Not found error');
  t.is(x.isRight(), false);
  t.is(x.isLeft(), true);
  t.is(x.orElse((x: string) => x), 'Not found error');

  const { y }: { y: Left<string, null> } = await Promise.reject({ y: Either.left('An error occurred') }).catch(identity);
  t.is(y.isRight(), false);
  t.is(y.isLeft(), true);
  t.is(y.orElse(identity), 'An error occurred');

  const { z }: { z: Left<string, null> } = await Promise.reject({ z: Either.left('An error occurred') }).catch(identity);
  t.is(z.isRight(), false);
  t.is(z.isLeft(), true);
  t.is(z.getOrElse('A default value'), 'A default value');
});

test('Either.left is chainable', t => {
  const either: Left<string, number> = Either.left('An error occurred');

  const value =
    either.map((x: number) => x * x)
      .filter((x: number) => x >= 90)
      .chain((x: number) => Either.left<string, number>(`${x}`))
      .getOrElse('A default value');

  t.is(value, 'A default value');
});

test('Either.left throws', t => {
  const ya: Left<string, number> = Either.left('An error occurred');
  t.throws(() => (ya.map((x: number) => x * x).getOrElseThrow(() => new Error('Yes an error occurred'))));
});

test('Either.left is filterable', t => {
  const either: Left<string, number> = Either.left('An error occurred');

  const x =
    either.map((x: number) => `${ x * x }`)
      .filter((x: string) => x.length > 20)
      .getOrElse('I am an error occurred');

  t.is(x, 'I am an error occurred');

  const y =
    either.map((x: number) => `${x * x}`)
      .filter((x: string) => x.length > 20)
      .orElse((x: string) => `${x}`);

  t.is(y, 'An error occurred');

  const z =
    either.map((x: number) => `${ x }`)
      .filter((x: string) => x.length >= 90)
      .chain((x: string) => Either.right<number, string>(x))
      .getOrElse('A default value');

  t.is(z, 'A default value');

  const a =
    either.map((x: number) => `${ x }`)
      .filter((x: string) => x.length >= 90)
      .getOrElse('An error occurred');

  t.is(a, 'An error occurred');

  const b =
    either.map((x: number) => `${ x * x }`)
      .filter((x: string) => x.length >= 90)
      .filter((x: string) => x.length >= 90)
      .chain((x: string) => Either.left(x))
      .getOrElse('A default value');

  t.is(b, 'A default value');

  const c = () =>
    either.map((x: number) => x)
      .filter((x: number) => x >= 90)
      .getOrElseThrow((x: string) => new Error(`${x}`));

  t.throws(c);
});

test('Either.nullable is mappable', t => {
  const either: Either<null, string> = Either.nullable('A value');

  const retrieveVal =
    either.map((x: string) => x.length)
      .map((x: number) => `The length of your value is ${ x }`)
      .map((x: string) => x.toUpperCase());

  t.is(retrieveVal.getOrElse('An error occurred retrieving your value'), 'THE LENGTH OF YOUR VALUE IS 7');
});

test('Either.nullable is filterable', t => {
  const either: Either<null, string> = Either.nullable(null);

  // TODO AG: Investigate nullable returning a right when supplied
  // with a null value. Map could also be causing problems, via
  // EitherTransform
  const retrieveVal =
    either.map((x: string) => x.length)
      .filter((x: number) => x > 10)
      .map((x: number) => `${x}`)
      .chain(identity);

  t.is(retrieveVal.getOrElse('An error occurred retrieving your value'), 'An error occurred retrieving your value');
});
