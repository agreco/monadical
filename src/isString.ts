import curry from './curry';

const isString: (val: any) => boolean = curry((val: any): boolean => {
  const stringTypeRep = Object.prototype.toString.call(val);
  return /(String)\]$/.test(stringTypeRep);
});

export default isString;
