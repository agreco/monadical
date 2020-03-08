import { Func1, FuncSpreadable } from './index';

const partial = (func: FuncSpreadable, ...a: any[]): FuncSpreadable => (...sa: any[]): Func1<any> =>
  func.call(this, ...[...a, ...sa]);

export default partial;
