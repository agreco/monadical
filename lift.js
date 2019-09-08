"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const maybe_1 = require("./maybe");
const curry_1 = require("./curry");
const lift = () => curry_1.default((func, val) => {
    return maybe_1.default.nullable(func(val));
});
exports.default = lift;
