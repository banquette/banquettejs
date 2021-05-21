import { ValidatorInterface } from "./validator.interface";

export type ValidatorFactory<T = ValidatorInterface> = (...args: any[]) => T;
