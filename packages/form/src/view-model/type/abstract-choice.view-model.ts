import { Injector } from "@banquette/dependency-injection/injector";
import { UnsubscribeFunction } from "@banquette/event/type";
import { HttpResponse } from "@banquette/http/http-response";
import { RemoteModule } from "@banquette/model-api/module/remote/remote.module";
import { recursionSafeProxy } from "@banquette/utils-misc/recursion-safe-proxy";
import { Primitive } from "@banquette/utils-type/types";
import { ValueChangedFormEvent } from "../../event/value-changed.form-event";
import { ChoicesModule } from "../module/choices/choices.module";
import { ChoiceOrigin } from "../module/choices/constant";
import { SelectionChangedEvent } from "../module/choices/event/selection-changed.event";
import { ViewModel } from "../view-model";

const recursionProxySymbol = Symbol();

/**
 * Base class for choices based form components.
 */
export abstract class AbstractChoiceViewModel extends ViewModel {
    /**
     * Modules.
     */
    public choices = Injector.Get(ChoicesModule);
    public remote: any = Injector.Get(RemoteModule);

    protected unsubscribeFunctions: UnsubscribeFunction[] = [];

    /**
     * @inheritDoc
     */
    public async initialize(): Promise<void> {
        super.initialize();
        const choices = await this.fetchRemoteChoices();
        if (choices !== false) {
            this.choices.set(choices, ChoiceOrigin.Remote);
        }
        this.synchronizeSelection();
    }

    /**
     * Try to fetch remote choices if available.
     */
    public fetchRemoteChoices(urlParams: Record<string, Primitive> = {}): Promise<any>|false {
        if (!this.remote.isApplicable) {
            return false;
        }
        return new Promise((resolve) => {
            try {
                // TODO: Maybe set an error in the view model OR in the "choices" module.
                this.remote.send(null, urlParams).promise.then((response: HttpResponse<any>) => {
                    resolve(response.result);
                }).catch((reason: any) => {
                    if (!(reason instanceof HttpResponse) || !reason.isCanceled) {
                        console.error(reason);
                    }
                });
            } catch (e) {
                console.error(e);
            }
        });
    }

    /**
     * @inheritDoc
     */
    public dispose(): void {
        super.dispose();
        for (const fn of this.unsubscribeFunctions) {
            fn();
        }
    }

    /**
     * Listen for changes in both the choices composable and the form control to keep the selection in sync.
     */
    private synchronizeSelection(): void {
        // Try to select the items corresponding to the current value of the control when it changes.
        // (direction control => view)
        this.unsubscribeFunctions.push(this.control.onValueChanged(recursionSafeProxy((event: ValueChangedFormEvent) => {
            this.choices.synchronizeSelection(event.newValue);
        }, recursionProxySymbol)));

        // Update the control's value when an item is selected.
        // (direction view => control)
        this.unsubscribeFunctions.push(this.choices.onSelectionChanged(recursionSafeProxy((event: SelectionChangedEvent) => {
            this.value = event.newValue;
        }, recursionProxySymbol)));
    }
}
