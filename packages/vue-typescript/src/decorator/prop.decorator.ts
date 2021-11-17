import { UsageException } from "@banquette/exception";
import { getObjectKeys } from "@banquette/utils-object";
import { isNonEmptyString } from "@banquette/utils-string";
import { isFunction, isUndefined } from "@banquette/utils-type";
import { Prop as VueProp, PropType } from "vue";
import { getDecoratorsData } from "../utils";
import { DecoratorsDataInterface } from "./decorators-data.interface";

/* Hack to get to the PropOptions<T, D> which is not exported by Vue. */
export type PropOptions = Exclude<VueProp<any>, PropType<any>> & {validate?: (value: any) => any};

/**
 * Allow you to define that a property of a component's class should be declared as a Vue prop.
 */
export function Prop(options: PropOptions = {}): Function {
    return (prototype: any, propertyKey: string) => {
        if (!isNonEmptyString(propertyKey) || isFunction(prototype.constructor.prototype[propertyKey])) {
            throw new UsageException('You can only use @Prop() on properties.');
        }
        const data: DecoratorsDataInterface = getDecoratorsData(prototype);
        if (!isUndefined(data.props[propertyKey])) {
            for (const key of getObjectKeys(options)) {
                data.props[propertyKey][key] = options[key];
            }
        } else {
            data.props[propertyKey] = options;
        }
    };
}
