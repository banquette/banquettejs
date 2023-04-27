import { AbstractDomModule, DomModule } from "@banquette/dom-modules";
import { VueBuilder } from "@banquette/vue-typescript";

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
