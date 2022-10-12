import { Constructor } from "@banquette/utils-type/types";
import { AdapterInterface } from "./adapter/adapter.interface";
export declare type AdapterIdentifier<T extends AdapterInterface> = Constructor<T> | 'auto';