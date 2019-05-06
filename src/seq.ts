
const seq = <T>(...funcs: Array<(...a: any[]) => any>): (a: T) => void =>
  (val: any): void => funcs.forEach(fn => fn(val));

export default seq;
