"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var notNull_1 = require("./notNull");
var isDefined_1 = require("./isDefined");
var notNil = function (val) { return notNull_1.default(val) && isDefined_1.default(val); };
exports.default = notNil;
//# sourceMappingURL=notNil.js.map