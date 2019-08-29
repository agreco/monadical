
import getPropOrElse from './getPropOrElse';
import curry from './curry'
import compose from './compose';
import notNil from './notNil';
import Either from './either';
import { chainC, mapC } from './container';

export const readVal = curry((anObject, key) => () => anObject[key]);

export const writeVal = curry((anObject, key, z) => () => anObject[key] = z);

export const visualSideEffect = curry((info, data) => {
  const debugging = getPropOrElse('NODE_ENV.debug', process, false);
  
  if (debugging) {
    console.log(`INFO: ${info}, DATA: ${data}`);
  }
  
  return data;
});

export const getProps = curry((propsArray, anObject) => {
  return propsArray.reduce((acc, val) => {
    if (notNil(anObject[val])) {
      acc.push(anObject[val]);
    }
    return acc;
  }, []);
});

export const isEmpty = curry(val => {
  if (!notNil(val)) return true;
  
  const stringTypeRep = Object.prototype.toString.call(val);
  
  const isBoolean = /(Boolean)\]$/.test(stringTypeRep);
  if (isBoolean) return true;
  
  const isNumber = /(Number)\]$/.test(stringTypeRep);
  if (isNumber) return true;
  
  const isNaN = isNumber && val.isNaN;
  if (isNaN) return true;
  
  const isFunction = /(Function)\]$/.test(stringTypeRep);
  if (isFunction) return true;
  
  const isString = /(String)\]$/.test(stringTypeRep);
  const isEmptyStr = isString && val === '';
  if (isString && isEmptyStr) return true;
  
  const isObject = /(Object)\]$/.test(stringTypeRep);
  const isEmptyObj = isObject && (Object.keys(val)).length === 0;
  if (isObject && isEmptyObj) return true;
  
  const isArray = /(Array)\]$/.test(stringTypeRep);
  const isEmptyArray = isArray && val.length === 0;
  if (isArray && isEmptyArray) return true;
  
  const isMap = /(Map)\]$/.test(stringTypeRep);
  const isEmptyMap = isMap && val.size === 0;
  if (isMap && isEmptyMap) return true;
  
  const isSet = /(Set)\]$/.test(stringTypeRep);
  const isEmptySet = isSet && val.size === 0;
  if (isSet && isEmptySet) return true;
  
  return false;
});

export const validLength = curry((str, len) => str.length === len);

export const trim = curry(str => str.trim());

export const collapse = curry(str => str.replace(/\-/g, ''));

export const joiner = curry((delim, arr) => arr.join(delim));

export const normailse = compose(collapse, trim);

export const notEmpty = curry(val => !isEmpty(val));

export const hasValue = curry(val => notNil(val) && notEmpty(val));

export const extractG = curry(function* (val) {
  return yield val;
});

export const chainG = curry(function* (func, val) {
  return yield chainC(func, yield val);
});

export const mapG = curry(function* (func, val) {
  return yield mapC(func, yield val);
});

export const safeHandleErrorG = curry(function* (operation, val) {
  const result = yield val;
  const { error } = result;
  
  if (error) {
    yield operation(error);
    return Either.left(result);
  } else {
    return Either.right(result);
  }
});

export const safeUnpackG = curry(operation => compose(extractG, chainG(safeHandleErrorG(operation)), extractG));
