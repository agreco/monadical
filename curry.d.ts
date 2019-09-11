import { FuncSpreadable } from './index';
declare const curry: <T>(func: FuncSpreadable, ...args: any[]) => T;
export default curry;
