
import curry from './curry';
import notNil from './notNil';
import { IIndexableAny } from './types';

const gProp = (paths: string[], obj: object, defaultVal: any): any =>
  !paths.some(p => !p.length) && notNil(obj) ? paths.reduce((acc: IIndexableAny, val: string): any => (
    acc = notNil(acc[val]) ? acc[val] : notNil(defaultVal) ? defaultVal : {}, acc
  ), obj) : void 0;

const getPropOrElse = curry((path: string, obj: object, defaultVal: any) =>
  gProp(notNil(path) ? path.split('.') : [''], obj, defaultVal));

export default getPropOrElse;
