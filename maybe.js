"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var notNil_1 = require("./notNil");
var Maybe = (function () {
    function Maybe() {
        this._value = void 0;
    }
    Object.defineProperty(Maybe.prototype, "isNothing", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Maybe.prototype, "isJust", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Maybe.just = function (val) {
        return new Just(val);
    };
    Maybe.nothing = function (val) {
        return new Nothing();
    };
    Maybe.of = function (val) {
        return Maybe.just(val);
    };
    Maybe.nullable = function (val) {
        return notNil_1.default(val) ? Maybe.just(val) : Maybe.nothing(val);
    };
    return Maybe;
}());
exports.default = Maybe;
var Just = (function (_super) {
    __extends(Just, _super);
    function Just(value) {
        var _this = _super.call(this) || this;
        _this._value = value;
        return _this;
    }
    Object.defineProperty(Just.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    Just.prototype.map = function (func) {
        return Maybe.nullable(func(this._value));
    };
    Just.prototype.chain = function (func) {
        return func(this._value);
    };
    Just.prototype.getOrElse = function (val) {
        return this._value;
    };
    Just.prototype.filter = function (func) {
        return Maybe.nullable(func(this._value) ? this._value : null);
    };
    Object.defineProperty(Just.prototype, "isJust", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Just.prototype.toString = function () {
        return "Just[" + this._value + "]";
    };
    return Just;
}(Maybe));
exports.Just = Just;
var Nothing = (function (_super) {
    __extends(Nothing, _super);
    function Nothing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Nothing.prototype, "value", {
        get: function () {
            throw new TypeError('Value extraction invalid for type Nothing[].');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Nothing.prototype, "isNothing", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Nothing.prototype.map = function (func) {
        return this;
    };
    Nothing.prototype.chain = function (func) {
        return this;
    };
    Nothing.prototype.getOrElse = function (val) {
        return val;
    };
    Nothing.prototype.filter = function (func) {
        return this._value;
    };
    Nothing.prototype.toString = function () {
        return 'Nothing[]';
    };
    return Nothing;
}(Maybe));
exports.Nothing = Nothing;
//# sourceMappingURL=maybe.js.map