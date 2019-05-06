"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var compose = function () {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return fns.reduce(function (f, g) { return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return f(g.apply(void 0, args));
    }; });
};
exports.default = compose;
//# sourceMappingURL=compose.js.map