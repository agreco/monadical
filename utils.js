"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getPropOrElse_1 = require("./getPropOrElse");
var curry_1 = require("./curry");
var compose_1 = require("./compose");
var notNil_1 = require("./notNil");
exports.readVal = curry_1.default(function (anObject, key) { return function () { return anObject[key]; }; });
exports.writeVal = curry_1.default(function (anObject, key, z) { return function () { return anObject[key] = z; }; });
exports.visualSideEffect = curry_1.default(function (info, data) {
    var debugging = getPropOrElse_1.default('NODE_ENV.debug', process, false);
    if (debugging) {
        console.log("INFO: " + info + ", DATA: " + data);
    }
    return data;
});
exports.getProps = curry_1.default(function (propsArray, anObject) {
    return propsArray.reduce(function (acc, val) {
        if (notNil_1.default(anObject[val])) {
            acc.push(anObject[val]);
        }
        return acc;
    }, []);
});
exports.validLength = function (str, len) { return str.length === len; };
exports.trim = function (str) { return str.trim(); };
exports.collapse = function (str) { return str.replace(/\-/g, ''); };
exports.joiner = function (arr) { return arr.join(','); };
exports.normailse = compose_1.default(exports.collapse, exports.trim);
//# sourceMappingURL=utils.js.map