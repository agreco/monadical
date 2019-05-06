"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isFunction_1 = require("./isFunction");
var IO = (function () {
    function IO(effect) {
        if (!isFunction_1.default(effect)) {
            throw new TypeError('Invalid parameter passed to IO. Please provide a function.');
        }
        this.effect = effect;
    }
    IO.prototype.map = function (func) {
        var _this = this;
        return new IO(function () { return func(_this.effect()); });
    };
    IO.prototype.chain = function (func) {
        return func(this.effect());
    };
    IO.prototype.run = function () {
        return this.effect();
    };
    IO.of = function (val) {
        return new IO(function () { return val; });
    };
    IO.from = function (func) {
        return new IO(func);
    };
    IO.lift = function (val) {
        return IO.of(val);
    };
    return IO;
}());
exports.default = IO;
//# sourceMappingURL=io.js.map