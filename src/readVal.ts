import { Indexable, ReadableValue } from './index';
import curry from './curry';

const readVal: ReadableValue = curry(<T>(obj: Indexable<T>, key: string): (() => T) => () => obj[key]);

export default readVal;
