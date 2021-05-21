import { ValidatorInterface } from '../validator.interface';
import { Pattern } from "./pattern";

/**
 * Check that the value is a valid email address.
 */
export const Email = (message: string = 'Must be a valid email.', type: string = 'email'): ValidatorInterface => {
    /**
     * @source https://stackoverflow.com/a/46181/1110635
     */
    const reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return Pattern(reg, message, type);
};
