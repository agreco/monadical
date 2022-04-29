const compose = <R = any>(...fns: ((...a: any[]) => R)[]): ((a: R) => R) =>
  fns.reduce(
    (f, g) =>
      (...args) =>
        f(g(...args))
  );

export default compose;
