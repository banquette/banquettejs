/**
 * Not really an encoder but still in it's own file for consistency.
 *
 * The "ResponseTypeAutoDetect" response type is used by encoders
 * to know if they are allowed to test if the response "looks like" the format they're responsible of.
 *
 * So there is no processing to do here, creating a file is only to make the code easier to understand.
 */
export const ResponseTypeAutoDetect = Symbol('auto');
