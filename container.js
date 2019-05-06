"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var curry_1 = require("./curry");
var Container = (function () {
    function Container(value) {
        this._value = value;
    }
    Container.prototype.get = function () {
        return this._value;
    };
    Container.prototype.map = function (f) {
        return Container.of(f(this._value));
    };
    Container.prototype.join = function () {
        return !(this._value instanceof Container) ? this : this._value.join();
    };
    Container.of = function (value) {
        return new Container(value);
    };
    Container.prototype.toString = function () {
        return "Container[" + this._value + "]";
    };
    return Container;
}());
exports.default = Container;
exports.mapC = curry_1.default(function (f, container) { return container.map(f); });
exports.chainC = curry_1.default(function (f, container) { return container.chain(f); });
exports.getOrElseC = curry_1.default(function (message, container) { return container.getOrElse(message); });
//# sourceMappingURL=container.js.map