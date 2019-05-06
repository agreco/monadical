
import notNull from './notNull';
import isDefined from './isDefined';

const notNil = <T>(val: T): boolean => notNull(val) && isDefined(val);

export default notNil;
