<script lang="ts">
import { ApiEndpoint, ApiEndpointStorageService } from "@banquette/api";
import { Inject, Module, Injector } from "@banquette/dependency-injection";
import { UsageException } from "@banquette/exception";
import { HttpMethod, HttpRequestFactory, HttpResponse } from "@banquette/http";
import { ensureInEnum } from "@banquette/utils-array";
import { proxy } from "@banquette/utils-misc";
import { isObject } from "@banquette/utils-type";
import { AutoPayloadSymbol, Ajax, ValidationResult, ValidatorInterface } from "@banquette/validation";
import { Component, Prop } from "@banquette/vue-typescript";
import { PropType } from "vue";
import { BtValidator } from "./validator.component";

@Module()
@Component({
    name: 'bt-validate-ajax',
    factory: () => Injector.Get(BtValidateAjax)
})
export default class BtValidateAjax extends BtValidator {
    /**
     * A raw url to call.
     */
    @Prop({type: String as PropType<string|null>, default: null}) public url!: string|null;

    /**
     * An Api endpoint name.
     */
    @Prop({type: String as PropType<string|null>, default: null}) public endpoint!: string|null;

    /**
     * Parameters to add to the url or query.
     */
    @Prop({type: Object as PropType<Record<string, any>>, default: {}}) public urlParams!: Record<string, any>;

    /**
     * Http method to use.
     * Only used if no endpoint is defined.
     */
    @Prop({type: String as PropType<HttpMethod>, transform: (value) => ensureInEnum(value, HttpMethod, HttpMethod.POST)}) public method!: HttpMethod;

    /**
     * Name of the property that contains the boolean response in the server's response.
     * If none is defined, the http status is used.
     */
    @Prop({type: String as PropType<string|null>, default: null}) public responseProperty!: string|null;

    public constructor(@Inject(ApiEndpointStorageService) private api: ApiEndpointStorageService) {
        super();
    }

    /**
     * @inheritDoc
     */
    protected buildValidator(): ValidatorInterface {
        let endpoint: ApiEndpoint|null = null;
        if (this.endpoint) {
            endpoint = this.api.getEndpoint(this.endpoint);
        } else if (this.url) {
            endpoint = new ApiEndpoint({
                url: this.url,
                method: this.method
            });
        }
        if (!endpoint) {
            throw new UsageException('You must define an endpoint or a url to call.');
        }
        return Ajax(HttpRequestFactory.Create({
            url: endpoint.url,
            method: endpoint.method,
            params: this.urlParams,
            payload: AutoPayloadSymbol
        }), proxy(this.handleResponse, this), {message: this.message, type: this.type, tags: this.tags, groups: this.groups});
    }

    /**
     * Handle the server response.
     */
    private handleResponse(response: HttpResponse<any>, result: ValidationResult): void {
        if (response.isCanceled) {
            return ;
        }
        let valid = response.httpStatusCode === 200 || response.httpStatusCode === 202;
        if (this.responseProperty) {
            valid = isObject(response.result) && !!response.result[this.responseProperty];
        }
        if (!valid) {
            result.addViolation(this.type || 'ajax', this.message);
        }
    }
}
</script>
<template></template>
