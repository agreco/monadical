"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curry_1 = require("./curry");
const isArray = curry_1.default((val) => {
    const stringTypeRep = Object.prototype.toString.call(val);
    return /(Array)\]$/.test(stringTypeRep);
});
exports.default = isArray;
