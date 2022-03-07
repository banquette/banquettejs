import { cloneDeep } from "@banquette/utils-object/clone-deep";
import { isObject } from "@banquette/utils-type/is-object";
import { MutationType } from "../src/constant";
import { MutationEvent } from "../src/event/mutation.event";
import { MutationsCollectionEvent } from "../src/event/mutations-collection.event";
import { Mutation } from "../src/mutation";
import { ObserverInterface } from "../src/observer/observer.interface";

/**
 * Define the content of the array describing an expected mutation.
 */
export type ExpectedMutation = [
    MutationType,
    string, // path */
    any?,
    any?
];

export enum SubscriptionType {
    Sync = 1,
    Async = 2
}

/**
 * Clone a mutation and its values to ensure the state is preserved.
 */
function cloneMutation(mutation: Mutation): Mutation {
    return new Mutation(
        mutation.type,
        ([] as string[]).concat(mutation.pathParts),
        cloneDeep(mutation.oldValue),
        cloneDeep(mutation.newValue),
        mutation.target
    );
}

/**
 * Wrap an observer into an object that captures the events emitted.
 */
export function wrapObserver(observer: ObserverInterface<any>,
                             mutationType: MutationType|null = null,
                             mask: string|null = null,
                             subscriptionType: SubscriptionType = SubscriptionType.Sync) {
    let promise: Promise<void>|null = null;
    let promiseResolve: any = null;

    const result = {
        observer,
        proxy: observer.proxy,
        events: {sync: [] as MutationEvent[], async: [] as MutationsCollectionEvent[]},
        mutations: {sync: [] as Mutation[], async: [] as Mutation[]},
        expect: (expected: ExpectedMutation[]) => expectMutations(result.mutations.sync, expected),
        expectAsync: async (expected: ExpectedMutation[]) => {
            if (promise === null) {
                promise = new Promise((resolve) => {
                    promiseResolve = resolve;

                    // In case no async events are emitted at all.
                    setTimeout(() => {
                        if (promiseResolve !== null) {
                            promiseResolve();
                        }
                    });
                });
            }
            promise.then(() => {
                expectMutations(result.mutations.async, expected)
            });
        },
        clear: () => {
            result.events.sync = [];
            result.events.async = [];
            result.mutations.sync = [];
            result.mutations.async = [];
        }
    };
    if ((subscriptionType & SubscriptionType.Sync) === SubscriptionType.Sync) {
        observer.subscribe((event: MutationEvent) => {
            result.events.sync.push(event);
            result.mutations.sync.push(cloneMutation(event.mutation));
        }, mutationType, mask);
    }
    if ((subscriptionType & SubscriptionType.Async) === SubscriptionType.Async) {
        observer.subscribeAsync((event: MutationsCollectionEvent) => {
            result.events.async.push(event);
            for (const mutation of event.mutations) {
                result.mutations.async.push(cloneMutation(mutation));
            }
            if (promiseResolve !== null) {
                queueMicrotask(() => {
                    promiseResolve();
                    promiseResolve = null;
                });
            }
        }, mutationType, mask);
    }
    return result;
}

/**
 * Check that an array of mutations matches what is expected in another.
 */
export function expectMutations(actualMutations: Mutation[], expectedMutations: ExpectedMutation[]) {
    const arr = [];
    for (const expectedMutation of expectedMutations) {
        const obj: any = {
            type: expectedMutation[0],
            path: expectedMutation[1]
        };
        // To account for undefined values.
        if (expectedMutation.length > 2) {
            if (isObject(expectedMutation[2])) {
                obj.oldValue = expect.objectContaining(expectedMutation[2]);
            } else {
                obj.oldValue = expectedMutation[2];
            }
        }
        if (expectedMutation.length > 3) {
            if (isObject(expectedMutation[3])) {
                obj.newValue = expect.objectContaining(expectedMutation[3]);
            } else {
                obj.newValue = expectedMutation[3];
            }
        }
        arr.push(expect.objectContaining(obj));
    }
    expect(actualMutations).toEqual(expect.arrayContaining(arr));
    expect(actualMutations.length).toEqual(expectedMutations.length);
}

/**
 * Iterates over a typed array and convert it into a simple array.
 */
export function typedArrayToArray(input: any): any[] {
    const output = [];
    for (const item of input) {
        output.push(item);
    }
    return output;
}
