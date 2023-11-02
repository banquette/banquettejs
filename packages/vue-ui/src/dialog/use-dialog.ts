import { Injector } from "@banquette/dependency-injection";
import { DialogService } from "./dialog.service";

export const useDialog = /**!PURE*/ ((_) => {
    return () => {
        const dialogServie = /**!PURE*/  Injector.Get(_);
        return {
            show: <R = unknown>(id: string, args: Record<string, any> = {}): Promise<R> => {
                return dialogServie.show(id, args);
            },

            hide: (id: string) => {
                dialogServie.hide(id);
            },

            hideAll: () => {
                dialogServie.hideAll();
            }
        };
    };
})(DialogService);
