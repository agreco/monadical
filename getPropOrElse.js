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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/getPropOrElse.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./src/getPropOrElse.js":
/*!******************************!*\
  !*** ./src/getPropOrElse.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry */ "./src/curry.js");
/* harmony import */ var _notNil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notNil */ "./src/notNil.js");



var gProp = function gProp(paths, obj, defaultVal) {
  return !paths.some(function (p) {
    return !p.length;
  }) && Object(_notNil__WEBPACK_IMPORTED_MODULE_1__["default"])(obj) ? paths.reduce(function (acc, val) {
    return acc = Object(_notNil__WEBPACK_IMPORTED_MODULE_1__["default"])(acc[val]) ? acc[val] : Object(_notNil__WEBPACK_IMPORTED_MODULE_1__["default"])(defaultVal) ? defaultVal : {}, acc;
  }, obj) : void 0;
};

var getPropOrElse = Object(_curry__WEBPACK_IMPORTED_MODULE_0__["default"])(function (path, obj, defaultVal) {
  return gProp(Object(_notNil__WEBPACK_IMPORTED_MODULE_1__["default"])(path) ? path.split('.') : [''], obj, defaultVal);
});
/* harmony default export */ __webpack_exports__["default"] = (getPropOrElse);

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
//# sourceMappingURL=getPropOrElse.js.map