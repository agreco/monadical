
import { FuncSpreadable } from './index';
import curry from './curry';

const isBoolean: FuncSpreadable = curry((val: any): boolean => {
  const stringTypeRep = Object.prototype.toString.call(val);
  return /(Boolean)\]$/.test(stringTypeRep);
});

export default isBoolean;
