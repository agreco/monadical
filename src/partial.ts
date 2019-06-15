
import { FuncT } from './types';

const partial = (func: FuncT, ...a: any[]): FuncT => (...sa: any[]): FuncT => func.call(this, ...[ ...a, ...sa]);

export default partial;
