
import Either, { Right, Left } from '../src/either';
import identity from '../src/identity';
import Maybe from '../src/maybe';

interface IData {
  data: number | string
}

test('Either Right.value', () => {
  const x: Either<void, number> = Either.right<void, number>(10);
  expect(x.value).toBe(10);
});

test('Either Left.value', () => {
  const x: Either<void, number> = Either.left<void, number>(void 0);
  expect(x.value).toBe(void 0);
});

test('Either.right value', async () => {
  const x: Either<null, number> = Either.of<null, number>(10);
  expect(x.isRight()).toBe(true);
  expect(x.isLeft()).toBe(false);
  expect(x.value).toBe(10);

  type Y = { y: Either<null, number> }
  const { y }: Y = { y: Either.of<null, number>(10) };
  expect(y.isRight()).toBe(true);
  expect(y.isLeft()).toBe(false);
  expect(y.value).toBe(10);

  type Z = { z: Either<null, number> };
  const { z }: Z  = { z: Either.of<null, number>(10) };
  expect(z.isRight()).toBe(true);
  expect(z.isLeft()).toBe(false);
  expect(z.map((z: number) => z).getOrElse('A default value')).toBe(10);

  const { data } = await Promise.resolve({ data: 'Resolved value' }).then(identity);
  const a: Either<void, IData> = Either.nullable<IData>(data);
  expect(a.isLeft()).toBe(false);
  expect(a.isRight()).toBe(true);
  expect(a.map((d: IData) => d).getOrElse('An error occurred')).toBe(data);
});

test('Either.right does not throw', () => {
  const either: Either<null, number> = Either.of<null, number>(10);
  expect(() => either.map(x => x*x).map(x => (x - 10)).getOrElseThrow((val: number) => new Error())).not.toThrow();
});

test('Either.right is filterable', () => {
  const either: Either<null, number> = Either.of<null, number>(10);

  const x =
    either.map((x: number) => x * x)
      .filter((x: number) => x >= 90)
      .orElse((x: number) => `${x}`)
      .chain((x: number) => x);

  expect(x).toBe(100);

  const y =
    either.map((x: number) => x * x)
      .filter((x: number) => x >= 90)
      .map((x: number) => x)
      .chain((x: number) => x);

  expect(y).toBe(100);

  const z =
    either.map((x: number) => x * x)
      .filter((x: number) => x >= 90)
      .map((x: number) => x)
      .chain((x: number) => x);

  expect(z).toBe(100);

  const a =
    either.map((x: number) => x * x)
      .filter((x: number) => x >= 90)
      .map((x: number) => x)
      .chain((x: number) => x);

  expect(a).toBe(100);

  const b =
    either.map((x: number) => x * x)
      .filter((x: number) => x >= 90)
      .map((x: number) => x)
      .chain((x: number) => x);

  expect(b).toBe(100);
});

test('Either.left value', async () => {
  const x: Either<string, null> = Either.left<string, null>('Not found error');
  
  expect(x.isRight()).toBe(false);
  expect(x.isLeft()).toBe(true);
  expect(x.value).toBe('Not found error');

  type Y = { y: Either<string, null> };
  const { y }: Y  = await Promise.reject({ y: Either.left<string, null>('An error occurred') }).catch(identity);
  
  expect(y.isRight()).toBe(false);
  expect(y.isLeft()).toBe(true);
  expect(y.value).toBe('An error occurred');
});

test('Either.left is chainable', () => {
  const either: Either<string, number> = Either.left<string, number>('An error occurred');

  const value =
    either.map((x: string) => x.length * x.length)
      .filter((x: number) => x >= 90)
      .chain((x: number) => Either.left<string, number>(`${x}`))
      .getOrElse('A default value');

  expect(value).toBe('A default value');
});

test('Either.left throws', () => {
  const either: Either<string, number> = Either.left<string, number>('An error occurred');
  
  expect(() => (
    either.map((x: string) => x.length * x.length).getOrElseThrow(() => new Error('Yes an error occurred')))
  ).toThrow()
});

test('Either.left is filterable', () => {
  const either: Either<string, number>  = Either.left<string, number>('An error occurred');

  const x =
    either.map((x: string) => `${ x.length * x.length }`)
      .filter((x: string) => x.length > 20)
      .getOrElse('I am an error occurred');

  expect(x).toBe('I am an error occurred');

  const y =
    either.map((x: string) => `${ x.length * x.length }`)
      .filter((x: string) => x.length > 20)
      .orElse((x: string) => `${x}`);

  expect(y).toBe('An error occurred');

  const z =
    either.map((x: string) => `${ x.length }`)
      .filter((x: string) => x.length >= 90)
      .chain((x: string) => Either.right<number, string>(x))
      .getOrElse('A default value');

  expect(z).toBe('A default value');

  const a =
    either.map((x: string) => `${ x.length }`)
      .filter((x: string) => x.length >= 90)
      .getOrElse('An error occurred');

  expect(a).toBe('An error occurred');

  const b =
    either.map((x: string) => `${ x.length * x.length }`)
      .filter((x: string) => x.length >= 90)
      .filter((x: string) => x.length >= 90)
      .chain((x: string) => Either.left(x))
      .map((a: string) => a)
      .getOrElse('A default value');

  expect(b).toBe('A default value');

  const c = () =>
    either.map((x: string) => x.length)
      .filter((x: number) => x >= 90)
      .getOrElseThrow((x: string) => new Error(`${x}`));

  expect(c).toThrow();
});

test('Either.nullable is mappable', () => {
  const either: Either<void, string> = Either.nullable('A value');

  const retrieveVal =
    either.map((x: string) => x.length)
      .map((x: number) => `The length of your value is ${ x }`)
      .map((x: string) => x.toUpperCase());

  expect(retrieveVal.getOrElse('An error occurred retrieving your value'))
    .toBe('THE LENGTH OF YOUR VALUE IS 7');
});

test('Either.nullable is filterable', () => {
  const either: Either<void, string> = Either.nullable('');

  const retrieveVal =
    either.map((x: string) => x.length)
      .filter((x: number) => x > 10)
      .map((x: number) => `${x}`)
      .chain(identity);

  expect(retrieveVal.getOrElse('An error occurred retrieving your value'))
    .toBe('An error occurred retrieving your value');
});

test('Either.nullable value', async () => {
  const eitherA: Either<void, string> = Either.nullable('');
  expect(eitherA.value).toBe('');
  
  const eitherB: Either<void, string> = Either.nullable(void 0);
  expect(eitherB.value).toBe(void 0);
  
  let x: string = 'a value';
  x = await Promise.resolve(void 0);
  const eitherC: Either<void, string> = Either.nullable(x);
  expect(eitherC.map((x: string) => x.length.toString()).map((x: string) => x.split('')[0]).value).toBe(void 0);
});
