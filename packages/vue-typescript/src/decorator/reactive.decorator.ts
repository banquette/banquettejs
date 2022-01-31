import { UsageException } from "@banquette/exception/usage.exception";
import { isNonEmptyString } from "@banquette/utils-string/is-non-empty-string";
import { Ref } from "./ref.decorator";

/**
 * Alias of `@Ref(false)`.
 *
 * That's just an alternative name you can use if you find this more readable in your model.
 * It does nothing more than calling `@Ref(false)` for you.
 */
export function Reactive(): Function {
    return (prototype: any, propertyKey: string) => {
        // Re-check here so the error message does not confuse the end user.
        if (!isNonEmptyString(propertyKey)) {
            throw new UsageException('You can only use @Reactive() on properties or methods.');
        }
        Ref()(prototype, propertyKey);
    };
}
