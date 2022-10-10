/*!
 * Banquette Http v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { HttpResponseStatus } from './constants.js';

var HttpResponse = /** @class */ (function () {
    function HttpResponse(request, status, promise) {
        if (status === void 0) { status = HttpResponseStatus.Pending; }
        /**
         * Unique id of the response.
         */
        this.id = ++HttpResponse.MaxId;
        /**
         * Holds the status of the request.
         * It may be more convenient to use the flags instead.
         */
        this.status = HttpResponseStatus.Pending;
        /**
         * True if status === HttpResponseStatus.Pending.
         */
        this.isPending = true;
        /**
         * True if status === HttpResponseStatus.Success.
         */
        this.isSuccess = false;
        /**
         * True if status === HttpResponseStatus.Error.
         */
        this.isError = false;
        /**
         * True if status === HttpResponseStatus.Canceled.
         */
        this.isCanceled = false;
        /**
         * Holds the error details in case the status becomes HttpResponseStatus.Error.
         */
        this.error = null;
        this.request = request;
        this.promise = promise;
        this.setStatus(status);
    }
    /**
     * Update the response's status.
     */
    HttpResponse.prototype.setStatus = function (status) {
        this.status = status;
        this.isPending = this.status === HttpResponseStatus.Pending;
        this.isSuccess = this.status === HttpResponseStatus.Success;
        this.isError = this.status === HttpResponseStatus.Error;
        this.isCanceled = this.status === HttpResponseStatus.Canceled;
    };
    /**
     * Copy the state of another response into this one, except the promise and the request.
     */
    HttpResponse.prototype.copyFrom = function (other) {
        this.setStatus(other.status);
        this.url = other.url;
        this.error = other.error;
        this.result = other.result;
        this.httpStatusText = other.httpStatusText;
        this.httpStatusCode = other.httpStatusCode;
    };
    HttpResponse.MaxId = 0;
    return HttpResponse;
}());

export { HttpResponse };
