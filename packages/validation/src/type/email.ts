import { assignOptionsDefaults } from "../utils";
import { ValidatorOptionsInterface } from "../validator-options.interface";
import { ValidatorInterface } from '../validator.interface';
import { Pattern } from "./pattern";

/**
 * Check that the value is a valid email address.
 */
export function Email(options: ValidatorOptionsInterface|string = {}): ValidatorInterface {
    /**
     * @source https://stackoverflow.com/a/46181/1110635
     */
    const reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return Pattern(reg, assignOptionsDefaults(options, 'Must be a valid email.', 'email'));
}
