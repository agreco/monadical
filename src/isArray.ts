
import { TFuncSpreadable } from './index';
import curry from './curry';

const isArray: TFuncSpreadable = curry((val: any): boolean => {
  const stringTypeRep = Object.prototype.toString.call(val);
  return /(Array)\]$/.test(stringTypeRep);
});

export default isArray;
