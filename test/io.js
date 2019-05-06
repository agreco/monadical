
import test from 'ava';
import curry from '../src/curry';
import compose from '../src/compose';
import lift from '../src/lift';
import Either from '../src/either';
import notNil from '../src/notNil';
import * as utils from '../src/utils';
import { mapC, chainC, getOrElseC } from '../src/container';
import IO from '../src/io';

test('IO value', t => {
  
  const objA = {
    x: 10
  };
  
  const objB = {
    x: 10
  };
  
  const ioA = IO.from(utils.readVal(objA, 'x')).map(x => x*x).map(x => x/2);
  t.is(ioA.run(), 50);
  
  const ioB = IO.from(utils.writeVal(objB, 'x', 20)).map(x => x*x).map(x => x/2);
  t.is(ioB.run(), 200);
});

test('mapping over IO', t => {
  
  const point = {
    id: 'abcd-efghi',
    x: 10,
    y: 20,
    z: 40
  };
  
  const safeFindPoint = curry((aPoint, id) => {
    const point = utils.collapse(aPoint.id) === id ? aPoint : {};
    return notNil(point) ? Either.right(point) : Either.left(`A point with the: ${id}, does not exist.`);
  });
  
  const findPoint = safeFindPoint(point);
  
  const checkIdLength = (id) => utils.validLength(id, 9) ? Either.right(id) : Either.left(`Invalid ID: ${id}`);
  
  const retrieveObj = compose(
    mapC(utils.visualSideEffect('Writing object retrieval to screen')),
    IO.lift,
    getOrElseC('Unable to find point'),
    mapC(utils.visualSideEffect('Point properties stringified')),
    mapC(utils.joiner),
    mapC(utils.visualSideEffect('Retrieved point properties')),
    mapC(utils.getProps(['id', 'x', 'y', 'z'])),
    mapC(utils.visualSideEffect('Retrieved point')),
    chainC(findPoint),
    mapC(utils.visualSideEffect('Validated id')),
    chainC(checkIdLength),
    mapC(utils.visualSideEffect('Normalised id')),
    lift(utils.normailse)
  );
  
  const ioEffect = retrieveObj('abcd-efghi').run();
  t.is(ioEffect, 'abcd-efghi,10,20,40');
});
