import { Inject, Service, Injector } from "@banquette/dependency-injection";
import { EventDispatcherService } from "@banquette/event";
import { VueBuilder } from "@banquette/vue-typescript";
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
// The assignation is so the /**!PURE*/ comment is kept when compiling.
// It's then replace by "/* @__PURE__ */" at the end of the build.
// If "/* @__PURE__ */" is set right here, it'll be striped out when building.
const g = /**!PURE*/ ((_) => {
    VueBuilder.RegisterGlobalProperty('btShowDialog', (id: string, args: Record<string, any> = {}) => {
        Injector.Get(_).show(id, args);
    });

    VueBuilder.RegisterGlobalProperty('btHideDialog', (id: string) => {
        Injector.Get(_).hide(id);
    });

    VueBuilder.RegisterGlobalProperty('btHideAllDialogs', () => {
        Injector.Get(_).hideAll();
    });
})(DialogService);
