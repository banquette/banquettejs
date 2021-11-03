import { Service } from "@banquette/dependency-injection";
import { UsageException } from "@banquette/exception";
import { FormGroupInterface } from "@banquette/form";
import { WeakObjectMap } from "@banquette/utils-misc";

@Service()
export class FormStorage extends WeakObjectMap<FormGroupInterface> {
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
