import { Constructor } from "@banquette/utils-type";

export type InjectableFactoryType = (constructor: Constructor, constructorParams: any[]) => any;
