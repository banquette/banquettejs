<style src="./choice.component.css" scoped></style>
<template src="./choice.component.html"></template>
<script lang="ts">
import { UsageException } from "@banquette/exception";
import { Choice } from "@banquette/ui";
import { trim } from "@banquette/utils-string";
import { isUndefined } from "@banquette/utils-type";
import { IMaterialCheck } from "@banquette/vue-material-icons";
import { IMaterialDelete } from "@banquette/vue-material-icons";
import { Component } from "@banquette/vue-typescript";
import { Expose } from "@banquette/vue-typescript";
import { InjectProvided } from "@banquette/vue-typescript";
import { Prop } from "@banquette/vue-typescript";
import { Watch, ImmediateStrategy } from "@banquette/vue-typescript";
import { Vue } from "@banquette/vue-typescript";
import { toRaw, PropType } from "vue";
import { UndefinedValue } from "../../../constant";
import { BeforeSlotOrigin, AfterSlotOrigin } from "../../constant";
import { BtSelectGroup, BtFormSelect } from "../../";

@Component({
    name: 'bt-form-select-choice',
    components: [IMaterialCheck, IMaterialDelete]
})
export default class BtChoice extends Vue {
    /**
     * These props are only used when the prop `choice` is not set
     * (meaning the `bt-form-select-choice` has been created outside the `bt-form-select`).
     */
    @Prop({default: UndefinedValue}) public value!: any;
    @Prop({type: String as PropType<string|null>, default: null}) public label!: string|null;
    @Prop({type: Boolean, default: undefined}) public disabled?: boolean;
    @Prop({type: Boolean, default: undefined}) public selected?: boolean;

    /**
     * Only used when the component is created from the `form-select` component directly.
     */
    @Prop({type: Object as PropType<Choice|null>, default: null}) public internalChoice!: Choice|null;

    /**
     * If created in a slot, contains the position of the slot relative to the internal list of choices.
     */
    @InjectProvided('position', null) public position!: string|null;

    /**
     * The actual `Choice` item this component is responsible for.
     */
    @Expose() public choice: Choice|null = null;

    private parent!: InstanceType<typeof BtFormSelect>;
    private parentGroup!: InstanceType<typeof BtSelectGroup>|null;

    /**
     * Vue lifecycle hook.
     */
    public beforeMount(): void {
        const $parent = this.getParent('bt-form-select' as any);
        if ($parent === null) {
            throw new UsageException(`A "<bt-form-select-choice>" component must be placed inside a "<bt-form-select>".`);
        }
        this.parent = $parent as InstanceType<typeof BtFormSelect>;
        this.parentGroup = this.getParent('bt-form-select-group' as any) as InstanceType<typeof BtSelectGroup>|null;
    }

    /**
     * Vue lifecycle hook.
     */
    public unmounted(): void {
        if (this.internalChoice === null && this.choice !== null && this.parent && this.parent.vm) {
            this.parent.vm.removeChoice(this.choice);
        }
    }

    /**
     * Toggle the selection of the choice.
     */
    @Expose() public select(): void {
        if (!this.choice) {
            return;
        }
        this.parent.vm.selectChoice(this.choice);
    }

    @Expose() public deselect(): void {
        if (!this.choice) {
            return;
        }
        this.parent.vm.deselectChoice(this.choice.identifier);
    }

    @Expose() public remove(): void {
        if (!this.choice) {
            return;
        }
        if (this.choice.selected) {
            this.deselect();
        }
        this.parent.vm.removeChoice(this.choice);
    }

    /**
     * Try to get a label to use in the selection resume for the current item.
     */
    private resolveLabel(choice: Choice): string {
        if (this.label !== null) {
            return this.label;
        }
        if (!isUndefined(this.$slots.default)) {
            const slotLabel = trim(this.getVNodesText(this.$slots.default()));
            if (slotLabel.length > 0) {
                return slotLabel;
            }
            if (choice.label) {
                return choice.label;
            }
            console.warn('No text could be extracted from the slot content. Please define a label using the "label" prop for choice with value:', this.value);
            return '(empty label)';
        }
        if (choice.label) {
            return choice.label;
        }
        console.warn('No label have been found for choice with value:', this.value, 'Please define one using the "label" prop.');
        return '(missing label)';
    }

