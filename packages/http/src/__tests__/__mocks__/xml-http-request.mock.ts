import { UsageException } from "@banquette/core";
import { ensureSameType, isFunction, isObject, isString, randomInt } from "@banquette/utils";
import { base64decodeUrlSafe } from "@banquette/utils-base64";
import { XSSIPrefix } from "../../decoder/json.decoder";
import { httpStatusToText } from "../../utils";
import { TestResponses } from "./test-responses";
import { XhrConfig } from "./xhr-config.type";

type ConfigState = {
    networkErrorsLeft: number
};
const configStates: Record<number, ConfigState> = {};

/**
 * Fake implementation of the XMLHttpRequest object.
 *
 * @see XhrConfig for details on the configuration.
 */
// @ts-ignore
window.XMLHttpRequest = jest.fn().mockImplementation(() => {
    let aborted: boolean = false;
    const config: XhrConfig = {
        id: -1,
        url: '',
        delay: randomInt(20, 60),
        headers: true,
        responseType: true,
        timeout: 1000,
        XSSISafe: false,
        responseKey: '',
        networkError: 0
    };
    const changeState = function(this: XMLHttpRequest, value: number): void {
        (this as any).readyState = value;
        if (this.onreadystatechange !== null && isFunction(this.onreadystatechange)) {
            this.onreadystatechange(new Event('statechange'));
        }
    };
    const saveConfigState = (id: number, state: ConfigState): void => {
        if (id < 0) {
            throw new UsageException('An id MUST be defined to use stateful behaviors.');
        }
        configStates[id] = state;
    };
    const getConfigState = (id: number, defaultState: ConfigState): ConfigState => {
        if (id < 0) {
            throw new UsageException('An id MUST be defined to use stateful behaviors.');
        }
        return configStates[id] || defaultState;
    };
    return {
        open: function(method: string, url: string) {
            const urlParams = new URLSearchParams(url.indexOf('?') > -1 ? url.substring(url.indexOf('?') + 1) : '');
            for (const key of Object.keys(config)) {
                if (urlParams.has(key)) {
                    // @ts-ignore
                    let value = urlParams.get(key);
                    if (isString(value) && value.substring(0, 5) === 'json-') {
                        value = JSON.parse(base64decodeUrlSafe(value.substring(5)));
                        (config as any)[key] = value;
                    } else {
                        (config as any)[key] = ensureSameType(value, (config as any)[key]);
                    }
                }
            }
            config.url = url;
            this.timeout = config.timeout;
            changeState.apply(this, [1]);
        },
        send: function(params: any) {
            const that = this;
            if (aborted) {
                return ;
            }
            changeState.apply(this, [4]);
            const startTime = (new Date()).getTime();
            window.setTimeout(() => {
                if (aborted) {
                    return ;
                }
                // If we've reached the timeout.
                if ((new Date()).getTime() - startTime >= config.timeout) {
                    if (isFunction(that.ontimeout)) {
                        that.ontimeout();
                    }
                    return ;
                }
                if (config.networkError > 0) {
                    const configState = getConfigState(config.id, {networkErrorsLeft: config.networkError});
                    if (configState.networkErrorsLeft > 0) {
                        configState.networkErrorsLeft--;
                        saveConfigState(config.id, configState);
                        if (isFunction(that.onerror)) {
                            that.onerror();
                        }
                        return;
                    }
                }
                that.status = 200;
                that.responseURL = config.url;
                if (config.responseKey) {
                    const response = TestResponses[config.responseKey as any];
                    that.status = response.status;
                    (that as any).responseText = (config.XSSISafe ? XSSIPrefix : '') + response.content;
                }
                that.statusText = httpStatusToText(that.status);
                if (isFunction(that.onload)) {
                    that.onload();
                }
            }, Math.min(config.timeout * 1.1 /* To ensure the timeout isn't called too soon when we want to reach the timeout. */, config.delay));
        },
        abort: function() {
            aborted = true;
            this.onabort();
        },
        getAllResponseHeaders: () => {
            const headersObj = isObject(config.headers) ? config.headers : ((config.responseKey) ? (TestResponses[config.responseKey as any].headers || {}) : {}) as any;
            const lines: string[] = [];
            for (const name of Object.keys(headersObj)) {
                lines.push(name + ': ' + headersObj[name]);
            }
            return lines.join("\\r\\n");
        },
        setRequestHeader: jest.fn(),
        readyState: 0,
        status: 0,
        response: null
    };
});
