import { AbstractDomModule } from "@banquette/dom-modules/abstract.dom-module";
import { DomModule } from "@banquette/dom-modules/decorator/dom-module.decorator";
import { VueBuilder } from "@banquette/vue-typescript/vue-builder";

@DomModule('vue')
class Vue extends AbstractDomModule {
    /**
     * @inheritDoc
     */
    public getDefaultOptionName(): string | null {
        return 'group';
    }

    /**
     * @inheritDoc
     */
    protected bind(): void {
        VueBuilder.CreateAppAndMount(
            this.element,
            this.getOption('group', '*'),
            {
                compilerOptions: {
                    delimiters: this.getOption('delimiters', ['${', '}'])
                }
            }
        );
    }
}
