import { Exception } from '@banquette/exception';
import { waitForDelay } from '@banquette/utils-misc';
import { isArray, isNullOrUndefined, isSymbol } from '@banquette/utils-type';
import { PartialSequence, SequenceErrorBasicBehavior, DefaultSequenceName, EventPipeline, SequenceContext, } from '../src';

/**
 * A fake set of events for testing.
 */
const TestEvents = {
    Creating: Symbol('creating'),
    Initializing: Symbol('initializing'),
    Ready: Symbol('ready'),
    ShowLoader: Symbol('show-loader'),
    Fetch: Symbol('fetch'),
    FetchAjax: Symbol('fetch-ajax'),
    FetchMemory: Symbol('fetch-memory'),
    ProcessResult: Symbol('process-result'),
    HideLoader: Symbol('hide-loader'),
    ShowError: Symbol('show-error'),
};

const SequenceDefaults = {
    event: null,
    sequences: null,
    priority: 0,
    onError: SequenceErrorBasicBehavior.StopAll,
};

function checkSequence(
    pipeline: EventPipeline,
    name: string,
    expectations: any[]
): void {
    const targetObject = [];
    for (const expectation of expectations) {
        targetObject.push(
            expect.objectContaining({
                event: isSymbol(expectation[0]) ? expectation[0] : null,
                sequences: isArray(expectation[0]) ? expectation[0] : null,
                priority: expectation[1] || SequenceDefaults.priority,
                onError: expectation[2] || SequenceDefaults.onError,
            })
        );
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
            TestEvents.Creating, // Single event
            'Other', // Another sequence
            ['Other', 'Second'], // Multiple other sequences
            { event: TestEvents.Initializing, priority: 0 }, // With priority
            {
                event: TestEvents.Ready,
                onError: SequenceErrorBasicBehavior.Ignore,
            }, // With basic error behavior
            { event: TestEvents.FetchAjax, onError: 'Other' }, // Calling another sequence on error
            { event: TestEvents.FetchMemory, onError: ['Other', 'Second'] }, // Calling a sequence of sequences on error
        ];
        const pipeline = new EventPipeline()
            .add({
                // Named sequences as a map
                mapName: sequence,
            })
            // Sequence with default name
            .add(sequence)
            // Single event to the default sequence
            .add(TestEvents.HideLoader)
            // Array of events with custom name
            .add([TestEvents.Initializing, TestEvents.Ready], 'custom')
            // Link to another sequence
            .add({ sequences: ['Other'], priority: 1 }, 'custom')
            // A sequence with a global error behavior
            .add(
                [
                    TestEvents.Creating,
                    TestEvents.Initializing,
                    { event: TestEvents.Ready, onError: 'Error' },
                ],
                'last',
                SequenceErrorBasicBehavior.StopSequence
            );

        checkSequence(pipeline, 'mapName', [
            [TestEvents.Creating],
            [['Other']],
            [['Other', 'Second']],
            [TestEvents.Initializing],
            [TestEvents.Ready, 0, SequenceErrorBasicBehavior.Ignore],
            [TestEvents.FetchAjax, 0, ['Other']],
            [TestEvents.FetchMemory, 0, ['Other', 'Second']],
        ]);
        checkSequence(pipeline, DefaultSequenceName, [
            [TestEvents.Creating],
            [['Other']],
            [['Other', 'Second']],
            [TestEvents.Initializing],
            [TestEvents.Ready, 0, SequenceErrorBasicBehavior.Ignore],
            [TestEvents.FetchAjax, 0, ['Other']],
            [TestEvents.FetchMemory, 0, ['Other', 'Second']],
            [TestEvents.HideLoader],
        ]);
        checkSequence(pipeline, 'custom', [
            [['Other'], 1],
            [TestEvents.Initializing],
            [TestEvents.Ready],
        ]);
        checkSequence(pipeline, 'last', [
            [TestEvents.Creating, 0, SequenceErrorBasicBehavior.StopSequence],
            [
                TestEvents.Initializing,
                0,
                SequenceErrorBasicBehavior.StopSequence,
            ],
            [TestEvents.Ready, 0, ['Error']],
        ]);
    });

    test('sequences are sorted by priority', () => {
        pipeline.add([TestEvents.FetchAjax, TestEvents.FetchMemory]);
        pipeline.add({ event: TestEvents.Ready, priority: -1 });
        pipeline.add({ event: TestEvents.Initializing, priority: 1 });

        checkSequence(pipeline, DefaultSequenceName, [
            [TestEvents.Initializing, 1],
            [TestEvents.FetchAjax],
            [TestEvents.FetchMemory],
            [TestEvents.Ready, -1],
        ]);
    });

    test('adding the same event a second time will add it and not replace it', () => {
        pipeline.add(TestEvents.Initializing);
        pipeline.add({
            event: TestEvents.Initializing,
            priority: 1,
            onError: SequenceErrorBasicBehavior.Ignore,
        });

        checkSequence(pipeline, DefaultSequenceName, [
            [TestEvents.Initializing, 1, SequenceErrorBasicBehavior.Ignore],
            [TestEvents.Initializing],
        ]);
    });
});

