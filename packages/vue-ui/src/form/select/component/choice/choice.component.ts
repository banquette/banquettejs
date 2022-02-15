import { UsageException } from "@banquette/exception/usage.exception";
import { Choice } from "@banquette/ui/form/select/choices/choice";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { InjectProvided } from "@banquette/vue-typescript/decorator/inject-provided.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Watch, ImmediateStrategy } from "@banquette/vue-typescript/decorator/watch.decorator";
import { Vue } from "@banquette/vue-typescript/vue";
import { UndefinedValue, BeforeSlotOrigin, AfterSlotOrigin } from "../../constant";

@Component('bt-form-select-choice')
export default class ChoiceComponent extends Vue {
    private static MaxId: number = 0;

    /**
     * These props are only used when the prop `choice` is not set
     * (meaning the `bt-form-select-choice` has been created outside of the `bt-form-select`).
     */
    @Prop({default: UndefinedValue}) public value!: any;
    @Prop({type: String, default: null}) public label!: string|null;
    @Prop({type: Boolean, default: undefined}) public disabled?: boolean;
    @Prop({type: Boolean, default: undefined}) public selected?: boolean;

    /**
     * Only used when the component is created from the `form-select` component directly.
     */
    @Prop({type: Object, default: null}) public composableChoice!: Choice|null;

    /**
     * If created in a slot, contains the position of the slot relative to the internal list of choices.
     */
    @InjectProvided('position', null) public position!: string|null;

    public parent!: any;

    /**
     * The actual `Choice` item this component is responsible of.
     */
    @Expose() public choice: Choice|null = null;

    /**
     * Vue lifecycle hook.
     */
    public beforeMount(): void {
        const $parent = this.getParent('bt-form-select');
        if ($parent === null) {
            throw new UsageException(`A "<bt-form-select-choice>" component must be placed inside a "<bt-form-select>".`);
        }
        this.parent = $parent;
    }

    /**
     * Vue lifecycle hook.
     */
    public unmounted(): void {
        if (this.composableChoice === null && this.choice !== null) {
            this.parent.vm.choices.remove(this.choice);
        }
    }

    /**
     * Toggle the selection of the choice.
     */
    @Expose() public select(): void {
        if (!this.choice) {
            return;
        }
        this.parent.select(this.choice);
    }

    @Expose() public deselect(): void {
        if (!this.choice) {
            return;
        }
        this.parent.deselect(this.choice);
    }

    /**
     * Try to get a label to use in the selection resume for the current item.
     */
    private resolveChoiceLabel(): string {
        if (this.label !== null) {
            return this.label;
        }
        if (!isUndefined(this.$slots.default)) {
            return this.getVNodesText(this.$slots.default());
        }
        return '(missing label)';
    }

    @Watch('composableChoice', {immediate: ImmediateStrategy.NextTick})
    private onComposableChoiceChange(newValue: any) {
        if (this.choice && newValue && this.choice.identifier === newValue.identifier) {
            return ;
        }
        if (!newValue) {
            this.choice = new Choice(
                this.resolveChoiceLabel(),
                this.value,
                '__generated' + (++ChoiceComponent.MaxId),
                this.position === 'before' ? BeforeSlotOrigin : AfterSlotOrigin
            );
            this.choice.disabled = !!this.disabled;
        } else {
            this.choice = newValue;
        }
        if (this.parent && !this.composableChoice && this.choice) {
            // If the choice is in the "choices-before" slot.
            if (this.position === 'before') {
                let i;
                for (i = 0; i < this.parent.vm.choices.items.length && this.parent.vm.choices.items[i].origin === this.choice.origin; ++i);

                // Insert after the last item of the same origin.
                this.parent.vm.choices.insert([this.choice], i);
            } else {
                // Append at the end of the collection
                this.parent.vm.choices.append([this.choice]);
            }
        }
    }

    @Watch(function(this: ChoiceComponent) {
        // Only watch the props if there is no choice given as prop.
        return this.composableChoice === null ? ['value', 'disabled', 'selected'] : [];
    }, {immediate: ImmediateStrategy.NextTick}) private onChoicePropsChange(): void {
        if (!this.choice) {
            return ;
        }
        /**
         * The test against "UndefinedValue" is required for all props because
         * if the choice component is in a `v-for` and a previous item is removed, vue component
         * of the choice will change, and all the props will be reassigned.
         *
         * So we need to differentiate between (for example) "selected" being `false` because the user changed it
         * and "selected" being `false` because the vue component has changed.
         */
        if (this.value !== UndefinedValue) {
            this.choice.value = this.value;
        }
        if (!isUndefined(this.disabled)) {
            this.choice.disabled = this.disabled;
        }
        if (!isUndefined(this.selected)) {
            // If the selection state changed.
            if (this.selected && !this.choice.selected) {
                this.parent.select(this.choice, false);
            } else if (!this.selected && this.choice.selected) {
                this.parent.deselect(this.choice);
            }
        }
    }
}
