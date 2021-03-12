import { Container, interfaces } from "inversify";

export class Injector {
    /**
     * Inversify container instance.
     */
    private static Injector: Container|null = null;

    /**
     * Symbols of registered modules.
     */
    private static Symbols: {
        modules: symbol[];
        services: symbol[];
    } = {
        modules: [],
        services: []
    };

    /**
     * Gets the Inversify's container and create it if necessary.
     */
    public static GetContainer(): Container {
        if (Injector.Injector === null) {
            Injector.Injector = new Container();
        }
        return Injector.Injector;
    }

    /**
     * Gets a service registered in the container.
     */
    public static Get<T>(serviceIdentifier: interfaces.ServiceIdentifier<T>): T {
        return Injector.GetContainer().get<T>(serviceIdentifier);
    }

    /**
     * Register an object as a module into the container.
     * Modules are transient, a new instance will be created each time they are imported as a dependency.
     */
    public static RegisterModule<T>(symbol: symbol, type: any): interfaces.BindingWhenOnSyntax<T> {
        Injector.Symbols.modules.push(symbol);
        return Injector.GetContainer().bind<T>(symbol).to(type).inTransientScope();
    }

    /**
     * Register an object as a service into the container.
     * Services are singleton, only one instance will be created and will be shared each time it is imported as a dependency.
     */
    public static RegisterService<T>(symbol: symbol, type: any): interfaces.BindingWhenOnSyntax<T> {
        Injector.Symbols.services.push(symbol);
        return Injector.GetContainer().bind<T>(symbol).to(type).inSingletonScope();
    }

    /**
     * Register a service factory.
     */
    public static RegisterFactory<T>(symbol: symbol, callback: (context: any) => any): interfaces.BindingInWhenOnSyntax<T> {
        return Injector.GetContainer().bind<T>(symbol).toDynamicValue(callback);
    }

    /**
     * Gets the whole list of registered Symbols for modules.
     */
    public static GetModulesSymbols(): symbol[] {
        return ([] as symbol[]).concat(Injector.Symbols.modules);
    }

    /**
     * Gets the whole list of registered Symbols for services.
     */
    public static GetServicesSymbols(): symbol[] {
        return ([] as symbol[]).concat(Injector.Symbols.services);
    }
}
