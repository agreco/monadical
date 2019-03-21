
import compose from './compose';

const pipe = (...funcs) => funcs.reduceRight(compose);

export default pipe;
