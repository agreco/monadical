"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curry_1 = require("./curry");
const notNil_1 = require("./notNil");
const isEmpty_1 = require("./isEmpty");
const gProp = (paths, obj, defaultVal) => !paths.some(p => !p.length) && notNil_1.default(obj) ? paths.reduce((acc, val) => (acc = notNil_1.default(acc[val]) ? acc[val] : notNil_1.default(defaultVal) ? defaultVal : {}, acc), obj) : void 0;
const getPropOrElse = curry_1.default((path, obj, defaultVal) => gProp(!isEmpty_1.default(path) ? path.split('.') : [''], obj, defaultVal));
exports.default = getPropOrElse;
