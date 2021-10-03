import { ValidatorInterface } from '../validator.interface';
import { Pattern } from "./pattern";

/**
 * Check that the value is a valid url.
 */
export const Url = (message: string = 'Must be a valid url.', type: string = 'url', tags: string[] = []): ValidatorInterface => {
    /**
     * Thanks to Dan for the regex.
     * @source https://www.regextester.com/94502
     */
    const reg = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;
    return Pattern(reg, message, type, tags);
};
