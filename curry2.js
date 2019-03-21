"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var curry2 = function curry2(func) {
  return function (argA) {
    return function (argB) {
      return func(argA, argB);
    };
  };
};

var _default = curry2;
exports.default = _default;