
import curry from './curry';
import { TFuncSpreadable } from './types';

const isDefined: TFuncSpreadable = curry((val: any): boolean => val !== undefined);

export default isDefined;
