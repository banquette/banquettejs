/*!
 * Banquette Http v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
/**
 * Basic HTTP methods.
 * The list is not meant to be exhaustive, it only contains what's being used.
 */
var HttpMethod;
(function (HttpMethod) {
    HttpMethod["GET"] = "GET";
    HttpMethod["POST"] = "POST";
    HttpMethod["PUT"] = "PUT";
    HttpMethod["PATCH"] = "PATCH";
    HttpMethod["DELETE"] = "DELETE";
    HttpMethod["OPTIONS"] = "OPTIONS";
})(HttpMethod || (HttpMethod = {}));
/**
 * Different status of the response.
 */
var HttpResponseStatus;
(function (HttpResponseStatus) {
    HttpResponseStatus[HttpResponseStatus["Pending"] = 0] = "Pending";
    HttpResponseStatus[HttpResponseStatus["Success"] = 1] = "Success";
    HttpResponseStatus[HttpResponseStatus["Error"] = 2] = "Error";
    HttpResponseStatus[HttpResponseStatus["Canceled"] = 3] = "Canceled";
})(HttpResponseStatus || (HttpResponseStatus = {}));
/**
 * Progress status of a request.
 * Used by progression events only.
 */
var HttpRequestProgressStatus;
(function (HttpRequestProgressStatus) {
    /**
     * The request is preparing to execute.
     */
    HttpRequestProgressStatus[HttpRequestProgressStatus["Preparing"] = 0] = "Preparing";
    /**
     * The body of the request is uploading to the server.
     */
    HttpRequestProgressStatus[HttpRequestProgressStatus["Uploading"] = 1] = "Uploading";
    /**
     * The response from the server is downloading.
     */
    HttpRequestProgressStatus[HttpRequestProgressStatus["Downloading"] = 2] = "Downloading";
    /**
     * The request is closed.
     * This status only inform there is no network activity for this request anymore, it can have succeeded or failed.
     * The response object contains the details of what happened.
     */
    HttpRequestProgressStatus[HttpRequestProgressStatus["Closed"] = 3] = "Closed";
})(HttpRequestProgressStatus || (HttpRequestProgressStatus = {}));
/**
 * Types of url parameters.
 */
var UrlParameterType;
(function (UrlParameterType) {
    /**
     * Will be set as a url parameter if a replacement is found in the url.
     * Otherwise, the parameter will be added to the query.
     */
    UrlParameterType[UrlParameterType["Auto"] = 0] = "Auto";
    /**
     * The parameter will always be added to the url.
     * If no placeholder exists, the parameter is ignored.
     */
    UrlParameterType[UrlParameterType["Url"] = 1] = "Url";
    /**
     * The parameter will always be added to the query string,
     * even if a placeholder exists in the url.
     */
    UrlParameterType[UrlParameterType["Query"] = 2] = "Query";
})(UrlParameterType || (UrlParameterType = {}));
/**
 * Tag to use in the event dispatcher when subscribing to alter the request body or response.
 *
 * Tagging your subscriber as "encoder" will allow to stop the propagation of encoders only,
 * without disturbing the flow of other subscribers.
 *
 * @see EventDispatcher documentation for more details on tags.
 */
var EncoderTag = Symbol('encoder');
// Same principal as the encoder, but for decoding the response.
var DecoderTag = Symbol('decoder');
/**
 * Tag used to mark adapters in the container.
 */
var AdapterTag = Symbol('adapter');
/**
 * Events emitted by the network watcher service.
 */
var NetworkEvents = {
    /**
     * Emitted when the network connectivity is lost.
     */
    Offline: Symbol('network:offline'),
    /**
     * Emitted when the network connectivity is back.
     */
    Online: Symbol('network:online'),
    /**
     * Emitted when the network availability changes, no matter in which way.
     */
    AvailabilityChange: Symbol('network:availability-change'),
};
/**
 * Events emitted by the http service.
 */
var HttpEvents = {
    /**
     * Emitted when a request has been added to the queue of the HTTP service.
     * A request can be queued multiple time if an error occurs.
     */
    RequestQueued: Symbol('http:request-queued'),
    /**
     * Emitted right before an HTTP request is executed.
     */
    BeforeRequest: Symbol('http:before-request'),
    /**
     * Emitted after a request has been executed successfully (on a network level).
     *
     * Having a response only mean the communication with the server worked, but
     * the response could still hold an error.
     */
    BeforeResponse: Symbol('http:before-response'),
    /**
     * Emitted after a request has been successfully executed.
     */
    RequestSuccess: Symbol('http:request-success'),
    /**
     * Emitted after a request failed to execute.
     *
     * The request may have failed for a network issue (no internet) or because the timeout is reached,
     * on because it has been canceled, this kind of thing.
     *
     * Any error returned from the server in the body of the request, but with a 200 Http code, will not trigger this event.
     */
    RequestFailure: Symbol('http:request-failure')
};
/**
 * List of HTTP status codes and their signification.
 */
