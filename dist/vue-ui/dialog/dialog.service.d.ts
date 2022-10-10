import { EventDispatcherService } from "@banquette/event/event-dispatcher.service";
export declare class DialogService {
    private eventDispatcher;
    constructor(eventDispatcher: EventDispatcherService);
    /**
     * Show a dialog by id.
     */
    show(id: string, args?: Record<string, any>): void;
    /**
     * Hide a dialog by id.
     */
    hide(id: string): void;
    /**
     * Hide all visible dialogs.
     */
    hideAll(): void;
}
