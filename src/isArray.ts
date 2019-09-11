
import { FuncSpreadable } from './index';
import curry from './curry';

const isArray: FuncSpreadable = curry((val: any): boolean => {
  const stringTypeRep = Object.prototype.toString.call(val);
  return /(Array)\]$/.test(stringTypeRep);
});

export default isArray;
