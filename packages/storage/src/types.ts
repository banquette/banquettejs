import { Constructor } from "@banquette/utils";
import { AdapterInterface } from "./adapter/adapter.interface";

export type AdapterIdentifier = Constructor<AdapterInterface> | symbol | 'auto';
