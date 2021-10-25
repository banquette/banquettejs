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

    test('cancelling a resolved promise does nothing', () => {
        return new Promise<void>((resolve) => {
            const onResolve = jest.fn();
            const onReject = jest.fn();
            const promise = ObservablePromise.Resolve(10);
            promise.then(onResolve).catch(onReject);
            promise.cancel();
            window.setTimeout(() => {
                expect(onReject).not.toBeCalled();
                expect(onResolve).toBeCalledTimes(1);
                resolve();
            }, 50);
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

describe('catchOf()', () => {
    test('catchOf is caught', async () => {
        const cb1 = jest.fn();
        const cb2 = jest.fn();
        const promise = new ObservablePromise(() => {
            throw new Error('I have been thrown.');
        }).catchOf(Error, cb1).catchOf(CancelException, cb2);
        await promise;
        expect(cb1).toBeCalledTimes(1);
        expect(cb2).not.toBeCalled();
    });

    test('catchOf is caught (multiple types)', async () => {
        const cb = jest.fn();
        const promise = new ObservablePromise(() => {
            throw new Error('I have been thrown.');
        }).catchOf([CancelException, Error, TimeoutException], cb);
        await promise;
        expect(cb).toBeCalledTimes(1);
    });

    test('catchOf is caught (multiple matches)', async () => {
        const cb1 = jest.fn();
        const cb2 = jest.fn();
        const promise = new ObservablePromise(() => {
            throw new Error('I have been thrown.');
        }).catchOf(Error, cb1).catchOf(Error, cb2);
        await promise;
        expect(cb1).toBeCalledTimes(1);
        expect(cb2).not.toBeCalled();
    });

    test('catchOf is caught and catch not called', async () => {
        const cb1 = jest.fn();
        const cb2 = jest.fn();
        const promise = new ObservablePromise(() => {
            throw new Error('I have been thrown.');
        }).catchOf(Error, cb1).catch(cb2);
        await promise;
        expect(cb1).toBeCalledTimes(1);
        expect(cb2).not.toBeCalled();
    });

    test('catchOf not called after catch', async () => {
        const cb1 = jest.fn();
        const cb2 = jest.fn();
        const promise = new ObservablePromise(() => {
            throw new Error('I have been thrown.');
        }).catch(cb2).catchOf(Error, cb1);
        await promise;
        expect(cb2).toBeCalledTimes(1);
        expect(cb1).not.toBeCalled();
    });

    test('catchOf is caught (reverse)', async () => {
        const cb1 = jest.fn();
        const cb2 = jest.fn();
        const promise = new ObservablePromise(() => {
            throw new Error('I have been thrown.');
        }).catchOf(CancelException, cb2).catchOf(Error, cb1);
        await promise;
        expect(cb1).toBeCalledTimes(1);
        expect(cb2).not.toBeCalled();
    });

    test('catchOf is uncaught', async () => {
        const cb = jest.fn();
        const promise = new ObservablePromise(() => {
            throw new Error('I have been thrown.');
        });
        promise.catchOf(CancelException, cb);
        await expect(promise).rejects.toBeInstanceOf(Error);
        expect(cb).not.toBeCalled();
    });

    test('catchOf is uncaught but catch is called', async () => {
        const cb1 = jest.fn();
        const cb2 = jest.fn();
        const promise = new ObservablePromise(() => {
            throw new Error('I have been thrown.');
        });
        promise.catchOf(CancelException, cb2).catch(cb1);
        await expect(promise).rejects.toBeInstanceOf(Error);
        expect(cb1).toBeCalledTimes(1);
        expect(cb2).not.toBeCalled();
    });

    test('catchNotOf is caught', async () => {
        const cb1 = jest.fn();
        const cb2 = jest.fn();
        const promise = new ObservablePromise(() => {
            throw new Error('I have been thrown.');
        }).catchNotOf(CancelException, cb1).catchOf(Error, cb2);
        await promise;
        expect(cb1).toBeCalledTimes(1);
        expect(cb2).not.toBeCalled();
    });

    test('catchNotOf is caught (non object reject)', async () => {
        const cb1 = jest.fn();
        const cb2 = jest.fn();
        await ObservablePromise.Reject(10).catchNotOf(CancelException, cb1).catchOf(Error, cb2);
        expect(cb1).toBeCalledTimes(1);
        expect(cb2).not.toBeCalled();
    });

    test('catchNotOf is caught (non object reject reverse)', async () => {
        const cb1 = jest.fn();
        const cb2 = jest.fn();
        await ObservablePromise.Reject(10).catchOf(Error, cb2).catchNotOf(CancelException, cb1);
        expect(cb1).toBeCalledTimes(1);
        expect(cb2).not.toBeCalled();
    });

    test('catchNotOf is uncaught (multiple types)', async () => {
        const cb1 = jest.fn();
        const cb2 = jest.fn();
        await ObservablePromise.Reject(10).catchNotOf([TimeoutException, CancelException], cb1).catchOf(Error, cb2);
        expect(cb1).toBeCalledTimes(1);
        expect(cb2).not.toBeCalled();
    });
});

describe('Progression events', () => {
    const defaultStep = 10;
    const wait = (delay: number, step: number = defaultStep) => {
        return (new ObservablePromise((resolve, reject, progress) => {
            let acc = 0;
            const next = () => {
                acc += step;
                if (acc >= delay) {
                    progress(acc);
                    return void resolve('Done.');
                }
                progress(acc);
                window.setTimeout(next, step);
            };
            progress('Starting.');
            next();
        }));
    };

    test('receives the correct number of events', () => {
        let eventsCount = 0;
        return wait(300).progress((result) => {
            ++eventsCount;
        }).then(() => {
            expect(eventsCount).toEqual(31);
        });
    });

    test('resolves normally', () => {
        let count = 0;
        const startTime = (new Date()).getTime();
        return wait(300).progress((value) => {
            if (++count === 1) {
                expect(value).toEqual('Starting.');
            } else {
                expect(value).toBeGreaterThan(0);
            }
        }).then((result) => {
            const delta = (new Date()).getTime() - startTime;
            expect(delta).toBeGreaterThanOrEqual(280);
            expect(delta).toBeLessThanOrEqual(600);
            expect(result).toEqual('Done.');
        });
    });

    test('works when inverting calls ordering', () => {
        let eventsCount = 0;
        return wait(300).then(() => {
            expect(eventsCount).toEqual(31);
        }).progress((value) => {
            eventsCount++
            if (eventsCount === 1) {
                expect(value).toEqual('Starting.');
            } else {
                expect(value).toEqual((eventsCount - 1) * defaultStep);
            }
        });
    });

    test('replays events', async () => {
        const expected: any = {
            t1: ['Done.'],
            t2: ['Done.'],
            t3: ['Done.'],
            p1: ['Starting.', 30, 60],
            p2: ['Starting.', 30, 60],
        };
        const stack: any = {};
        const register = (index: string) => {
            stack[index] = [];
            return (value: any) => void stack[index].push(value);
        };
        return new Promise<void>((resolve) => {
            const promise = wait(60, 30);
            promise.then(register('t1')).progress(register('p1'));
            window.setTimeout(() => {
                promise.progress(register('p2')).then(register('t2'));
                window.setTimeout(() => {
                    promise.then(register('t3'));
                    window.setTimeout(() => {
                        expect(stack).toStrictEqual(expected);
                        resolve();
                    });
                }, 100);
            }, 100);
            return promise;
        });
    });

    test('replays events after resolve', async () => {
        const expected: any[] = ['Starting.', 30, 60, 'Done.'];
        const stack: any[] = [];
        const register = (value: any) => void stack.push(value);
        return new Promise<void>((resolve, reject) => {
            const promise = wait(60, 30);
            promise.then(() => {
                promise.progress(register).then(register).then(() => {
                    try {
                        expect(stack).toStrictEqual(expected);
                        resolve();
                    } catch (e) {
                        reject(e);
                    }
                });
            })
            return promise;
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
            new ObservablePromise((resolve: ResolveCallback<number>) => {
                window.setTimeout(resolve, 15);
            }),
            ObservablePromise.Resolve(1),
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

describe('ObservablePromise.ResolveAfterDelay', () => {
    test('waits for the given amount of milliseconds before resolving (async / await)', async () => {
        const startTime = (new Date()).getTime();
        await ObservablePromise.ResolveAfterDelay(500);
        expect((new Date()).getTime() - startTime).toBeGreaterThanOrEqual(480 /* because timeout is not reliable at the ms */ );
        expect((new Date()).getTime() - startTime).toBeLessThanOrEqual(650 /* because timeout is not reliable at the ms */ );
    });
    test('returns the correct value', async () => {
        const result = await ObservablePromise.ResolveAfterDelay(400, 'test');
        expect(result).toEqual('test');
    });
});

describe('ObservablePromise.MinDelay', () => {
    test('waits the min delay when the processing is shorter', async () => {
        const startTime = (new Date()).getTime();
        await ObservablePromise.MinDelay<void>(200, (resolve) => {
            window.setTimeout(() => {
                resolve();
            }, 50);
        });
        expect((new Date()).getTime() - startTime).toBeGreaterThanOrEqual(150 /* because timeout is not reliable at the ms */ );
    });

    test('do not wait if the processing is longer', async () => {
        const startTime = (new Date()).getTime();
        await ObservablePromise.MinDelay(100, (resolve) => {
            window.setTimeout(() => {
                resolve(0);
            }, 200);
        });
        expect((new Date()).getTime() - startTime).toBeGreaterThanOrEqual(180 /* because timeout is not reliable at the ms */ );
        expect((new Date()).getTime() - startTime).toBeLessThanOrEqual(350 /* because timeout is not reliable at the ms */ );
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
