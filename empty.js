"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Empty = (function () {
    function Empty() {
    }
    Empty.prototype.map = function (_) {
        return this;
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