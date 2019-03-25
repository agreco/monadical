
import noop from './noop';

export default class Empty {

  map = _ => noop();

  fmap = _ => new Empty();

  toString () {
    return 'Empty[]';
  }
};
