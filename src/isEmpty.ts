import curry from './curry';
import notNil from './notNil';
import isBoolean from './isBoolean';
import isNumber from './isNumber';
import isNaN from './isNaN';
import isFunction from './isFunction';
import isString from './isString';
import isObject from './isObject';
import isArray from './isArray';
import isMap from './isMap';
import isSet from './isSet';

const isEmpty: (val: any) => boolean = curry((val: any): boolean => {
  return (
    !notNil(val) ||
    isBoolean(val) ||
    isNumber(val) ||
    isNaN(val) ||
    isFunction(val) ||
    (isString(val) && val === '') ||
    (isObject(val) && Object.keys(val).length === 0) ||
    (isArray(val) && val.length === 0) ||
    (isMap(val) && val.size === 0) ||
    (isSet(val) && val.size === 0)
  );
});

export default isEmpty;