/**
 * Removing.
 */
describe('Removing', () => {
    test('remove an event from a sequence', () => {
        pipeline.add([TestEvents.Initializing, TestEvents.Ready]);
        pipeline.remove(TestEvents.Initializing);

        checkSequence(pipeline, DefaultSequenceName, [[TestEvents.Ready]]);
    });

    test('all matching events are removed in a single call to `remove()`', () => {
        pipeline.add([
            TestEvents.Initializing,
            TestEvents.Ready,
            TestEvents.Initializing,
            TestEvents.HideLoader,
            TestEvents.Initializing,
        ]);
        pipeline.remove(TestEvents.Initializing);

        checkSequence(pipeline, DefaultSequenceName, [
            [TestEvents.Ready],
            [TestEvents.HideLoader],
        ]);
    });

    test('`remove()` can remove multiple types of events at once', () => {
        pipeline.add([
            TestEvents.Initializing,
            TestEvents.Ready,
            TestEvents.Initializing,
            TestEvents.HideLoader,
            TestEvents.Initializing,
        ]);
        pipeline.remove([TestEvents.Initializing, TestEvents.Ready]);
        checkSequence(pipeline, DefaultSequenceName, [[TestEvents.HideLoader]]);
    });

    test('remove events from a sequence with a custom name', () => {
        pipeline.add(
            [
                TestEvents.Initializing,
                TestEvents.Ready,
                TestEvents.Initializing,
                TestEvents.HideLoader,
                TestEvents.Initializing,
            ],
            'custom'
        );

        // Try to remove in the wrong sequence.
        pipeline.remove([TestEvents.Initializing, TestEvents.Ready]);
        checkSequence(pipeline, 'custom', [
            [TestEvents.Initializing],
            [TestEvents.Ready],
            [TestEvents.Initializing],
            [TestEvents.HideLoader],
            [TestEvents.Initializing],
        ]);

        // Now the valid call.
        pipeline.remove([TestEvents.Initializing, TestEvents.Ready], 'custom');
        checkSequence(pipeline, 'custom', [[TestEvents.HideLoader]]);
    });

    test('remove a call to another sequence', () => {
        pipeline.add([TestEvents.Initializing, 'Other', TestEvents.HideLoader]);
        pipeline.remove('Other');
        checkSequence(pipeline, DefaultSequenceName, [
            [TestEvents.Initializing],
            [TestEvents.HideLoader],
        ]);
    });
});

/**
 * Running.
 */
