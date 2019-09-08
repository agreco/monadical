
import { TFunc1, TFuncSpreadable } from './index';

const partial = (func: TFuncSpreadable, ...a: any[]): TFuncSpreadable =>
  (...sa: any[]): TFunc1<any> => func.call(this, ...[ ...a, ...sa]);

export default partial;
