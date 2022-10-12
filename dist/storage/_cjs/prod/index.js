/*!
 * Banquette Storage v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./adapter/abstract.adapter.js"),r=require("./adapter/cookies.adapter.js"),t=require("./adapter/local-storage.adapter.js"),a=require("./adapter/memory.adapter.js"),o=require("./exception/no-adapter-available.exception.js"),s=require("./event/storage-clear.event.js"),p=require("./event/storage-key-change.event.js"),n=require("./config.js"),i=require("./constant.js"),g=require("./constants.js"),d=require("./storage.service.js");exports.AbstractAdapter=e.AbstractAdapter,exports.CookiesAdapter=r.CookiesAdapter,exports.LocalStorageAdapter=t.LocalStorageAdapter,exports.MemoryAdapter=a.MemoryAdapter,exports.NoAdapterAvailableException=o.NoAdapterAvailableException,exports.StorageClearEvent=s.StorageClearEvent,exports.StorageKeyChangeEvent=p.StorageKeyChangeEvent,exports.StorageConfigurationSymbol=n.StorageConfigurationSymbol,exports.StorageAdapterTag=i.StorageAdapterTag,exports.StorageEvents=i.StorageEvents,exports.Constants=g.Constants,exports.StorageService=d.StorageService;
