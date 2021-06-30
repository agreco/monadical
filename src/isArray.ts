import curry from './curry';

const isArray: (val: any) => val is any[] = curry((val: any): val is any[] => {
  const stringTypeRep = Object.prototype.toString.call(val);
  return /(Array)\]$/.test(stringTypeRep);
});

export default isArray;
