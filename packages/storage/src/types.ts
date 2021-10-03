import { Constructor } from "@banquette/utils-type";
import { AdapterInterface } from "./adapter/adapter.interface";

export type AdapterIdentifier = Constructor<AdapterInterface> | 'auto';
