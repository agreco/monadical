const seq =
  (...fns: Array<(...a: any[]) => any>): ((...s: any[]) => void) =>
  (...val: any[]): void =>
    fns.forEach(fn => fn(...val));

export default seq;
