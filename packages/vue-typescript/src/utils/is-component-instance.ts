import { isConstructor } from "@banquette/utils-type/is-constructor";
import { isObject } from "@banquette/utils-type/is-object";
import { isType } from "@banquette/utils-type/is-type";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { AbstractConstructor, Constructor } from "@banquette/utils-type/types";
import { DECORATORS_CTOR_NAME } from "../constants";
import { Vue } from "../vue";

/**
 * Like `instance of` but works with SFC exported object.
 */
export function isComponentInstance<T extends AbstractConstructor<Vue>>(component: any, candidate: T): component is InstanceType<T> {
    if (isType<{[DECORATORS_CTOR_NAME]: Constructor<Vue>}>(candidate, (v) => isObject(v) && !isUndefined(v[DECORATORS_CTOR_NAME]))) {
        return component instanceof candidate[DECORATORS_CTOR_NAME];
    }
    return isConstructor(candidate) && component instanceof candidate;
}
