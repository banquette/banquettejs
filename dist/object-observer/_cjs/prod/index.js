/*!
 * Banquette ObjectObserver v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./observer/array.observer.js"),r=require("./observer/object.observer.js"),t=require("./observer.factory.js"),s=require("./observer/typed-array.observer.js"),o=require("./constant.js"),v=require("./event/mutation.event.js"),n=require("./event/mutations-collection.event.js");t.ObserverFactory.RegisterObserver(e.ArrayObserver),t.ObserverFactory.RegisterObserver(s.TypedArrayObserver),t.ObserverFactory.RegisterObserver(r.ObjectObserver),exports.ObserverFactory=t.ObserverFactory,Object.defineProperty(exports,"MutationType",{enumerable:!0,get:function(){return o.MutationType}}),exports.MutationEvent=v.MutationEvent,exports.MutationsCollectionEvent=n.MutationsCollectionEvent;
