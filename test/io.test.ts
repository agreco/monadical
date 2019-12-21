
import curry from '../src/curry';
import compose from '../src/compose';
import { liftToMaybe } from '../src/lift';
import Either, { Left, Right } from '../src/either';
import notNil from '../src/notNil';
import mapC from '../src/mapC';
import chainC from '../src/chainC';
import getOrElseC from '../src/getOrElseC';
import IO from '../src/io';
import { collapse, joiner, validLength } from '../src';
import readVal from '../src/readVal';
import writeVal from '../src/writeVal';
import visualSideEffect from '../src/visualSideEffect';
import getProps from '../src/getProps';
import normaliseStr from '../src/normaliseStr';

interface Point {
  id: string,
  x: number,
  y: number,
  z: number
}

type SafeFindPoint = {
  (point: Point): (id: string) => Either<string, Point>;
  (point: Point, id: string): Either<string, Point>;
};

const point = {
  id: 'abcd-efghi',
  x: 10,
  y: 20,
  z: 40
};

const safeFindPoint: SafeFindPoint = curry((aPoint: Point, id: string) => {
  const point: Point | null = collapse('-', aPoint.id) === id ? aPoint : null;
  return notNil(point) ? Either.right(point) : Either.left(`A point with the: ${id}, does not exist.`);
});

const findPoint: (id: string) => Either<string, Point> = safeFindPoint(point);

type IdCheck = Left<string, null> | Right<null, string>;

const checkIdLength: (id: string) => IdCheck =
    (id: string) => validLength(id, 9) ?
      Either.right<null, string>(id) :
      Either.left<string, null>(`Invalid ID: ${id}`);

test('IO value', () => {

  type IObj = {
    x: number
  }
  
  const times: (x: number) => number = (x: number) => x * x;
  const divideByTwo: (x: number) => number = (x: number) => x / 2;
  
  const objA: IObj = { x: 10 };
  const ioA: IO<number> = IO.from(readVal<IObj, number>(objA, 'x')).map(times).map(divideByTwo);
  expect(ioA.run()).toBe(50);
  
  const objB: IObj = { x: 10 };
  const ioB: IO<number> = IO.from(writeVal<IObj, number>(objB, 'x', 20)).map(times).map(divideByTwo);
  expect(ioB.run()).toBe(200);
});

test('mapping over IO', () => {

  const retrieveObj: (a: string) => IO<string> = compose(
    mapC(visualSideEffect('Writing object retrieval to screen')),
    IO.lift,
    getOrElseC('Unable to find point'),
    mapC(visualSideEffect('Point properties stringified')),
    mapC(joiner(',')),
    mapC(visualSideEffect('Retrieved point properties')),
    mapC(getProps(['id', 'x', 'y', 'z'])),
    mapC(visualSideEffect('Retrieved point')),
    chainC(findPoint),
    mapC(visualSideEffect('Validated id')),
    chainC(checkIdLength),
    mapC(visualSideEffect('Normalised id')),
    liftToMaybe<string>()(normaliseStr('-'))
  );
  
  const ioEffect = retrieveObj('abcd-efghi').run();
  expect(ioEffect).toBe('abcd-efghi,10,20,40');
});
