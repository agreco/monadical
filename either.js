"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notNil_1 = require("./notNil");
class Either {
    isRight() {
        return false;
    }
    isLeft() {
        return false;
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
        return (!notNil_1.default(value) ? Either.left(null) : Either.right(value));
    }
    chain(func) {
        return;
    }
    getOrElse(defaultVal) {
        return;
    }
    getOrElseThrow(func) {
        return;
    }
    map(func) {
        return;
    }
    orElse(func) {
        return;
    }
    filter(func) {
        return;
    }
}
exports.default = Either;
;
class Right {
    constructor(value) {
        this._value = value;
    }
    get value() {
        return this._value;
    }
    isRight() {
        return true;
    }
    isLeft() {
        return false;
    }
    map(func) {
        return Either.of(func(this._value));
    }
    getOrElse(_) {
        return this._value;
    }
    orElse(_) {
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
        return `Right[ ${this._value} ]`;
    }
}
exports.Right = Right;
class Left {
    constructor(value) {
        this._value = value;
    }
    isRight() {
        return false;
    }
    isLeft() {
        return true;
    }
    chain(_) {
        return this;
    }
    getOrElse(defaultVal) {
        return defaultVal;
    }
    map(_) {
        return this;
    }
    orElse(func) {
        return func(this._value);
    }
    filter(_) {
        return this;
    }
    getOrElseThrow(func) {
        throw func(this._value);
    }
    toString() {
        return `Left[ ${this._value} ]`;
    }
}
exports.Left = Left;
