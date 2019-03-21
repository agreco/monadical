
import Maybe from "./maybe";

export default class Nothing extends Maybe {

  map = func => this;

  chain = func => this;

  get value () { throw new TypeError("Value extraction invalid for type Nothing[]."); }

  getOrElse = val => val;

  filter = () => this._val;

  get isNothing () { return true; }

  toString = () => 'Nothing[]';
};
