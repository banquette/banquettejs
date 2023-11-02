import { Inject, Service } from "@banquette/dependency-injection";
import { EventDispatcherService } from "@banquette/event";
import { UsageException } from "@banquette/exception";
import { proxy } from "@banquette/utils-misc";
import { isUndefined } from "@banquette/utils-type";
import { DialogEvents } from "./constant";
import { HideDialogEventArg } from "./event/hide-dialog.event-arg";
import { ShowDialogEventArg } from "./event/show-dialog.event-arg";
import { VisibilityChangeDialogEventArg } from "./event/visibility-change-dialog.event-arg";

@Service()
export class DialogService {
    private promises: Record<string, {resolve: (value: any) => any, reject: (reason: any) => any}> = {};

    public constructor(@Inject(EventDispatcherService) private eventDispatcher: EventDispatcherService) {
        this.eventDispatcher.subscribe(DialogEvents.VisibilityChange, proxy(this.onDialogVisibilityChange, this));
    }

    /**
     * Show a dialog by id.
     */
    public show<R = unknown>(id: string, args: Record<string, any> = {}): Promise<R> {
        if (!isUndefined(this.promises[id])) {
            return Promise.reject(new UsageException(`The dialog id "${id}" is already opened.'`));
        }
        const promise = new Promise<R>((resolve, reject) => {
            this.promises[id] = {resolve, reject};
        });
        this.eventDispatcher.dispatch(DialogEvents.Show, new ShowDialogEventArg(id, args));
        return promise;
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

    private onDialogVisibilityChange(event: VisibilityChangeDialogEventArg): void {
        if (isUndefined(this.promises[event.id]) || event.visible) {
            return ;
        }
        this.promises[event.id].resolve(event.result);
        delete this.promises[event.id];
    }
}
