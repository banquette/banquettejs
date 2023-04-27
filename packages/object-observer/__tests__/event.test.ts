import { ObserverFactory } from "../src";
import { MutationType } from "../src/constant";
import { wrapObserver, SubscriptionType } from "./utils";

test('No sync events are emitted when subscribed to async events', async () => {
    const wrapped = wrapObserver(ObserverFactory.Create({name: 'name', age: 7}), null, null, SubscriptionType.Async);
    wrapped.proxy.name = 'new';
    wrapped.expect([]);
    await wrapped.expectAsync([[MutationType.Update, '/name', 'name', 'new']]);
});

test('No async events are emitted when subscribed to sync events', async () => {
    const wrapped = wrapObserver(ObserverFactory.Create({name: 'name', age: 7}));
    wrapped.proxy.name = 'new';
    wrapped.expect([[MutationType.Update, '/name', 'name', 'new']]);
    await wrapped.expectAsync([]);
});
