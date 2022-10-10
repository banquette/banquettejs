/*!
 * Banquette UtilsRandom v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var r=require("@banquette/utils-type/_cjs/prod/is-string"),e=require("./random-int.js"),t={ALPHA:"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",ALPHANUMERIC:"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",ALPHANUMERIC_SIMPLIFIED:"abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ123456789",BASE_64:"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/",COMPLEX:"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/$^-_.(){}:<>?,;|[]*%#+!@~=",HEXADECIMAL:"abcdef0123456789",NUMERIC:"0123456789"};exports.ALPHABETS=t,exports.randomString=function randomString(n,i){if(void 0===i&&(i=t.ALPHANUMERIC),n<1||!r.isString(i))return"";for(var A="",o=0;o<n;o++)A+=i[e.randomInt(0,i.length-1)];return A};
