import 'reflect-metadata';
import { Exception } from "@banquette/exception";
import { waitForDelay } from "@banquette/utils-misc/timeout";
import { isArray } from "@banquette/utils-type/is-array";
import { isNullOrUndefined } from "@banquette/utils-type/is-null-or-undefined";
import { isSymbol } from "@banquette/utils-type/is-symbol";
import { PartialSequence } from "../src";
import { SequenceErrorBasicBehavior, DefaultSequenceName } from "../src/constant";
import { EventPipeline } from "../src/pipeline/event-pipeline";
import { SequenceContext } from "../src/pipeline/sequence-context";

/**
 * A fake set of events for testing.
 */
const Events = {
    Creating: Symbol('creating'),
    Initializing: Symbol('initializing'),
    Ready: Symbol('ready'),
    ShowLoader: Symbol('show-loader'),
    Fetch: Symbol('fetch'),
    FetchAjax: Symbol('fetch-ajax'),
    FetchMemory: Symbol('fetch-memory'),
    ProcessResult: Symbol('process-result'),
    HideLoader: Symbol('hide-loader'),
    ShowError: Symbol('show-error')
};

const SequenceDefaults = {
    event: null,
    sequences: null,
    priority: 0,
    onError: SequenceErrorBasicBehavior.StopAll
};

function checkSequence(pipeline: EventPipeline, name: string, expectations: any[]): void {
    const targetObject = [];
    for (const expectation of expectations) {
        targetObject.push(expect.objectContaining({
            event: isSymbol(expectation[0]) ? expectation[0] : null,
            sequences: isArray(expectation[0]) ? expectation[0] : null,
            priority: expectation[1] || SequenceDefaults.priority,
            onError: expectation[2] || SequenceDefaults.onError
        }));
    }
    expect(pipeline['sequences'][name].items).toMatchObject(targetObject);
}

let pipeline: EventPipeline;

beforeEach(() => {
    pipeline = new EventPipeline();
});

/**
 * Adding.
 */
describe('Adding', () => {
    test('different types of arguments `add()` can take', () => {
        const sequence: PartialSequence = [
            Events.Creating, // Single event
            'Other', // Another sequence
            ['Other', 'Second'], // Multiple other sequences
            {event: Events.Initializing, priority: 0}, // With priority
            {event: Events.Ready, onError: SequenceErrorBasicBehavior.Ignore}, // With basic error behavior
            {event: Events.FetchAjax, onError: 'Other'}, // Calling another sequence on error
            {event: Events.FetchMemory, onError: ['Other', 'Second']} // Calling a sequence of sequences on error
        ];
        const pipeline = (new EventPipeline).add({
            // Named sequences as a map
            mapName: sequence
        })
        // Sequence with default name
        .add(sequence)
        // Single event to the default sequence
        .add(Events.HideLoader)
        // Array of events with custom name
        .add([Events.Initializing, Events.Ready], 'custom')
        // Link to another sequence
        .add({sequences: ['Other'], priority: 1}, 'custom')
        // A sequence with a global error behavior
        .add([Events.Creating, Events.Initializing, {event: Events.Ready, onError: 'Error'}], 'last', SequenceErrorBasicBehavior.StopSequence)

        checkSequence(pipeline, 'mapName', [
            [Events.Creating],
            [['Other']],
            [['Other', 'Second']],
            [Events.Initializing],
            [Events.Ready, 0, SequenceErrorBasicBehavior.Ignore],
            [Events.FetchAjax, 0, ['Other']],
            [Events.FetchMemory, 0, ['Other', 'Second']]
        ]);
        checkSequence(pipeline, DefaultSequenceName, [
            [Events.Creating],
            [['Other']],
            [['Other', 'Second']],
            [Events.Initializing],
            [Events.Ready, 0, SequenceErrorBasicBehavior.Ignore],
            [Events.FetchAjax, 0, ['Other']],
            [Events.FetchMemory, 0, ['Other', 'Second']],
            [Events.HideLoader]
        ]);
        checkSequence(pipeline, 'custom', [
            [['Other'], 1],
            [Events.Initializing],
            [Events.Ready]
        ]);
        checkSequence(pipeline, 'last', [
            [Events.Creating, 0, SequenceErrorBasicBehavior.StopSequence],
            [Events.Initializing, 0, SequenceErrorBasicBehavior.StopSequence],
            [Events.Ready, 0, ['Error']]
        ]);
    });

    test('sequences are sorted by priority', () => {
        pipeline.add([Events.FetchAjax, Events.FetchMemory]);
        pipeline.add({event: Events.Ready, priority: -1});
        pipeline.add({event: Events.Initializing, priority: 1});

        checkSequence(pipeline, DefaultSequenceName, [
            [Events.Initializing, 1],
            [Events.FetchAjax],
            [Events.FetchMemory],
            [Events.Ready, -1]
        ]);
    });

    test('adding the same event a second time will add it and not replace it', () => {
        pipeline.add(Events.Initializing);
        pipeline.add({event: Events.Initializing, priority: 1, onError: SequenceErrorBasicBehavior.Ignore});

        checkSequence(pipeline, DefaultSequenceName, [
            [Events.Initializing, 1, SequenceErrorBasicBehavior.Ignore],
            [Events.Initializing]
        ]);
    });
});

