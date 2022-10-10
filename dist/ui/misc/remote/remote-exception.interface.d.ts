/**
 * The data expected from the server when an error occurs.
 * The module will automatically create a RemoteException if the response status is an error code and matches this interface.
 *
 * If your server cannot return a value that matches this interface you can listen to the `BeforeResponse` http event hook
 * to modify the raw response from your server to the expected format.
 */
export interface RemoteExceptionInterface {
    exception: {
        /**
         * A optional slugified type for the exception.
         * It is mainly used for translation.
         * If omitted, the type will be `remote`.
         */
        type?: string;
        message: string;
    };
}
