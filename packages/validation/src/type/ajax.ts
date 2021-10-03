import { Inject, Injector, Module } from "@banquette/dependency-injection";
import { UsageException } from "@banquette/exception";
import {
    HttpMethod,
    HttpRequest,
    HttpRequestFactory,
    HttpRequestFactoryConfig,
    HttpResponse,
    HttpService
} from "@banquette/http";
import { extend } from "@banquette/utils-object";
import { isFunction, isObject, isString, isType, isUndefined } from "@banquette/utils-type";
import { ASYNC_TAG } from "../constant";
import { SimplifiedValidatorInterface } from "../simplified-validator.interface";
import { simplifyValidator } from "../simplify-validator";
import { ValidationContext } from "../validation-context";
import { ValidationResult } from "../validation-result";
import { ValidatorInterface } from '../validator.interface';

type RequestFactory = (value: any) => HttpRequest;
type ResponseHandler = (response: HttpResponse<any>, result: ValidationResult) => void;

// Symbol used internally to distinguish the default payload from a user defined payload.
// More stable to use a symbol than to use "null" or "undefined".
const NoPayloadSymbol = Symbol();

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
        const request: HttpRequest = this.requestFactory(context.value);
        if (request.payload === NoPayloadSymbol) {
            request.payload = isObject(context.value) ? context.value : {value: context.value};
        }
        const response: HttpResponse<any> = this.http.send(request);
        const promiseWrapper = new Promise((resolve, reject) => {
            response.promise.catch((reason: HttpResponse<any>) => {
                reject(reason.error);
            }).finally(() => {
                this.responseHandler(response, context.result);
                resolve(context);
            });
        });
        context.result.delayResponse(promiseWrapper, () => {
            response.request.cancel();
        });
        return context.result;
    }
}

export const Ajax = (requestFactory: RequestFactory|HttpRequest|HttpRequestFactoryConfig|string,
                     responseHandler?: ResponseHandler,
                     message?: string,
                     type?: string): ValidatorInterface => {
    const isFactoryConfig = (value: RequestFactory|HttpRequestFactoryConfig): value is HttpRequestFactoryConfig => isObject(value);
    const instance: AjaxValidator = Injector.Get<AjaxValidator>(AjaxValidator);
    if (requestFactory instanceof HttpRequest) {
        const userRequest = requestFactory;
        requestFactory = () => userRequest;
    } else {
        if (isString(requestFactory)) {
            requestFactory = {url: requestFactory};
        }
        if (isFactoryConfig(requestFactory)) {
            const userRequestFactory = requestFactory;
            requestFactory = () => HttpRequestFactory.Create(extend({
                method: HttpMethod.POST,
                payload: NoPayloadSymbol
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
    return simplifyValidator(instance, [ASYNC_TAG]);
};
