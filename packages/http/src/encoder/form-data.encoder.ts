import { Injector } from '@banquette/dependency-injection';
import { EventDispatcherService } from '@banquette/event';
import { UsageException } from '@banquette/exception';
import { isNullOrUndefined, isObject } from '@banquette/utils-type';
import { EncoderTag, HttpEvents } from '../constants';
import { RequestEvent } from '../event/request.event';

export const PayloadTypeFormData = Symbol('form-data');

// The assignation is so the /**!PURE*/ comment is kept when compiling.
// It's then replace by "/* @__PURE__ */" at the end of the build.
// If "/* @__PURE__ */" is set right here, it'll be striped out when building.
export const useFormDataEncoder = /**!PURE*/ (() => {
    return () => {
        function buildFormData(formData: FormData, data: any, parentKey?: string): void {
            if (isObject(data) && !(data instanceof Date) && !(data instanceof File)) {
                for (const key of Object.keys(data)) {
                    buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
                }
            } else if (parentKey && data instanceof File) {
                formData.append(parentKey, data, data.name);
            } else if (parentKey) {
                formData.append(parentKey, !isNullOrUndefined(data) ? data : '');
            }
        }

        /**
         * Maybe encode the request payload into a FormData object.
         */
        function onBeforeRequest(event: RequestEvent) {
            if (event.request.payloadType !== PayloadTypeFormData) {
                return;
            }
            let formData = new FormData();
            let payload: any = event.request.payload;
            event.stopPropagation();
            if (event.request.tryCount || isNullOrUndefined(payload)) {
                return;
            }
            if (!isObject(event.request.payload)) {
                throw new UsageException('An object is expected as input to encode the payload as FormData.');
            }
            if (payload instanceof HTMLFormElement) {
                formData = new FormData(payload);
            } else if (payload instanceof HTMLInputElement && payload.type !== 'file') {
                const filesArray = payload.files !== null ? Array.from(payload.files) : [];
                for (const file of filesArray) {
                    formData.append(`file${payload.multiple ? 's[]' : ''}`, file, file.name);
                }
            } else {
                buildFormData(formData, payload);
            }
            event.request.payload = formData;
        }

        Injector.Get(EventDispatcherService).subscribe<RequestEvent>(
            HttpEvents.BeforeRequest,
            onBeforeRequest,
            0,
            null,
            [EncoderTag]
        );
    };
})();
