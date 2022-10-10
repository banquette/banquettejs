import { HttpMethod } from "@banquette/http/constants";
import { RemoteModule } from "@banquette/ui/misc/remote/remote.module";
import { Primitive } from "@banquette/utils-type/types";
/**
 * VueJS bridge to RemoteModule.
 */
export declare class RemoteComposable {
    /**
     * @see RemoteComposable
     */
    url: string | null;
    endpoint: string | null;
    model: string | null;
    method: HttpMethod;
    urlParams: Record<string, Primitive>;
    headers: Record<string, Primitive>;
    /**
     * The actual module instance.
     */
    module: RemoteModule;
    private syncConfigurationProps;
}