var HttpStatus = {
    100: 'Continue',
    101: 'Switching Protocols',
    102: 'Processing',
    103: 'Early Hints',
    200: 'OK',
    201: 'Created',
    202: 'Accepted',
    203: 'Non',
    204: 'No Content',
    205: 'Reset Content',
    206: 'Partial Content',
    207: 'Multi',
    208: 'Already Reported',
    210: 'Content Different',
    226: 'IM Used',
    300: 'Multiple Choices',
    301: 'Moved Permanently',
    302: 'Found',
    303: 'See Other',
    304: 'Not Modified',
    305: 'Use Proxy ',
    306: 'Switch Proxy',
    307: 'Temporary Redirect',
    308: 'Permanent Redirect',
    310: 'Too many Redirects',
    400: 'Bad Request',
    401: 'Unauthorized',
    402: 'Payment Required',
    403: 'Forbidden',
    404: 'Not Found',
    405: 'Method Not Allowed',
    406: 'Not Acceptable',
    407: 'Proxy Authentication Required',
    408: 'Request Time',
    409: 'Conflict',
    410: 'Gone',
    411: 'Length Required',
    412: 'Precondition Failed',
    413: 'Request Entity Too Large',
    414: 'Request',
    415: 'Unsupported Media Type',
    416: 'Requested range unsatisfiable',
    417: 'Expectation failed',
    418: 'I\'m a teapot',
    421: 'Bad mapping ',
    422: 'Unprocessable entity',
    423: 'Locked',
    424: 'Method failure',
    425: 'Too Early',
    426: 'Upgrade Required',
    428: 'Precondition Required',
    429: 'Too Many Requests',
    431: 'Request Header Fields Too Large',
    449: 'Retry With',
    450: 'Blocked by Windows Parental Controls',
    451: 'Unavailable For Legal Reasons',
    456: 'Unrecoverable Error',
    444: 'No Response',
    495: 'SSL Certificate Error',
    496: 'SSL Certificate Required',
    497: 'HTTP Request Sent to HTTPS Port',
    498: 'Token expired',
    499: 'Client Closed Request',
    500: 'Internal Server Error',
    501: 'Not Implemented',
    502: 'Bad Gateway ou Proxy Error',
    503: 'Service Unavailable',
    504: 'Gateway Time',
    505: 'HTTP Version not supported',
    506: 'Variant Also Negotiates',
    507: 'Insufficient storage',
    508: 'Loop detected',
    509: 'Bandwidth Limit Exceeded',
    510: 'Not extended',
    511: 'Network authentication required',
    520: 'Unknown Error',
    521: 'Web Server Is Down',
    522: 'Connection Timed Out',
    523: 'Origin Is Unreachable',
    524: 'A Timeout Occurred',
    525: 'SSL Handshake Failed',
    526: 'Invalid SSL Certificate',
    527: 'Railgun Error'
};
/**
 * Headers not following the generic naming rule.
 *
 * @source https://github.com/middyjs/middy/blob/main/packages/http-header-normalizer/index.js
 */
var HttpHeadersExceptionsMap = {
    'alpn': 'ALPN',
    'c-pep': 'C-PEP',
    'c-pep-info': 'C-PEP-Info',
    'caldav-timezones': 'CalDAV-Timezones',
    'content-id': 'Content-ID',
    'content-md5': 'Content-MD5',
    'dasl': 'DASL',
    'dav': 'DAV',
    'dnt': 'DNT',
    'etag': 'ETag',
    'getprofile': 'GetProfile',
    'http2-settings': 'HTTP2-Settings',
    'last-event-id': 'Last-Event-ID',
    'mime-version': 'MIME-Version',
    'optional-www-authenticate': 'Optional-WWW-Authenticate',
    'sec-websocket-accept': 'Sec-WebSocket-Accept',
    'sec-websocket-extensions': 'Sec-WebSocket-Extensions',
    'sec-websocket-key': 'Sec-WebSocket-Key',
    'sec-websocket-protocol': 'Sec-WebSocket-Protocol',
    'sec-websocket-version': 'Sec-WebSocket-Version',
    'slug': 'SLUG',
    'tcn': 'TCN',
    'te': 'TE',
    'ttl': 'TTL',
    'www-authenticate': 'WWW-Authenticate',
    'x-att-deviceid': 'X-ATT-DeviceId',
    'x-dnsprefetch-control': 'X-DNSPrefetch-Control',
    'x-uidh': 'X-UIDH'
};

export { AdapterTag, DecoderTag, EncoderTag, HttpEvents, HttpHeadersExceptionsMap, HttpMethod, HttpRequestProgressStatus, HttpResponseStatus, HttpStatus, NetworkEvents, UrlParameterType };
