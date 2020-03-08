const pipe = <R>(...fns: Array<(a: R) => R>): ((a: R) => R) => fns.reduce((f, g) => (...args) => f(g(...args)));

export default pipe;
