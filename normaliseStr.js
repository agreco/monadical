!function(e){if("object"==typeof module&&"object"==typeof module.exports){var o=e(require,exports);void 0!==o&&(module.exports=o)}else"function"==typeof define&&define.amd&&define(["require","exports","./index","./compose"],e)}(function(e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var t=e("./index"),i=e("./compose");o.default=function(e){return i.default(t.collapse(e),t.trim)}});