"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notNil_1 = require("./notNil");
class Maybe {
    constructor() {
        this._value = void 0;
    }
    toString() {
        return `Maybe[${this.value}]`;
    }
    get isNothing() {
        return false;
    }
    ;
    get isJust() {
        return false;
    }
    static just(val) {
        return new Just(val);
    }
    static nothing(val) {
        return new Nothing();
    }
    static of(val) {
        return Maybe.just(val);
    }
    static nullable(val) {
        return notNil_1.default(val) ? Maybe.just(val) : Maybe.nothing(void 0);
    }
    get value() {
        return this._value;
    }
}
exports.default = Maybe;
class Just extends Maybe {
    constructor(value) {
        super();
        this._value = value;
    }
    toString() {
        return `Just[${this.value}]`;
    }
    get isJust() {
        return true;
    }
    get isNothing() {
        return false;
    }
    map(func) {
        return Maybe.nullable(func(this.value));
    }
    chain(func) {
        return func(this.value);
    }
    getOrElse(val) {
        return this.value;
    }
    filter(func) {
        return Maybe.nullable(func(this.value) ? this.value : null);
    }
}
exports.Just = Just;
class Nothing extends Maybe {
    toString() {
        return `Nothing[]`;
    }
    get isJust() {
        return false;
    }
    get isNothing() {
        return true;
    }
    map(func) {
        return this;
    }
    chain(func) {
        return this.value;
    }
    getOrElse(val) {
        return val;
    }
    filter(func) {
        return this;
    }
}
exports.Nothing = Nothing;
