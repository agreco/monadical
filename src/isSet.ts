import curry from './curry';

const isSet: (val: any) => boolean = curry((val: any): boolean => {
  const stringTypeRep = Object.prototype.toString.call(val);
  return /(Set)\]$/.test(stringTypeRep);
});

export default isSet;
