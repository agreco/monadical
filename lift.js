"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const maybe_1 = require("./maybe");
const curry_1 = require("./curry");
const lift = () => {
    return curry_1.default((func, value) => {
        return maybe_1.default.nullable(func(value));
    });
};
exports.default = lift;
