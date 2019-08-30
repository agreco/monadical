"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curry_1 = require("./curry");
const isNumber_1 = require("./isNumber");
const isNaN = curry_1.default((val) => {
    const stringTypeRep = Object.prototype.toString.call(val);
    return isNumber_1.default(stringTypeRep) && val.isNaN;
});
exports.default = isNaN;
