/*!
 * Banquette ObjectObserver v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e,t={ChangedSync:Symbol("changed-sync"),ChangedAsync:Symbol("changed-async")};exports.MutationType=void 0,(e=exports.MutationType||(exports.MutationType={}))[e.Insert=1]="Insert",e[e.Update=2]="Update",e[e.Delete=4]="Delete",e[e.Reverse=8]="Reverse",e[e.Sort=16]="Sort";exports.ObserverEvents=t,exports.ObserverInstance="__bt_observer";
