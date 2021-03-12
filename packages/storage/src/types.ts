import { ConstructorFunction } from "@banquette/core";
import { AdapterInterface } from "./adapter/adapter.interface";

export type Adapter = AdapterInterface | ConstructorFunction<AdapterInterface> | symbol | 'auto';
