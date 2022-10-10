import { EventDispatcherService } from "@banquette/event/event-dispatcher.service";
import { AlertOptionsInterface } from "./alert-options.interface";
export declare class AlertService {
    private eventDispatcher;
    private queue;
    constructor(eventDispatcher: EventDispatcherService);
    /**
     * Show an alert.
     */
    show(message: string, variant?: string, ttl?: number): void;
    show(options: (Partial<AlertOptionsInterface> & {
        message: string;
    }) | string): void;
    /**
     * Hide all visible alerts that have been added through the alert service.
     */
    hideAll(): void;
    /**
     * Show an alert.
     */
    private showAlert;
    /**
     * Show alerts queued while the stack component was being created.
     */
    private flushQueue;
    /**
     * Normalize the input from a shorthand method into a AlertOptionsInterface.
     */
    private normalizeShortenedOptions;
}
