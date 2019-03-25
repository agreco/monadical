
import notNull from './notNull';

export default class Maybe {

  get isNothing () {
    return false
  };

  get isJust () {
    return false;
  }

  static just (val) {
    return new Just(val);
  }

  static nothing () {
    return new Nothing();
  }

  static of (val) {
    return Maybe.just(val);
  }

  static nullable (val) {
    return notNull(val) ? Maybe.just(val) : Maybe.nothing();
  }
}

export class Just extends Maybe {

  constructor (value) {
    super();
    this._value = value;
  }

  get value () {
    return this._value;
  }

  map (func) {
    return Maybe.nullable(func(this._value));
  }

  chain (func) {
    return func(this._value);
  }

  getOrElse () {
    return this._value;
  }

  filter (func) {
    Maybe.nullable(func(this._value) ? this._value : null);
  }

  get isJust () {
    return true;
  }

  toString () {
    return `Just[${this._value}]`;
  }
}

export class Nothing extends Maybe {

  constructor () {
    super();
  }

  get value () {
    throw new TypeError('Value extraction invalid for type Nothing[].');
  }

  get isNothing () {
    return true;
  }

  map (func) {
    return this;
  }

  chain (func) {
    return this;
  }

  getOrElse (val) {
    return val;
  }

  filter () {
    return this._val;
  }

  toString () {
    return 'Nothing[]';
  }
}
