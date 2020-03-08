import curry from './curry';
import isEmpty from './isEmpty';

const notEmpty: <T>(a: T) => boolean = curry(<T>(val: T): boolean => !isEmpty(val));

export default notEmpty;
