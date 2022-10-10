/*!
 * Banquette Api v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { Injector } from '@banquette/dependency-injection/injector';
import { UsageException } from '@banquette/exception/usage.exception';
import { isConstructor } from '@banquette/utils-type/is-constructor';
import { ApiEndpointStorageService } from '../api-endpoint-storage.service.js';

var metadata = Injector.Get(ApiEndpointStorageService);
function Endpoint(optionsOrName, url, method, params) {
    return function (ctor) {
        if (!isConstructor(ctor)) {
            throw new UsageException('You can only place "@Endpoint()" on a class.');
        }
        metadata.registerEndpoint(optionsOrName, url, method, params, ctor);
    };
}

export { Endpoint };
