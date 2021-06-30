import curry from './curry';

const isNumber: (val: any) => boolean = curry((val: any): boolean => {
  const stringTypeRep = Object.prototype.toString.call(val);
  return /(Number)\]$/.test(stringTypeRep);
});

export default isNumber;
