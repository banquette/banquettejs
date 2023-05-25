import { Inject, Service } from "@banquette/dependency-injection";
import { EventDispatcherService } from "@banquette/event";
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
