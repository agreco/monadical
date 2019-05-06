"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var noop_1 = require("./noop");
var Empty = (function () {
    function Empty() {
    }
    Empty.prototype.map = function (_) {
        return noop_1.default();
    };
    Empty.prototype.fmap = function (_) {
        return new Empty();
    };
    Empty.prototype.toString = function () {
        return 'Empty[]';
    };
    return Empty;
}());
exports.default = Empty;
//# sourceMappingURL=empty.js.map