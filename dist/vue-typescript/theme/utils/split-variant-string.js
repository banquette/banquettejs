/*!
 * Banquette VueTypescript v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { trim } from '@banquette/utils-string/format/trim';

function splitVariantString(input) {
    return input.split(' ').reduce(function (acc, item) {
        item = trim(item);
        if (item.length) {
            acc.push(item);
        }
        return acc;
    }, []).sort();
}

export { splitVariantString };
