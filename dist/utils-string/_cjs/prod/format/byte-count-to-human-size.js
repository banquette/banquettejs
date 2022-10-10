/*!
 * Banquette UtilsString v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.byteCountToHumanSize=function byteCountToHumanSize(e,i){void 0===i&&(i=!0);var t=i?1e3:1024;if(Math.abs(e)<t)return e+" B";var B=i?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],o=-1;do{e/=t,++o}while(Math.abs(e)>=t&&o<B.length-1);return e.toFixed(1)+" "+B[o]};
