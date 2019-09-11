
import { FuncSpreadable } from './index';
import curry from './curry';

const isString: FuncSpreadable = curry((val: any): boolean => {
  const stringTypeRep = Object.prototype.toString.call(val);
  return /(String)\]$/.test(stringTypeRep);
});

export default isString;
