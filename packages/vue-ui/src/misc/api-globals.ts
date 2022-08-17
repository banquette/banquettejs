import { ApiService } from "@banquette/api/api.service";
import { Injector } from "@banquette/dependency-injection/injector";
import { proxy } from "@banquette/utils-misc/proxy";
import { VueBuilder } from "@banquette/vue-typescript/vue-builder";

const api = Injector.Get(ApiService);

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
