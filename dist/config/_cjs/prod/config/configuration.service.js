/*!
 * Banquette Config v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../_virtual/_tslib.js"),t=require("@banquette/dependency-injection/_cjs/prod/decorator/service.decorator"),i=require("@banquette/exception/_cjs/prod/usage.exception"),n=require("@banquette/utils-object/_cjs/prod/extend"),r=require("@banquette/utils-object/_cjs/prod/get-symbol-description"),o=require("@banquette/utils-type/_cjs/prod/ensure-array"),s=require("@banquette/utils-type/_cjs/prod/is-object"),u=require("@banquette/utils-type/_cjs/prod/is-string"),a=require("@banquette/utils-type/_cjs/prod/is-symbol"),c=require("@banquette/utils-type/_cjs/prod/is-undefined"),g=function(){function ConfigurationService(){this.symbolMap={},this.stringMap={}}return ConfigurationService.prototype.get=function(e,t){return void 0===t&&(t=null),a.isSymbol(e)?n.extend({},this.getBySymbol(e),!0):this.getByString(e,t)},ConfigurationService.prototype.modify=function(e,t){var i=n.extend(this.get(e),t,!0),o=r.getSymbolDescription(e);return this.symbolMap[e]=i,o&&(this.stringMap[o]=i),i},ConfigurationService.prototype.register=function(e,t,n){void 0===n&&(n=!1);var o=r.getSymbolDescription(e);if(n){if(!o)throw new i.UsageException("You must give a description to your symbol if you make the configuration available by string.");if(!c.isUndefined(this.stringMap[o]))throw new i.UsageException('Another symbol with the description "'.concat(o,'" already exists. ')+"This configuration will not be accessible by string.");this.stringMap[o]=t}this.symbolMap[e]=t},ConfigurationService.prototype.getBySymbol=function(e){var t=this.symbolMap[e]||null;if(null===t)throw new i.UsageException('No config found for "'.concat(e.toString(),'".'));return n.extend({},t)},ConfigurationService.prototype.getByString=function(e,t){void 0===t&&(t=null);for(var r=u.isString(e)?e.split("."):o.ensureArray(e),a=this.stringMap,g=0;g<r.length;++g){if(c.isUndefined(a[r[g]])||!s.isObject(a[r[g]])&&g<r.length-1){if(0===g&&c.isUndefined(a[r[g]]))throw new i.UsageException('No config found for "'.concat(r[g],'".'));return t}a=a[r[g]]}return g?a:n.extend({},a)},ConfigurationService=e.__decorate([t.Service()],ConfigurationService)}();exports.ConfigurationService=g;
