import { Injector } from "@banquette/dependency-injection";
import { DialogService } from "./dialog.service";

export const useDialog = /**!PURE*/ ((_) => {
    return () => {
        const dialogService = /**!PURE*/  Injector.Get(_);
        return {
            show: <R = unknown>(id: string, args: Record<string, any> = {}): Promise<R> => {
                return dialogService.show(id, args);
            },

            hide: (id: string) => {
                dialogService.hide(id);
            },

            hideAll: () => {
                dialogService.hideAll();
            }
        };
    };
})(DialogService);
