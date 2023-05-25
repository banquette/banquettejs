import { Injector } from "@banquette/dependency-injection";
import { VueBuilder } from "@banquette/vue-typescript";
import { DialogService } from "./dialog.service";

export const useDialogGlobals = /**!PURE*/ ((_) => {
    return () => {
        const dialogServie = /**!PURE*/  Injector.Get(_);
        VueBuilder.RegisterGlobalProperty('btShowDialog', (id: string, args: Record<string, any> = {}) => {
            dialogServie.show(id, args);
        });

        VueBuilder.RegisterGlobalProperty('btHideDialog', (id: string) => {
            dialogServie.hide(id);
        });

        VueBuilder.RegisterGlobalProperty('btHideAllDialogs', () => {
            dialogServie.hideAll();
        });
    };
})(DialogService);
