"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var isFunction = function isFunction(obj) {
  return !!(obj && obj.constructor && obj.call && obj.apply);
};

var _default = isFunction;
exports.default = _default;