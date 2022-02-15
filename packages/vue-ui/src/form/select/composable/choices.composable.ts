import { ChoicesModule } from "@banquette/ui/form/select/choices/choices.module";
import { ensureArray } from "@banquette/utils-type/ensure-array";
import { SamePropertiesAndType } from "@banquette/utils-type/types";
import { Composable } from "@banquette/vue-typescript/decorator/composable.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Watch, ImmediateStrategy } from "@banquette/vue-typescript/decorator/watch.decorator";

/**
 * The group assigned to all choices assigned by the `choices` prop.
 */
export const PropOrigin = Symbol('prop');

/**
 * List of configuration values to watch and synchronize with the module.
 */
const ConfigurationProperties: Array<keyof SamePropertiesAndType<ChoicesComposable, ChoicesModule>> = [
    'choicesLabelProperty',
    'choicesLabelPropertyExpr',
    'choicesIdentifierProperty',
    'choicesValueProperty',
    'choicesDisabledProperty',
    'multiple',
    'selectionResumeMaxLength'
];

/**
 * VueJS bridge to ChoicesModule.
 */
@Composable()
export class ChoicesComposable {
    /**
     * @see ChoicesModule
     */
    @Prop({type: Object, default: null}) public choices!: any[]|null;
    @Prop({type: String, default: null}) public choicesLabelProperty!: string|null;
    @Prop({type: String, default: null}) public choicesLabelPropertyExpr!: string|null;
    @Prop({type: String, default: null}) public choicesIdentifierProperty!: string|null;
    @Prop({type: String, default: null}) public choicesValueProperty!: string|null;
    @Prop({type: String, default: null}) public choicesDisabledProperty!: string|null;
    @Prop({type: String, default: ''}) public placeholder!: string;
    @Prop({type: Boolean, default: false}) public multiple!: boolean;
    @Prop({type: Number, default: 30}) public selectionResumeMaxLength!: number;

    /**
     * The actual module instance.
     */
    public module!: ChoicesModule;

    @Watch('choices', {immediate: ImmediateStrategy.NextTick})
    private syncChoices(): void {
        this.module.set(ensureArray(this.choices), PropOrigin);
    }

    @Watch(ConfigurationProperties, {immediate: ImmediateStrategy.NextTick})
    private syncConfigurationProps(): void {
        this.module.selectionPlaceholder = this.placeholder;
        for (const key of ConfigurationProperties) {
            (this.module[key] as any) = this[key];
        }
    }
}
