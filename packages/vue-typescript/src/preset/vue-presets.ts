import { EventDispatcher } from "@banquette/event";
import { UsageException } from "@banquette/exception";
import { getObjectKeys } from "@banquette/utils-object/get-object-keys";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { PresetEvents, DefaultPreset } from "./constant";
import { PresetCreatedEventArg } from "./event/preset-created.event-arg";
import { PresetDefinitionInterface } from "./preset-definition.interface";
import { VuePreset } from "./vue-preset";

export class VuePresets {
    /**
     * Known presets.
     */
    private static Presets: Record<string, Record<string, VuePreset>> = {};

    /**
     * Event dispatcher used to get notification from presets when a change is made.
     */
    private static Dispatcher = new EventDispatcher();

    /**
     * Get or create a preset.
     */
    public static Get(target: string, name: string): VuePreset {
        VuePresets.ValidateName(name);
        if (isUndefined(VuePresets.Presets[target])) {
            VuePresets.Presets[target] = {};
        }
        if (isUndefined(VuePresets.Presets[target][name])) {
            const inst = new VuePreset(VuePresets.Dispatcher);
            VuePresets.Presets[target][name] = inst;

            // Do not dispatch synchronously to give time to the caller to setup the preset.
            window.setTimeout(() => {
                VuePresets.Dispatcher.dispatch(PresetEvents.Created, new PresetCreatedEventArg(target, name, inst));
            });
        }
        return VuePresets.Presets[target][name];
    }

    /**
     * Get the default preset that is always applied.
     * Use this if you want to set values that will always apply no matter what preset is used.
     *
     * A preset can still override the values defines in the default preset, they are low priority.
     */
    public static GetDefault(target: string): VuePreset {
        return VuePresets.Get(target, DefaultPreset);
    }

    /**
     * Try to get a preset and wait until it is created if necessary.
     * The preset is returned via the callback when the preset is available.
     */
    public static GetSafe(target: string, name: string, cb: (preset: VuePreset) => void): void {
        VuePresets.ValidateName(name);
        if (isUndefined(VuePresets.Presets[target]) || isUndefined(VuePresets.Presets[target][name])) {
            const unsubscribe = VuePresets.Dispatcher.subscribe(PresetEvents.Created, (event: PresetCreatedEventArg) => {
                if (event.target === target && event.name === name) {
                    cb(event.preset);
                    unsubscribe();
                }
            });
        } else {
            cb(VuePresets.Presets[target][name]);
        }
    }

    /**
     * Same as `GetDefault` but wait until it is created if necessary.
     */
    public static GetDefaultSafe(target: string, cb: (preset: VuePreset) => void): void {
        return VuePresets.GetSafe(target, DefaultPreset, cb);
    }

    /**
     * Shorthand to define multiple presets at once, as an object.
     */
    public static Define(target: string, obj: PresetDefinitionInterface): void {
        const map = {props: 'prop', cssVars: 'cssVar', css: 'css'};
        for (const presetName of getObjectKeys(obj)) {
            const conf: any = obj[presetName];
            const preset: VuePreset = VuePresets.Get(target, presetName as string);
            for (const varName of getObjectKeys(map)) {
                if (!isUndefined(conf[varName])) {
                    (preset as any)[map[varName]](conf[varName]);
                }
            }
        }
    }

    /**
     * Remove a preset.
     * If `name` is null, all presets of the target are removed.
     */
    public static Remove(target: string, name: string|null): void {
        if (isUndefined(VuePresets.Presets[target])) {
            return ;
        }
        if (name === null) {
            delete VuePresets.Presets[target];
        } else {
            delete VuePresets.Presets[target][name];
        }
    }

    /**
     * Ensure presets names are valid or throw if not.
     */
    private static ValidateName(name: string): void {
        if (name.match(/\s+/)) {
            throw new UsageException('A preset name cannot contain spaces.');
        }
    }
}
