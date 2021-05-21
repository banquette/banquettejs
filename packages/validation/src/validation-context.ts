import { UsageException } from "@banquette/core";
import { isUndefined } from "@banquette/utils";
import { normalizeMasks, findBestPathMatch, isValidatorContainer, MatchResult } from "./utils";
import { ValidationResult } from "./validation-result";
import { ValidatorInterface } from "./validator.interface";

export class ValidationContext {
    public readonly path: string;
    public readonly result: ValidationResult;

    private readonly children: ValidationContext[];
    private masks: string[];
    private maskMatchResult: Record<string, MatchResult>;

    /**
     * Create a ValidationContext object.
     *
     * @param parent ValidationContext|null The parent context (if applicable)
     * @param name   string                 The name of the attribute being validated.
     * @param value  any                    The value being validated
     * @param masks  string[]               (optional, default: []) One or multiple patterns limiting the validators that will be executed
     */
    public constructor(public readonly parent: ValidationContext|null,
                       public readonly name: string|null,
                       public readonly value: any,
                       masks: string[] = []) {
        if (name !== null && name.match(/\/|\*/)) {
            throw new UsageException('Invalid context name. Must not contain "/" or "*".');
        }
        if (this.parent && !name) {
            throw new UsageException('A sub context must have a name.');
        }
        this.children = [];
        this.masks = [];
        this.maskMatchResult = {};
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
            return void this.addMask(mask);
        }
        this.masks = this.masks.concat(normalizeMasks(mask, this.path));
    }

    /**
     * Set the whole list of masks.
     */
    public setMasks(masks: string[]): void {
        if (this.parent) {
            return void this.setMasks(masks);
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
     * Test if the validation should be performed for the current context.
     * The match can be partial, in which case only container validators must be executed.
     */
    public matchMask(useCache: boolean = true): MatchResult {
        if (useCache && !isUndefined(this.maskMatchResult[this.path])) {
            return this.maskMatchResult[this.path];
        }
        let result: MatchResult;
        const masks = this.getRoot().masks;
        if (!masks.length) {
            result = MatchResult.Full;
        } else {
            result = findBestPathMatch(masks, this.path);
        }
        if (useCache) {
            this.maskMatchResult[this.path] = result;
        }
        return result;
    }

    /**
     * Check if a validator should be validated.
     */
    public shouldValidate(validator: ValidatorInterface): boolean {
        const maskMatch: MatchResult = this.matchMask();
        return (maskMatch === MatchResult.Full) ||
            (maskMatch === MatchResult.Sync && validator.asynchronous !== true) ||
            (maskMatch === MatchResult.Async && validator.asynchronous === true) ||
            (maskMatch === MatchResult.Partial && isValidatorContainer(validator));
    }
}
