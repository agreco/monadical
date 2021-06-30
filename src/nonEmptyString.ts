import isString from './isString';
import notEmpty from './notEmpty';

const nonEmptyString: <T>(val: T) => boolean = <T>(val: T): boolean => isString(val) && notEmpty<T>(val);

export default nonEmptyString;
