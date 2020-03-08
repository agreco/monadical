import curry from './curry';
import { FuncSpreadable } from './index';

const isDefined: FuncSpreadable = curry((val: any): boolean => val !== undefined);

export default isDefined;
