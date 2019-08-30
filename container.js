"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curry_1 = require("./curry");
class Container {
    constructor(value) {
        this._value = value;
    }
    get() {
        return this._value;
    }
    map(f) {
        return Container.of(f(this._value));
    }
    join() {
        return !(this._value instanceof Container) ? this : this._value.join();
    }
    static of(value) {
        return new Container(value);
    }
    toString() {
        return `Container[${this._value}]`;
    }
}
exports.default = Container;
exports.mapC = curry_1.default((f, container) => container.map(f));
exports.chainC = curry_1.default((f, container) => container.chain(f));
exports.getOrElseC = curry_1.default((message, container) => container.getOrElse(message));
