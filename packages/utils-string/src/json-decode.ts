import { isString } from '@banquette/utils-type';

/**
 * Exception safe `JSON.parse`.
 */
export function jsonDecode<T>(input: any): T | null {
    if (!isString(input)) {
        return null;
    }
    try {
        return JSON.parse(input);
    } catch (e) {}
    return null;
}
