
import curry from './curry';
import notNil from './notNil';
import { GetPropOrElse, IndexableAny } from './index';
import isEmpty from './isEmpty';

const gProp = (paths: string[], obj: object, defaultVal: any): any =>
  !paths.some(p => !p.length) && notNil(obj) ? paths.reduce((acc: IndexableAny, val: string): any => (
    acc = notNil(acc[val]) ? acc[val] : notNil(defaultVal) ? defaultVal : {}, acc
  ), obj) : void 0;

const getPropOrElse: GetPropOrElse = curry((path: string, obj: object, defaultVal: any) =>
  gProp(!isEmpty(path) ? path.split('.') : [''], obj, defaultVal));

export default getPropOrElse;
