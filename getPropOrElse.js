"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var curry_1 = require("./curry");
var notNil_1 = require("./notNil");
var gProp = function (paths, obj, defaultVal) {
    return !paths.some(function (p) { return !p.length; }) && notNil_1.default(obj) ? paths.reduce(function (acc, val) { return (acc = notNil_1.default(acc[val]) ? acc[val] : notNil_1.default(defaultVal) ? defaultVal : {}, acc); }, obj) : void 0;
};
var getPropOrElse = curry_1.default(function (path, obj, defaultVal) {
    return gProp(notNil_1.default(path) ? path.split('.') : [''], obj, defaultVal);
});
exports.default = getPropOrElse;
//# sourceMappingURL=getPropOrElse.js.map