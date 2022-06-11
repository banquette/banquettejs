import { ControlViewDataInterface } from "@banquette/ui/form/control-view-data.interface";
import { isArray } from "@banquette/utils-type/is-array";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Computed } from "@banquette/vue-typescript/decorator/computed.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { Vue } from "@banquette/vue-typescript/vue";
import { IconMaterialHelp } from "@banquette/vue-icons/material/help";
import { IconMaterialWarning } from "@banquette/vue-icons/material/warning";
import { FormControlStateOverlayComponent } from "../../debug";
import { PopoverDirective } from "../../popover";
import { ProgressCircularComponent } from "../../progress/progress-circular";
import { BaseInputViewDataInterface } from "./base-input-view-data.interface";
import { ThemeConfiguration } from "./theme-configuration";

@Themeable(ThemeConfiguration)
@Component({
    name: 'bt-form-base-input',
    components: [ProgressCircularComponent, FormControlStateOverlayComponent, IconMaterialHelp, IconMaterialWarning],
    directives: [PopoverDirective]
})
export default class BaseInputComponent extends Vue {
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
        this.v.base.inGroup = this.hasParent('bt-form-base-input');
        this.v.base.hasAddon = this.hasAfterRawSlot || this.hasAfterSlot || this.hasBeforeRawSlot || this.hasBeforeSlot;
    }
}
