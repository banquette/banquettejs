/*!
 * Banquette Validation v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { assignOptionsDefaults } from '../utils.js';
import { Pattern } from './pattern.js';

/**
 * Check that the value is a valid phone number.
 */
function Phone(options) {
    if (options === void 0) { options = {}; }
    /**
     * Thanks to Dan for the regex.
     * @source https://www.regextester.com/1978
     */
    var reg = /((?:\+|00)[17](?: |\-)?|(?:\+|00)[1-9]\d{0,2}(?: |\-)?|(?:\+|00)1\-\d{3}(?: |\-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |\-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |\-)[0-9]{3}(?: |\-)[0-9]{4})|([0-9]{7}))/;
    return Pattern(reg, assignOptionsDefaults(options, 'Must be a valid phone number.', 'phone'));
}

export { Phone };
