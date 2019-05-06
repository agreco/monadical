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
var Either = (function () {
    function Either(value) {
        this._value = value;
    }
    Object.defineProperty(Either.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    Either.left = function (value) {
        return new Left(value);
    };
    Either.right = function (value) {
        return new Right(value);
    };
    Either.of = function (value) {
        return Either.right(value);
    };
    Either.nullable = function (value) {
        return notNil_1.default(value) ? Either.right(value) : Either.left(value);
    };
    return Either;
}());
exports.default = Either;
;
var Right = (function (_super) {
    __extends(Right, _super);
    function Right() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Right.prototype, "isRight", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Right.prototype, "isLeft", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Right.prototype.map = function (func) {
        return Either.of(func(this._value));
    };
    Right.prototype.getOrElse = function (val) {
        return this._value;
    };
    Right.prototype.orElse = function () {
        return this;
    };
    Right.prototype.chain = function (func) {
        return func(this._value);
    };
    Right.prototype.getOrElseThrow = function (_) {
        return this._value;
    };
    Right.prototype.filter = function (func) {
        return Either.nullable(func(this._value) ? this._value : null);
    };
    Right.prototype.toString = function () {
        return "Right[" + this._value + "]";
    };
    return Right;
}(Either));
exports.Right = Right;
var Left = (function (_super) {
    __extends(Left, _super);
    function Left() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Left.prototype, "value", {
        get: function () {
            throw new TypeError("Value extraction invalid for type Left[U].");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Left.prototype, "isRight", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Left.prototype, "isLeft", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Left.prototype.map = function (_) {
        return this;
    };
    Left.prototype.getOrElse = function (defaultVal) {
        return defaultVal;
    };
    Left.prototype.orElse = function (func) {
        return func(this._value);
    };
    Left.prototype.chain = function (func) {
        return this;
    };
    Left.prototype.getOrElseThrow = function (val) {
        throw new Error(val);
    };
    Left.prototype.filter = function (func) {
        return this;
    };
    Left.prototype.toString = function () {
        return "Left[" + this._value + "]";
    };
    return Left;
}(Either));
exports.Left = Left;
//# sourceMappingURL=either.js.map