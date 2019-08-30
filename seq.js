"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const seq = (...fns) => (...val) => fns.forEach(fn => fn(...val));
exports.default = seq;
