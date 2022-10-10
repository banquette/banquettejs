/*!
 * Banquette Ui v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-type/_cjs/prod/is-array");exports.isPaginatedServerResponseInterface=function isPaginatedServerResponseInterface(r){return e.isArray(r.items)&&"total"in r&&"itemsPerPage"in r&&("page"in r||"pageId"in r)};
