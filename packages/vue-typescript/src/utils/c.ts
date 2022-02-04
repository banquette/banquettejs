import { getCtorFromVccOption } from "./get-ctor-from-vcc-option";

/**
 * Ensure the constructor is returned in case the input is the export of a SFC.
 */
export function c(input: any): any {
    const res = getCtorFromVccOption(input);
    return res ? res : input;
}
