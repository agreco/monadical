
import isFunction from './isFunction';

export default class IO {

  constructor (effect) {
    if (!isFunction(effect)) throw 'Invalid parameter passed to IO. Please provide a function.';
    this.effect = effect;
  }

  static of = val => new IO(() => val);

  static from = fn => new IO(fn);

  map = func => new IO(() => func(this.effect()));

  chain = func => func(this.effect());

  run = () => this.effect();
};
