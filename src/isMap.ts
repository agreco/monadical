import { FuncSpreadable } from './index';
import curry from './curry';

const isMap: FuncSpreadable = curry((val: any): boolean => {
  const stringTypeRep = Object.prototype.toString.call(val);
  return /(Map)\]$/.test(stringTypeRep);
});

export default isMap;
