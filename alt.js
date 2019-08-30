"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const alt = (funcA, funcB) => (val) => funcA(val) || funcB(val);
exports.default = alt;
