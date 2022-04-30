import { Curry, Either, FuncSpreadable, Monadical } from '../';
import Maybe from '../maybe/typings';
import curry from '../curry';

type ChainC = Monadical<Either<any, any> | Maybe<any, any>> | Either<any, any> | Maybe<any, any>;

const chainC: Curry<[FuncSpreadable, ChainC], any> = curry(<T, V>(func: T, container: Monadical<V>) =>
	container.chain(func)
);

export default chainC;
