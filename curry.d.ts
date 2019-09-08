import { TFuncSpreadable } from './index';
declare const curry: <T>(func: TFuncSpreadable, ...args: any[]) => T;
export default curry;
