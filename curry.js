"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curry = (func, ...args) => (args.length >= func.length) ?
    func.call(this, ...args) :
    (...argsN) => curry(func.bind(this, ...args), ...argsN);
exports.default = curry;
