import 'reflect-metadata';
import { CancelException } from "../exception/cancel.exception";
import { TimeoutException } from "../exception/timeout.exception";
import { ObservablePromise } from "../observable-promise";
import { RejectCallback, ResolveCallback } from "../types";

describe('Basic implementation', () => {
    test('simple resolution after delay', () => {
        return new ObservablePromise<string>((resolve: ResolveCallback<string>) => {
            window.setTimeout(() => {
                resolve('result');
            }, 50);
        }).then((result: string) => {
            expect(result).toBe('result');
        });
    });

    test('support of async/await syntax', async () => {
        const waitForDelay = (delay: number) => {
            return new ObservablePromise((resolve) => {
                window.setTimeout(resolve, delay);
            });
        };
        const startTime = (new Date()).getTime();
        await waitForDelay(500);
        expect((new Date()).getTime() - startTime).toBeGreaterThanOrEqual(450 /* because timeout is not reliable at the ms */ );
    });

    test('immediate resolution is asynchronous', () => {
        const promise = new ObservablePromise((resolve: ResolveCallback<any>) => void resolve(5));
        expect((promise as any).result).not.toBe(5);
    });

    test('resolves with the expected value', () => {
        return new ObservablePromise<number>((resolve: ResolveCallback<number>) => {
            resolve(30);
        }).then((result: number) => {
            expect(result).toBe(30);
        });
    });

    test('resolves a thenable before calling then', () => {
        return new ObservablePromise<number>((resolve: ResolveCallback<number>) => {
            const sub = new ObservablePromise<number>((resolve: ResolveCallback<number>) => {
                resolve(30);
            });
            resolve(sub);
        }).then((result: number) => {
            expect(result).toBe(30)
        });
    });

    test('catches errors (reject)', () => {
        const error = new Error('I failed.');
        return new ObservablePromise((resolve: ResolveCallback<any>, reject: RejectCallback) => {
            return reject(error);
        }).catch((reason: any) => {
            expect(reason).toBe(error);
        });
    });

    test('catches errors (throw)', () => {
        const error = new Error('I have been thrown.');
        return new ObservablePromise(() => {
            throw error;
        }).catch((reason: any) => {
            expect(reason).toBe(error);
        });
    });

    test('can be canceled', () => {
        const onResolve = jest.fn();
        const promise = new ObservablePromise<number>((resolve: ResolveCallback<number>, reject) => {
            window.setTimeout(resolve, 100);
        }).then(onResolve);
        window.setTimeout(() => {
            promise.cancel();
        }, 30);
        return promise.catch((reason) => {
            expect(reason).toBeInstanceOf(CancelException);
            expect(onResolve).not.toBeCalled();
        });
    });

    test('is not mutable', () => {
        const start = new ObservablePromise<number>((resolve: ResolveCallback<number>) => {
            resolve(20);
        });
        return ObservablePromise.All([
            start
                .then((result: number) => {
                    expect(result).toBe(20);
                    return 30;
                })
                .then((result: number) => void expect(result).toBe(30)),
            // Break the chain
            start.then((result: number) => void expect(result).toBe(20))
        ]);
    });

    test('finally called on resolve and reject', () => {
        let counter = 0;
        return ObservablePromise.Resolve(15)
            .finally(() => {
                counter += 1;
            })
            .then(() => {
                return ObservablePromise.Reject(15);
            })
            .then(() => {
                // wont be called
                counter = 1000;
            })
            .finally(() => {
                counter += 1;
            })
            .catch((reason: any) => {
                expect(reason).toBe(15);
                expect(counter).toBe(2);
            });
    });
});

