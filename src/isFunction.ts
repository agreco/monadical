import curry from './curry';

const isFunction: (val: any) => boolean = curry((val: any): boolean => {
  const stringTypeRep = Object.prototype.toString.call(val);
  return /(Function)\]$/.test(stringTypeRep) && !!(val && val.constructor && val.call && val.apply);
});

export default isFunction;
