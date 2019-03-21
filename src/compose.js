
const compose = (...funcs) => funcs.reduce((f, g) => (...args) => f(g(...args)));

export default compose;
