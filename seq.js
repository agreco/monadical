"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var seq = function seq() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return function (val) {
    return funcs.forEach(function (fn) {
      return fn(val);
    });
  };
};

var _default = seq;
exports.default = _default;