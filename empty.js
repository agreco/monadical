"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Empty {
    map(_) {
        return this;
    }
    fmap(_) {
        return new Empty();
    }
    toString() {
        return 'Empty[]';
    }
}
exports.default = Empty;
