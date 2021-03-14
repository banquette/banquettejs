import { ConstructorFunction } from "@banquette/utils";
import { AdapterInterface } from "./adapter/adapter.interface";

export type Adapter = AdapterInterface | ConstructorFunction<AdapterInterface> | symbol | 'auto';
