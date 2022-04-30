import { Monadical } from '..';

export type ChainC = {
	<T, V>(func: T): (container: Monadical<V>) => any;
	<T, V>(func: T, container: Monadical<V>): any;
};
