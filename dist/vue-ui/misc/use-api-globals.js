/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { ApiService } from '@banquette/api/api.service';
import { Injector } from '@banquette/dependency-injection/injector';
import { proxy } from '@banquette/utils-misc/proxy';
import { VueBuilder } from '@banquette/vue-typescript/vue-builder';

function useApiGlobals() {
    var api = Injector.Get(ApiService);
    /**
     * Global Vue functions for making Api requests.
     */
    VueBuilder.RegisterGlobalProperty('btApiBuild', proxy(api.build, api));
    VueBuilder.RegisterGlobalProperty('btApiSend', proxy(api.send, api));
    VueBuilder.RegisterGlobalProperty('btApiGet', proxy(api.get, api));
    VueBuilder.RegisterGlobalProperty('btApiPost', proxy(api.post, api));
    VueBuilder.RegisterGlobalProperty('btApiPut', proxy(api.put, api));
    VueBuilder.RegisterGlobalProperty('btApiPatch', proxy(api.patch, api));
    VueBuilder.RegisterGlobalProperty('btApiDelete', proxy(api.delete, api));
}

export { useApiGlobals };
