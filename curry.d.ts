import { TFuncSpreadable } from './types';
declare const curry: <T>(func: TFuncSpreadable, ...args: any[]) => T;
export default curry;
