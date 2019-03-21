"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var alt = function alt(funcA, funcB) {
  return function (val) {
    return funcA(val) || funcB(val);
  };
};

var _default = alt;
exports.default = _default;