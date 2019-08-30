"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isFunction_1 = require("./isFunction");
class IO {
    constructor(effect) {
        if (!isFunction_1.default(effect)) {
            throw new TypeError('Invalid parameter passed to IO. Please provide a function.');
        }
        this.effect = effect;
    }
    map(func) {
        return new IO(() => func(this.effect()));
    }
    chain(func) {
        return func(this.effect());
    }
    run() {
        return this.effect();
    }
    static of(val) {
        return new IO(() => val);
    }
    static from(func) {
        return new IO(func);
    }
    static lift(val) {
        return IO.of(val);
    }
}
exports.default = IO;
