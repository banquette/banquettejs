/*!
 * Banquette Model v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { Injector } from '@banquette/dependency-injection/injector';
import { ModelMetadataService } from '../model-metadata.service.js';

var metadata = Injector.Get(ModelMetadataService);
function Alias(alias) {
    return function (ctor) {
        metadata.registerAlias(ctor, alias);
    };
}

export { Alias };
