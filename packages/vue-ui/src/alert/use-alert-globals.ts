import { Injector } from "@banquette/dependency-injection";
import { VueBuilder } from "@banquette/vue-typescript";
import { AlertOptionsInterface } from "./alert-options.interface";
import { AlertService } from "./alert.service";

export const useAlertGlobals = /**!PURE*/ ((_) => {
    return () => {
        const alertService = /**!PURE*/  Injector.Get(_);
        VueBuilder.RegisterGlobalProperty('btShowAlert', (optionsOrMessage: (Partial<AlertOptionsInterface> & { message: string }) | string, variant?: string, ttl?: number) => {
            alertService.show(optionsOrMessage as any, variant, ttl);
        });

        VueBuilder.RegisterGlobalProperty('btHideAllAlerts', () => {
            alertService.hideAll();
        });
    };
})(AlertService);
