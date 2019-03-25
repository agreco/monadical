
import curry from './curry';
import notNil from "./notNil";

const gProp = (paths, obj, defaultVal) => !paths.some(p => !p.length) && notNil(obj) ?
  paths.reduce((acc, val) => (acc = notNil(acc[val]) ? acc[val] : notNil(defaultVal) ? defaultVal : {}, acc), obj) :
    void 0;

const getPropOrElse = curry((path, obj, defaultVal) => gProp(notNil(path) ? path.split('.') : [''], obj, defaultVal));

export default getPropOrElse;
