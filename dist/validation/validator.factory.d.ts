import { ValidatorInterface } from "./validator.interface";
export declare type ValidatorFactory<T extends ValidatorInterface = ValidatorInterface> = (...args: any[]) => T;
