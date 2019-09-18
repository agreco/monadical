
import lift from '../src/lift';
import identity from '../src/identity';
import { Func1 } from '../src';
import notNil from '../src/notNil';
import Maybe from '../maybe';

interface IData extends Promise<IData> {
  data?: number
}

const liftNumber = lift<number, void>();
const initialVal: number = 10;
const FuncToNothing: Func1<number> = (x: number) => {
  const someVal: { data: void } = { data: void 0 };
  const { data }: IData = Promise.reject(someVal).catch<IData>(identity);
  return !notNil(data) ? void 0 : data + x;
};

test('lift value into a Just', () => {

  const x: Maybe<number, void> = liftNumber((x: number) => x + 10, initialVal);
  expect(x.isJust()).toBe(true);
  expect(x.isNothing()).toBe(false);
  expect(x.getOrElse('A default value')).toBe(20);
});

test('lifted value of a Just is chainable', () => {

  const x: Maybe<number, void> = liftNumber((x: number) => x + 10, initialVal);
  expect(x.map((x: number) => x*x).map((x: number) => (x - 10)).chain((x: number) => x * 2)).toBe(780);
});

test('lifted value of a Just is filterable', () => {

  const x: Maybe<number, void> = liftNumber((x: number) => x + 10, initialVal);
  expect(x.map((x: number) => x*x).map((x: number) => (x - 10)).filter((x: number) => x >= 90).getOrElse('An error occurred')).toBe(390);
});

test('lift value into a Nothing', async () => {

  const x: Maybe<number, void> = liftNumber(FuncToNothing, initialVal);
  expect(x.isJust()).toBe(false);
  expect(x.isNothing()).toBe(true);
  expect(x.getOrElse('A default value')).toBe('A default value');
});

test('lifted value of a Nothing is filterable', () => {

  const x: Maybe<number, void> = liftNumber(FuncToNothing, initialVal);
  expect(x.isJust()).toBe(false);
  expect(x.isNothing()).toBe(true);
  expect(x.getOrElse('A default value')).toBe('A default value');
  expect(x.map((x: number) => x*x).map((x: number) => (x - 10)).filter((x: number) => x >= 10).chain((x: number) => (x - 10))).toBe(void 0);
});

test('lifted value of a Nothing is chainable', () => {

  const x: Maybe<number, void> = liftNumber(FuncToNothing, initialVal);
  expect(x.isJust()).toBe(false);
  expect(x.isNothing()).toBe(true);
  expect(x.getOrElse('A default value')).toBe('A default value');
  expect(x.map((x: number) => x*x).map((x: number) => (x - 10)).chain((x: number) => (x - 10))).toBe(void 0);
});
