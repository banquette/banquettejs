/**
 * Represent the config object used to control the XHR mock behavior.
 * The configuration is passed using the URL (use the utility method buildTestUrl() to build it easily).
 */
export type XhrConfig = {
    /**
     * Unique id of the test request.
     * Automatically defined by buildTestUrl() is not defined.
     */
    id: number;

    /**
     * The url to simulate the call to.
     */
    url: string;

    /**
     * Simulated request time.
     */
    delay: number;

    /**
     * Define the headers the Xhr should send back.
     * If true, headers defined in the test response will be used.
     */
    headers: Record<string, string>|true;

    /**
     * Define the response type the Xhr should send back.
     * If true, the response type defined in the test response will be used.
     */
    responseType: string|true;

    /**
     * Maximum time to wait (in milliseconds) before throwing a timeout error.
     */
    timeout: number;

    /**
     * Include a XSSI prefix to the response?
     */
    XSSISafe: boolean;

    /**
     * Key of the TestResponses object where to find the response to send back.
     */
    responseKey: string;

    /**
     * The raw response from the server.
     */
    serverResponse: string|null;

    /**
     * Define the number of times the request should fail for a network error.
     */
    networkError: number;
}
