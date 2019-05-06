"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var curry = function (func) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return (args.length >= func.length) ? func.call.apply(func, [_this].concat(args)) :
        function () {
            var argsN = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                argsN[_i] = arguments[_i];
            }
            return curry.apply(void 0, [func.bind.apply(func, [_this].concat(args))].concat(argsN));
        };
};
exports.default = curry;
//# sourceMappingURL=curry.js.map