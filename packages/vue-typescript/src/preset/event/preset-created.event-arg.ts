import { EventArg } from "@banquette/event";
import { VuePreset } from "../vue-preset";

export class PresetCreatedEventArg extends EventArg {
    public constructor(public target: string, public name: string, public readonly preset: VuePreset) {
        super();
    }
}
