import { VueBuilder } from "@banquette/vue-typescript/vue-builder";
import { showDialog, hideDialog, hideAllDialogs } from "./utils";

export { default as DialogComponent } from './dialog.component.vue';

VueBuilder.RegisterGlobalProperty('btShowDialog', showDialog);
VueBuilder.RegisterGlobalProperty('btHideDialog', hideDialog);
VueBuilder.RegisterGlobalProperty('btHideAllDialogs', hideAllDialogs);
