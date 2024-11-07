import { Inject, Module } from '@banquette/dependency-injection';
import { ObservablePromise } from '@banquette/promise';
import { isUndefined } from '@banquette/utils-type';
import { HttpRequestProgressStatus } from '../constants';
import { StatusChangeEvent } from '../event/status-change.event';
import { NetworkException } from '../exception/network.exception';
import { RequestCanceledException } from '../exception/request-canceled.exception';
import { HttpRequest } from '../http-request';
import { NetworkWatcherService } from '../network-watcher.service';
import { AdapterRequest } from './adapter-request';
import { AdapterResponse, AdapterResponseType } from './adapter-response';
import { AdapterInterface } from './adapter.interface';

@Module()
export class FetchAdapter implements AdapterInterface {
    private request!: HttpRequest;
    private promiseResolve!: (value: any) => void;
    private promiseReject!: (reason?: any) => void;
    private promiseProgress!: (value?: any) => void;
    private requestProgressStatus!: HttpRequestProgressStatus;
    private controller?: AbortController;

    public constructor(
        @Inject(NetworkWatcherService)
        private networkWatcher: NetworkWatcherService
    ) {}

    public execute(request: AdapterRequest): ObservablePromise<AdapterResponse> {
        this.controller = new AbortController();
        const { signal } = this.controller;

        return new ObservablePromise<any>((resolve, reject, progress) => {
            this.request = request as HttpRequest;
            this.promiseResolve = resolve;
            this.promiseReject = reject;
            this.promiseProgress = progress;
            this.updateProgressStatus(HttpRequestProgressStatus.Preparing);

            const headers = new Headers(request.headers.all());
            const body = this.prepareRequestBody(request.payload);
            const fetchOptions: RequestInit = {
                method: request.method,
                headers: headers,
                body,
                signal: signal,
                credentials: request.withCredentials ? 'include' : 'omit',
                mode: 'cors'
            };
            if (request.timeout) {
                setTimeout(() => {
                    this.controller?.abort();
                }, request.timeout);
            }

            fetch(request.staticUrl, fetchOptions)
                .then(response => {
                    this.updateProgressStatus(HttpRequestProgressStatus.Closed);
                    resolve(new AdapterResponse(
                        response.status,
                        response.url,
                        response.statusText,
                        this.normalizeFetchResponseType(response.type),
                        this.convertHeadersMapToObject(response.headers)
                    ));
                })
                .catch(error => {
                    this.updateProgressStatus(HttpRequestProgressStatus.Closed);
                    if (error.name === 'AbortError') {
                        reject(new RequestCanceledException());
                    } else {
                        reject(new NetworkException(!this.networkWatcher.isOnline()));
                    }
                });
        });
    }

    public cancel(): void {
        this.controller?.abort();
    }

    private convertHeadersMapToObject(headers: Headers): Record<string, string> {
        const map: Record<string, string> = {};
        headers.forEach((value, key) => {
            map[key] = value;
        });
        return map;
    }

    private updateProgressStatus(status: HttpRequestProgressStatus): void {
        if (isUndefined(this.requestProgressStatus) || status > this.requestProgressStatus) {
            this.promiseProgress(new StatusChangeEvent(this.request, status));
            this.requestProgressStatus = status;
        }
    }

    private prepareRequestBody(payload: any): BodyInit | null {
        if (payload instanceof Document) {
            return new XMLSerializer().serializeToString(payload);
        }
        return payload;
    }

    private normalizeFetchResponseType(responseType: ResponseType): AdapterResponseType {
        switch (responseType) {
            case 'basic':
            case 'cors':
            case 'default':
                return 'default';
            case 'error':
            case 'opaque':
            case 'opaqueredirect':
                return 'text';
            default:
                return 'default';
        }
    }
}
