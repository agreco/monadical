
import { FuncSpreadable, FuncSpreadT, SafeUnpackG } from './index';
import safeHandleErrorG from './safeHandleErrorG';
import compose from './compose';
import curry from './curry';
import getOrElseG from './getOrElseG';
import identity from './identity';

const safeUnpackG: SafeUnpackG =
  curry(
    <T>(errorHandler: FuncSpreadable, defaultVal: any): FuncSpreadT<T> =>
      compose(getOrElseG<T>(defaultVal), identity, safeHandleErrorG<T>(errorHandler))
  );

export default safeUnpackG;
