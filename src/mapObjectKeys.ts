import { Curry, FuncSpreadT, IndexableAny } from '.';
import isObject from './isObject';
import isArray from './isArray';
import curry from './curry';
import nonEmptyObject from './nonEmptyObject';
import nonEmptyArray from './nonEmptyArray';

type MappableObject = IndexableAny | IndexableAny[];

const mapObjectKeys: Curry<[MappableObject, FuncSpreadT<string | number>], MappableObject> = curry(
  <T extends MappableObject>(val: T, f: FuncSpreadT<string | number>): MappableObject => {
    if (isObject(val)) {
      return Object.keys(val).reduce((memo: IndexableAny, key: string | number): MappableObject => {
        memo[f(key)] = nonEmptyObject(val[key]) || nonEmptyArray(val[key]) ? mapObjectKeys(val[key], f) : val[key];
        return memo;
      }, {});
    } else if (isArray(val)) {
      return val?.map(<A extends T>(v: A) => (nonEmptyObject<A>(v) ? mapObjectKeys(v, f) : v));
    } else {
      return val;
    }
  }
);

export default mapObjectKeys;
