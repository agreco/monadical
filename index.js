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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/alt.js":
/*!********************!*\
  !*** ./src/alt.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var alt = function alt(funcA, funcB) {
  return function (val) {
    return funcA(val) || funcB(val);
  };
};

/* harmony default export */ __webpack_exports__["default"] = (alt);

/***/ }),

/***/ "./src/compose.js":
/*!************************!*\
  !*** ./src/compose.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (compose);

/***/ }),

/***/ "./src/container.js":
/*!**************************!*\
  !*** ./src/container.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Container; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Container =
/*#__PURE__*/
function () {
  function Container(value) {
    _classCallCheck(this, Container);

    this._value = value;
  }

  _createClass(Container, [{
    key: "map",
    value: function map(f) {
      return f(this._value);
    }
  }, {
    key: "fmap",
    value: function fmap(f) {
      return new Container(f(this._value));
    }
  }, {
    key: "join",
    value: function join() {
      return !(this._value instanceof Container) ? this : this._value.join();
    }
  }, {
    key: "toString",
    value: function toString() {
      return "Container[".concat(this._value, "]");
    }
  }, {
    key: "value",
    get: function get() {
      return this._value;
    }
  }], [{
    key: "of",
    value: function of(value) {
      return new Container(value);
    }
  }]);

  return Container;
}();



/***/ }),

/***/ "./src/curry.js":
/*!**********************!*\
  !*** ./src/curry.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _this = undefined;

var curry = function curry(func) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return args.length >= func.length ? func.call.apply(func, [_this].concat(args)) : function () {
    for (var _len2 = arguments.length, argsN = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      argsN[_key2] = arguments[_key2];
    }

    return curry.apply(void 0, [func.bind.apply(func, [_this].concat(args))].concat(argsN));
  };
};

/* harmony default export */ __webpack_exports__["default"] = (curry);

/***/ }),

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

/***/ "./src/empty.js":
/*!**********************!*\
  !*** ./src/empty.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Empty; });
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noop */ "./src/noop.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Empty =
/*#__PURE__*/
function () {
  function Empty() {
    _classCallCheck(this, Empty);

    _defineProperty(this, "map", function (_) {
      return Object(_noop__WEBPACK_IMPORTED_MODULE_0__["default"])();
    });

    _defineProperty(this, "fmap", function (_) {
      return new Empty();
    });
  }

  _createClass(Empty, [{
    key: "toString",
    value: function toString() {
      return 'Empty[]';
    }
  }]);

  return Empty;
}();


;

/***/ }),

