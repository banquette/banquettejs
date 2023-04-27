import { Service } from "@banquette/dependency-injection";
import { VarHolder } from "@banquette/utils-misc";
import { TiptapConfigurationInterface } from "./tiptap-configuration.interface";

@Service()
export class TiptapConfigurationService extends VarHolder<string, TiptapConfigurationInterface> {

}
