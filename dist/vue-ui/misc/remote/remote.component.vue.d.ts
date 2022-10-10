import { HttpMethod } from "@banquette/http/constants";
import { HttpResponse } from "@banquette/http/http-response";
import { Primitive } from "@banquette/utils-type/types";
import { Vue } from "@banquette/vue-typescript/vue";
export default class RemoteComponent extends Vue {
    url: string | null;
    endpoint: string | null;
    model: string | null;
    method: HttpMethod;
    urlParams: Record<string, Primitive>;
    headers: Record<string, Primitive>;
    response: HttpResponse<any> | null;
    bag: any;
    get waiting(): boolean;
    get fetching(): boolean;
    get error(): boolean;
    get ready(): boolean;
    private remote;
    /**
     * Try to fetch remote data if available.
     */
    update(): void;
    private syncConfigurationProps;
}
