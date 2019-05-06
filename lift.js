"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var maybe_1 = require("./maybe");
var curry_1 = require("./curry");
var lift = curry_1.default(function (func, value) {
    return maybe_1.default.nullable(func(value));
});
exports.default = lift;
//# sourceMappingURL=lift.js.map