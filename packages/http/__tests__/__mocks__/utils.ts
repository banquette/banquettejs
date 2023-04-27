import { isObject, isUndefined } from '@banquette/utils-type';
import { XhrConfig } from './xhr-config.type';

let idIncrement: number = 0;

export function buildTestUrl(config: Partial<XhrConfig>) {
    let url = '//test';
    const params: string[] = [];
    if (isUndefined(config.id)) {
        config.id = ++idIncrement;
    }
    for (const key of Object.keys(config)) {
        let value: any = config[key as keyof XhrConfig];
        if (isObject(value)) {
            value = 'json-' + window.btoa(JSON.stringify(value));
        }
        params.push(key + '=' + value);
    }
    if (params.length > 0) {
        url += '?' + params.join('&');
    }
    return url;
}
