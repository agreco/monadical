!function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports);void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define(["require","exports","./curry","./notNil"],e)}(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e("./curry"),r=e("./notNil"),u=o.default(function(e,o){return e.reduce(function(e,t){return r.default(o[t])&&e.push(o[t]),e},[])});t.default=u});