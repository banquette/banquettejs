import { Ajax } from "./type/ajax";
import { Choice } from "./type/choice";
import { Email } from "./type/email";
import { Empty } from "./type/empty";
import { Equal } from "./type/equal";
import { Foreach } from "./type/foreach";
import { If } from "./type/if";
import { Invalid } from "./type/invalid";
import { Max } from "./type/max";
import { Min } from "./type/min";
import { NotEmpty } from "./type/not-empty";
import { Or } from "./type/or";
import { Pattern } from "./type/pattern";
import { Phone } from "./type/phone";
import { SameAs } from "./type/same-as";
import { IsType } from "./type/is-type";
import { ValidatorFactory } from "./validator.factory";
/**
 * Used to keep the original type (inferred from the object properties)
 * while adding the Record<string, ValidatorFactory> constraint.
 */
export declare function VExtend<T extends Record<string, ValidatorFactory>>(arg: T): T;
/**
 * Shortcut object holding a reference on all validators' factory.
 * You are free to call the factory directly if you prefer.
 */
export declare const V: {
    Ajax: typeof Ajax;
    And: (...validators: import("./validator.interface").ValidatorInterface[]) => import("./validator.interface").ValidatorInterface;
    Callback: (callback: (context: import("./validation-context.interface").ValidationContextInterface) => void | Promise<void>, tags?: string | string[] | undefined, groups?: string | string[] | undefined) => import("./validator.interface").ValidatorInterface;
    Choice: typeof Choice;
    Compose: (...validators: import("./validator.interface").ValidatorInterface[]) => import("./validator.interface").ValidatorInterface;
    Container: (validators: import("./type/container").ValidatorsCollection) => import("./validator-container.interface").ValidatorContainerInterface;
    Email: typeof Email;
    Empty: typeof Empty;
    Equal: typeof Equal;
    Foreach: typeof Foreach;
    If: typeof If;
    Invalid: typeof Invalid;
    Max: typeof Max;
    Min: typeof Min;
    NotEmpty: typeof NotEmpty;
    Or: typeof Or;
    Pattern: typeof Pattern;
    Phone: typeof Phone;
    SameAs: typeof SameAs;
    IsType: typeof IsType;
    Url: (options?: string | import("./validator-options.interface").ValidatorOptionsInterface) => import("./validator.interface").ValidatorInterface;
    Valid: (tags?: string[]) => import("./validator.interface").ValidatorInterface;
};
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
