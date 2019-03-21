"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _noop = _interopRequireDefault(require("./noop"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Empty = function Empty() {
  _classCallCheck(this, Empty);

  _defineProperty(this, "map", function (_) {
    return (0, _noop.default)();
  });

  _defineProperty(this, "fmap", function (_) {
    return new Empty();
  });

  _defineProperty(this, "toString", function () {
    return "Empty []";
  });
};

exports.default = Empty;
;