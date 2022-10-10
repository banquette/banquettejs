/*!
 * Banquette Storage v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./adapter/abstract.adapter.js"),r=require("./adapter/cookies.adapter.js"),t=require("./adapter/local-storage.adapter.js"),a=require("./exception/no-adapter-available.exception.js"),o=require("./event/storage-clear.event.js"),s=require("./event/storage-key-change.event.js"),p=require("./config.js"),n=require("./constant.js"),i=require("./constants.js"),g=require("./storage.service.js");exports.AbstractAdapter=e.AbstractAdapter,exports.CookiesAdapter=r.CookiesAdapter,exports.LocalStorageAdapter=t.LocalStorageAdapter,exports.NoAdapterAvailableException=a.NoAdapterAvailableException,exports.StorageClearEvent=o.StorageClearEvent,exports.StorageKeyChangeEvent=s.StorageKeyChangeEvent,exports.StorageConfigurationSymbol=p.StorageConfigurationSymbol,exports.StorageAdapterTag=n.StorageAdapterTag,exports.StorageEvents=n.StorageEvents,exports.Constants=i.Constants,exports.StorageService=g.StorageService;
