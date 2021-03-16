/**
 * Basic HTTP methods.
 * The list is not meant to be exhaustive, it only contains what's being used.
 */
export enum HttpMethod {
    GET     = 'GET',
    POST    = 'POST',
    PUT     = 'PUT',
    DELETE  = 'DELETE',
    OPTIONS = 'OPTIONS'
}

/**
 * Different status of the response.
 */
export enum HttpResponseStatus {
    Pending,
    Success,
    Error,
    Canceled
}

/**
 * Payloads & responses types.
 * Simply constants are used instead of enums so it's easy to extend externally.
 *
 * It's also useful because you can isolate a constant in a file with additional logic
 * and use the import to trigger the code.
 *
 * @see interceptors/json.interceptor.ts
 * @see interceptors/xml.interceptor.ts
 */
// Response
export const ResponseTypeText        = Symbol('text');   // string
export const ResponseTypeHtml        = Symbol('html');   // string
export const ResponseTypeBinary      = Symbol('binary'); // ArrayBuffer
export const ResponseTypeAutoDetect  = Symbol('auto');

/**
 * Tag to use in the event dispatcher when subscribing to alter the request body or response.
 *
 * Tagging your subscriber as "encoder" will allow to stop the propagation of encoders only,
 * without disturbing the flow of other subscribers.
 *
 * @see EventDispatcher documentation for more details on tags.
 */
export const EncoderTag = Symbol('encoder');

// Same principal as the encoder, but for decoding the response.
export const DecoderTag = Symbol('decoder');

/**
 * Events emitted by the network module through the event dispatcher singleton.
 */
export const Events = {
    /**
     * Emitted when the network connectivity is lost.
     */
    NetworkOffline: Symbol('network:offline'),

    /**
     * Emitted when the network connectivity is back.
     */
    NetworkOnline: Symbol('network:online'),

    /**
     * Emitted when the network availability changes, no matter in which way.
     */
    NetworkAvailabilityChange: Symbol('network:availability-change'),

    /**
     * Emitted when a request has been added to the queue of the HTTP service.
     * A request can be queued multiple time if an error occurs.
     */
    RequestQueued: Symbol('network:request-queued'),

    /**
     * Emitted right before an HTTP request is executed.
     */
    BeforeRequest: Symbol('network:before-request'),

    /**
     * Emitted after a request has been executed successfully (on a network level).
     *
     * Having a response only mean the communication with the server worked, but
     * the response could still hold an error.
     */
    BeforeResponse: Symbol('network:before-response'),

    /**
     * Emitted after a request has been successfully executed.
     */
    RequestSuccess: Symbol('network:request-success'),

    /**
     * Emitted after a request failed to execute (on a network level).
     *
     * The request may have failed for a network issue (no internet) or because the timeout is reached,
     * on because it has been canceled, this kind of thing.
     */
    RequestFailure: Symbol('network:request-failure')
};

/**
 * List of HTTP status codes and their signification.
 */
export const HttpStatus: Record<number, string> = {
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
