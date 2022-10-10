import { ControlViewDataInterface } from "@banquette/ui/form/control-view-data.interface";
import { Vue } from "@banquette/vue-typescript/vue";
import { BaseInputViewDataInterface } from "./base-input-view-data.interface";
export default class BaseFormInputComponent extends Vue {
    /**
     * The generic view data object.
     */
    v: {
        base: BaseInputViewDataInterface;
        control: ControlViewDataInterface;
    };
    get hasLabelSlot(): boolean;
    get hasHelpSlot(): boolean;
    get hasBeforeSlot(): boolean;
    get hasAfterSlot(): boolean;
    get hasBeforeRawSlot(): boolean;
    get hasAfterRawSlot(): boolean;
    get hasFloatingLabel(): boolean;
    get hasFloatingErrors(): boolean;
    get hasFloatingHelp(): boolean;
    get hasValue(): boolean;
    /**
     * Vue lifecycle.
     */
    beforeMount(): void;
    /**
     * Vue lifecycle.
     */
    mounted(): void;
}
