"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curry_1 = require("./curry");
const notNil_1 = require("./notNil");
const isBoolean_1 = require("./isBoolean");
const isNumber_1 = require("./isNumber");
const isNaN_1 = require("./isNaN");
const isFunction_1 = require("./isFunction");
const isString_1 = require("./isString");
const isObject_1 = require("./isObject");
const isArray_1 = require("./isArray");
const isMap_1 = require("./isMap");
const isSet_1 = require("./isSet");
const isEmpty = curry_1.default((val) => {
    return !notNil_1.default(val)
        || isBoolean_1.default(val)
        || isNumber_1.default(val)
        || isNaN_1.default(val)
        || isFunction_1.default(val)
        || isString_1.default(val) && val === ''
        || isObject_1.default(val) && (Object.keys(val)).length === 0
        || isArray_1.default(val) && val.length === 0
        || isMap_1.default(val) && val.size === 0
        || isSet_1.default(val) && val.size === 0;
});
exports.default = isEmpty;
