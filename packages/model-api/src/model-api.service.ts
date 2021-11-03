import { Service, Inject } from "@banquette/dependency-injection";
import { HttpRequest, HttpService } from "@banquette/http";
import { TransformService, TransformResult } from "@banquette/model";
import { ApiTransformerSymbol } from "./transformer/root/api";
import { ModelApiMetadataService } from "./model-api-metadata.service";
import { Constructor, isPromiseLike, isType, isUndefined } from "@banquette/utils-type";
import { ApiEndpoint } from "@banquette/api";
import { Not } from "@banquette/utils-misc";
import { ApiResponse } from "./api-response";

@Service()
export class ModelApiService {
    public constructor(@Inject(ModelApiMetadataService) private apiMetadata: ModelApiMetadataService,
                       @Inject(TransformService) private transformService: TransformService,
                       @Inject(HttpService) private httpService: HttpService) {
    }

    /**
     * @inheritDoc
     */
    public buildRequest(modelInstance: object, endpoint: string, parameters: Record<string, string> = {}): HttpRequest|Promise<HttpRequest> {
        const endpointObject = this.apiMetadata.getEndpoint(modelInstance.constructor as Constructor, endpoint);
        const transformResult = this.transformService.transform(modelInstance, ApiTransformerSymbol);
        const buildRequest = (endpoint: ApiEndpoint, payload: any) => {
            for (const prop of Object.keys(payload)) {
                if (!isUndefined(endpoint.parameters[prop]) && isUndefined(parameters[prop])) {
                    parameters[prop] = payload[prop];
                }
            }
            return endpoint.buildRequest(payload, parameters);
        };
        if (transformResult.promise === null) {
            return buildRequest(endpointObject, transformResult.result);
        }
        const transformPromise = transformResult.promise;
        return new Promise<HttpRequest>((resolve, reject) => {
            transformPromise.then((result: TransformResult) => {
                resolve(buildRequest(endpointObject, result.result));
            }).catch(reject);
        });
    }

    /**
     * Send a model to the api.
     */
    public send<T>(modelInstance: object, endpoint: string, parameters: Record<string, string> = {}): ApiResponse<T> {
        const buildRequestResult = this.buildRequest(modelInstance, endpoint, parameters);
        const response = new ApiResponse<T>(buildRequestResult);
        const sendRequest = (request: HttpRequest): ApiResponse<T> => {
            const httpResponse = this.httpService.send<T>(request);
            response.setHttpResponse(httpResponse);
            return response;
        }
        if (isType<HttpRequest>(buildRequestResult, Not(isPromiseLike))) {
            return sendRequest(buildRequestResult);
        }
        buildRequestResult.then((request: HttpRequest) => {
            sendRequest(request);
        });
        return response;
    }
}
