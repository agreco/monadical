"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curry_1 = require("./curry");
const isDefined = curry_1.default((val) => val !== undefined);
exports.default = isDefined;
