import { RequestException } from './request.exception';

/**
 * Special kind of RequestException thrown when the response returns a status 401 or 403.
 */
export class AuthenticationException extends RequestException {}
