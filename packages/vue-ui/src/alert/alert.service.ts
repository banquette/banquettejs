import { Inject, Service } from "@banquette/dependency-injection";
import { DispatchResult, EventDispatcherService } from "@banquette/event";
import { isServer, proxy } from "@banquette/utils-misc";
import { ensureBoolean, isString } from "@banquette/utils-type";
import { createApp } from "vue";
import { AlertOptionsInterface } from "./alert-options.interface";
import { BtAlertsStack } from "./component/alerts-stack";
import { AlertEvents } from "./constant";
import { ShowAlertEvent } from "./event/show-alert.event";
import { ShortenedAlertOptions } from "./type";

@Service()
export class AlertService {
    private queue: AlertOptionsInterface[] = [];

    public constructor(@Inject(EventDispatcherService) private eventDispatcher: EventDispatcherService) {

    }

    /**
     * Show an alert.
     */
    public show(message: string, variant?: string, ttl?: number): void;
    public show(options: (Partial<AlertOptionsInterface> & {message: string})|string): void;
    public show(optionsOrMessage: (Partial<AlertOptionsInterface> & {message: string})|string, variant?: string, ttl?: number): void {
        this.showAlert(this.normalizeShortenedOptions(optionsOrMessage, variant, ttl));
    }

    /**
     * Hide all visible alerts that have been added through the alert service.
     */
    public hideAll(): void {
        this.eventDispatcher.dispatch(AlertEvents.HideAll);
    }

    /**
     * Show an alert.
     */
    private showAlert(options: AlertOptionsInterface): void {
        if (isServer()) {
            return ;
        }
        this.flushQueue();
        const result: DispatchResult = this.eventDispatcher.dispatch(AlertEvents.Show, new ShowAlertEvent(options));
        if (!result.error && result.results.indexOf(true) < 0) {
            if (!this.queue.length) {
                const wrapper = document.createElement('div');
                createApp(BtAlertsStack).mount(wrapper);
                document.body.appendChild(wrapper);
                setTimeout(proxy(this.flushQueue, this));
            }
            this.queue.push(options);
        }
    }

    /**
     * Show alerts queued while the stack component was being created.
     */
    private flushQueue(): void {
        const items = this.queue;
        this.queue = [];
        for (const item of items) {
            this.showAlert(item);
        }
    }

    /**
     * Normalize the input from a shorthand method into a AlertOptionsInterface.
     */
    private normalizeShortenedOptions(optionsOrMessage: ShortenedAlertOptions|string,
                                      variant?: string,
                                      ttl?: number): AlertOptionsInterface {
        if (isString(optionsOrMessage)) {
            return this.normalizeShortenedOptions({
                message: optionsOrMessage,
                variant: variant || '',
                ttl: ttl || null
            });
        }
        return Object.assign({}, {
            variant: optionsOrMessage.variant,
            message: optionsOrMessage.message,
            title: optionsOrMessage.title || null,
            icon: optionsOrMessage.icon || null,
            ttl: optionsOrMessage.ttl || null,
            closable: ensureBoolean(optionsOrMessage.closable),
            stack: optionsOrMessage.stack,
            allowHtml: optionsOrMessage.allowHtml || false,
            position: optionsOrMessage.position
        }) as AlertOptionsInterface;
    }
}
