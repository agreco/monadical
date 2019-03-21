"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var compose = function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return fns.reduceRight(function (f, g) {
    return function () {
      return f(g.apply(void 0, arguments));
    };
  });
};

var _default = compose;
exports.default = _default;