"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isFunction = _interopRequireDefault(require("./isFunction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var IO = function IO(effect) {
  var _this = this;

  _classCallCheck(this, IO);

  _defineProperty(this, "map", function (func) {
    return new IO(function () {
      return func(_this.effect());
    });
  });

  _defineProperty(this, "chain", function (func) {
    return func(_this.effect());
  });

  _defineProperty(this, "run", function () {
    return _this.effect();
  });

  if (!(0, _isFunction.default)(effect)) throw 'Invalid parameter passed to IO. Please provide a function.';
  this.effect = effect;
};

exports.default = IO;

_defineProperty(IO, "of", function (val) {
  return new IO(function () {
    return val;
  });
});

_defineProperty(IO, "from", function (fn) {
  return new IO(fn);
});

;