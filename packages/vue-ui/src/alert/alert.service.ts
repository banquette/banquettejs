import { Inject } from "@banquette/dependency-injection/decorator/inject.decorator";
import { Service } from "@banquette/dependency-injection/decorator/service.decorator";
import { DispatchResult } from "@banquette/event/dispatch-result";
import { EventDispatcherService } from "@banquette/event/event-dispatcher.service";
import { proxy } from "@banquette/utils-misc/proxy";
import { ensureBoolean } from "@banquette/utils-type/ensure-boolean";
import { isString } from "@banquette/utils-type/is-string";
import { createApp } from "vue";
import { AlertOptionsInterface } from "./alert-options.interface";
import { AlertsStackComponent } from "./component/alerts-stack";
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
    public alert(options: (Partial<AlertOptionsInterface> & {message: string})|string, title?: string|null, variant?: string): void {
        this.showAlert(this.normalizeShortenedOptions(options, title, variant));
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
        this.flushQueue();
        const result: DispatchResult = this.eventDispatcher.dispatch(AlertEvents.Show, new ShowAlertEvent(options));
        if (!result.results.length) {
            if (!this.queue.length) {
                const wrapper = document.createElement('div');
                createApp(AlertsStackComponent).mount(wrapper);
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
                                      title?: string|null,
                                      variant?: string): AlertOptionsInterface {
        if (isString(optionsOrMessage)) {
            return this.normalizeShortenedOptions({
                message: optionsOrMessage,
                title: title || null,
                variant: variant || '',
            });
        }
        return Object.assign({}, {
            variant: optionsOrMessage.variant,
            message: optionsOrMessage.message,
            title: optionsOrMessage.title || null,
            icon: optionsOrMessage.icon || null,
            ttl: optionsOrMessage.ttl || null,
            closable: ensureBoolean(optionsOrMessage.closable)
        }) as AlertOptionsInterface;
    }
}
