import { getObjectKeys } from "@banquette/utils-object/get-object-keys";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { VInterface } from "./v.interface";
import { StatesInverseMap } from "@banquette/form";

/**
 * The default value of the `v` attribute, exposed by generic view models.
 */
export class VTest implements VInterface {
    /**
     * The view value.
     */
    value = undefined;

    /**
     * Plugins view data.
     */
    plugins = {};

    /**
     * Base states.
     */
    public valid:             boolean = true;
    public notValidated:      boolean = false;
    public validating:        boolean = false;
    public validatedAndValid: boolean = false;
    public busy:              boolean = false;
    public disabled:          boolean = false;
    public dirty:             boolean = false;
    public touched:           boolean = false;
    public changed:           boolean = false;
    public focused:           boolean = false;

    /**
     * Inverse.
     */
    get invalid():            boolean { return !this.valid }
    get validated():          boolean { return !this.notValidated }
    get notValidating():      boolean { return !this.validating }
    get notBusy():            boolean { return !this.busy }
    get enabled():            boolean { return !this.disabled }
    get pristine():           boolean { return !this.dirty }
    get untouched():          boolean { return !this.touched }
    get unchanged():          boolean { return !this.changed }
    get unfocused():          boolean { return !this.focused }


    /**
     * Create an instance of VTest while optionally overriding part of its values.
     */
    public static Create(override: Partial<VInterface>): VTest {
        const instance: any = new VTest();
        const statesMap = getObjectKeys(StatesInverseMap).reduce((ret: any, key: keyof typeof StatesInverseMap) => {
            ret[StatesInverseMap[key]] = key;
            return ret;
        }, {});
        for (const key of getObjectKeys(override)) {
            if (!isUndefined(statesMap[key])) {
                instance[statesMap[key]] = !override[key];
            } else {
                instance[key] = override[key];
            }
        }
        return instance;
    }

    public static CreateAndAssign(override: Partial<VInterface>, target: any): VTest {
        const instance = VTest.Create(override);
        target.vm.v = instance;
        return instance;
    }
}
