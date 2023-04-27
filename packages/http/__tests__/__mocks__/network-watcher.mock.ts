import { Inject, Service } from '@banquette/dependency-injection';
import { EventDispatcherService } from '@banquette/event';
import { NetworkWatcherService, NetworkEvents, NetworkAvailabilityChangeEvent, } from '../../src';

@Service([], NetworkWatcherService)
export class NetworkWatcherMock {
    public constructor(
        @Inject(EventDispatcherService)
        private eventDispatcher: EventDispatcherService
    ) {}

    public isOnline(): boolean {
        setTimeout(() => {
            // Simulate that the network came back on the next frame to the request is re-queued.
            this.eventDispatcher.dispatch(
                NetworkEvents.AvailabilityChange,
                new NetworkAvailabilityChangeEvent(true)
            );
        });

        // Return `false` so the HttpService wait for the connectivity to retry the request.
        return false;
    }

    public watch(): void {}
    public unwatch(): void {}
}
