import { Service, Inject } from "@banquette/dependency-injection";
import { HttpRequest, HttpService } from "@banquette/http";
import { TransformService, TransformResult } from "@banquette/model";
import { ApiTransformerSymbol } from "./transformer/root/api";
import { ModelApiMetadataService } from "./model-api-metadata.service";
import { isPromiseLike, isType } from "@banquette/utils-type";
import { Not } from "@banquette/utils-misc";
import { ApiResponse } from "./api-response";

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
