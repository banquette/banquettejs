import { Constructor } from "@banquette/utils";
import { AdapterInterface } from "./adapter/adapter.interface";

export type Adapter = AdapterInterface | Constructor<AdapterInterface> | symbol | 'auto';
