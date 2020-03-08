import { Indexable, WritableValue } from './index';
import curry from './curry';

const writeVal: WritableValue = curry(<T, V extends T>(obj: Indexable<T>, key: string, z: V): (() => V) => () =>
  (obj[key] = z)
);

export default writeVal;
