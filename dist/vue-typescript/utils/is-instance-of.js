/*!
 * Banquette VueTypescript v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { anyToComponentCtor } from './converters.js';

/**
 * Like `instance of` but works with SFC exports.
 */
function isInstanceOf(input, candidate) {
    var ctor = anyToComponentCtor(input);
    candidate = anyToComponentCtor(candidate);
    return ctor !== null && ctor.prototype === candidate.prototype;
}

export { isInstanceOf };
