import { TransformerInterface } from "./transformer.interface";
export declare type TransformerFactory<T extends TransformerInterface = TransformerInterface> = (...args: any[]) => T;
