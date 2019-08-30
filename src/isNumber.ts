
import { TFuncSpreadable } from './types';
import curry from './curry';

const isNumber: TFuncSpreadable = curry((val: any): boolean => {
  const stringTypeRep = Object.prototype.toString.call(val);
  return /(Number)\]$/.test(stringTypeRep);
});

export default isNumber;
