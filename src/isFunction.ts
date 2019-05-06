
import { FuncT } from './types';

const isFunction = (obj: FuncT): boolean => !!(obj && obj.constructor && obj.call && obj.apply);

export default isFunction;
