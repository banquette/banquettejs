import { Injector } from "@banquette/dependency-injection/injector";
import { Exception } from "@banquette/exception/exception";
import { UsageException } from "@banquette/exception/usage.exception";
import { waitForDelay } from "@banquette/utils-misc/timeout";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import {
    EventArg,
    EventDispatcherService,
    DispatchResult,
    DispatchResultStatus
} from "../src";

interface Subscribers {
    [key: string]: [
        number?,            // Priority
        (symbol[]|null)?,   // Filtering tags
        symbol[]?,          // Propagation tags
        boolean?,           // Stop propagation?
        number?,            // Delay (for async functions)
        (string|Exception)? // Exception to throw
    ];
}

interface SubscribersTracker {
    calledStack: string[];
}

const event1: symbol = Symbol('event1');
const event2: symbol = Symbol('event2');
const tag1: symbol = Symbol('tag1');
const tag2: symbol = Symbol('tag2');
const eventDispatcher = Injector.Get(EventDispatcherService);

/**
 * Basics
 */
test('Basic sync events', () => {
    const t1 = subscribeAndTrack(event1, {'a': [0, [], [], false]});
    expectFromDispatch(event2, []);
    expectFromDispatch(event1, ['a']);

    const t2 = subscribeAndTrack(event2, {'b': []});
    expectFromDispatch(event1, []);
    expectFromDispatch(event2, ['b']);
});

test('Basic async events', async () => {
    const t1 = subscribeAndTrack(event1, {'a': [0, [], [], false, 50]});
    await expectFromDispatchAsync(t1, event2, []);
    await expectFromDispatchAsync(t1, event1, ['a']);

    const t2 = subscribeAndTrack(event2, {'b': [0, [], [], false, 50]});
    await expectFromDispatchAsync(t2, event1, []);
    await expectFromDispatchAsync(t2, event2, ['b']);
});

test('Async events (unordered)', async () => {
    const tracker = subscribeAndTrack(event1, {
        'a': [0, [], [], false, 150],
        'b': [0, [], [], false, 50],
        'c': [],
    });
    await expectFromDispatchAsync(tracker, event1, ['c', 'b', 'a']);
});

test('Async events (sequential)', async () => {
    const tracker = subscribeAndTrack(event1, {
        'a': [0, [], [], false, 150],
        'b': [0, [], [], false, 50],
        'c': [],
    });
    await expectFromDispatchAsync(tracker, event1, ['a', 'b', 'c'], true);
});

test('propagation tags', async () => {
    let tracker = subscribeAndTrack(event1, {
        'encoder1': [0, [], [tag1], true],
        'other': [0],
        'encoder2': [0, [], [tag1]],
    });
    await expectFromDispatchAsync(tracker, event1, ['encoder1', 'other']);
    tracker = subscribeAndTrack(event1, {
        'encoder1': [0, [], [tag1]],
        'other': [0],
        'encoder2': [0, [], [tag1]],
    });
    await expectFromDispatchAsync(tracker, event1, ['encoder1', 'other', 'encoder2']);
    tracker = subscribeAndTrack(event1, {
        'encoder1': [0, [], [tag1]],
        'other': [0, [], [tag2, tag1], true],
        'encoder2': [0, [], [tag1]]
    });
    await expectFromDispatchAsync(tracker, event1, ['encoder1', 'other']);
});

test('propagation tags (sync)',  () => {
    subscribeAndTrack(event1, {
        'encoder1': [0, [], [tag1], true],
        'other': [0],
        'encoder2': [0, [], [tag1]],
    });
    expectFromDispatch(event1, ['encoder1', 'other']);
    subscribeAndTrack(event1, {
        'encoder1': [0, [], [tag1]],
        'other': [0],
        'encoder2': [0, [], [tag1]],
    });
    expectFromDispatch(event1, ['encoder1', 'other', 'encoder2']);
    subscribeAndTrack(event1, {
        'encoder1': [0, [], [tag1]],
        'other': [0, [], [tag2, tag1], true],
        'encoder2': [0, [], [tag1]]
    });
    expectFromDispatch(event1, ['encoder1', 'other']);
});

test('dispatch tags (sync)', () => {
    subscribeAndTrack(event1, {
        'a': [0, [tag1], [], false],
        'b': [0, [], [], false],
        'c': [0, [tag2], [], false],
        'd': [0, null, [], false],
    });
    expectFromDispatch(event1, ['a', 'd'], false, [tag1]);
});

test('dispatch tags (async)', async () => {
    const t1 = subscribeAndTrack(event1, {
        'a': [0, [tag1], [], false],
        'b': [0, [], [], false],
        'c': [0, [tag2], [], false],
        'd': [0, null, [], false],
    });
    await expectFromDispatchAsync(t1, event1, ['a', 'd'], false, [tag1]);
});

/**
 * Error handling
 */
test('Dispatch throws sync', () => {
    subscribeAndTrack(event1, {
        'a': [],
        'b': [0, [], [], false, 0, 'fail']
    });
    const result: DispatchResult = eventDispatcher.dispatch<string>(event1);
    expect(result.error).toEqual(true);
    expect(result.errorDetail).toBeInstanceOf(UsageException);
    expect(result.errorDetail).toMatchObject({message: 'fail'});
    expect(result.results).toStrictEqual([]);
});

