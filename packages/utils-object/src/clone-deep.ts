import { isArray, isObject } from '@banquette/utils-type';
import { extend } from './extend';

/**
 * Recursively clone a value.
 */
export function cloneDeep(value: any): any {
    if (isArray(value)) {
        return extend([], [value], true);
    } else if (isObject(value)) {
        return extend({}, [value], true);
    }
    return value;
}
