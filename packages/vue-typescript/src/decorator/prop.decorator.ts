import { UsageException } from "@banquette/exception/usage.exception";
import { getObjectKeys } from "@banquette/utils-object/get-object-keys";
import { isNonEmptyString } from "@banquette/utils-string/is-non-empty-string";
import { isFunction } from "@banquette/utils-type/is-function";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { Prop as VueProp, PropType } from "vue";
import { getOrCreateComponentMetadata } from "../utils/get-or-create-component-metadata";
import { ComponentMetadataInterface } from "./component-metadata.interface";

/* Hack to get to the PropOptions<T, D> which is not exported by Vue. */
export type PropOptions = Exclude<VueProp<any>, PropType<any>> & {validate?: (value: any) => any, name?: string};
export type PropPrivateOptions = PropOptions & {propertyName: string};

/**
 * Allow you to define that a property of a component's class should be declared as a Vue prop.
 */
export function Prop(options: PropOptions = {}): Function {
    return (prototype: any, propertyKey: string) => {
        if (!isNonEmptyString(propertyKey) || isFunction(prototype.constructor.prototype[propertyKey])) {
            throw new UsageException('You can only use @Prop() on properties.');
        }
        const data: ComponentMetadataInterface = getOrCreateComponentMetadata(prototype);
        if (!isUndefined(data.props[propertyKey])) {
            for (const key of getObjectKeys(options)) {
                data.props[propertyKey][key] = options[key];
            }
        } else {
            data.props[propertyKey] = {...options, ...{propertyName: propertyKey}};
        }
    };
}
