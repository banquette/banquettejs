import { UsageException } from "@banquette/exception/usage.exception";
import { MatchType } from "@banquette/utils-glob/constant";
import { matchBest } from "@banquette/utils-glob/match-best";
import { MatchResult } from "@banquette/utils-glob/match-result";
import { ensureArray } from "@banquette/utils-type/ensure-array";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { normalizeMasks } from "./mask/normalize-mask";
import { isValidatorContainer } from "./utils";
import { ValidationResult } from "./validation-result";
import { ValidatorInterface } from "./validator.interface";

export class ValidationContext {
    public readonly path: string;
    public readonly result: ValidationResult;

    private readonly children: ValidationContext[];
    private masks: string[];
    private maskMatchResult: WeakMap<ValidatorInterface, Record<string, MatchResult>>;

    /**
     * Create a ValidationContext object.
     *
     * @param parent ValidationContext|null The parent context (if applicable)
     * @param name   string                 The name of the attribute being validated.
     * @param value  any                    The value being validated
     * @param masks  string[]               (optional, default: []) One or multiple patterns limiting the validators that will be executed
     * @param tags   string[]               (optional, default: undefined) Any number of tags that will further limit the validators that will be executed
     */
    public constructor(public readonly parent: ValidationContext|null,
                       public readonly name: string|null,
                       public readonly value: any,
                       masks: string[] = [],
                       private tags?: string[]) {
        if (name !== null && name.match(/\/|\*/)) {
            throw new UsageException('Invalid context name. Must not contain "/" or "*".');
        }
        if (this.parent && !name) {
            throw new UsageException('A sub context must have a name.');
        }
        this.children = [];
        this.masks = [];
        this.maskMatchResult = new WeakMap<ValidatorInterface, Record<string, MatchResult>>();
        this.path = this.parent ? (this.parent.path + (this.parent.name ? '/' : '') + name) : '/';
        this.result = new ValidationResult(this.path, this.parent ? this.parent.result : null);
        if (this.parent) {
            this.parent.addChild(this);
        }
        if (masks.length > 0) {
            this.addMask(masks);
        }
    }

    /**
     * Register a child context.
     */
    public addChild(context: ValidationContext): void {
        if (context.parent !== this) {
            throw new UsageException('Invalid child context assignation. The parent does not match the current context.');
        }
        this.children.push(context);
    }

    /**
     * Get the whole list of children.
     */
    public getChildren(): ValidationContext[] {
        return this.children;
    }

    /**
     * Get a child by name.
     */
    public getChild(name: string): ValidationContext|null {
        for (const child of this.children) {
            if (child.name === name) {
                return child;
            }
        }
        return null;
    }

    /**
     * Try to get another context by its path.
     * The path can be relative or absolute (by starting with a /).
     */
    public getOtherContext(path: string): ValidationContext|null {
        if (!path || !path.length) {
            return null;
        }
        let currentContext: ValidationContext = this;
        if (path[0] === '/') {
            currentContext = this.getRoot();
            path = path.substring(1);
        }
        let parts = path.split('/');
        do {
            const currentPart = parts.shift();
            if (currentPart === '..') {
                if (!currentContext.parent) {
                    return null;
                }
                currentContext = currentContext.parent;
            } else if (currentPart !== '.') {
                let selectedChild: ValidationContext|null = null;
                for (const child of currentContext.children) {
                    if (child.name === currentPart) {
                        selectedChild = child;
                        break ;
                    }
                }
                if (!selectedChild) {
                    return null;
                }
                currentContext = selectedChild;
            }
        } while (parts.length > 0);
        return currentContext;
    }

    /**
     * Try to get the value of another context.
     * The path can be relative or absolute (by starting with a /).
     */
    public getOtherValue(path: string, defaultValue: any = null): any {
        const context: ValidationContext|null = this.getOtherContext(path);
        return context !== null ? context.value : defaultValue;
    }

    /**
     * Add one or multiple validation masks to the existing ones.
     */
    public addMask(mask: string|string[]): void {
        if (this.parent) {
            return this.addMask(mask);
        }
        this.masks = this.masks.concat(normalizeMasks(mask, this.path));
    }

    /**
     * Set the whole list of masks.
     */
    public setMasks(masks: string[]): void {
        if (this.parent) {
            return this.setMasks(masks);
        }
        this.masks = normalizeMasks(masks, this.path);
    }

    /**
     * Get the root context.
     */
    public getRoot(): ValidationContext {
        if (this.parent) {
            return this.parent.getRoot();
        }
        return this;
    }

    /**
     * Check if a validator should be validated.
     */
    public shouldValidate(validator: ValidatorInterface): boolean {
        const result: MatchResult = this.matchMask(validator);
        return (
            result.pattern === MatchType.Full ||
            (result.pattern === MatchType.Partial && isValidatorContainer(validator))
        ) && result.tags >= MatchType.Partial;
    }

    /**
     * Test if the validation should be performed for the current context.
     * The match can be partial, in which case only container validators must be executed.
     *
     * If a validator is given as context, the result will be cached.
     */
    private matchMask(validator: ValidatorInterface|null = null): MatchResult {
        if (validator) {
            const cachedResults = this.maskMatchResult.get(validator);
            if (cachedResults && !isUndefined(cachedResults[this.path])) {
                return cachedResults[this.path];
            }
        }
        let result: MatchResult;
        const masks = this.getRoot().masks;
        if (!masks.length) {
            result = {pattern: MatchType.Full, tags: MatchType.Full};
        } else {
            result = matchBest(masks, this.path, validator ? validator.tags : undefined);
        }
        if (validator) {
            const cachedResults = this.maskMatchResult.get(validator) || {};
            cachedResults[this.path] = result;
            this.maskMatchResult.set(validator, cachedResults);
        }
        return result;
    }

    /**
     * Ensure a ValidationContext object is returned from a ValidatorInterface signature.
     */
    public static EnsureValidationContext(value: any, maskOrContext?: ValidationContext|string|string[], tags?: string[]): ValidationContext {
        if (!(maskOrContext instanceof ValidationContext)) {
            return new ValidationContext(
                null,
                null,
                value,
                ensureArray(maskOrContext) as string[],
                tags
            );
        }
        return maskOrContext as ValidationContext;
    }
}
