import { Inject } from "@banquette/dependency-injection/decorator/inject.decorator";
import { Service } from "@banquette/dependency-injection/decorator/service.decorator";
import { Injector } from "@banquette/dependency-injection/injector";
import { EventDispatcherService } from "@banquette/event/event-dispatcher.service";
import { VueBuilder } from "@banquette/vue-typescript/vue-builder";
import { DialogEvents } from "./constant";
import { HideDialogEventArg } from "./event/hide-dialog.event-arg";
import { ShowDialogEventArg } from "./event/show-dialog.event-arg";

@Service()
export class DialogService {
    public constructor(@Inject(EventDispatcherService) private eventDispatcher: EventDispatcherService) {

    }

    /**
     * Show a dialog by id.
     */
    public show(id: string, args: Record<string, any> = {}): void {
        this.eventDispatcher.dispatch(DialogEvents.Show, new ShowDialogEventArg(id, args));
    }

    /**
     * Hide a dialog by id.
     */
    public hide(id: string): void {
        this.eventDispatcher.dispatch(DialogEvents.Hide, new HideDialogEventArg(id));
    }

    /**
     * Hide all visible dialogs.
     */
    public hideAll(): void {
        this.eventDispatcher.dispatch(DialogEvents.HideAll);
    }
}

/**
 * Register global utilities.
 */
VueBuilder.RegisterGlobalProperty('btShowDialog', (id: string, args: Record<string, any> = {}) => {
    Injector.Get(DialogService).show(id, args);
});

VueBuilder.RegisterGlobalProperty('btHideDialog', (id: string) => {
    Injector.Get(DialogService).hide(id);
});

VueBuilder.RegisterGlobalProperty('btHideAllDialogs', () => {
    Injector.Get(DialogService).hideAll();
});
