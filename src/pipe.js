
const pipe = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

export default pipe;
