
import { FuncSpreadable, FuncSpreadT, SafeUnpackG } from './index';
import curry from './curry';
import compose from './compose';
import extractG from './extractG';
import chainG from './chainG';
import safeHandleErrorG from './safeHandleErrorG';

const safeUnpackG: SafeUnpackG =
  curry(
    <T>(errorHandler: FuncSpreadable): FuncSpreadT<T> =>
      compose(extractG, chainG(safeHandleErrorG(errorHandler)), extractG)
  );

export default safeUnpackG;
