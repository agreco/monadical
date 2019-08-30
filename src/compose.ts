
const compose = <R>(...fns: Array<(...a: any[]) => R>):(a: R) => R => fns.reduce((f, g) => (...args) => f(g(...args)));

export default compose;
