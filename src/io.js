
import isFunction from './isFunction';

export default class IO {

  constructor (effect) {
    if (!isFunction(effect)) throw 'Invalid parameter passed to IO. Please provide a function.';
    this.effect = effect;
  }

  map (func) {
    return new IO(() => func(this.effect()));
  }

  chain (func) {
    return func(this.effect());
  }

  run () {
    return this.effect();
  }

  static of (val) {
    return new IO(() => val);
  }

  static from (fn) {
    return new IO(fn);
  }
};
