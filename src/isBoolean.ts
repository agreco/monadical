
import { TFuncSpreadable } from './index';
import curry from './curry';

const isBoolean: TFuncSpreadable = curry((val: any): boolean => {
  const stringTypeRep = Object.prototype.toString.call(val);
  return /(Boolean)\]$/.test(stringTypeRep);
});

export default isBoolean;
