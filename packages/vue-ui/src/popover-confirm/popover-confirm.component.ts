import { IconHelp } from "@banquette/vue-material-icons/icon-help";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { Vue } from "@banquette/vue-typescript/vue";
import { DropdownComponent } from "../dropdown";
import { ThemeConfiguration } from "./theme-configuration";

@Themeable(ThemeConfiguration)
@Component({
    name: 'bt-popover-confirm',
    components: [DropdownComponent, IconHelp],
    emits: ['confirm', 'cancel']
})
export default class PopoverConfirmComponent extends Vue {
    /**
     * Name of the component to use as icon.
     * If `null`, no icon is shown.
     */
    @Prop({type: String, default: 'icon-help'}) public icon!: string;

    /**
     * Message to show to the user.
     */
    @Prop({type: String, default: 'Are you sure?'}) public message!: string;

    /**
     * Text of the confirm button.
     */
    @Prop({type: String, default: 'Yes'}) public confirmText!: string;

    /**
     * Text of the cancel button.
     */
    @Prop({type: String, default: 'No'}) public cancelText!: string;

    @Expose() public dropdownVisible: boolean = false;

    @Expose() public showDropdown(): void {
        this.dropdownVisible = true;
    }

    /**
     * Confirm the action.
     */
    @Expose() public confirm(): void {
        this.dropdownVisible = false;
        this.$emit('confirm');
    }

    /**
     * Cancel the action.
     */
    @Expose() public cancel(): void {
        this.dropdownVisible = false;
        this.$emit('cancel');
    }
}
