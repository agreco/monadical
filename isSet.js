"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curry_1 = require("./curry");
const isSet = curry_1.default((val) => {
    const stringTypeRep = Object.prototype.toString.call(val);
    return /(Set)\]$/.test(stringTypeRep);
});
exports.default = isSet;
