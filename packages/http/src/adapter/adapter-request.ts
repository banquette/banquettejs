import { HttpRequest } from "../http-request";

/**
 * An adapter request is simply an HttpRequest with a payload guaranteed to be usable
 * in an HTTP transaction without any additional transformation.
 */
export type AdapterRequest = Omit<HttpRequest, 'payload' | 'timeout'> & {payload: Document|BodyInit|null, timeout: number};
