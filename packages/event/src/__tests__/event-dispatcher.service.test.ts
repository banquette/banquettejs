import 'reflect-metadata';
import { Injector, waitForDelay } from "@banquette/core";
import { EventArg } from "../event-arg";
import { EventDispatcherInterface } from "../event-dispatcher.interface";
import { EventDispatcherServiceSymbol } from "../event-dispatcher.service";

interface Subscribers {
    [key: string]: [
        number?,   // Priority
        symbol[]?, // Tags
        boolean?,  // Stop propagation?
        number?    // Delay (for async functions)
    ];
}

interface SubscribersTracker {
    calledStack: string[];
}

const event1: symbol = Symbol('event1');
const event2: symbol = Symbol('event2');
const tag1: symbol = Symbol('tag1');
const tag2: symbol = Symbol('tag2');
const eventDispatcher = Injector.Get<EventDispatcherInterface>(EventDispatcherServiceSymbol);

/**
 * Basics
 */
test('simple events', async () => {
    const t1 = subscribeAndTrack(event1, {'a': []});
    expectFromDispatchSync(t1, event2, []);
    expectFromDispatchSync(t1, event1, ['a']);

    const t2 = subscribeAndTrack(event2, {'b': []});
    expectFromDispatchSync(t2, event1, []);
    expectFromDispatchSync(t2, event2, ['b']);
});

test('simple events (async)', async () => {
    const t1 = subscribeAndTrack(event1, {'a': [0, [], false, 100]});
    await expectFromDispatch(t1, event2, []);
    await expectFromDispatch(t1, event1, ['a']);

    const t2 = subscribeAndTrack(event2, {'b': []});
    await expectFromDispatch(t2, event1, []);
    await expectFromDispatch(t2, event2, ['b']);
});

/**
 * Tags
 */
test('tags', () => {
    let tracker = subscribeAndTrack(event1, {
        'encoder1': [0, [tag1], true],
        'other': [0],
        'encoder2': [0, [tag1]],
    });
    expectFromDispatchSync(tracker, event1, ['encoder1', 'other']);
    tracker = subscribeAndTrack(event1, {
        'encoder1': [0, [tag1]],
        'other': [0],
        'encoder2': [0, [tag1]],
    });
    expectFromDispatchSync(tracker, event1, ['encoder1', 'other', 'encoder2']);
    tracker = subscribeAndTrack(event1, {
        'encoder1': [0, [tag1]],
        'other': [0, [tag2, tag1], true],
        'encoder2': [0, [tag1]]
    });
    expectFromDispatchSync(tracker, event1, ['encoder1', 'other']);
});

test('tags (async)', async () => {
    let tracker = subscribeAndTrack(event1, {
        'encoder1': [0, [tag1], true],
        'other': [0],
        'encoder2': [0, [tag1]],
    });
    await expectFromDispatch(tracker, event1, ['encoder1', 'other']);
    tracker = subscribeAndTrack(event1, {
        'encoder1': [0, [tag1]],
        'other': [0],
        'encoder2': [0, [tag1]],
    });
    await expectFromDispatch(tracker, event1, ['encoder1', 'other', 'encoder2']);
    tracker = subscribeAndTrack(event1, {
        'encoder1': [0, [tag1]],
        'other': [0, [tag2, tag1], true],
        'encoder2': [0, [tag1]]
    });
    await expectFromDispatch(tracker, event1, ['encoder1', 'other']);
});

/**
 * Priorities
 */
test('priority', () => {
    testSubscribeAndDispatchSync(event1, {'a': [0], 'b': [0]}, ['a', 'b']);
    testSubscribeAndDispatchSync(event1, {'a': [0], 'b': [1]}, ['b', 'a']);
    testSubscribeAndDispatchSync(event1, {'c': [1], 'a': [0], 'b': [1]}, ['c', 'b', 'a']);
});

test('priority (async)', async () => {
    await testSubscribeAndDispatch(event1, {'a': [0], 'b': [0]}, ['a', 'b']);
    await testSubscribeAndDispatch(event1, {'a': [0], 'b': [1]}, ['b', 'a']);
    await testSubscribeAndDispatch(event1, {'c': [1], 'a': [0], 'b': [1]}, ['c', 'b', 'a']);
});

/**
 * Test clearing of the whole event dispatcher
 */
test('clear', () => {
    const tracker = subscribeAndTrack(event1, {'a': [], 'b': [], 'c': []});
    eventDispatcher.clear();
    expectFromDispatch(tracker, event1, []);
})

/**
 * Test propagation stopping
 */
test('stop propagation', () => {
    eventDispatcher.clear();
    let counter = 0;
    for (let _i = 0; _i < 4; _i++) {
        eventDispatcher.subscribe(event1, () => {counter++;})
    }
    eventDispatcher.subscribe(event1, (event: EventArg) => {
        counter++;
        event.stopPropagation();
    })
    for (let _i = 0; _i < 5; _i++) {
        eventDispatcher.subscribe(event1, () => {counter++;})
    }
    eventDispatcher.dispatchSync(event1);
    expect(counter).toStrictEqual(5);
})

