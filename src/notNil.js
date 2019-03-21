
import notNull from './notNull';
import isDefined from './isDefined';

const notNil = val => notNull(val) && isDefined(val);

export default notNil;
