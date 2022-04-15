import { Injector } from "@banquette/dependency-injection/injector";
import { DialogService } from "./dialog.service";

let dialogService: DialogService|null = null;

function getService(): DialogService {
    if (dialogService === null) {
        dialogService = Injector.Get(DialogService);
    }
    return dialogService;
}

/**
 * Show a dialog by id.
 */
export function showDialog(id: string, args: Record<string, any>): void {
    getService().show(id, args);
}

/**
 * Hide a dialog by id.
 */
export function hideDialog(id: string): void {
    getService().hide(id);
}

/**
 * Hide all visible dialogs.
 */
export function hideAllDialogs(): void {
    getService().hideAll();
}
