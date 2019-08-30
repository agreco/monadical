"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));
exports.default = compose;
