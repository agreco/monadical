import { FuncSpreadable } from './index';
import curry from './curry';

const isSet: FuncSpreadable = curry((val: any): boolean => {
  const stringTypeRep = Object.prototype.toString.call(val);
  return /(Set)\]$/.test(stringTypeRep);
});

export default isSet;
