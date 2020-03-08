import { FuncSpreadable } from './index';
import curry from './curry';

const isFunction: FuncSpreadable = curry((val: any): boolean => {
  const stringTypeRep = Object.prototype.toString.call(val);
  return /(Function)\]$/.test(stringTypeRep) && !!(val && val.constructor && val.call && val.apply);
});

export default isFunction;
