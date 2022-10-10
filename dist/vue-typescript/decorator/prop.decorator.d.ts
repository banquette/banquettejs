import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { Prop as VueProp, PropType } from "vue";
export declare type PropOptions = Exclude<VueProp<any>, PropType<any>> & {
    validate?: ValidatorInterface | null;
    transform?: ((value: any) => any) | null;
    name?: string;
};
export declare type PropMetadata = PropOptions & {
    propertyName: string;
};
/**
 * Allow you to define that a property of a component's class should be declared as a Vue prop.
 */
export declare function Prop(options?: PropOptions): Function;
