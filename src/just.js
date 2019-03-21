
import Maybe from './maybe';

export default class Just extends Maybe {

  constructor (val) {
    super();
    this._val = val;
  }

  get value () { return this._val; }

  map = func => Maybe.nullable(func(this._val));

  chain = func => func(this._val);

  getOrElse = () => this._val;

  filter = func => Maybe.nullable(func(this._val) ? this._val : null);

  get isJust () { return true; }

  toString = () => `Just[${this._val}]`;
};

