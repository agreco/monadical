"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getPropOrElse_1 = require("./getPropOrElse");
const curry_1 = require("./curry");
const compose_1 = require("./compose");
const notNil_1 = require("./notNil");
const either_1 = require("./either");
const container_1 = require("./container");
const isEmpty_1 = require("./isEmpty");
exports.readVal = curry_1.default((anObject, key) => () => anObject[key]);
exports.writeVal = curry_1.default((anObject, key, z) => () => anObject[key] = z);
exports.visualSideEffect = curry_1.default((info, data) => {
    const debugging = getPropOrElse_1.default('NODE_ENV.debug', process, false);
    if (debugging) {
        console.log(`INFO: ${info}, DATA: ${data}`);
    }
    return data;
});
exports.getProps = curry_1.default((propsArray, anObject) => {
    return propsArray.reduce((acc, val) => {
        if (notNil_1.default(anObject[val])) {
            acc.push(anObject[val]);
        }
        return acc;
    }, []);
});
exports.validLength = curry_1.default((str, len) => str.length === len);
exports.trim = curry_1.default(str => str.trim());
exports.collapse = curry_1.default(str => str.replace(/\-/g, ''));
exports.joiner = curry_1.default((delim, arr) => arr.join(delim));
exports.normalise = compose_1.default(exports.collapse, exports.trim);
exports.notEmpty = curry_1.default(val => !isEmpty_1.default(val));
exports.hasValue = curry_1.default(val => notNil_1.default(val) && exports.notEmpty(val));
exports.extractG = curry_1.default(function* (val) {
    return yield val;
});
exports.chainG = curry_1.default(function* (func, val) {
    return yield container_1.chainC(func, yield val);
});
exports.mapG = curry_1.default(function* (func, val) {
    return yield container_1.mapC(func, yield val);
});
exports.safeHandleErrorG = curry_1.default(function* (operation, val) {
    const result = yield val;
    const { error } = result;
    if (error) {
        yield operation(error);
        return either_1.default.left(result);
    }
    else {
        return either_1.default.right(result);
    }
});
exports.mapToResult = curry_1.default > ((result, val) => result = val);
exports.safeUnpackG = curry_1.default(operation => compose_1.default(exports.extractG(), exports.chainG(exports.safeHandleErrorG(operation)), exports.extractG()));
exports.unpackG = exports.safeUnpackG(curry_1.default(function* (error) {
    yield put(error.requestAction);
    yield put(error.exceptionAction);
}));
