/*!
 * Banquette UtilsString v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { isNullOrUndefined } from '@banquette/utils-type/is-null-or-undefined';

function kebabCase(input) {
    if (!isNullOrUndefined(input)) {
        var match = input.match(/[A-Z]{2,}(?=[A-Z][a-z0-9]*|\b)|[A-Z]?[a-z0-9]*|[A-Z]|[0-9]+/g);
        if (match === null) {
            return '';
        }
        return match
            .filter(Boolean)
            .map(function (x) { return x.toLowerCase(); })
            .join('-');
    }
    return '';
}

export { kebabCase };
