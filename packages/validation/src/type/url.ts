import { assignOptionsDefaults } from "../utils";
import { ValidatorOptionsInterface } from "../validator-options.interface";
import { ValidatorInterface } from '../validator.interface';
import { Pattern } from "./pattern";

/**
 * Check that the value is a valid url.
 */
export const Url = (options: ValidatorOptionsInterface|string = {}): ValidatorInterface => {
    /**
     * Thanks to Dan for the regex.
     * @source https://www.regextester.com/94502
     */
    const reg = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:\/?#[\]@!\$&'\(\)\*\+,;=.]+$/g;
    return Pattern(reg, assignOptionsDefaults(options, 'Must be a valid url.', 'url'));
};
