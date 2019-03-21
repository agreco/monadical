"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Container =
/*#__PURE__*/
function () {
  function Container(val) {
    var _this = this;

    _classCallCheck(this, Container);

    _defineProperty(this, "map", function (func) {
      return Container.of(func(_this._val));
    });

    _defineProperty(this, "join", function () {
      return !_this._val instanceof Container ? _this : _this._val.join();
    });

    _defineProperty(this, "toString", function () {
      return "Container[".concat(_this._val, "]");
    });

    this._val = val;
  }

  _createClass(Container, [{
    key: "value",
    get: function get() {
      return this._val;
    }
  }]);

  return Container;
}();

exports.default = Container;

_defineProperty(Container, "of", function (val) {
  return new Container(val);
});