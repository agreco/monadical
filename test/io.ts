
import test from 'ava';
import curry from '../src/curry';
import compose from '../src/compose';
import lift from '../src/lift';
import Either, { Left, Right } from '../src/either';
import notNil from '../src/notNil';
import * as utils from '../src/utils';
import { mapC, chainC, getOrElseC } from '../src/container';
import IO from '../src/io';
import Empty from '../src/empty';

interface IPoint {
  id: string,
  x: number,
  y: number,
  z: number
}

type TSafeFindPoint = {
  (point: IPoint): (id: string) => Right<IPoint> | Left<string>;
  (point: IPoint, id: string): Right<IPoint> | Left<string>;
};

const point = {
  id: 'abcd-efghi',
  x: 10,
  y: 20,
  z: 40
};

const safeFindPoint: TSafeFindPoint = curry((aPoint, id) => {
  const point = utils.collapse(aPoint.id) === id ? aPoint : {};
  return notNil(point) ? Either.right(point) : Either.left(`A point with the: ${id}, does not exist.`);
});

const findPoint: (id: string) => Right<IPoint> | Left<string> = safeFindPoint(point);

const checkIdLength: (id: string) => Right<string> | Left<string> =
    (id: string) => utils.validLength(id, 9) ? Either.right(id) : Either.left(`Invalid ID: ${id}`);

test('IO value', t => {

  type IObj = {
    x: number
  }
  
  const times: (x: number) => number = (x: number) => x * x;
  const divideByTwo: (x: number) => number = (x: number) => x / 2;
  
  const objA: IObj = { x: 10 };
  const ioA: IO<number> = IO.from(utils.readVal(objA, 'x')).map(times).map(divideByTwo);
  t.is(ioA.run(), 50);
  
  const objB: IObj = { x: 10 };
  const ioB: IO<number> = IO.from(utils.writeVal(objB, 'x', 20)).map(times).map(divideByTwo);
  t.is(ioB.run(), 200);
});

test('mapping over IO', t => {

  const retrieveObj: (a: string) => IO<string> = compose(
    mapC(utils.visualSideEffect('Writing object retrieval to screen')),
    IO.lift,
    getOrElseC('Unable to find point'),
    mapC(utils.visualSideEffect('Point properties stringified')),
    mapC(utils.joiner(',')),
    mapC(utils.visualSideEffect('Retrieved point properties')),
    mapC(utils.getProps(['id', 'x', 'y', 'z'])),
    mapC(utils.visualSideEffect('Retrieved point')),
    chainC(findPoint),
    mapC(utils.visualSideEffect('Validated id')),
    chainC(checkIdLength),
    mapC(utils.visualSideEffect('Normalised id')),
    lift<string, Empty>()(utils.normalise)
  );
  
  const ioEffect = retrieveObj('abcd-efghi').run();
  t.is(ioEffect, 'abcd-efghi,10,20,40');
});
