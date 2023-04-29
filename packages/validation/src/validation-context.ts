import { UsageException } from "@banquette/exception";
import { arrayIntersect } from "@banquette/utils-array";
import { MatchType, matchBest, MatchResult } from "@banquette/utils-glob";
import { getObjectValue } from "@banquette/utils-object";
import { ensureArray, isUndefined } from "@banquette/utils-type";
import { normalizeMasks } from "./mask/normalize-mask";
import { isValidatorContainer, isValidationContext } from "./utils";
import { ValidateOptionsInterface } from "./validate-options.interface";
import { ValidationContextInterface } from "./validation-context.interface";
import { ValidationResult } from "./validation-result";
import { ValidatorInterface } from "./validator.interface";

export class ValidationContext implements ValidationContextInterface {
    public readonly path: string;
    public readonly result: ValidationResult;
    public readonly children: ValidationContextInterface[];
    public readonly masks: string[];

    private maskMatchResults: WeakMap<ValidatorInterface, Record<string, MatchResult>>;

    /**
     * Create a ValidationContext object.
     *
     * @param parent ValidationContext|null The parent context (if applicable).
     * @param name   string                 The name of the attribute being validated.
     * @param value  any                    The value being validated.
     * @param masks  string[]               (optional, default: []) One or multiple patterns limiting the validators that will be executed.
     * @param groups string[]               (optional, default: []]) The validation groups the validators will have to match.
     */
    public constructor(public readonly parent: ValidationContextInterface|null,
                       public readonly name: string|null,
                       public readonly value: any,
                       masks: string[] = [],
                       public readonly groups: string[] = []) {
        if (name !== null && name.match(/\/|\*/)) {
            throw new UsageException('Invalid context name. Must not contain "/" or "*".');
        }
        if (this.parent && !name) {
            throw new UsageException('A sub context must have a name.');
        }
        this.children = [];
        this.masks = [];
        this.maskMatchResults = new WeakMap<ValidatorInterface, Record<string, MatchResult>>();
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
    public addChild(context: ValidationContextInterface): void {
        if (context.parent !== this) {
            throw new UsageException('Invalid child context assignation. The parent does not match the current context.');
        }
        this.children.push(context);
    }

    /**
     * Get the whole list of children.
     */
    public getChildren(): ValidationContextInterface[] {
        return this.children;
    }

    /**
     * Get a child by name.
     */
    public getChild(name: string): ValidationContextInterface|null {
        for (const child of this.children) {
            if (child.name === name) {
                return child;
            }
        }
        return null;
    }

    /**
     * Add one or multiple validation masks to the existing ones.
     */
    public addMask(mask: string|string[]): void {
        if (this.parent) {
            return this.addMask(mask);
        }
        (this as any /* Writeable<ValidationContext> */).masks = this.masks.concat(normalizeMasks(mask, this.path));
    }

    /**
     * Set the whole list of masks.
     */
    public setMasks(masks: string[]): void {
        if (this.parent) {
            return this.setMasks(masks);
        }
        (this as any /* Writeable<ValidationContext> */).masks = normalizeMasks(masks, this.path);
    }

    /**
     * Get the root context.
     */
    public getRoot(): ValidationContextInterface {
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
        const groups = ensureArray(validator.groups);
        const isContainer = isValidatorContainer(validator);

        return (
            result.pattern === MatchType.Full ||
            (result.pattern === MatchType.Partial && isContainer)
        ) && (result.tags >= MatchType.Partial || isContainer) &&
            (isContainer || (this.groups.length && arrayIntersect(this.groups, groups).length > 0) || (!this.groups.length && !groups.length));
    }

    /**
     * Try to get the value of another context.
     * The path can be relative or absolute (by starting with a `/`).
     */
    public getOtherValue(path: string, defaultValue: any = null): any {
        const parts = this.getAbsolutePathParts(path);
        return getObjectValue(this.getRoot().value, parts, defaultValue);
    }

    /**
     * Try to get another context by its path.
     * The path can be relative or absolute (by starting with a /).
     */
    public getOtherContext(path: string): ValidationContextInterface|null {
        if (!path || !path.length) {
            return null;
        }
        let currentContext: ValidationContextInterface = this;
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
                let selectedChild: ValidationContextInterface|null = null;
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
     * Convert a path relative to the current context in a path is relative to the root context.
     */
    public getAbsolutePath(path: string): string {
        return '/' + this.getAbsolutePathParts(path).join('/');
    }

    /**
     * Create a child context for this context.
     */
    public createSubContext(name: string|null,
                            value: any,
                            masks: string[] = [],
                            groups: string[] = []): ValidationContextInterface {
        return new ValidationContext(this, name, value, masks, groups);
    }

    /**
     * Test if the validation should be performed for the current context.
     * The match can be partial, in which case only container validators must be executed.
     *
     * If a validator is given as context, the result will be cached.
     */
    private matchMask(validator: ValidatorInterface|null = null): MatchResult {
        if (validator) {
            const cachedResults = this.maskMatchResults.get(validator);
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
            const cachedResults = this.maskMatchResults.get(validator) || {};
            cachedResults[this.path] = result;
            this.maskMatchResults.set(validator, cachedResults);
        }
        return result;
    }

    private getAbsolutePathParts(path: string): string[] {
        if (!path) {
            return [];
        }
        if (path[0] !== '/') {
            path = this.path + '/' + path;
        }
        let parts = path.substring(1).split('/');
        for (let i = 0; i < parts.length; ++i) {
            if (parts[i] === '..') {
                if (i > 0) {
                    // Remove the previous part.
                    parts.splice((i--) - 1, 1);
                }
                // Remove ".."
                parts.splice(i--, 1);
            } else if (parts[i] === '.') {
                parts.splice(i--, 1);
            }
        }
        return parts;
    }

    /**
     * Ensure a ValidationContext object is returned from a ValidatorInterface signature.
     */
    public static EnsureValidationContext(value: any, maskOrContext?: ValidateOptionsInterface|ValidationContextInterface): ValidationContextInterface {
        if (!isValidationContext(maskOrContext)) {
            const options = maskOrContext || {};
            return new ValidationContext(
                null,
                null,
                value,
                !isUndefined(options.mask) ? ensureArray(options.mask) : undefined,
                !isUndefined(options.group) ? ensureArray(options.group) : undefined
            );
        }
        return maskOrContext;
    }
}
