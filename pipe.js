"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pipe = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));
exports.default = pipe;
