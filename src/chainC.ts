import { ChainC, Monadical } from './index';
import curry from './curry';

const chainC: ChainC = curry(<T, V>(func: T, container: Monadical<V>) => container.chain(func));

export default chainC;
