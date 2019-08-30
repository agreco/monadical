
import { TFuncSpreadable } from './types';
import curry from './curry';

const isMap: TFuncSpreadable = curry((val: any): boolean => {
  const stringTypeRep = Object.prototype.toString.call(val);
  return /(Map)\]$/.test(stringTypeRep);
});

export default isMap;
