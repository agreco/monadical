"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notNil_1 = require("./notNil");
class Either {
    constructor(value) {
        this._value = value;
    }
    get value() {
        return this._value;
    }
    static left(value) {
        return new Left(value);
    }
    static right(value) {
        return new Right(value);
    }
    static of(value) {
        return Either.right(value);
    }
    static nullable(value) {
        return notNil_1.default(value) ? Either.right(value) : Either.left(value);
    }
}
exports.default = Either;
;
class Right extends Either {
    get isRight() {
        return true;
    }
    get isLeft() {
        return false;
    }
    map(func) {
        return Either.of(func(this._value));
    }
    getOrElse(val) {
        return this._value;
    }
    orElse() {
        return this;
    }
    chain(func) {
        return func(this._value);
    }
    getOrElseThrow(_) {
        return this._value;
    }
    filter(func) {
        return Either.nullable(func(this._value) ? this._value : null);
    }
    toString() {
        return `Right[${this._value}]`;
    }
}
exports.Right = Right;
class Left extends Either {
    get value() {
        throw new TypeError("Value extraction invalid for type Left[U].");
    }
    get isRight() {
        return false;
    }
    get isLeft() {
        return true;
    }
    map(_) {
        return this;
    }
    getOrElse(defaultVal) {
        return defaultVal;
    }
    orElse(func) {
        return func(this._value);
    }
    chain(func) {
        return this;
    }
    getOrElseThrow(val) {
        throw new Error(val);
    }
    filter(func) {
        return this;
    }
    toString() {
        return `Left[${this._value}]`;
    }
}
exports.Left = Left;
