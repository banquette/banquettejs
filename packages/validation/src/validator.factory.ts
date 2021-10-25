import { ValidatorInterface } from "./validator.interface";

export type ValidatorFactory<T extends ValidatorInterface = ValidatorInterface> = (...args: any[]) => T;
