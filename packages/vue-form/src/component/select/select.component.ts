import { Choice } from "@banquette/form/view-model/module/choices/choice";
import { ChoiceOrigin } from "@banquette/form/view-model/module/choices/constant";
import { ChoiceFocusedEvent } from "@banquette/form/view-model/module/choices/event/choice-focused.event";
import { SelectViewModel } from "@banquette/form/view-model/type/select.view-model";
import { proxy } from "@banquette/utils-misc/proxy";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Import } from "@banquette/vue-typescript/decorator/import.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { TemplateRef } from "@banquette/vue-typescript/decorator/template-ref.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { Watch, ImmediateStrategy } from "@banquette/vue-typescript/decorator/watch.decorator";
import { DropdownComponent } from "@banquette/vue-ui/component/dropdown"
import { AbstractVueFormComponent } from "../../abstract-vue-form.component";
import { ChoicesSearchComposable } from "../../composable/choices-search.composable";
import { ChoicesComposable, PropOrigin } from "../../composable/choices.composable";
import { RemoteComposable } from "../../composable/remote.composable";
import { ViewModelEvents } from "../../constant";
import { BeforeSlotOrigin, AfterSlotOrigin } from "./constant";
import ErrorComponent from "../error/error.component";
import ChoiceSlotWrapperComponent from "./choice-slot-wrapper.component";
import ChoiceComponent from "./choice/choice.component";

@Themeable({
    vars: {
        color: 'slvxvxoa',
        outlineWidth: 'm4vweagr',
        outlineColor: 'aqqhi16f',
        padding: 'x73pwbop',
        borderRadius: 'b0whwn2z',
        boxShadow: 'ejw144jm',
        background: 'fafhipdb',
        fontSize: 'yvwfinhn',

        label: {
            color: 'hjoqe90v',
            margin: 'r60agvhh',
            fontSize: 'xb4919f6',
            fontWeight: 'cfvnkwve'
        },

        placeholder: {
            color: 'qdw6a9fh',
            fontSize: 'bec4uu9b'
        },

        focused: {
            outlineWidth: 'e2xlw36v',
            outlineColor: 'b1hj6140',
            background: 'nfwwjp5t',
            boxShadow: 'd6zvc2x5',
        },

        error: {
            outlineWidth: 'x63if0mt',
            outlineColor: 'q30w5vdm',
            background: 'fv3912g0',
            boxShadow: 'cub29qik',

            focused: {
                outlineWidth: 'i5th4lyv'
            }
        },

        item: {
            padding: 'gfniyg31',
            fontSize: 'kvgm83v1',
            fontWeight: 'n8qgfkaz',
            textAlign: 'u24wen4s',
            background: 'le0o7rip',
            borderRadius: 'fc98whwp',

            selected: {
                background: 'g0jygszy',
                color: 'c1hisumg',
                fontWeight: 'dj3kr28d'
            },
            focused: {
                background: 'bv27i7xd',
                color: 'pe3tse2j',
                fontWeight: 't7ek2sv1'
            },
            hover: {
                background: 'r37vvg2b',
                color: 't60uhx31',
                fontWeight: 'geucru1t'
            },
            disabled: {
                background: 'l352sdz9',
                color: 'h8cc7zof',
                fontWeight: 's960zmjk',
                opacity: 'wmx51gbn'
            }
        },

        dropdown: {
            maxHeight: 'l2qpv9pp',
            overflow: 's293skdg',

            // TODO: add more variables
            searchInput: {
                background: 'e51vrdjf'
            }
        }
    }
})
@Component({
    name: 'bt-form-select',
    components: [ChoiceComponent, ChoiceSlotWrapperComponent, DropdownComponent, ErrorComponent]
})
export default class SelectComponent extends AbstractVueFormComponent<SelectViewModel> {
    /**
     * The label of the field.
     */
    @Prop({type: String, default: null}) public label!: string|null;

