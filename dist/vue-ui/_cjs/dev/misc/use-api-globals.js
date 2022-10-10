/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var api_service = require('@banquette/api/_cjs/dev/api.service');
var injector = require('@banquette/dependency-injection/_cjs/dev/injector');
var proxy = require('@banquette/utils-misc/_cjs/dev/proxy');
var vueBuilder = require('@banquette/vue-typescript/_cjs/dev/vue-builder');

function useApiGlobals() {
    var api = injector.Injector.Get(api_service.ApiService);
    /**
     * Global Vue functions for making Api requests.
     */
    vueBuilder.VueBuilder.RegisterGlobalProperty('btApiBuild', proxy.proxy(api.build, api));
    vueBuilder.VueBuilder.RegisterGlobalProperty('btApiSend', proxy.proxy(api.send, api));
    vueBuilder.VueBuilder.RegisterGlobalProperty('btApiGet', proxy.proxy(api.get, api));
    vueBuilder.VueBuilder.RegisterGlobalProperty('btApiPost', proxy.proxy(api.post, api));
    vueBuilder.VueBuilder.RegisterGlobalProperty('btApiPut', proxy.proxy(api.put, api));
    vueBuilder.VueBuilder.RegisterGlobalProperty('btApiPatch', proxy.proxy(api.patch, api));
    vueBuilder.VueBuilder.RegisterGlobalProperty('btApiDelete', proxy.proxy(api.delete, api));
}

exports.useApiGlobals = useApiGlobals;
