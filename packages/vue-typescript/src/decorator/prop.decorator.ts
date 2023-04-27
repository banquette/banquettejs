import { UsageException } from "@banquette/exception";
import { getObjectKeys } from "@banquette/utils-object";
import { isNonEmptyString } from "@banquette/utils-string";
import { isFunction, isUndefined } from "@banquette/utils-type";
import { ValidatorInterface } from "@banquette/validation";
import { Prop as VueProp, PropType } from "vue";
import { getOrCreateComponentMetadata } from "../utils/get-or-create-component-metadata";
import { ComponentMetadataInterface } from "./component-metadata.interface";

/* Hack to get to the PropOptions<T, D> which is not exported by Vue. */
export type PropOptions<T = any> = Exclude<VueProp<any>, PropType<any>> & {
    validate?: ValidatorInterface|null,
    transform?: ((value: any) => any)|null,
    name?: string
};
export type PropMetadata = PropOptions & {propertyName: string};

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
