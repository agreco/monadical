
import Maybe from './maybe';
import curry from 'curry';

const lift = curry((func, value) => Maybe.nullable(value).map(func));

export default lift;
