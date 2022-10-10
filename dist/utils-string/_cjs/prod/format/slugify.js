/*!
 * Banquette UtilsString v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./remove-accents.js");exports.slugify=function slugify(r){return e.removeAccents(String(r)).toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"-").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")};
