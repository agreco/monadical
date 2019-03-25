
export default class Container {

  constructor (value) {
    this._value = value;
  }

  get value () {
    return this._value;
  }

  map(f) {
    return f(this._value);
  }

  fmap (f) {
    return new Container(f(this._value));
  }

  join () {
    return !(this._value instanceof Container) ? this : this._value.join();
  }

  static of (value) {
    return new Container(value);
  }

  toString () {
    return `Container[${this._value}]`;
  }
}
