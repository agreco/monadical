module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/either.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/either.js":
/*!***********************!*\
  !*** ./src/either.js ***!
  \***********************/
/*! exports provided: default, Right, Left */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Either; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Right", function() { return Right; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Left", function() { return Left; });
/* harmony import */ var _notNil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notNil */ "./src/notNil.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Either =
/*#__PURE__*/
function () {
  function Either(value) {
    _classCallCheck(this, Either);

    this._value = value;
  }

  _createClass(Either, [{
    key: "value",
    get: function get() {
      return this._value;
    }
  }], [{
    key: "left",
    value: function left(value) {
      return new Left(value);
    }
  }, {
    key: "right",
    value: function right(value) {
      return new Right(value);
    }
  }, {
    key: "of",
    value: function of(value) {
      return Either.right(value);
    }
  }, {
    key: "nullable",
    value: function nullable(value) {
      return Object(_notNil__WEBPACK_IMPORTED_MODULE_0__["default"])(value) ? Either.right(value) : Either.left(value);
    }
  }]);

  return Either;
}();


;
var Right =
/*#__PURE__*/
function (_Either) {
  _inherits(Right, _Either);

  function Right() {
    _classCallCheck(this, Right);

    return _possibleConstructorReturn(this, _getPrototypeOf(Right).apply(this, arguments));
  }

  _createClass(Right, [{
    key: "map",
    value: function map(func) {
      return Either.of(func(this.value));
    }
  }, {
    key: "getOrElse",
    value: function getOrElse(val) {
      return this.value;
    }
  }, {
    key: "orElse",
    value: function orElse() {
      return this;
    }
  }, {
    key: "chain",
    value: function chain(func) {
      return func(this.value);
    }
  }, {
    key: "getOrElseThrow",
    value: function getOrElseThrow(_) {
      this.value;
    }
  }, {
    key: "filter",
    value: function filter(func) {
      return Either.nullable(func(this.value) ? this.value : null);
    }
  }, {
    key: "toString",
    value: function toString() {
      return "Right[".concat(this.value, "]");
    }
  }, {
    key: "isRight",
    get: function get() {
      return true;
    }
  }, {
    key: "isLeft",
    get: function get() {
      return false;
    }
  }]);

  return Right;
}(Either);
var Left =
/*#__PURE__*/
function (_Either2) {
  _inherits(Left, _Either2);

  function Left() {
    _classCallCheck(this, Left);

    return _possibleConstructorReturn(this, _getPrototypeOf(Left).apply(this, arguments));
  }

  _createClass(Left, [{
    key: "map",
    value: function map(_) {
      return this;
    }
  }, {
    key: "getOrElse",
    value: function getOrElse(defaultVal) {
      return defaultVal;
    }
  }, {
    key: "orElse",
    value: function orElse(func) {
      return func(this.value);
    }
  }, {
    key: "chain",
    value: function chain(func) {
      return this;
    }
  }, {
    key: "getOrElseThrow",
    value: function getOrElseThrow(val) {
      throw new Error(val);
    }
  }, {
    key: "filter",
    value: function filter(func) {
      return this;
    }
  }, {
    key: "toString",
    value: function toString() {
      return "Left[".concat(this.value, "]");
    }
  }, {
    key: "value",
    get: function get() {
      throw new TypeError("Value extraction invalid for type Left[A].");
    }
  }, {
    key: "isRight",
    get: function get() {
      return false;
    }
  }, {
    key: "isLeft",
    get: function get() {
      return true;
    }
  }]);

  return Left;
}(Either);

/***/ }),

/***/ "./src/isDefined.js":
/*!**************************!*\
  !*** ./src/isDefined.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isDefined = function isDefined(val) {
  return val !== undefined;
};

/* harmony default export */ __webpack_exports__["default"] = (isDefined);

/***/ }),

/***/ "./src/notNil.js":
/*!***********************!*\
  !*** ./src/notNil.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notNull__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notNull */ "./src/notNull.js");
/* harmony import */ var _isDefined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isDefined */ "./src/isDefined.js");



var notNil = function notNil(val) {
  return Object(_notNull__WEBPACK_IMPORTED_MODULE_0__["default"])(val) && Object(_isDefined__WEBPACK_IMPORTED_MODULE_1__["default"])(val);
};

/* harmony default export */ __webpack_exports__["default"] = (notNil);

/***/ }),

/***/ "./src/notNull.js":
/*!************************!*\
  !*** ./src/notNull.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var notNull = function notNull(val) {
  return val !== null;
};

/* harmony default export */ __webpack_exports__["default"] = (notNull);

/***/ })

/******/ });
//# sourceMappingURL=either.js.map