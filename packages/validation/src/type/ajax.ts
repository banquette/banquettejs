import { Inject, Injector, Module } from "@banquette/dependency-injection";
import { UsageException } from "@banquette/exception";
import {
    HttpMethod,
    HttpRequest,
    HttpRequestFactory,
    HttpRequestFactoryConfig,
    HttpResponse,
    HttpService, RequestCanceledException
} from "@banquette/http";
import { extend } from "@banquette/utils-object";
import { isFunction, isObject, isString, isType, isUndefined } from "@banquette/utils-type";
import { ASYNC_TAG } from "../constant";
import { SimplifiedValidatorInterface } from "../simplified-validator.interface";
import { createValidator } from "../create-validator";
import { ValidationContext } from "../validation-context";
import { ValidationResult } from "../validation-result";
import { ValidatorInterface } from '../validator.interface';

type RequestFactory = (value: any) => HttpRequest;
type ResponseHandler = (response: HttpResponse<any>, result: ValidationResult) => void;

// Symbol used to indicate the payload should be generated by the validator itself.
// More stable to use a symbol than to use "null" or "undefined".
export const AutoPayloadSymbol = Symbol();

/**
 * Do a remote validation.
 */
@Module()
export class AjaxValidator implements SimplifiedValidatorInterface {
    public requestFactory?: RequestFactory;
    public responseHandler: ResponseHandler;
    public message: string;
    public type: string;

    public constructor(@Inject(HttpService) private http: HttpService) {
        this.message = 'Invalid value.';
        this.type = 'ajax';
        this.responseHandler = (response: HttpResponse<any>, result: ValidationResult) => {
            if (response.isError) {
                result.fail(response.error);
            } else if (Math.floor(response.httpStatusCode * 0.01) !== 2) {
                result.addViolation(this.type, this.message);
            }
        };
    }

    /**
     * @inheritDoc
     */
    public validate(context: ValidationContext): ValidationResult {
        if (!isType<RequestFactory>(this.requestFactory, isFunction)) {
            throw new UsageException('You must define a request factory.');
        }
        let request: HttpRequest = this.requestFactory(context.value);
        if (request.payload === AutoPayloadSymbol) {
            request.payload = isObject(context.value) ? context.value : {value: context.value};
        }
        const response: HttpResponse<any> = this.http.send(request);
        const promiseWrapper = new Promise((resolve, reject) => {
            response.promise.then(() => {
                this.responseHandler(response, context.result);
                resolve(context);
            }).catch((reason: HttpResponse<any>) => {
                if (reason.error instanceof RequestCanceledException) {
                    context.result.cancel();
                }
                this.responseHandler(response, context.result);
                reject(reason.error);
            });
        });
        context.result.delayResponse(promiseWrapper, () => {
            //
            // DO NOT shorten this to:
            // `context.result.delayResponse(promiseWrapper, response.request.cancel)`
            // Because the call context will be incorrect.
            //
            // To make it a one liner we could use a proxy:
            // `context.result.delayResponse(promiseWrapper, proxy(response.request.cancel, response.request))`
            //
            // But it's slower and uglier, so its good like that.
            //
            response.request.cancel();
        });
        return context.result;
    }
}

export const Ajax = (requestFactory: RequestFactory|HttpRequest|HttpRequestFactoryConfig|string,
                     responseHandler?: ResponseHandler,
                     message?: string,
                     type?: string,
                     tags: string[] = []): ValidatorInterface => {
    const isFactoryConfig = (value: RequestFactory|HttpRequestFactoryConfig): value is HttpRequestFactoryConfig => isObject(value);
    const instance: AjaxValidator = Injector.Get<AjaxValidator>(AjaxValidator);
    if (requestFactory instanceof HttpRequest) {
        const userRequest = requestFactory;
        requestFactory = () => userRequest.clone();
    } else {
        if (isString(requestFactory)) {
            requestFactory = {url: requestFactory, payload: AutoPayloadSymbol};
        }
        if (isFactoryConfig(requestFactory)) {
            const userRequestFactory = requestFactory;
            requestFactory = () => HttpRequestFactory.Create(extend({
                method: HttpMethod.POST,
                payload: AutoPayloadSymbol
            }, userRequestFactory) as HttpRequestFactoryConfig);
        }
    }
    instance.requestFactory = requestFactory;
    if (!isUndefined(responseHandler)) {
        instance.responseHandler = responseHandler;
    }
    if (!isUndefined(message)) {
        instance.message = message;
    }
    if (!isUndefined(type)) {
        instance.type = type;
    }
    return createValidator(instance, [ASYNC_TAG].concat(tags));
};
