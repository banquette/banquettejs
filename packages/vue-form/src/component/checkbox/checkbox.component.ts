import { CheckboxViewModel } from "@banquette/form/view-model/type/checkbox-view.model";
import { VoidCallback } from "@banquette/utils-type/types";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { TemplateRef } from "@banquette/vue-typescript/decorator/template-ref.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { Watch, ImmediateStrategy } from "@banquette/vue-typescript/decorator/watch.decorator";
import { AbstractVueFormComponent } from "../../abstract-vue-form.component";
import { ViewModelEvents } from "../../constant";

@Themeable({
    vars: {
        gap: 'kxzzofc0',

        label: {
            color: 'ji0j61ze',
        },

        checkbox: {
            size: 'z822d0ih',
            borderRadius: 'r2fwd2hx',
            background: 'p9p45didf',
            outlineColor: 'tr8civxc',
            outlineWidth: 'bzwg1huc',
            iconColor: 'vs97h5lp',
            errorColor: 'lnk7g3yd',

            hover: {
                outlineWidth: 'nczo48pe',
                outlineColor: 'bclvwvrx'
            },

            focused: {
                outlineWidth: 'z0fqdfci',
                outlineColor: 'mdxuey2e'
            },

            checked: {
                background: 'q48u8kzb',
                iconColor: 'f56nkjn1',
                outlineWidth: 'my6rsp68',
                outlineColor: 'd870x15c'
            }
        },

        disabled: {
            label: {
                color: 'ja3lwl3o'
            },
            checkbox: {
                outlineWidth: 'ag6wftgl',
                outlineColor: 'z2svl9lw',
                background: 'hgwz6ho2'
            }
        }
    }
})
@Component('bt-form-checkbox')
export default class CheckboxComponent extends AbstractVueFormComponent<CheckboxViewModel> {
    /**
     * The text to show next to the checkbox.
     */
    @Prop({type: String, default: null}) public label!: string|null;

    /**
     * If `true` or `false` the checkbox will be checked or unchecked respectively
     * upon initialization or when a change is detected on the prop.
     */
    @Prop({type: Boolean, default: false}) public checked!: boolean;

    /**
     * The value to set to the control when the checkbox is checked.
     */
    @Prop({name: 'value', default: true}) public checkedValue!: any;

    /**
     * If `true` a radio group can be totally unchecked.
     */
    @Prop({type: Boolean, default: false}) public uncheckable!: any;

    /**
     * The value to set to the control when the checkbox is unchecked.
     */
    @Prop() public uncheckedValue!: any;

    /**
     * If defined the component will behave like a radio button.
     * Only one value can be selected for a given group.
     *
     * If `null` the component will behave like a checkbox.
     */
    @Prop({type: String, default: null}) public group!: string|null;

    /**
     * Where to show the errors tooltip relative to the input.
     */
    @Prop({type: String, default: 'bottom-start'}) public errorPlacement!: string;

    @TemplateRef('inputWrapper') public inputWrapper!: HTMLElement;

    // Override the type to get autocompletion in the view.
    public vm!: CheckboxViewModel;
    private unsubscribeMethods: VoidCallback[] = [];

    public constructor() {
        super();
        this.eventPipeline.subscribe(ViewModelEvents.Ready, () => {
            this.unsubscribeMethods.push(this.proxy.onReady(() => {
                this.vm.group = this.group;
            }));
            this.unsubscribeMethods.push(this.proxy.onDetach(() => {
                this.vm.removeGroup();
            }));
            if (this.checked) {
                this.vm.check();
            }
        });
    }

    /**
     * @inheritDoc
     */
    public beforeUnmount() {
        super.beforeUnmount();
        for (const fn of this.unsubscribeMethods) {
            fn();
        }
    }

    /**
     * @inheritDoc
     */
    protected setupViewModel(): CheckboxViewModel {
        return new CheckboxViewModel(this.proxy, {
            controlToView: (value: any): any => value,
            viewToControl: (value: any): any => value
        });
    }

    /**
     * Copy applicable props into the view data.
     */
    @Watch(['label', 'checkedValue', 'uncheckedValue', 'uncheckable'], {immediate: ImmediateStrategy.NextTick})
    protected syncConfigurationProps(): void {
        this.vm.label = this.label;
        this.vm.checkedValue = this.checkedValue;
        this.vm.uncheckedValue = this.uncheckedValue;
        this.vm.uncheckable = this.uncheckable;
    }

    @Watch('checked')
    private onCheckedChange(newValue: boolean): void {
        if (newValue) {
            this.vm.check();
        } else {
            this.vm.uncheck();
        }
    }

    @Watch('group')
    private onGroupChange(newValue: string|null): void {
        // Only set the group if a control has been assigned.
        // Otherwise we can ignore because a callback is already registered to the `onReady` event of the proxy.
        if (this.proxy.ready) {
            this.vm.group = newValue;
        }
    }
}
