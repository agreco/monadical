"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var curry = function curry(func) {
  return function (argA) {
    return function (argB) {
      return func(argA, argB);
    };
  };
};

var _default = curry;
exports.default = _default;