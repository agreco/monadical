"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var curry_1=require("./curry"),notNil_1=require("./notNil"),getProps=curry_1.default(function(e,t){return e.reduce(function(e,r){return notNil_1.default(t[r])&&e.push(t[r]),e},[])});exports.default=getProps;