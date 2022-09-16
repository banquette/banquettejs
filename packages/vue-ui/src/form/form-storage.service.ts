import { Service } from "@banquette/dependency-injection/decorator/service.decorator";
import { UsageException } from "@banquette/exception/usage.exception";
import { FormGroupInterface } from "@banquette/form/form-group.interface";
import { WeakObjectMap } from "@banquette/utils-misc/weak-object-map";

@Service()
export class FormStorageService extends WeakObjectMap<FormGroupInterface> {
    /**
     * @inheritDoc
     */
    public register(obj: FormGroupInterface, alias: string): void {
        if (this.has(alias)) {
            throw new UsageException(`A form named "${alias}" is already registered in the storage.`);
        }
        super.register(obj, alias);
    }
}
