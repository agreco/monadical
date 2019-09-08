
import { TFuncSpreadable } from './index';
import curry from './curry';

const isObject: TFuncSpreadable = curry((val: any): boolean => {
  const stringTypeRep = Object.prototype.toString.call(val);
  return /(Object)\]$/.test(stringTypeRep);
});

export default isObject;
