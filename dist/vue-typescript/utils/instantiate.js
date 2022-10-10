/*!
 * Banquette VueTypescript v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { isNullOrUndefined } from '@banquette/utils-type/is-null-or-undefined';

/**
 * Create an instance of component.
 */
function instantiate(ctor, options) {
    return !isNullOrUndefined(options.factory) ? options.factory() : new ctor();
}

export { instantiate };
