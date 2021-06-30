import isArray from './isArray';
import notEmpty from './notEmpty';

const nonEmptyArray: <T>(val: T) => boolean = <T>(val: T): boolean => isArray(val) && notEmpty<T>(val);

export default nonEmptyArray;
