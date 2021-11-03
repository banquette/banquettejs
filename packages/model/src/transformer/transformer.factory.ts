import { TransformerInterface } from "./transformer.interface";

export type TransformerFactory<T extends TransformerInterface = TransformerInterface> = (...args: any[]) => T;
