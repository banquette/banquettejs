/*!
 * Banquette Validation v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { assignOptionsDefaults } from '../utils.js';
import { Pattern } from './pattern.js';

/**
 * Check that the value is a valid url.
 */
var Url = function (options) {
    if (options === void 0) { options = {}; }
    /**
     * Thanks to Dan for the regex.
     * @source https://www.regextester.com/94502
     */
    var reg = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:\/?#[\]@!\$&'\(\)\*\+,;=.]+$/g;
    return Pattern(reg, assignOptionsDefaults(options, 'Must be a valid url.', 'url'));
};

export { Url };
