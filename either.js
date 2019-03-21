"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _notNil = _interopRequireDefault(require("./notNil"));

var _left = _interopRequireDefault(require("./left"));

var _right = _interopRequireDefault(require("./right"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Either =
/*#__PURE__*/
function () {
  function Either(val) {
    _classCallCheck(this, Either);

    this._val = val;
  }

  _createClass(Either, [{
    key: "value",
    get: function get() {
      return this._val;
    }
  }]);

  return Either;
}();

exports.default = Either;

_defineProperty(Either, "left", function (val) {
  return new _left.default(val);
});

_defineProperty(Either, "right", function (val) {
  return new _right.default(val);
});

_defineProperty(Either, "nullable", function (val) {
  return (0, _notNil.default)(val) ? Either.right(val) : Either.left(val);
});

_defineProperty(Either, "of", function (val) {
  return Either.right(val);
});

;