    /**
     * A help text to show to the user.
     */
    @Prop({type: String, default: null}) public help!: string|null;

    /**
     * If `true` the label will float and take the place of the placeholder when possible.
     */
    @Prop({type: Boolean, default: true}) public floatingLabel!: boolean;

    /**
     * Composable responsible of choices.
     */
    @Import(ChoicesComposable, false) public choicesComposable!: ChoicesComposable;

    /**
     * Composable responsible of filtering choices.
     */
    @Import(ChoicesSearchComposable, 'search') public choicesSearchComposable!: ChoicesSearchComposable;

    /**
     * Composable responsible of getting remote data.
     */
    @Import(RemoteComposable, false) public remoteComposable!: RemoteComposable;

    /**
     * Where to show the errors tooltip relative to the input.
     */
    @Prop({type: String, default: 'bottom-start'}) public errorPlacement!: string;

    // Template refs
    @TemplateRef('inputWrapper') public inputWrapper!: HTMLElement;
    // @ts-ignore
    @TemplateRef('dropdown') private dropdown!: DropdownComponent;
    @TemplateRef('dropdownScrollable') private dropdownScrollable!: HTMLElement;

    // Override the type to get autocompletion in the view.
    public vm!: SelectViewModel;
    public ready: boolean = false;
    private preSelectedChoices: Choice[] = [];

    public constructor() {
        super();
        this.eventPipeline.subscribe(ViewModelEvents.Ready, () => {
            this.vm.choices.synchronizeSelection(this.vm.value);
            for (const preSelectedChoice of this.preSelectedChoices) {
                this.vm.choices.select(preSelectedChoice, false, false);
            }
            this.ready = true;
        });
    }

    /**
     * A "ready safe" select for choice components.
     * That's specific of how the select component works, so it is not generalized in the module.
     */
    public select(choice: Choice, allowToggle: boolean = true): void {
        if (this.ready) {
            this.vm.choices.select(choice, false, allowToggle);
        } else {
            this.preSelectedChoices.push(choice);
        }
    }

    /**
     * Deselect is only here for consistency.
     */
    public deselect(choice: Choice): void {
        this.vm.choices.deselect(choice);
    }

    @Expose() public focus(): void {
        this.$refs.select.focus();
    }

    @Expose() public toggleChoices(): void {
        this.vm.choices.toggle();
        if (this.vm.choices.visible) {
            this.dropdown.$el.style.width = this.$el.offsetWidth + 'px';
        }
    }

    /**
     * @inheritDoc
     */
    protected setupViewModel(): SelectViewModel {
        const vm = new SelectViewModel(this.proxy, {
            controlToView: (value: any): any => value,
            viewToControl: (value: any): any => value
        });
        // Required so changes can be detected by Vue.
        this.remoteComposable.module = vm.remote;
        this.choicesComposable.module = vm.choices;
        this.choicesSearchComposable.module = vm.search;
        this.choicesComposable.module.originOrdering = [
            BeforeSlotOrigin,
            PropOrigin,
            ChoiceOrigin.Default,
            ChoiceOrigin.Remote,
            AfterSlotOrigin
        ];
        this.choicesComposable.module.onChoiceFocused(proxy(this.onChoiceFocused, this));
        return vm;
    }

    /**
     * Copy applicable props into the view data.
     */
    @Watch(['label', 'help', 'floatingLabel'], {immediate: ImmediateStrategy.NextTick})
    protected syncConfigurationProps(): void {
        this.vm.label = this.label;
        this.vm.help = this.help;
        this.vm.floatingLabel = this.floatingLabel;
    }

    /**
     * Called when a choice gained focus.
     */
    private onChoiceFocused(event: ChoiceFocusedEvent): void {
        for (let i = 0; i < this.dropdownScrollable.children.length; ++i) {
            if (this.dropdownScrollable.children[i].textContent === event.choice.label) {
                this.dropdownScrollable.children[i].scrollIntoView({block: 'center'});
                break;
            }
        }
    }
}
