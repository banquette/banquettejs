import { ApiEndpoint } from "@banquette/api/api-endpoint";
import { ApiMetadataService } from "@banquette/api/api-metadata.service";
import { Inject } from "@banquette/dependency-injection/decorator/inject.decorator";
import { Module } from "@banquette/dependency-injection/decorator/module.decorator";
import { UsageException } from "@banquette/exception/usage.exception";
import { HttpMethod } from "@banquette/http/constants";
import { HttpRequest } from "@banquette/http/http-request";
import { HttpResponse } from "@banquette/http/http-response";
import { HttpService } from "@banquette/http/http.service";
import { ModelExtendedIdentifier } from "@banquette/model/type";
import { extend } from "@banquette/utils-object/extend";
import { isNonEmptyString } from "@banquette/utils-string/is-non-empty-string";
import { isObject } from "@banquette/utils-type/is-object";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { Primitive } from "@banquette/utils-type/types";
import { ModelApiMetadataService } from "../../model-api-metadata.service";
import { RemoteException } from "./remote.exception";

/**
 * A module dedicated to making http requests.
 *
 * Being a module has the advantage (over a service) of keeping the configuration internally.
 * So it can be configured once and then be easily consumed as many time as needed.
 */
@Module()
export class RemoteModule {
    /**
     * A static url to call.
     */
    public url: string|null = null;

    /**
     * The name of an ApiEndpoint.
     * The behavior of this property depends on the value of the "model" property:
     *
     *   - if "model" is null: the endpoint is fetched from ApiMetadataService,
     *   - if "model" is defined: the endpoint is fetched (for this model) from "ModelApiMetadataService".
     */
    public endpoint: string|null = null;

    /**
     * The HTTP method to use when doing the request.
     * Will be overridden by the endpoint is you're using one.
     */
    public method: HttpMethod = HttpMethod.GET;

    /**
     * A model identifier that will define two things:
     *
     *   - where to find the endpoint in the "ModelApiMetadataService" (if "endpoint" is defined),
     *   - in what type of entity the response should be transformed into.
     */
    public model: ModelExtendedIdentifier|null = null;

    /**
     * The parameters to replace in the url or add in the query string.
     */
    public urlParams!: Record<string, string>;

    /**
     * Last response generated from the send().
     */
    public lastResponse: HttpResponse<any>|null = null;

    /**
     * Check if the module is usable in the current configuration.
     */
    public get isApplicable(): boolean {
        return this.endpoint !== null || this.url !== null;
    }

    /**
     * Check if the module is currently fetching.
     */
    public get pending(): boolean {
        return this.lastResponse !== null && this.lastResponse.isPending;
    }

    /**
     * A map of endpoints generated for static url requests.
     */
    private generatedEndpoints: Record<string, ApiEndpoint> = {};

    public constructor(@Inject(HttpService) private http: HttpService,
                       @Inject(ApiMetadataService) private apiMetadata: ApiMetadataService,
                       @Inject(ModelApiMetadataService) private modelApiMetadata: ModelApiMetadataService) {
    }

    /**
     * Call the server using the current configuration and process the results.
     */
    public send<T = any>(payload?: any, urlParams: Record<string, Primitive> = {}, tags: symbol[] = []): HttpResponse<T> {
        if (this.lastResponse !== null && this.lastResponse.isPending) {
            this.lastResponse.request.cancel();
        }
        const request = this.buildHttpRequest(payload, urlParams);
        request.tags = request.tags.concat(tags);
        this.lastResponse = this.http.send(request);
        this.lastResponse.promise.catch((response: HttpResponse<any>) => {
            // Check `isError` to skip canceled requests.
            if (response.isError && !(response.result instanceof RemoteException)) {
                if (isObject(response.result) && !isUndefined(response.result.exception) && isNonEmptyString(response.result.exception.message)) {
                    response.result = new RemoteException(
                        response.result.exception.type || 'remote',
                        response.result.exception.message
                    );
                }
            }
            // The catch() DOES NOT guarantee an exception in `result`.
            // If none of the checks above matched, we simply let the result as is, the caller will have to deal with it.
            return response;
        });
        return this.lastResponse;
    }

    /**
     * Create an HttpRequest object for the current configuration.
     */
    private buildHttpRequest(payload: any, urlParams: Record<string, Primitive>): HttpRequest {
        let endpoint: ApiEndpoint|null = null;
        if (this.model !== null && this.endpoint !== null) {
            endpoint = this.modelApiMetadata.getEndpoint(this.model, this.endpoint);
        } else if (this.endpoint !== null) {
            endpoint = this.apiMetadata.getEndpoint(this.endpoint);
        }
        if (endpoint === null) {
            if (!this.url) {
                throw new UsageException('You must define either an endpoint of a url.');
            }
            if (isUndefined(this.generatedEndpoints[this.url])) {
                this.generatedEndpoints[this.url] = new ApiEndpoint({
                    url: this.url,
                    method: this.method,
                    parameters: {'*': null}
                });
            }
            endpoint = this.generatedEndpoints[this.url];
        }
        return endpoint.buildRequest(payload || null, this.buildUrlParams(urlParams));
    }

    /**
     * Combine configurable url params with external params into a new object.
     */
    private buildUrlParams(urlParams: Record<string, Primitive>): Record<string, Primitive> {
        return extend({}, [this.urlParams, urlParams]);
    }
}
