import { Inject } from "@banquette/dependency-injection/decorator/inject.decorator";
import { Service } from "@banquette/dependency-injection/decorator/service.decorator";
import { HttpRequest } from "@banquette/http/http-request";
import { HttpService } from "@banquette/http/http.service";
import { TransformResult } from "@banquette/model/transform-result";
import { TransformService } from "@banquette/model/transformer/transform.service";
import { Not } from "@banquette/utils-misc/not";
import { isPromiseLike } from "@banquette/utils-type/is-promise-like";
import { isType } from "@banquette/utils-type/is-type";
import { ApiResponse } from "./api-response";
import { ModelApiMetadataService } from "./model-api-metadata.service";
import { ApiTransformerSymbol } from "./transformer/root/api";

@Service()
export class ModelApiService {
    public constructor(@Inject(ModelApiMetadataService) private apiMetadata: ModelApiMetadataService,
                       @Inject(TransformService) private transformService: TransformService,
                       @Inject(HttpService) private httpService: HttpService) {
    }

    /**
     * Create a request from a model instance and an endpoint.
     */
    public buildRequest(modelInstance: object, endpoint: string, parameters: Record<string, string> = {}): HttpRequest|Promise<HttpRequest> {
        const transformResult = this.transformService.transform(modelInstance, ApiTransformerSymbol, {endpoint, parameters});
        if (transformResult.promise === null) {
            return transformResult.result;
        }
        return new Promise<HttpRequest>((resolve, reject) => {
            transformResult.onReady().then((result: TransformResult) => {
                resolve(result.result);
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
