
import Either from './either';
import Maybe from './maybe';
import curry from './curry';
import { Func1, LiftToMaybe, LiftToEither } from './index';

export const liftToMaybe = <J>():LiftToMaybe<J, void> => curry(<J>(func: Func1<J>, val: J): Maybe<J, void> => {
  return Maybe.nullable<J, void>(func(val));
});

export const liftToEither = <R>():LiftToEither<void, R> => curry(<R>(func: Func1<R>, val: R): Either<void, R> => {
  return Either.nullable<R>(func(val));
});

