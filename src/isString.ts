
import { TFuncSpreadable } from './index';
import curry from './curry';

const isString: TFuncSpreadable = curry((val: any): boolean => {
  const stringTypeRep = Object.prototype.toString.call(val);
  return /(String)\]$/.test(stringTypeRep);
});

export default isString;