/***/ "./src/identity.js":
/*!*************************!*\
  !*** ./src/identity.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var identity = function identity(value) {
  return value;
};

/* harmony default export */ __webpack_exports__["default"] = (identity);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: alt, compose, Container, curry, Either, Empty, identity, IO, isDefined, isFunction, Just, Left, Maybe, noop, Nothing, notNil, notNull, pipe, Right, seq */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alt */ "./src/alt.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alt", function() { return _alt__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compose */ "./src/compose.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return _compose__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container */ "./src/container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return _container__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./curry */ "./src/curry.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curry", function() { return _curry__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _either__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./either */ "./src/either.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Either", function() { return _either__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./empty */ "./src/empty.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Empty", function() { return _empty__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./identity */ "./src/identity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return _identity__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./io */ "./src/io.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IO", function() { return _io__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _isDefined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./isDefined */ "./src/isDefined.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return _isDefined__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./isFunction */ "./src/isFunction.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _isFunction__WEBPACK_IMPORTED_MODULE_9__["default"]; });

!(function webpackMissingModule() { var e = new Error("Cannot find module './just'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
throw new Error("Cannot find module './just'");
!(function webpackMissingModule() { var e = new Error("Cannot find module './left'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
throw new Error("Cannot find module './left'");
/* harmony import */ var _maybe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./maybe */ "./src/maybe.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Maybe", function() { return _maybe__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./noop */ "./src/noop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return _noop__WEBPACK_IMPORTED_MODULE_12__["default"]; });

!(function webpackMissingModule() { var e = new Error("Cannot find module './nothing'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
throw new Error("Cannot find module './nothing'");
/* harmony import */ var _notNil__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./notNil */ "./src/notNil.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notNil", function() { return _notNil__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _notNull__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./notNull */ "./src/notNull.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notNull", function() { return _notNull__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipe */ "./src/pipe.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return _pipe__WEBPACK_IMPORTED_MODULE_15__["default"]; });

!(function webpackMissingModule() { var e = new Error("Cannot find module './right'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
throw new Error("Cannot find module './right'");
/* harmony import */ var _seq__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./seq */ "./src/seq.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "seq", function() { return _seq__WEBPACK_IMPORTED_MODULE_16__["default"]; });























/***/ }),

/***/ "./src/io.js":
/*!*******************!*\
  !*** ./src/io.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IO; });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ "./src/isFunction.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var IO =
/*#__PURE__*/
function () {
  function IO(effect) {
    _classCallCheck(this, IO);

    if (!Object(_isFunction__WEBPACK_IMPORTED_MODULE_0__["default"])(effect)) throw 'Invalid parameter passed to IO. Please provide a function.';
    this.effect = effect;
  }

  _createClass(IO, [{
    key: "map",
    value: function map(func) {
      var _this = this;

      return new IO(function () {
        return func(_this.effect());
      });
    }
  }, {
    key: "chain",
    value: function chain(func) {
      return func(this.effect());
    }
  }, {
    key: "run",
    value: function run() {
      return this.effect();
    }
  }], [{
    key: "of",
    value: function of(val) {
      return new IO(function () {
        return val;
      });
    }
  }, {
    key: "from",
    value: function from(fn) {
      return new IO(fn);
    }
  }]);

  return IO;
}();


;

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

/***/ "./src/isFunction.js":
/*!***************************!*\
  !*** ./src/isFunction.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isFunction = function isFunction(obj) {
  return !!(obj && obj.constructor && obj.call && obj.apply);
};

/* harmony default export */ __webpack_exports__["default"] = (isFunction);

/***/ }),

/***/ "./src/maybe.js":
/*!**********************!*\
  !*** ./src/maybe.js ***!
  \**********************/
/*! exports provided: default, Just, Nothing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Maybe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Just", function() { return Just; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nothing", function() { return Nothing; });
/* harmony import */ var _notNull__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notNull */ "./src/notNull.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



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
  }], [{
    key: "just",
    value: function just(val) {
      return new Just(val);
    }
  }, {
    key: "nothing",
    value: function nothing() {
      return new Nothing();
    }
  }, {
    key: "of",
    value: function of(val) {
      return Maybe.just(val);
    }
  }, {
    key: "nullable",
    value: function nullable(val) {
      return Object(_notNull__WEBPACK_IMPORTED_MODULE_0__["default"])(val) ? Maybe.just(val) : Maybe.nothing();
    }
  }]);

  return Maybe;
}();


var Just =
/*#__PURE__*/
function (_Maybe) {
  _inherits(Just, _Maybe);

  function Just(value) {
    var _this;

    _classCallCheck(this, Just);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Just).call(this));
    _this._value = value;
    return _this;
  }

  _createClass(Just, [{
    key: "map",
    value: function map(func) {
      return Maybe.nullable(func(this._value));
    }
  }, {
    key: "chain",
    value: function chain(func) {
      return func(this._value);
    }
  }, {
    key: "getOrElse",
    value: function getOrElse() {
      return this._value;
    }
  }, {
    key: "filter",
    value: function filter(func) {
      Maybe.nullable(func(this._value) ? this._value : null);
    }
  }, {
    key: "toString",
    value: function toString() {
      return "Just[".concat(this._value, "]");
    }
  }, {
    key: "value",
    get: function get() {
      return this._value;
    }
  }, {
    key: "isJust",
    get: function get() {
      return true;
    }
  }]);

  return Just;
}(Maybe);
var Nothing =
/*#__PURE__*/
function (_Maybe2) {
  _inherits(Nothing, _Maybe2);

  function Nothing() {
    _classCallCheck(this, Nothing);

    return _possibleConstructorReturn(this, _getPrototypeOf(Nothing).call(this));
  }

  _createClass(Nothing, [{
    key: "map",
    value: function map(func) {
      return this;
    }
  }, {
    key: "chain",
    value: function chain(func) {
      return this;
    }
  }, {
    key: "getOrElse",
    value: function getOrElse(val) {
      return val;
    }
  }, {
    key: "filter",
    value: function filter() {
      return this._val;
    }
  }, {
    key: "toString",
    value: function toString() {
      return 'Nothing[]';
    }
  }, {
    key: "value",
    get: function get() {
      throw new TypeError('Value extraction invalid for type Nothing[].');
    }
  }, {
    key: "isNothing",
    get: function get() {
      return true;
    }
  }]);

  return Nothing;
}(Maybe);

/***/ }),

/***/ "./src/noop.js":
/*!*********************!*\
  !*** ./src/noop.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var noop = function noop() {};

/* harmony default export */ __webpack_exports__["default"] = (noop);

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

/***/ }),

/***/ "./src/pipe.js":
/*!*********************!*\
  !*** ./src/pipe.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var pipe = function pipe() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return fns.reduce(function (f, g) {
    return function () {
      return f(g.apply(void 0, arguments));
    };
  });
};

/* harmony default export */ __webpack_exports__["default"] = (pipe);

/***/ }),

/***/ "./src/seq.js":
/*!********************!*\
  !*** ./src/seq.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (seq);

/***/ })

/******/ });
//# sourceMappingURL=index.js.map