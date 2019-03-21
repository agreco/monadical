"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _notNull = _interopRequireDefault(require("./notNull"));

var _isDefined = _interopRequireDefault(require("./isDefined"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var notNil = function notNil(val) {
  return (0, _notNull.default)(val) && (0, _isDefined.default)(val);
};

var _default = notNil;
exports.default = _default;