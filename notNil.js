"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notNull_1 = require("./notNull");
const isDefined_1 = require("./isDefined");
const notNil = (val) => notNull_1.default(val) && isDefined_1.default(val);
exports.default = notNil;
