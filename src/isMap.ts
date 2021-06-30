import curry from './curry';

const isMap: (val: any) => boolean = curry((val: any): boolean => {
  const stringTypeRep = Object.prototype.toString.call(val);
  return /(Map)\]$/.test(stringTypeRep);
});

export default isMap;
