import { AbstractConstructor } from "@banquette/utils-type";
import { Vue } from "../vue";
import { anyToComponentCtor } from "./converters";

/**
 * Like `instance of` but works with SFC exports.
 */
export function isInstanceOf<T extends AbstractConstructor<Vue>>(input: any, candidate: T): input is InstanceType<T> {
    const ctor = anyToComponentCtor(input);
    candidate = anyToComponentCtor(candidate) as any;
    return ctor !== null && ctor.prototype === candidate.prototype;
}
