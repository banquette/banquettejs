import { Constructor } from "@banquette/utils-type/types";
import { SetupContext } from "vue";
import { ComponentMetadataInterface } from "./decorator/component-metadata.interface";
import { PrefixOrAlias } from "./type";
export declare function buildSetupMethod(ctor: Constructor, data: ComponentMetadataInterface, rootProps?: any, parentInst?: any, importName?: string, prefixOrAlias?: PrefixOrAlias): (props: any, context: SetupContext) => any;