    @Watch('internalChoice', {immediate: ImmediateStrategy.NextTick})
    private onInternalChoiceChange(newValue: any) {
        if (this.choice && newValue && toRaw(this.choice) === toRaw(newValue)) {
            return ;
        }
        // If internalChoice is not defined, this means the choice comes from a slot.
        if (!newValue) {
            this.choice = this.parent.vm.normalizeChoice(
                this.value === UndefinedValue ? this.getSlotTextContent('default') : this.value,
                this.position === 'before' ? BeforeSlotOrigin : AfterSlotOrigin
            );
            /**
             * If the returned value is `null` the template will not show anything
             * because of the `v-if` on the root node.
             */
            if (this.choice !== null) {
                this.choice.external = true;
                this.choice.label = this.resolveLabel(this.choice);
                this.choice.disabled = !!this.disabled;

                // Force the group to `null` because the choice comes from a slot.
                // To group a choice in a slot, the `bt-form-select-group` component must be used directly.
                // "group" could be defined if the value is an object from which a group has been extracted by `normalizeChoice()`.
                // But it cannot work because the render is delegated to the slot.
                // By forcing it to null we ensure no group is created from this choice.
                this.choice.group = null;

                if (this.parent) {
                    // Always append to the end because each origin have a separate collection of items in the view model.
                    this.parent.vm.appendChoices([this.choice]);
                }
            }
        } else {
            this.choice = newValue;
        }
    }

    @Watch('choice.focused', {immediate: ImmediateStrategy.Mounted})
    private onFocusChange(newValue: any) {
        if (newValue) {
            this.scrollIntoView();
        }
    }

    @Watch('choice.visible', {immediate: ImmediateStrategy.NextTick})
    private onVisibilityChange() {
        if (!this.parentGroup || !this.choice) {
            return ;
        }
        this.parentGroup.updateChoice(this.choice);
    }

    @Watch(function(this: BtChoice) {
        // Only watch the props if there is no choice given as prop.
        return this.internalChoice === null ? ['value', 'label', 'disabled', 'selected'] : [];
    }, {immediate: ImmediateStrategy.NextTick}) private onChoicePropsChange(): void {
        if (!this.choice) {
            return ;
        }
        if (!isUndefined(this.disabled)) {
            this.choice.disabled = this.disabled;
        }
        if (!isUndefined(this.selected)) {
            // If the selection state changed.
            if (this.selected && !this.choice.selected) {
                this.parent.selectChoice(this.choice);
            } else if (!this.selected && this.choice.selected) {
                this.parent.deselectChoice(this.choice.identifier);
            }
        }
    }

    /**
     * Scroll the choice into the view.
     */
    private scrollIntoView = (() => {
        let tries = 0;
        let timer: any|null = null;
        const tryToScroll = () => {
            // Test if the element or one of its parent has a display: none
            // @see https://stackoverflow.com/a/53068496
            if (!!this.$el.offsetParent) {
                const ph = this.$el.parentNode.offsetHeight;
                const ch = this.$el.offsetHeight;
                this.$el.parentNode.scrollTop = this.$el.offsetTop - ((ph / 2) - (ch / 2));
                if (timer !== null) {
                    clearTimeout(timer);
                }
                timer = null;
            } else if (tries < 20) {
                timer = setTimeout(tryToScroll);
                ++tries;
            }
        };
        return (): void => {
            if (timer !== null || !this.choice || isUndefined(this.$el.scrollIntoView)) {
                return;
            }
            tries = 0;
            tryToScroll();
        };
    })();
}
</script>
