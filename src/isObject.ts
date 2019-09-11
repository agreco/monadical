
import { FuncSpreadable } from './index';
import curry from './curry';

const isObject: FuncSpreadable = curry((val: any): boolean => {
  const stringTypeRep = Object.prototype.toString.call(val);
  return /(Object)\]$/.test(stringTypeRep);
});

export default isObject;
