import curry from './curry';
import isNumber from './isNumber';

const isNaN: (val: any) => boolean = curry((val: any): boolean => {
  const stringTypeRep = Object.prototype.toString.call(val);
  return isNumber(stringTypeRep) && val.isNaN;
});

export default isNaN;