describe('Running', () => {
    let callstack: string[] = [];

    function buildCallback(
        id: string,
        options: {
            delay?: number;
            error?: Exception | string | null;
            stopEvent?: boolean;
            stopSequence?: boolean;
            stopAll?: boolean;
        } = {}
    ): any {
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
                    });
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
                TestEvents.Creating,
                TestEvents.Initializing,
                TestEvents.Ready,
            ],
            Error: [TestEvents.ShowError, TestEvents.HideLoader],
            Fetch: [
                TestEvents.ShowLoader,
                TestEvents.Fetch,
                TestEvents.ProcessResult,
                TestEvents.HideLoader,
            ],
            AdaptiveFetch: [
                TestEvents.ShowLoader,
                'FetchAdapters',
                TestEvents.ProcessResult,
                TestEvents.HideLoader,
            ],
            FetchAdapters: [
                {
                    event: TestEvents.FetchAjax,
                    onError: SequenceErrorBasicBehavior.Ignore,
                },
                {
                    event: TestEvents.FetchMemory,
                    onError: SequenceErrorBasicBehavior.Ignore,
                },
            ],
        });
    });

    test('The pipeline is synchronous if all subscribers are synchronous', () => {
        pipeline
            .subscribe(TestEvents.Initializing, buildCallback('a'))
            .subscribe(TestEvents.Creating, buildCallback('b'))
            .subscribe(TestEvents.Ready, buildCallback('c'));

        pipeline.start();
        expect(callstack).toStrictEqual(['b', 'a', 'c']);
    });

    test('The pipeline is asynchronous if any of subscriber is asynchronous', async () => {
        pipeline
            .subscribe(
                TestEvents.Initializing,
                buildCallback('a', { delay: 20 })
            )
            .subscribe(TestEvents.Creating, buildCallback('b', { delay: 50 }))
            .subscribe(TestEvents.Ready, buildCallback('c'));

        const result = await pipeline.start();
        // Because the id is added to the callstack synchronously, even for async callbacks in the tests.
        expect(callstack).toStrictEqual(['b']);
        await result.promise;
        expect(callstack).toStrictEqual(['b', 'a', 'c']);
    });

    test('Execute another sequence', async () => {
        pipeline
            .subscribe(TestEvents.ShowLoader, buildCallback('show-loader'))
            .subscribe(TestEvents.HideLoader, buildCallback('hide-loader'))
            .subscribe(
                TestEvents.FetchAjax,
                buildCallback('fetch-ajax', { delay: 50 })
            )
            .subscribe(
                TestEvents.ProcessResult,
                buildCallback('process-result', { delay: 50 })
            )
            .subscribe(TestEvents.FetchMemory, buildCallback('fetch-memory'));

        await pipeline.start('AdaptiveFetch').promise;
        expect(callstack).toStrictEqual([
            'show-loader',
            'fetch-ajax',
            'fetch-memory',
            'process-result',
            'hide-loader',
        ]);
    });

    test('Propagation can be stopped in a asynchronous sub sequence', async () => {
        pipeline
            .subscribe(TestEvents.ShowLoader, buildCallback('show-loader'))
            .subscribe(TestEvents.HideLoader, buildCallback('hide-loader'))
            .subscribe(
                TestEvents.FetchAjax,
                buildCallback('fetch-ajax', { delay: 50, stopSequence: true })
            )
            .subscribe(TestEvents.FetchMemory, buildCallback('fetch-memory'));

        await pipeline.start('AdaptiveFetch').promise;
        expect(callstack).toStrictEqual([
            'show-loader',
            'fetch-ajax',
            'hide-loader',
        ]);
    });

    test('Results are aggregated by event type', async () => {
        pipeline
            .subscribe(TestEvents.ShowLoader, buildCallback('show-loader'))
            .subscribe(TestEvents.HideLoader, buildCallback('hide-loader'))
            .subscribe(
                TestEvents.Fetch,
                buildCallback('fetch-ajax', {
                    delay: 50,
                    error: 'Request failed.',
                })
            );

        await pipeline.start('Fetch').promise;
        expect(callstack).toStrictEqual(['show-loader', 'fetch-ajax']);
    });

    test('Failure with default behavior', async () => {
        pipeline
            .subscribe(TestEvents.ShowLoader, buildCallback('show-loader'))
            .subscribe(TestEvents.HideLoader, buildCallback('hide-loader'))
            .subscribe(
                TestEvents.Fetch,
                buildCallback('fetch', { delay: 50, error: 'Request failed.' })
            );
        const result = pipeline.start('Fetch');
        await result.promise;
        expect(result.error).toEqual(true);
        expect(callstack).toStrictEqual(['show-loader', 'fetch']);
    });

    test('a sequence can be mutated while it is running with no immediate impact on its behavior', () => {
        const customEvent = Symbol();
        let called: string[] = [];
        let added = false;
        pipeline.subscribe(TestEvents.Fetch, () => {
            called.push('a');
            if (!added) {
                added = true;
                pipeline.add({ event: customEvent, priority: 100 }, 'Fetch');
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
