import { Service } from "@banquette/dependency-injection/decorator/service.decorator";
import { VarHolder } from "@banquette/utils-misc/var-holder";
import { TiptapConfigurationInterface } from "./tiptap-configuration.interface";

@Service()
export class TiptapConfigurationService extends VarHolder<string, TiptapConfigurationInterface> {

}
