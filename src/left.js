
import Either from './either';

export default class Left extends Either {

  map = _ => this;

  get value () { throw new TypeError("Value extraction invalid for type Left[A]."); }

  getOrElse = defaultVal => defaultVal;

  orElse = func => func(this.value);

  chain = func => this;

  getOrElseThrow = val => throw new Error(val);

  filter = func => this;

  static get isRight () { return false; }

  static get isLeft () { return true; }

  toString = () => `Left[${this.value}]`;
}

