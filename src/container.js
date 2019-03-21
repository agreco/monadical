
export default class Container {

  constructor (val) {
    this._val = val;
  }

  static of = val => new Container(val);

  map = func => Container.of(func(this._val));

  join = () => !this._val instanceof Container ? this : this._val.join();

  get value () { return this._val; }

  toString = () => `Container[${this._val}]`;
}
