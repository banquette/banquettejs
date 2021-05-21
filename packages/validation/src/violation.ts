import { ViolationInterface } from "./violation.interface";

export class Violation implements ViolationInterface {
    public constructor(public readonly path: string,
                       public readonly type: string,
                       public readonly message?: string) {
    }
}
