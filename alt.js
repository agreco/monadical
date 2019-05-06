"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var alt = function (funcA, funcB) { return function (val) { return funcA(val) || funcB(val); }; };
exports.default = alt;
//# sourceMappingURL=alt.js.map