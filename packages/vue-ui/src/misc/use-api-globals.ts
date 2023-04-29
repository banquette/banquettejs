import { ApiService } from "@banquette/api";
import { Injector } from "@banquette/dependency-injection";
import { proxy } from "@banquette/utils-misc";
import { VueBuilder } from "@banquette/vue-typescript";

export const useApiGlobals = /**!PURE*/ ((_) => {
    return () => {
        const api = /**!PURE*/  Injector.Get(_);
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
    };
})(ApiService);
