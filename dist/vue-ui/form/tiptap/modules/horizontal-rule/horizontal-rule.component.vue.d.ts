import { HorizontalRuleOptions } from "@tiptap/extension-horizontal-rule";
import { Extensions } from "@tiptap/vue-3";
import { ModuleInterface } from "../../../";
import { AbstractTiptapModule } from "../abstract-tiptap-module";
import { I18nInterface } from "./i18n.interface";
declare module '@banquette/vue-ui/form/tiptap' {
    interface ModuleInterface {
        horizontalRule: {
            tiptap?: Partial<HorizontalRuleOptions>;
        };
    }
}
export default class HorizonalRuleComponent extends AbstractTiptapModule<ModuleInterface["horizontalRule"]> {
    /**
     * i18n configuration.
     */
    i18n: I18nInterface;
    /**
     * @inheritDoc
     */
    getExtensions(): Extensions;
    toggle(): void;
}
