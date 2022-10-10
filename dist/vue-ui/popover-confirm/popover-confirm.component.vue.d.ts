import { Vue } from "@banquette/vue-typescript/vue";
export default class PopoverConfirmComponent extends Vue {
    /**
     * Name of the component to use as icon.
     * If `null`, no icon is shown.
     */
    icon: string;
    /**
     * Message to show to the user.
     */
    message: string;
    /**
     * Text of the confirm button.
     */
    confirmText: string;
    /**
     * Text of the cancel button.
     */
    cancelText: string;
    dropdownVisible: boolean;
    showDropdown(): void;
    /**
     * Confirm the action.
     */
    confirm(): void;
    /**
     * Cancel the action.
     */
    cancel(): void;
}
