import { ConfigurationInterface } from "@banquette/config";

export interface ApiEndpointsConfigurationInterface extends ConfigurationInterface {
    /**
     * Options directly passed to 'qs'.
     * @see https://github.com/ljharb/qs
     */
    queryString: {
        arrayFormat?: 'indices'|'brackets'|'repeat'|'comma';
        indices?: boolean;
        format?: 'RFC1738'|'RFC3986';
        encodeValuesOnly?: boolean;
        allowDots?: boolean;
        charset?: 'utf-8'|'iso-8859-1';
    };
}