/**
 * Test unsubscribe
 */
test('unsubscribe', () => {
    eventDispatcher.clear();
    let counter = 0;
    for (let _i = 0; _i < 5; _i++) {
        eventDispatcher.subscribe(event1, () => {counter++;})
    }
    const unsubscribeCallback = eventDispatcher.subscribe(event1, (event: EventArg) => {
        counter = 1000000;
        event.stopPropagation();
    })
    eventDispatcher.dispatchSync(event1);
    expect(counter).toStrictEqual(1000000);
    unsubscribeCallback();
    counter = 0;
    eventDispatcher.dispatchSync(event1);
    expect(counter).toStrictEqual(5);
})

/**
 * Test single return
 */
test('dispatch for response (single return)', () => {
    eventDispatcher.clear();
    for (let _i = 0; _i < 5; _i++) {
        eventDispatcher.subscribe(event1, () => {return _i;})
    }

    const promiseFirst = eventDispatcher.dispatchForSingleResponse(event1, new EventArg(), 'first');
    promiseFirst.then((data: any) => {
        expect(data).toStrictEqual(0);
    });

    const promiseLast = eventDispatcher.dispatchForSingleResponse(event1, new EventArg(), 'last');
    promiseLast.then((data: any) => {
        expect(data).toStrictEqual(4);
    });
    //expect(resultDefault).toStrictEqual(4);
})

/**
 * Test multiple returns
 */
test('dispatch for response (multiple returns async)', () => {
    eventDispatcher.clear();
    for (let i = 0; i < 5; i++) {
        if (i === 1 || i === 4) {
            eventDispatcher.subscribe(event1, async () => {
                await waitForDelay(10);
                return i;
            });
        } else {
            eventDispatcher.subscribe(event1, ((_i) => {
                return () => _i;
            })(i));
        }
    }
    const promise = eventDispatcher.dispatchForResponse<number>(event1, new EventArg());
    promise.then((data: number[]) => {
        expect(data).toStrictEqual([0, 1, 2, 3, 4]);
    });
});

/**
 * Test multiple returns
 */
test('dispatch for response (multiple returns sync)', () => {
    eventDispatcher.clear();
    for (let i = 0; i < 5; i++) {
        eventDispatcher.subscribe(event1, ((_i) => {
            return () => _i;
        })(i));
    }
    const results = eventDispatcher.dispatchForResponseSync<number>(event1, new EventArg());
    expect(results).toStrictEqual([0, 1, 2, 3, 4]);
});

/**
 * Register multiple subscribers to the dispatcher and return an object
 * that will contain the key of each subscriber in the order they have been called after a dispatch.
 *
 * The dispatch can be called anytime, that's the whole point of this function.
 */
function subscribeAndTrack(type: symbol, subscribers: Subscribers): SubscribersTracker {
    const tracker: SubscribersTracker = {calledStack: []};
    eventDispatcher.clear();
    for (const key of Object.keys(subscribers)) {
        eventDispatcher.subscribe(type, ((_k: string, sp: boolean, delay: number) => {
            return (event: EventArg) => {
                const p = () => {
                    if (sp) {
                        event.stopPropagation();
                    }
                    tracker.calledStack.push(_k);
                };
                if (delay > 0) {
                    return new Promise((resolve, reject) => {
                        p();
                        waitForDelay(delay).then(resolve).catch(reject);
                    });
                } else {
                    p();
                }
            };
        })(key, subscribers[key][2] || false, subscribers[key][3] || 0), subscribers[key][0], subscribers[key][1] || []);
    }
    return tracker;
}

/**
 * Dispatch an event and check if the results of a tracker are what is in "expected".
 */
async function expectFromDispatch(tracker: SubscribersTracker, event: symbol, expected: string[]): Promise<void> {
    try {
        await eventDispatcher.dispatch(event);
        expect(tracker.calledStack).toStrictEqual(expected);
    } catch (e) {
        fail(e);
    }
}

/**
 * Dispatch an event and check if the results of a tracker are what is in "expected".
 */
function expectFromDispatchSync(tracker: SubscribersTracker, event: symbol, expected: string[]): void {
    try {
        eventDispatcher.dispatchSync(event);
        expect(tracker.calledStack).toStrictEqual(expected);
    } catch (e) {
        fail(e);
    }
}

/**
 * Call subscribeAndTrack and expectFromDispatch successively.
 */
function testSubscribeAndDispatch(type: symbol, subscribers: Subscribers, expected: string[]): void {
    const tracker = subscribeAndTrack(event1, subscribers);
    expectFromDispatch(tracker, event1, expected);
}

/**
 * Call subscribeAndTrack and expectFromDispatch successively.
 */
function testSubscribeAndDispatchSync(type: symbol, subscribers: Subscribers, expected: string[]): void {
    const tracker = subscribeAndTrack(event1, subscribers);
    expectFromDispatchSync(tracker, event1, expected);
}
