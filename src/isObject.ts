import curry from './curry';

const isObject: (val: any) => val is Record<string | number, unknown> = curry(
  (val: any): val is Record<string | number, unknown> => {
    const stringTypeRep = Object.prototype.toString.call(val);
    return /(Object)\]$/.test(stringTypeRep);
  }
);

export default isObject;
