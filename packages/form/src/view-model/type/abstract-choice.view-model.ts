import { ViewModel } from "../view-model";
import { ChoicesComposable, SelectionChangeCallback } from "./composable/choices/choices.composable";
import { RemoteComposable } from "./composable/remote/remote.composable";

/**
 * Base class for choices based form components.
 */
export abstract class AbstractChoiceViewModel extends ViewModel {
    /**
     * Composables.
     */
    public choices: ChoicesComposable = new ChoicesComposable();
    public remote: RemoteComposable = new RemoteComposable();

    /**
     * @inheritDoc
     */
    public initialize(): void {
        super.initialize();
    }

    /**
     * Alias of ChoicesComposable::onSelectionChange.
     */
    public onSelectionChange(cb: SelectionChangeCallback): void {
        this.choices.onSelectionChange(cb);
    }

    /**
     * @inheritDoc
     */
    public onFocus() {
        super.onFocus();
        this.choices.show();
    }

    /**
     * @inheritDoc
     */
    public onBlur() {
        super.onBlur();
        this.choices.hide();
    }
}
