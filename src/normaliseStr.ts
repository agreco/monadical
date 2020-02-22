
import { Normalise } from './index';
import { collapse, trim } from './utils';
import compose from './compose';

const normaliseStr: Normalise =
  (delim: string) => compose(collapse(delim), trim);

export default normaliseStr;