describe('Progression events', () => {
    const step = 10;
    const wait = (delay: number): ObservablePromise<any> => {
        return new ObservablePromise<any>((resolve, reject, progress) => {
            let i = 0;
            let intervalId = window.setInterval(() => {
                i += step;
                progress(i);
                if (i >= delay) {
                    window.clearInterval(intervalId);
                    resolve('finished!');
                }
            }, step);
        });
    };

    test('receive the correct number of events', () => {
        let eventsCount = 0;
        return wait(300).progress((value) => {
            expect(value).toEqual(((eventsCount++) + 1) * step);
        }).then(() => {
            expect(eventsCount).toEqual(30);
        });
    });

    test('resolves normally', () => {
        const startTime = (new Date()).getTime();
        return wait(300).progress((value) => {
            expect(value).toBeGreaterThan(0);
        }).then((result) => {
            const delta = (new Date()).getTime() - startTime;
            expect(delta).toBeGreaterThanOrEqual(280);
            expect(delta).toBeLessThanOrEqual(320);
            expect(result).toEqual('finished!');
        });
    });

    test('works when inverting calls ordering', () => {
        let eventsCount = 0;
        return wait(300).then(() => {
            expect(eventsCount).toEqual(30);
        }).progress((value) => {
            expect(value).toEqual(((eventsCount++) + 1) * step);
        });
    });
});

describe('ObservablePromise.All', () => {
    test('resolves a collection of promises', () => {
        return ObservablePromise.All([
            ObservablePromise.Resolve(1),
            ObservablePromise.Resolve(2),
            3
        ]).then((collection: any[]) => {
            expect(collection).toEqual([1, 2, 3]);
        });
    });

    test('rejects if one item rejects', () => {
        return ObservablePromise.All([
            ObservablePromise.Resolve(1),
            ObservablePromise.Reject(2)
        ]).catch((reason: any) => {
            expect(reason).toBe(2);
        });
    });
});

describe('ObservablePromise.Any', () => {
    test('resolves the first value', () => {
        return ObservablePromise.Any<number>([
            ObservablePromise.Resolve(1),
            new ObservablePromise((resolve: ResolveCallback<number>) => {
                window.setTimeout(resolve, 15);
            }),
        ]).then((result: number) => {
            expect(result).toBe(1);
        });
    });

    test('rejects if the first value rejects', () => {
        return ObservablePromise.Any([
            new ObservablePromise((resolve: ResolveCallback<number>) => {
                window.setTimeout(resolve, 15);
            }),
            ObservablePromise.Reject(1),
        ]).catch((reason: any) => {
            expect(reason).toBe(1);
        });
    });
});

describe('ObservablePromise.Wait', () => {
    test('waits for the given amount of milliseconds before resolving (async / await)', async () => {
        const startTime = (new Date()).getTime();
        await ObservablePromise.Wait(500);
        expect((new Date()).getTime() - startTime).toBeGreaterThanOrEqual(480 /* because timeout is not reliable at the ms */ );
        expect((new Date()).getTime() - startTime).toBeLessThanOrEqual(520 /* because timeout is not reliable at the ms */ );
    });
    test('returns the correct value', async () => {
        const result = await ObservablePromise.Wait(400, 'test');
        expect(result).toEqual('test');
    });
});

describe('ObservablePromise.MinDelay', () => {
    test('waits the min delay when the processing is shorter', async () => {
        const startTime = (new Date()).getTime();
        await ObservablePromise.MinDelay((resolve) => {
            window.setTimeout(() => {
                resolve(0);
            }, 50);
        }, 200);
        expect((new Date()).getTime() - startTime).toBeGreaterThanOrEqual(150 /* because timeout is not reliable at the ms */ );
    });

    test('do not wait if the processing is longer', async () => {
        const startTime = (new Date()).getTime();
        await ObservablePromise.MinDelay((resolve) => {
            window.setTimeout(() => {
                resolve(0);
            }, 200);
        }, 100);
        expect((new Date()).getTime() - startTime).toBeGreaterThanOrEqual(180 /* because timeout is not reliable at the ms */ );
        expect((new Date()).getTime() - startTime).toBeLessThanOrEqual(220 /* because timeout is not reliable at the ms */ );
    });
});

describe('ObservablePromise.Timeout', () => {
    test('rejects after given timeout', () => {
        return new ObservablePromise<number>((resolve: ResolveCallback<number>) => {
            window.setTimeout(() => {
                resolve(0);
            }, 50);
        }).timeout(40)
          .catch((reason) => {
            expect(reason).toBeInstanceOf(TimeoutException);
          });
    });

    test('resolves before given timeout', () => {
        return new ObservablePromise<number>((resolve) => {
            window.setTimeout(() => {
                resolve(500);
            }, 500);
        }).timeout(600)
          .then((value) => {
            expect(value).toBe(500);
        });
    });
});
