<style src="./base-input.component.css" scoped></style>
<template src="./base-input.component.html" ></template>
<script lang="ts">
import { ControlViewDataInterface } from "@banquette/ui/form/control-view-data.interface";
import { isArray } from "@banquette/utils-type/is-array";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Computed } from "@banquette/vue-typescript/decorator/computed.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { Vue } from "@banquette/vue-typescript/vue";
import { IconMaterialHelp } from "@banquette/vue-material-icons/help";
import { IconMaterialWarning } from "@banquette/vue-material-icons/warning";
import { FormControlStateOverlayComponent } from "../../debug";
import { PopoverDirective, PopoverComponent } from "../../popover";
import { ProgressCircularComponent } from "../../progress/progress-circular";
import { BaseInputViewDataInterface } from "./base-input-view-data.interface";
import { ThemeConfiguration } from "./theme-configuration";

@Themeable(ThemeConfiguration)
@Component({
    name: 'bt-form-base-input',
    components: [ProgressCircularComponent, FormControlStateOverlayComponent, IconMaterialHelp, IconMaterialWarning, PopoverComponent],
    directives: [PopoverDirective]
})
export default class BaseFormInputComponent extends Vue {
    /**
     * The generic view data object.
     */
    @Prop({type: Object, required: true}) public v!: {base: BaseInputViewDataInterface, control: ControlViewDataInterface};

    @Computed() public get hasLabelSlot(): boolean {
        return this.hasNonEmptySlot('label');
    }

    @Computed() public get hasHelpSlot(): boolean {
        return this.hasNonEmptySlot('help');
    }

    @Computed() public get hasBeforeSlot(): boolean {
        return this.hasNonEmptySlot('before');
    }

    @Computed() public get hasAfterSlot(): boolean {
        return this.hasNonEmptySlot('after');
    }

    @Computed() public get hasBeforeRawSlot(): boolean {
        return this.hasNonEmptySlot('before-raw');
    }

    @Computed() public get hasAfterRawSlot(): boolean {
        return this.hasNonEmptySlot('after-raw');
    }

    @Computed() public get hasFloatingLabel(): boolean {
        return (!this.hasBeforeRawSlot && !this.hasBeforeSlot) && this.v.base.floatingLabel;
    }

    @Computed() public get hasFloatingErrors(): boolean {
        return this.v.base.floatingErrors || (this.v.base && this.v.base.inGroup);
    }

    @Computed() public get hasFloatingHelp(): boolean {
        return this.v.base.floatingHelp || (this.v.base && this.v.base.inGroup);
    }

    @Computed() public get hasValue(): boolean {
        const v: any = this.v.control.value;
        return v !== '' && v !== null && v !== undefined && (!isArray(v) || v.length > 0);
    }

    /**
     * Vue lifecycle.
     */
    public beforeMount(): void {
        this.v.base.hasAddon = this.hasAfterRawSlot || this.hasAfterSlot || this.hasBeforeRawSlot || this.hasBeforeSlot;
    }

    /**
     * Vue lifecycle.
     */
    public mounted(): void {
        let el = this.$el;
        this.v.base.inGroup = false;
        do {
            if (el.closest && el.closest('[data-form-input-addon]') !== null) {
                this.v.base.inGroup = true;
                break ;
            }
            el = el.parentElement;
        } while (el);
    }
}
</script>
