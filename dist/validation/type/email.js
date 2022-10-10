/*!
 * Banquette Validation v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { assignOptionsDefaults } from '../utils.js';
import { Pattern } from './pattern.js';

/**
 * Check that the value is a valid email address.
 */
function Email(options) {
    if (options === void 0) { options = {}; }
    /**
     * @source https://stackoverflow.com/a/46181/1110635
     */
    var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return Pattern(reg, assignOptionsDefaults(options, 'Must be a valid email.', 'email'));
}

export { Email };
