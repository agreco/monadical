
const compose = <R>(...fns: ((...a: any[]) => R)[]):(a: R) => R => fns.reduce((f, g) => (...args) => f(g(...args)));

export default compose;