/**
 * Removing.
 */
describe('Removing', () => {
    test('remove an event from a sequence', () => {
        pipeline.add([Events.Initializing, Events.Ready]);
        pipeline.remove(Events.Initializing);

        checkSequence(pipeline, DefaultSequenceName, [
            [Events.Ready]
        ]);
    });

    test('all matching events are removed in a single call to `remove()`', () => {
        pipeline.add([Events.Initializing, Events.Ready, Events.Initializing, Events.HideLoader, Events.Initializing]);
        pipeline.remove(Events.Initializing);

        checkSequence(pipeline, DefaultSequenceName, [
            [Events.Ready],
            [Events.HideLoader]
        ]);
    });

    test('`remove()` can remove multiple types of events at once', () => {
        pipeline.add([Events.Initializing, Events.Ready, Events.Initializing, Events.HideLoader, Events.Initializing]);
        pipeline.remove([Events.Initializing, Events.Ready]);
        checkSequence(pipeline, DefaultSequenceName, [
            [Events.HideLoader]
        ]);
    });

    test('remove events from a sequence with a custom name', () => {
        pipeline.add([Events.Initializing, Events.Ready, Events.Initializing, Events.HideLoader, Events.Initializing], 'custom');

        // Try to remove in the wrong sequence.
        pipeline.remove([Events.Initializing, Events.Ready]);
        checkSequence(pipeline, 'custom', [
            [Events.Initializing],
            [Events.Ready],
            [Events.Initializing],
            [Events.HideLoader],
            [Events.Initializing]
        ]);

        // Now the valid call.
        pipeline.remove([Events.Initializing, Events.Ready], 'custom');
        checkSequence(pipeline, 'custom', [
            [Events.HideLoader]
        ]);
    });

    test('remove a call to another sequence', () => {
        pipeline.add([Events.Initializing, 'Other', Events.HideLoader]);
        pipeline.remove('Other');
        checkSequence(pipeline, DefaultSequenceName, [
            [Events.Initializing],
            [Events.HideLoader]
        ]);
    });
});

/**
 * Running.
 */
