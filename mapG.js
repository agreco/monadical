!function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports);void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define(["require","exports","./curry","./mapC"],e)}(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e("./curry"),r=e("./mapC"),u=o.default(function(e,t){return r.default(e,t.next?t.next().value:t)});t.default=u});