import { EventArg } from "@banquette/event";
import { VuePreset } from "../vue-preset";

export class PresetUpdatedEventArg extends EventArg {
    public constructor(public readonly preset: VuePreset) {
        super();
    }
}
