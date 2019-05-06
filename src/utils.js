
import getPropOrElse from './getPropOrElse';
import curry from './curry'
import compose from './compose';
import notNil from './notNil';

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

export const validLength = (str, len) => str.length === len;

export const trim = str => str.trim();

export const collapse = str => str.replace(/\-/g, '');

export const joiner = arr => arr.join(',');

export const normailse = compose(collapse, trim);
