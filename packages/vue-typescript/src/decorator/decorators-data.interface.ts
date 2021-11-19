import { ComponentDecoratorOptions } from "./component.decorator";
import { ComposableDecoratorOptions } from "./composable.decorator";
import { ComputedDecoratorOptions } from "./computed.decorator";
import { ImportDecoratorOptions } from "./import.decorator";
import { LifecycleHook } from "./lifecycle.decorator";
import { PropPrivateOptions } from "./prop.decorator";
import { WatchDecoratorOptions } from "./watch.decorator";

/**
 * An object containing the data defined by decorators.
 * @internal
 */
export interface DecoratorsDataInterface {
    /**
     * Data relative to the @Component decorator.
     * Optional because only the @Component decorator can set it.
     */
    component?: ComponentDecoratorOptions;

    /**
     * Data relative to the @Composable decorator.
     * Optional because only the @Composable decorator can set it.
     */
    composable?: ComposableDecoratorOptions;

    /**
     * Define the props to register.
     */
    props: Record<string, PropPrivateOptions>;

    /**
     * The list of the computed properties.
     */
    computed: Record<string, Omit<ComputedDecoratorOptions, 'exposedAs'>>;

    /**
     * The list of reactive properties.
     */
    reactive: string[];

    /**
     * The list properties/methods exposed to the template.
     */
    exposed: Record<string, string>;

    /**
     * Map of methods to call for lifecycle hooks.
     */
    hooks: Record<LifecycleHook, string[]>;

    /**
     * Getter/setter or functions being watched.
     */
    watch: WatchDecoratorOptions[];

    /**
     * Map of property names and composable ctor to import.
     */
    imports: Record<string, ImportDecoratorOptions>;

    /**
     * References on HTML elements in the template.
     */
    templateRefs: Record<string, string>;
}