test('Dispatch throws async', async () => {
    subscribeAndTrack(event1, {
        'a': [0, [], [], false, 50],
        'b': [0, [], [], false, 50, 'fail']
    });
    const result: DispatchResult = eventDispatcher.dispatch<string>(event1);
    expect(result.promise).not.toBeNull();
    await result.promise;
    expect(result.error).toEqual(true);
    expect(result.errorDetail).toBeInstanceOf(UsageException);
    expect(result.errorDetail).toMatchObject({message: 'fail'});
    expect(result.results).toStrictEqual([]);
});

/**
 * Priorities
 */
test('priority', () => {
    testSubscribeAndDispatchSync(event1, {'a': [0], 'b': [0]}, ['a', 'b']);
    testSubscribeAndDispatchSync(event1, {'a': [0], 'b': [1]}, ['b', 'a']);
    testSubscribeAndDispatchSync(event1, {'c': [1], 'a': [0], 'b': [1]}, ['c', 'b', 'a']);
});

test('priority (async)', () => {
    testSubscribeAndDispatch(event1, {'a': [0], 'b': [0]}, ['a', 'b']);
    testSubscribeAndDispatch(event1, {'a': [0], 'b': [1]}, ['b', 'a']);
    testSubscribeAndDispatch(event1, {'c': [1], 'a': [0], 'b': [1]}, ['c', 'b', 'a']);
});

/**
 * Test clearing of the whole event dispatcher
 */
test('clear', () => {
    const tracker = subscribeAndTrack(event1, {'a': [], 'b': [], 'c': []});
    eventDispatcher.clear();
    expectFromDispatch(event1, []);
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
    eventDispatcher.dispatch(event1);
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
        counter = 1000;
        event.stopPropagation();
    })
    eventDispatcher.dispatch(event1, null, true);
    expect(counter).toStrictEqual(1000);
    unsubscribeCallback();
    counter = 0;
    eventDispatcher.dispatch(event1, null, true);
    expect(counter).toStrictEqual(5);
})

test('mutate the subscribers in a dispatch doesn\'t impact the current dispatch', () => {
    let called: string[] = [];
    let added = false;
    eventDispatcher.clear();
    eventDispatcher.subscribe(event1, () => {
        called.push('a');
        if (!added) {
            added = true;
            eventDispatcher.subscribe(event1, () => {
                called.push('b');
            }, 1);
        }
    }, 0);
    eventDispatcher.dispatch(event1);
    expect(called).toStrictEqual(['a']);
    called = [];
    eventDispatcher.dispatch(event1);
    expect(called).toStrictEqual(['b', 'a']);
})

/**
 * Register multiple subscribers to the dispatcher and return an object
 * that will contain the key of each subscriber in the order they have been called after a dispatch.
 */
function subscribeAndTrack(type: symbol, subscribers: Subscribers): SubscribersTracker {
    const tracker: SubscribersTracker = {calledStack: []};
    eventDispatcher.clear();
    for (const key of Object.keys(subscribers)) {
        eventDispatcher.subscribe(type, ((_k: string, sp: boolean, delay: number, exception: string|Exception|null) => {
            return (event: EventArg) => {
                const p = () => {
                    if (exception !== null) {
                        throw exception;
                    }
                    tracker.calledStack.push(_k);
                    return _k;
                };
                if (sp) {
                    event.stopPropagation();
                }
                if (delay > 0) {
                    return new Promise((resolve, reject) => {
                        waitForDelay(delay).then(() => {
                            try {
                                resolve(p());
                            } catch (e) {
                                reject(e);
                            }
                        }).catch(reject);
                    });
                } else {
                    return p();
                }
            };
        })(key, subscribers[key][3] || false, subscribers[key][4] || 0, subscribers[key][5] || null),
            subscribers[key][0],
            !isUndefined(subscribers[key][1]) ? (subscribers[key][1] as any) : [],
            subscribers[key][2] || []
        );
    }
    return tracker;
}

/**
 * Dispatch an event and check if the results of a tracker are what is in "expected".
 */
function expectFromDispatch(type: symbol, expected: string[], sequential: boolean = false, tags: symbol[] = []): void {
    const result: DispatchResult = eventDispatcher.dispatch<string>(type, null, sequential, tags);
    expect(result.promise).toBeNull();
    expect(result.status).toEqual(DispatchResultStatus.Ready);
    expect(result.results).toStrictEqual(expected);
}

/**
 * Dispatch an event and check if the results of a tracker are what is in "expected".
 */
async function expectFromDispatchAsync(tracker: SubscribersTracker, type: symbol, expected: string[], sequential: boolean = false, tags: symbol[] = []): Promise<void> {
    const result = eventDispatcher.dispatch(type, null, sequential, tags);
    await result.promise;
    expect(tracker.calledStack).toStrictEqual(expected);
}

/**
 * Call subscribeAndTrack and expectFromDispatch successively.
 */
async function testSubscribeAndDispatch(type: symbol, subscribers: Subscribers, expected: string[]): Promise<void> {
    const tracker = subscribeAndTrack(event1, subscribers);
    await expectFromDispatchAsync(tracker, event1, expected);
}

/**
 * Call subscribeAndTrack and expectFromDispatch successively.
 */
function testSubscribeAndDispatchSync(type: symbol, subscribers: Subscribers, expected: string[]): void {
    subscribeAndTrack(event1, subscribers);
    expectFromDispatch(event1, expected);
}
