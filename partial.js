"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var partial = function (func) {
    var a = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        a[_i - 1] = arguments[_i];
    }
    return function () {
        var sa = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            sa[_i] = arguments[_i];
        }
        return func.call.apply(func, [_this].concat(a.concat(sa)));
    };
};
exports.default = partial;
//# sourceMappingURL=partial.js.map