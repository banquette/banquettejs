import { HeadlessInterface } from "@banquette/ui";
import { Composable, Prop, Watch, ImmediateStrategy } from "@banquette/vue-typescript";
import { PropType } from "vue";
import { BaseInputViewDataInterface } from "./base-input-view-data.interface";

@Composable()
export class BaseInputComposable implements HeadlessInterface<BaseInputViewDataInterface> {
    /**
     * The label of the field.
     */
    @Prop({type: String as PropType<string|null>, default: null}) public label!: string|null;

    /**
     * A placeholder value to show when there is no value selected.
     */
    @Prop({type: String as PropType<string|null>, default: null}) public placeholder!: string|null;

    /**
     * A help text to show to the user.
     */
    @Prop({type: String as PropType<string|null>, default: null}) public help!: string|null;

    /**
     * If `true` the label will float above the control and act as a placeholder is there is none.
     */
    @Prop({type: Boolean, default: true}) public floatingLabel!: boolean;

    /**
     * If `true` the errors will appear as an icon on the right side of the input that show a popover.
     *
     * This value is overridden to `true` internally if the control is in a group to preserve layout integrity.
     */
    @Prop({type: Boolean, default: true}) public floatingErrors!: boolean;

    /**
     * If `true` the help text will appear as an icon on the right side of the input that show a popover.
     *
     * This value is overridden to `true` internally if the control is in a group to preserve layout integrity.
     */
    @Prop({type: Boolean, default: false}) public floatingHelp!: boolean;

    /**
     * If `true`, a little asterisk extras is shown, indicating to the user that the field is mandatory.
     */
    @Prop({type: Boolean, default: false}) public required!: boolean;

    /**
     * If `true`, show the debug overlay.
     */
    @Prop({type: Boolean, default: false}) public debug!: boolean;

    public readonly viewData: BaseInputViewDataInterface = {} as any;

    public setViewData(viewData: BaseInputViewDataInterface): void {
        (this as any /* Writeable<BaseInputComposable> */).viewData = viewData;
        this.syncConfigurationProps();
    }

    /**
     * Copy applicable props into the view data.
     */
    @Watch(['label', 'placeholder', 'help', 'floatingLabel', 'floatingErrors', 'floatingHelp', 'required', 'debug'], {immediate: ImmediateStrategy.BeforeMount})
    protected syncConfigurationProps(): void {
        this.viewData.label = this.label;
        this.viewData.placeholder = this.placeholder;
        this.viewData.help = this.help;
        this.viewData.floatingLabel = this.floatingLabel;
        this.viewData.floatingErrors = this.floatingErrors;
        this.viewData.floatingHelp = this.floatingHelp;
        this.viewData.required = this.required;
        this.viewData.showDebug = this.debug;
    }
}
