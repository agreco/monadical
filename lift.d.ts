import { LiftToMaybe, LiftToEither } from './index';
export declare const liftToMaybe: <J>() => LiftToMaybe<J, void>;
export declare const liftToEither: <R>() => LiftToEither<void, R>;
