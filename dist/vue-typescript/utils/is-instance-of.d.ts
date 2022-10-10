import { AbstractConstructor } from "@banquette/utils-type/types";
import { Vue } from "../vue";
/**
 * Like `instance of` but works with SFC exports.
 */
export declare function isInstanceOf<T extends AbstractConstructor<Vue>>(input: any, candidate: T): input is InstanceType<T>;
