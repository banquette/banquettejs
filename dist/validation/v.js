/*!
 * Banquette Validation v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { Ajax } from './type/ajax.js';
import { And } from './type/and.js';
import { Callback } from './type/callback.js';
import { Choice } from './type/choice.js';
import { Compose } from './type/compose.js';
import { Container } from './type/container.js';
import { Email } from './type/email.js';
import { Empty } from './type/empty.js';
import { Equal } from './type/equal.js';
import { Foreach } from './type/foreach.js';
import { If } from './type/if.js';
import { Invalid } from './type/invalid.js';
import { Max } from './type/max.js';
import { Min } from './type/min.js';
import { NotEmpty } from './type/not-empty.js';
import { Or } from './type/or.js';
import { Pattern } from './type/pattern.js';
import { Phone } from './type/phone.js';
import { SameAs } from './type/same-as.js';
import { IsType } from './type/is-type.js';
import { Url } from './type/url.js';
import { Valid } from './type/valid.js';

/**
 * Used to keep the original type (inferred from the object properties)
 * while adding the Record<string, ValidatorFactory> constraint.
 */
function VExtend(arg) {
    return arg;
}
/**
 * Shortcut object holding a reference on all validators' factory.
 * You are free to call the factory directly if you prefer.
 */
var V = VExtend({
    Ajax: Ajax,
    And: And,
    Callback: Callback,
    Choice: Choice,
    Compose: Compose,
    Container: Container,
    Email: Email,
    Empty: Empty,
    Equal: Equal,
    Foreach: Foreach,
    If: If,
    Invalid: Invalid,
    Max: Max,
    Min: Min,
    NotEmpty: NotEmpty,
    Or: Or,
    Pattern: Pattern,
    Phone: Phone,
    SameAs: SameAs,
    IsType: IsType,
    Url: Url,
    Valid: Valid
});
/**
 * To extend "V":
 *
 * import { VExtend, V as Base } from "@banquette/validation";
 * import { Test } from "validation/test";
 *
 * export const V = VExtend({
 *     ...Base,
 *     Test
 * });
 *
 * Then when using "V", instead of importing it from `@banquette/validation`, import your extended object.
 */

export { V, VExtend };
