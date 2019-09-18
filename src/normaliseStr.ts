
import { collapse, Normalise, trim } from './index';
import compose from './compose';

const normaliseStr: Normalise =
  (delim: string) => compose(collapse(delim), trim);

export default normaliseStr;
