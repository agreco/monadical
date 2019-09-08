"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notNil_1 = require("./notNil");
class Maybe {
    isNothing() {
        return false;
    }
    ;
    isJust() {
        return false;
    }
    static just(val) {
        return new Just(val);
    }
    static nothing(_) {
        return new Nothing(_);
    }
    static of(val) {
        return Maybe.just(val);
    }
    static nullable(val) {
        return (notNil_1.default(val) ? Maybe.just(val) : Maybe.nothing(void 0));
    }
    getOrElse(_) {
        return;
    }
    chain(_) {
        return;
    }
    map(_) {
        return;
    }
    filter(_) {
        return;
    }
}
exports.default = Maybe;
class Just {
    constructor(value) {
        this._value = value;
    }
    get value() {
        return this._value;
    }
    isJust() {
        return true;
    }
    isNothing() {
        return false;
    }
    map(func) {
        return Maybe.of(func(this._value));
    }
    chain(func) {
        return func(this._value);
    }
    getOrElse(_) {
        return this._value;
    }
    filter(func) {
        return Maybe.nullable(func(this._value) ? this._value : null);
    }
    toString() {
        return `Just[ ${this._value} ]`;
    }
}
exports.Just = Just;
class Nothing {
    constructor(value) {
        this._value = value;
    }
    toString() {
        return `Nothing[]`;
    }
    isJust() {
        return false;
    }
    isNothing() {
        return true;
    }
    map(_) {
        return this;
    }
    chain(_) {
        return this._value;
    }
    getOrElse(defaultVal) {
        return defaultVal;
    }
    filter(_) {
        return this;
    }
}
exports.Nothing = Nothing;
