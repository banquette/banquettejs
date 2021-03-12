import { injectable } from "inversify";
import { Injector } from "../injector";
import { UsageException } from "../error/usage.exception";
import { extend } from "../utils/object/extend";
import { getFromSymbolIndex } from "../utils/object/get-from-symbol-index";
import { getSymbolDescription } from "../utils/object/get-symbol-description";
import { VarHolder } from "../utils/var-holder";
import { CoreConfigurationInterface } from "./core-configuration.interface";

@injectable()
export class SharedConfiguration extends VarHolder {
    /**
     * Object holding the configuration objects indexed by their symbol.
     */
    private configs: Record<symbol, any> = {};

    /**
     * Get the configuration object associated with a symbol.
     */
    public getConfig<T>(symbol: symbol): T {
        const config = getFromSymbolIndex(this.configs, symbol, null) as T;
        if (config === null) {
            throw new UsageException(`No config found for "${symbol.toString()}".`);
        }
        return config;
    }

    /**
     * Update a configuration with the values in the modifier.
     */
    public modifyConfig<T>(symbol: symbol, modifier: Partial<T>): T {
        const config = extend(this.getConfig(symbol), modifier);
        const description: string = getSymbolDescription(symbol);
        this.assignConfig(symbol, config);
        if (description) {
            this.set(description, config);
        }
        return config as T;
    }

    /**
     * Register a new configuration type.
     */
    public registerConfig<T>(symbol: symbol, config: T, availableAsString: boolean = false): void {
        if (availableAsString) {
            const description: string = getSymbolDescription(symbol);
            if (description && !this.has(description)) {
                this.set(description, config);
            } else if (description) {
                console.warn(
                    `Another symbol with the description "${description}" already exists. ` +
                    `This configuration will not be accessible by string.`
                );
            }
        }
        this.assignConfig(symbol, config);
    }

    /**
     * Assign a config object to the index.
     */
    private assignConfig(symbol: symbol, config: any): void {
        // @see https://github.com/microsoft/TypeScript/issues/1863#issuecomment-689028589
        Object.assign(this.configs, {[symbol]: config});
    }
}
export const SharedConfigurationSymbol = Symbol("SharedConfiguration");
Injector.RegisterService(SharedConfigurationSymbol, SharedConfiguration);

const instance: SharedConfiguration = Injector.Get<SharedConfiguration>(SharedConfigurationSymbol);
Injector.GetContainer().bind<SharedConfiguration>('SharedConfiguration').toConstantValue(instance);

// Register base configuration
export const CoreConfigurationSymbol = Symbol("core");
instance.registerConfig<CoreConfigurationInterface>(CoreConfigurationSymbol, {
    env: 'prod',
    version: '0.0.1'
}, true);
