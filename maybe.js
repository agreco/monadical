"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _notNull = _interopRequireDefault(require("./notNull"));

var _just = _interopRequireDefault(require("./just"));

var _nothing = _interopRequireDefault(require("./nothing"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Maybe =
/*#__PURE__*/
function () {
  function Maybe() {
    _classCallCheck(this, Maybe);
  }

  _createClass(Maybe, [{
    key: "isNothing",
    get: function get() {
      return false;
    }
  }, {
    key: "isJust",
    get: function get() {
      return false;
    }
  }]);

  return Maybe;
}();

exports.default = Maybe;

_defineProperty(Maybe, "just", function (val) {
  return new _just.default(val);
});

_defineProperty(Maybe, "nothing", function () {
  return new _nothing.default();
});

_defineProperty(Maybe, "nullable", function (val) {
  return (0, _notNull.default)(val) ? Maybe.just(val) : Maybe.nothing();
});

_defineProperty(Maybe, "of", function (val) {
  return Maybe.just(val);
});

;