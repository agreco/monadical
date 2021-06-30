import { FuncSpreadable } from './';

const curry = <T>(func: FuncSpreadable, ...args: any[]): T =>
  args.length >= func.length
    ? func.call(this, ...args)
    : (...argsN: any[]): FuncSpreadable => curry(func.bind(this, ...args), ...argsN);

export default curry;
