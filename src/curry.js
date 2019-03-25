
const curry = (func, ...args) =>
  (args.length >= func.length) ?
    func.call(this, ...args) :
      (...argsN) => curry(func.bind(this, ...args), ...argsN);

export default curry;
