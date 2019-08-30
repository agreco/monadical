
import test from 'ava';
import lift from '../src/lift';
import identity from '../src/identity';
import { TFunc1 } from '../src/types';
import notNil from '../src/notNil';
import { Just, Nothing } from '../src/maybe';

interface IData extends Promise<IData> {
  data?: number
}

const liftNumber = lift<number, void>();
const initialVal: number = 10;
const FuncToNothing: TFunc1<number> = (x: number) => {
  const someVal: { data: void } = { data: void 0 };
  const { data }: IData = Promise.reject(someVal).catch<IData>(identity);
  return !notNil(data) ? void 0 : data + x;
};

test('lift value into a Just', t => {

  const x: Just<number> | Nothing<void> = liftNumber((x: number) => x + 10, initialVal);
  t.is(x.isJust, true);
  t.is(x.isNothing, false);
  t.is(x.value, 20);
  t.is(x.getOrElse('A default value'), 20);
});

test('lifted value of a Just is chainable', t => {

  const x: Just<number> | Nothing<void> = liftNumber((x: number) => x + 10, initialVal);
  t.is(
    x.map<number, void>((x: number) => x*x)
      .map((x: number) => (x - 10))
      .chain((x: number) => x * 2),
    780
  );
});

test('lifted value of a Just is filterable', t => {

  const x: Just<number> | Nothing<void> = liftNumber((x: number) => x + 10, initialVal);
  t.is(
    x.map((x: number) => x*x)
      .map((x: number) => (x - 10))
      .filter((x: number) => x >= 90)
      .getOrElse('An error occurred'),
    390
  );
});

test('lift value into a Nothing', async t => {

  const x: Just<number> | Nothing<void> = liftNumber(FuncToNothing, initialVal);
  t.is(x.isJust, false);
  t.is(x.isNothing, true);
  t.is(x.getOrElse('A default value'), 'A default value');
});

test('lifted value of a Nothing is filterable', t => {

  const x: Just<number> | Nothing<void> = liftNumber(FuncToNothing, initialVal);
  t.is(x.isJust, false);
  t.is(x.isNothing, true);
  t.is(x.getOrElse('A default value'), 'A default value');
  t.is(
    x.map((x: number) => x*x)
      .map((x: number) => (x - 10))
      .filter((x: number) => x >= 10)
      .chain((x: number) => (x - 10)),
    void 0
  );
});

test('lifted value of a Nothing is chainable', t => {

  const x: Just<number> | Nothing<void> = liftNumber(FuncToNothing, initialVal);
  t.is(x.isJust, false);
  t.is(x.isNothing, true);
  t.is(x.getOrElse('A default value'), 'A default value');
  t.is(
    x.map((x: number) => x*x)
      .map((x: number) => (x - 10))
      .chain((x: number) => (x - 10)),
    void 0
  );
});
