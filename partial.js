"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const partial = (func, ...a) => (...sa) => func.call(this, ...[...a, ...sa]);
exports.default = partial;
