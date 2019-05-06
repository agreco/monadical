
const curry = (func: (...a: any[]) => any, ...args: any[]): (a: any[]) => any =>
  (args.length >= func.length) ?
    func.call(this, ...args) :
      (...argsN: any[]): Function => curry(func.bind(this, ...args), ...argsN);

export default curry;
