import { ApiEndpoint } from "@banquette/api/api-endpoint";
import { ApiMetadataService } from "@banquette/api/api-metadata.service";
import { Inject } from "@banquette/dependency-injection/decorator/inject.decorator";
import { Module } from "@banquette/dependency-injection/decorator/module.decorator";
import { Injector } from "@banquette/dependency-injection/injector";
import { UsageException } from "@banquette/exception/usage.exception";
import { HttpMethod } from "@banquette/http/constants";
import { HttpRequestFactory } from "@banquette/http/http-request.factory";
import { HttpResponse } from "@banquette/http/http-response";
import { ensureInEnum } from "@banquette/utils-array/ensure-in-enum";
import { proxy } from "@banquette/utils-misc/proxy";
import { isObject } from "@banquette/utils-type/is-object";
import { AutoPayloadSymbol, Ajax } from "@banquette/validation/type/ajax";
import { ValidationResult } from "@banquette/validation/validation-result";
import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { ValidatorComponent } from "../../validator.component";

@Module()
@Component({
    name: 'bt-validate-ajax',
    template: false,
    factory: () => Injector.Get(ValidateAjaxComponent)
})
export default class ValidateAjaxComponent extends ValidatorComponent {
    /**
     * A raw url to call.
     */
    @Prop({type: String, default: null}) public url!: string|null;

    /**
     * An Api endpoint name.
     */
    @Prop({type: String, default: null}) public endpoint!: string|null;

    /**
     * Parameters to add to the url or query.
     */
    @Prop({type: Object, default: {}}) public urlParams!: Record<string, any>;

    /**
     * Http method to use.
     * Only used if no endpoint is defined.
     */
    @Prop({type: String, validate: (value) => ensureInEnum(value, HttpMethod, HttpMethod.POST)}) public method!: HttpMethod;

    /**
     * Name of the property that contains the boolean response in the server's response.
     * If none is defined, the http status is used.
     */
    @Prop({type: String, default: null}) public responseProperty!: string|null;

    public constructor(@Inject(ApiMetadataService) private api: ApiMetadataService) {
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
        }), proxy(this.handleResponse, this), this.message, this.type, this.tags);
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
