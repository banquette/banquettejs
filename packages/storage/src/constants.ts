import { UsageException } from "@banquette/exception";
import { VarHolder } from "@banquette/utils-misc/var-holder";

export class Constants extends VarHolder {
    private static Instance: Constants|null = null;

    /**
     * Get the value of a constant.
     */
    public static Get(name: string): any {
        return Constants.GetInstance().get(name);
    }

    /**
     * Register a constant.
     */
    public static Register(name: string, value: any): void {
        if (Constants.GetInstance().has(name)) {
            throw new UsageException(`A constant named ${name} is already defined. Choose another name of use the shared configuration if the value must be overridden.`);
        }
        Constants.GetInstance().set(name, value);
    }

    /**
     * Get (and create if necessary) the singleton instance.
     */
    private static GetInstance(): Constants {
        if (Constants.Instance === null) {
            Constants.Instance = new Constants();
        }
        return Constants.Instance;
    }
}
