/*!
 * Banquette DomModules v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../_virtual/_tslib.js"),t=require("@banquette/dependency-injection/_cjs/prod/decorator/inject.decorator"),r=require("@banquette/utils-misc/_cjs/prod/throttle"),o=require("../abstract.dom-module.js"),n=require("../decorator/dom-module.decorator.js"),s=require("../dom-modules-scanner.js"),i=function(o){function Watcher(e){var t=o.call(this)||this;return t.scanner=e,t.observer=null,t}return e.__extends(Watcher,o),Watcher.prototype.bind=function(){var e=this;o.prototype.bind.call(this),this.observer=new MutationObserver(r.throttle((function(){e.scanner.scan()}),500)),this.observer.observe(this.element,{childList:!0,attributes:!1,subtree:!0})},Watcher.prototype.unbind=function(){o.prototype.unbind.call(this),null!==this.observer&&this.observer.disconnect()},Watcher=e.__decorate([n.DomModule("watcher"),e.__param(0,t.Inject(s.DomModulesScannerService)),e.__metadata("design:paramtypes",[s.DomModulesScannerService])],Watcher)}(o.AbstractDomModule);exports.Watcher=i;
