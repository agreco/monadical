"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curry_1 = require("./curry");
const isObject = curry_1.default((val) => {
    const stringTypeRep = Object.prototype.toString.call(val);
    return /(Object)\]$/.test(stringTypeRep);
});
exports.default = isObject;
