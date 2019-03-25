
import notNil from "./notNil";

export default class Either {

  constructor (value) {
    this._value = value;
  }

  get value () {
    return this._value;
  }

  static left (value) {
    return new Left(value);
  }

  static right (value) {
    return new Right(value);
  }

  static of (value) {
    return Either.right(value);
  }

  static nullable (value) {
    return notNil(value) ? Either.right(value) : Either.left(value);
  }
};

export class Right extends Either {

  get isRight () {
    return true;
  }

  get isLeft () {
    return false;
  }

  map (func) {
    return Either.of(func(this.value));
  }

  getOrElse (val) {
    return this.value;
  }

  orElse () {
    return this;
  }

  chain (func) {
    return func(this.value);
  }

  getOrElseThrow (_) {
    this.value;
  }

  filter (func) {
    return Either.nullable(func(this.value) ? this.value : null);
  }

  toString () {
    return `Right[${this.value}]`;
  }
}

export class Left extends Either {

  get value () {
    throw new TypeError("Value extraction invalid for type Left[A].");
  }

  get isRight () {
    return false;
  }

  get isLeft () {
    return true;
  }

  map (_) {
    return this;
  }

  getOrElse (defaultVal) {
    return defaultVal;
  }

  orElse (func) {
    return func(this.value);
  }

  chain (func) {
    return this;
  }

  getOrElseThrow (val) {
    throw new Error(val);
  }

  filter (func) {
    return this;
  }

  toString () {
    return `Left[${this.value}]`;
  }
}
