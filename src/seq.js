
const seq = (...funcs) => val => funcs.forEach(fn => fn(val));

export default seq;
