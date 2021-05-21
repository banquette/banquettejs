import { ValidatorInterface } from '../validator.interface';
import { Pattern } from "./pattern";

/**
 * Check that the value is a valid phone number.
 */
export const Phone = (message: string = 'Must be a valid phone number.', type: string = 'phone'): ValidatorInterface => {
    /**
     * Thanks to Dan for the regex.
     * @source https://www.regextester.com/1978
     */
    const reg = /((?:\+|00)[17](?: |\-)?|(?:\+|00)[1-9]\d{0,2}(?: |\-)?|(?:\+|00)1\-\d{3}(?: |\-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |\-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |\-)[0-9]{3}(?: |\-)[0-9]{4})|([0-9]{7}))/;
    return Pattern(reg, message, type);
};
