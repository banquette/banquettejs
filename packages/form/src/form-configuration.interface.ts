import { ConfigurationInterface } from "@banquette/config/config/configuration.interface";

export interface FormConfigurationInterface extends ConfigurationInterface {
    /**
     * Options concerning the `FormFactory`.
     */
    factory: {
        /**
         * Define the prefix and/or suffix to use to tell the factory that
         * a property doesn't define only the value of a form component, but also its validator.
         *
         * When both the prefix and suffix matches the name of the property,
         * an array is expected instead on the value of the component.
         *
         * This array must contain two elements:
         *   - the value to set to the component
         *   - the validator to use to validate the component
         *
         * Example:
         *
         * `FormFactory.Create({
         *     'username': 'John9000'
         * });
         * `
         * In this case a `FormControl` with the name `username` will be create inside a `FormObject`,
         * with no validator.
         *
         * `FormFactory.Create({
         *     'username$': ['John9000', NotEmpty()]
         * });
         * `
         *
         * Note the `$` at the end of `username`. This is the default suffix.
         * Now an array is expected, containing the value to set to the control, AND a validator (here `NotEmpty()`).
         *
         * Both the prefix and suffix are optional. If set to `null` or an empty string, it will be ignored.
         * If both the suffix and prefix are empty, this functionality will never trigger.
         */
        extendedNamePrefix: string|null,
        extendedNameSuffix: string|null
    }
}
