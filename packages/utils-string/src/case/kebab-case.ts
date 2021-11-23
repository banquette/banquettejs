import { isNullOrUndefined } from "@banquette/utils-type/is-null-or-undefined";

export function kebabCase(input: string): string {
    if (!isNullOrUndefined(input)) {
        const match = input.match(/[A-Z]{2,}(?=[A-Z][a-z0-9]*|\b)|[A-Z]?[a-z0-9]*|[A-Z]|[0-9]+/g);
        if (match === null) {
            return '';
        }
        return match
            .filter(Boolean)
            .map(x => x.toLowerCase())
            .join('-');
    }
    return '';
}