describe('Running', () => {
    let callstack: string[] = [];

    function buildCallback(id: string, options: {
        delay?: number,
        error?: Exception|string|null,
        stopEvent?: boolean
        stopSequence?: boolean,
        stopAll?: boolean,
    } = {}): any {
        return (context: SequenceContext) => {
            callstack.push(id);
            const delay = options.delay || 0;
            const maybeStop = () => {
                if (options.stopEvent === true) {
                    context.stopPropagation();
                }
                if (options.stopSequence === true) {
                    context.stopSequence(false);
                }
                if (options.stopAll === true) {
                    context.stopSequence(true);
                }
            };
            if (delay > 0) {
                return new Promise<void>((resolve, reject) => {
                    waitForDelay(delay).then(() => {
                        maybeStop();
                        if (!isNullOrUndefined(options.error)) {
                            reject(options.error);
                        } else {
                            resolve();
                        }
                    })
                });
            }
            if (!isNullOrUndefined(options.error)) {
                throw options.error;
            }
            maybeStop();
        };
    }

    beforeEach(() => {
        callstack = [];
        pipeline.add({
            [DefaultSequenceName]: [
                Events.Creating,
                Events.Initializing,
                Events.Ready
            ],
            Error: [
                Events.ShowError,
                Events.HideLoader
            ],
            Fetch: [
                Events.ShowLoader,
                Events.Fetch,
                Events.ProcessResult,
                Events.HideLoader
            ],
            AdaptiveFetch: [
                Events.ShowLoader,
                'FetchAdapters',
                Events.ProcessResult,
                Events.HideLoader
            ],
            FetchAdapters: [
                {event: Events.FetchAjax, onError: SequenceErrorBasicBehavior.Ignore},
                {event: Events.FetchMemory, onError: SequenceErrorBasicBehavior.Ignore}
            ]
        });
    });

    test('The pipeline is synchronous if all subscribers are synchronous', () => {
        pipeline
            .subscribe(Events.Initializing, buildCallback('a'))
            .subscribe(Events.Creating, buildCallback('b'))
            .subscribe(Events.Ready, buildCallback('c'));

        pipeline.start();
        expect(callstack).toStrictEqual(['b', 'a', 'c']);
    });

    test('The pipeline is asynchronous if any of subscriber is asynchronous', async () => {
        pipeline
            .subscribe(Events.Initializing, buildCallback('a', {delay: 20}))
            .subscribe(Events.Creating, buildCallback('b', {delay: 50}))
            .subscribe(Events.Ready, buildCallback('c'));

        const result = await pipeline.start();
        // Because the id is added to the callstack synchronously, even for async callbacks in the tests.
        expect(callstack).toStrictEqual(['b']);
        await result.promise;
        expect(callstack).toStrictEqual(['b', 'a', 'c']);
    });

    test('Execute another sequence', async () => {
        pipeline
            .subscribe(Events.ShowLoader, buildCallback('show-loader'))
            .subscribe(Events.HideLoader, buildCallback('hide-loader'))
            .subscribe(Events.FetchAjax, buildCallback('fetch-ajax', {delay: 50}))
            .subscribe(Events.ProcessResult, buildCallback('process-result', {delay: 50}))
            .subscribe(Events.FetchMemory, buildCallback('fetch-memory'))

        await pipeline.start('AdaptiveFetch').promise;
        expect(callstack).toStrictEqual(['show-loader', 'fetch-ajax', 'fetch-memory', 'process-result', 'hide-loader']);
    });

    test('Propagation can be stopped in a asynchronous sub sequence', async () => {
        pipeline
            .subscribe(Events.ShowLoader, buildCallback('show-loader'))
            .subscribe(Events.HideLoader, buildCallback('hide-loader'))
            .subscribe(Events.FetchAjax, buildCallback('fetch-ajax', {delay: 50, stopSequence: true}))
            .subscribe(Events.FetchMemory, buildCallback('fetch-memory'))

        await pipeline.start('AdaptiveFetch').promise;
        expect(callstack).toStrictEqual(['show-loader', 'fetch-ajax', 'hide-loader']);
    });

    test('Results are aggregated by event type', async () => {
        pipeline
            .subscribe(Events.ShowLoader, buildCallback('show-loader'))
            .subscribe(Events.HideLoader, buildCallback('hide-loader'))
            .subscribe(Events.Fetch, buildCallback('fetch-ajax', {delay: 50, error: 'Request failed.'}))

        await pipeline.start('Fetch').promise;
        expect(callstack).toStrictEqual(['show-loader', 'fetch-ajax']);
    });

    test('Failure with default behavior', async () => {
        pipeline
            .subscribe(Events.ShowLoader, buildCallback('show-loader'))
            .subscribe(Events.HideLoader, buildCallback('hide-loader'))
            .subscribe(Events.Fetch, buildCallback('fetch', {delay: 50, error: 'Request failed.'}))
        await pipeline.start('Fetch').promise;
        expect(callstack).toStrictEqual(['show-loader', 'fetch']);
    });

    test('a sequence can be mutated while it is running with no immediate impact on its behavior', () => {
        const customEvent = Symbol();
        let called: string[] = [];
        let added = false;
        pipeline.subscribe(Events.Fetch, () => {
            called.push('a');
            if (!added) {
                added = true;
                pipeline.add({event: customEvent, priority: 100}, 'Fetch');
                pipeline.subscribe(customEvent, () => {
                    called.push('b');
                });
            }
        });
        pipeline.start('Fetch');
        expect(called).toStrictEqual(['a']);
        called = [];
        pipeline.start('Fetch');
        expect(called).toStrictEqual(['b', 'a']);
    });

    // TODO: test other types of failures
    // TODO: test results aggregation
});
