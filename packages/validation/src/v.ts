import { Ajax } from "./type/ajax";
import { And } from "./type/and";
import { Callback } from "./type/callback";
import { Choice } from "./type/choice";
import { Compose } from "./type/compose";
import { Container } from "./type/container";
import { Email } from "./type/email";
import { Empty } from "./type/empty";
import { Equal } from "./type/equal";
import { Foreach } from "./type/foreach";
import { If } from "./type/if";
import { Invalid } from "./type/invalid";
import { IsType } from "./type/is-type";
import { Max } from "./type/max";
import { Min } from "./type/min";
import { NotEmpty } from "./type/not-empty";
import { Or } from "./type/or";
import { Pattern } from "./type/pattern";
import { Phone } from "./type/phone";
import { SameAs } from "./type/same-as";
import { Url } from "./type/url";
import { Valid } from "./type/valid";
import { ValidatorFactory } from "./validator.factory";

/**
 * Used to keep the original type (inferred from the object properties)
 * while adding the Record<string, ValidatorFactory> constraint.
 */
export function VExtend<T extends Record<string, ValidatorFactory>>(arg: T): T {
    return arg;
}

/**
 * Shortcut object holding a reference on all validators' factory.
 * You are free to call the factory directly if you prefer.
 */
export const V = VExtend({
    Ajax,
    And,
    Callback,
    Choice,
    Compose,
    Container,
    Email,
    Empty,
    Equal,
    Foreach,
    If,
    Invalid,
    Max,
    Min,
    NotEmpty,
    Or,
    Pattern,
    Phone,
    SameAs,
    IsType,
    Url,
    Valid
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
