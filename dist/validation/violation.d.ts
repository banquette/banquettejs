import { ViolationInterface } from "./violation.interface";
export declare class Violation implements ViolationInterface {
    readonly path: string;
    readonly type: string;
    readonly message?: string | undefined;
    constructor(path: string, type: string, message?: string | undefined);
}
