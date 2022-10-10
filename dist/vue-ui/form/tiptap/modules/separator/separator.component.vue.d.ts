import { ModuleInterface } from "../../../";
import { AbstractTiptapModule } from "../abstract-tiptap-module";
declare module '@banquette/vue-ui/form/tiptap' {
    interface ModuleInterface {
        "|": never;
    }
}
export default class SeparatorComponent extends AbstractTiptapModule<ModuleInterface["|"]> {
}
