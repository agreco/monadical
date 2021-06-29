import isObject from './isObject';
import notEmpty from './notEmpty';

const nonEmptyObject = <T>(val: T): boolean => isObject(val) && notEmpty<T>(val);

export default nonEmptyObject;
