"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curry_1 = require("./curry");
const isString = curry_1.default((val) => {
    const stringTypeRep = Object.prototype.toString.call(val);
    return /(String)\]$/.test(stringTypeRep);
});
exports.default = isString;
