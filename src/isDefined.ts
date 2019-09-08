
import curry from './curry';
import { TFuncSpreadable } from './index';

const isDefined: TFuncSpreadable = curry((val: any): boolean => val !== undefined);

export default isDefined;
