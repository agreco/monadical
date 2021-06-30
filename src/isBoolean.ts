import curry from './curry';

const isBoolean: (val: any) => val is boolean = curry((val: any): boolean => {
  const stringTypeRep = Object.prototype.toString.call(val);
  return /(Boolean)\]$/.test(stringTypeRep);
});

export default isBoolean;
