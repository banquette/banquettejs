import { HttpRequest } from "@banquette/http/http-request";
import { HttpRequestFactoryConfig } from "@banquette/http/http-request.factory";
import { HttpResponse } from "@banquette/http/http-response";
import { HttpService } from "@banquette/http/http.service";
import { SimplifiedValidatorInterface } from "../simplified-validator.interface";
import { ValidationContextInterface } from "../validation-context.interface";
import { ValidationResult } from "../validation-result";
import { ValidatorOptionsInterface } from "../validator-options.interface";
import { ValidatorInterface } from '../validator.interface';
declare type RequestFactory = (value: any) => HttpRequest;
declare type ResponseHandler = (response: HttpResponse<any>, result: ValidationResult) => void;
export declare const AutoPayloadSymbol: unique symbol;
/**
 * Do a remote validation.
 */
export declare class AjaxValidator implements SimplifiedValidatorInterface {
    private http;
    requestFactory?: RequestFactory;
    responseHandler: ResponseHandler;
    message: string;
    type: string;
    constructor(http: HttpService);
    /**
     * @inheritDoc
     */
    validate(context: ValidationContextInterface): ValidationResult;
}
export declare function Ajax(requestFactory: RequestFactory | HttpRequest | HttpRequestFactoryConfig | string, responseHandler?: ResponseHandler, options?: ValidatorOptionsInterface): ValidatorInterface;
export {};
