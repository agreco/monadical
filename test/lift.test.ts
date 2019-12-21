
import { liftToMaybe, liftToEither } from '../src';
import identity from '../src/identity';
import { Func1 } from '../src';
import notNil from '../src/notNil';
import Maybe, { Nothing } from '../src/maybe';
import Either, { Left } from '../src/either';

interface IData extends Promise<IData> {
  data?: number
}

const maybeNumber = liftToMaybe<number>();

const eitherNumber = liftToEither<number>();

const initialVal: number = 10;

const FuncToUndefined: Func1<number> = (x: number) => {
  const someVal: { data: void } = { data: void 0 };
  const { data }: IData = Promise.reject(someVal).catch<IData>(identity);
  return !notNil(data) ? void 0 : data + x;
};

describe('liftToMaybe', () => {
  
  test('lift value into a Just', () => {
    
    const x: Maybe<number, void> = maybeNumber((x: number) => x + 10, initialVal);
    expect(x.isJust()).toBe(true);
    expect(x.isNothing()).toBe(false);
    expect(x.getOrElse('A default value')).toBe(20);
  });
  
  test('lifted value of a Just is chainable', () => {
    
    const x: Maybe<number, void> = maybeNumber((x: number) => x + 10, initialVal);
    expect(x.map((x: number) => x * x).map((x: number) => (x - 10)).chain((x: number) => x * 2)).toBe(780);
  });
  
  test('lifted value of a Just is filterable', () => {
    
    const x: Maybe<number, void> = maybeNumber((x: number) => x + 10, initialVal);
    expect(x.map((x: number) => x * x).map((x: number) => (x - 10)).filter((x: number) => x >= 90).getOrElse('An error occurred')).toBe(390);
  });
  
  test('lift value into a Nothing', async () => {
    
    const x: Maybe<number, void> = maybeNumber(FuncToUndefined, initialVal);
    expect(x.isJust()).toBe(false);
    expect(x.isNothing()).toBe(true);
    expect(x.getOrElse('A default value')).toBe('A default value');
  });
  
  test('lifted value of a Nothing is filterable', () => {
    
    const x: Maybe<number, void> = maybeNumber(FuncToUndefined, initialVal);
    expect(x.isJust()).toBe(false);
    expect(x.isNothing()).toBe(true);
    expect(x.getOrElse('A default value')).toBe('A default value');
    
    const xVal: Maybe<number, void> =
      x.map((x: number) => x * x).map((x: number) => (x - 10)).filter((x: number) => x >= 10);
    
    expect(xVal.value).toBe(void 0);
  });
  
  test('lifted value of a Nothing is chainable', () => {
    
    const x: Maybe<number, void> = maybeNumber(FuncToUndefined, initialVal);
    expect(x.isJust()).toBe(false);
    expect(x.isNothing()).toBe(true);
    expect(x.getOrElse('A default value')).toBe('A default value');
    
    const xVal: number | Nothing<number, void> =
      x.map((x: number) => x * x).map((x: number) => (x - 10)).chain((a: number) => a + 10);
    
    expect(xVal instanceof Nothing).toBe(true);
  });
  
});

describe('liftToEither', () => {
  
  test('lift value into a Right', () => {
    
    const x: Either<void, number> = eitherNumber((x: number) => x + 10, initialVal);
    expect(x.isRight()).toBe(true);
    expect(x.isLeft()).toBe(false);
    expect(x.getOrElse('A default value')).toBe(20);
  });
  
  test('lifted value of a Right is chainable', () => {
    
    const x: Either<void, number> = eitherNumber((x: number) => x + 10, initialVal);
    expect(x.map((x: number) => x * x).map((x: number) => (x - 10)).chain((x: number) => x * 2)).toBe(780);
  });
  
  test('lifted value of a Right is filterable', () => {
    
    const x: Either<void, number> = eitherNumber((x: number) => x + 10, initialVal);
    expect(x.map((x: number) => x * x).map((x: number) => (x - 10)).filter((x: number) => x >= 90).getOrElse('An error occurred')).toBe(390);
  });
  
  test('lift value into a Left', async () => {
    
    const x: Either<void, number> = eitherNumber(FuncToUndefined, initialVal);
    expect(x.isRight()).toBe(false);
    expect(x.isLeft()).toBe(true);
    expect(x.getOrElse('A default value')).toBe('A default value');
  });
  
  test('lifted value of a Left is filterable', () => {
    
    const x: Either<void, number> = eitherNumber(FuncToUndefined, initialVal);
    expect(x.isRight()).toBe(false);
    expect(x.isLeft()).toBe(true);
    expect(x.getOrElse('A default value')).toBe('A default value');
    
    const xVal: Either<void, number> =
      x.map((x: number) => x * x).map((x: number) => (x - 10)).filter((x: number) => x >= 10);
    
    expect(xVal.value).toBe(void 0);
  });
  
  test('lifted value of a Left is chainable', () => {
    
    const x: Either<void, number> = eitherNumber(FuncToUndefined, initialVal);
    expect(x.isRight()).toBe(false);
    expect(x.isLeft()).toBe(true);
    expect(x.getOrElse('A default value')).toBe('A default value');
    
    const xVal: number | Left<void, number> =
      x.map((x: number) => x * x).map((x: number) => (x - 10)).chain((a:number) => a + 10);
    
    expect(xVal instanceof Left).toBe(true);
  });
  
});
