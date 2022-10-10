import { FormGroupInterface } from "@banquette/form/form-group.interface";
import { WeakObjectMap } from "@banquette/utils-misc/weak-object-map";
export declare class FormStorageService extends WeakObjectMap<FormGroupInterface> {
    /**
     * @inheritDoc
     */
    register(obj: FormGroupInterface, alias: string): void;
}
