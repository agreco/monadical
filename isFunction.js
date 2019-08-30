"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curry_1 = require("./curry");
const isFunction = curry_1.default((val) => {
    const stringTypeRep = Object.prototype.toString.call(val);
    return /(Function)\]$/.test(stringTypeRep) && !!(val && val.constructor && val.call && val.apply);
});
exports.default = isFunction;
