"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var seq = function () {
    var funcs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        funcs[_i] = arguments[_i];
    }
    return function (val) { return funcs.forEach(function (fn) { return fn(val); }); };
};
exports.default = seq;
//# sourceMappingURL=seq.js.map