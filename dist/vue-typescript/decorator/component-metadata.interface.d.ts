import { ComponentMetadata } from "./component.decorator";
import { ComposableDecoratorOptions } from "./composable.decorator";
import { ComputedMetadata } from "./computed.decorator";
import { ExposeMetadata } from "./expose.decorator";
import { ImportDecoratorOptions } from "./import.decorator";
import { InjectProvidedDecoratorOptions } from "./inject-provided.decorator";
import { LifecycleHook } from "./lifecycle.decorator";
import { PropMetadata } from "./prop.decorator";
import { ProvideDecoratorOptions } from "./provide.decorator";
import { TemplateRefDecoratorOptions } from "./template-ref.decorator";
import { ThemeVarDecoratorOptions } from "./theme-var.decorator";
import { ThemeableMetadata } from "./themeable.decorator";
import { WatchMetadata } from "./watch.decorator";
/**
 * An object containing the data defined by decorators.
 * @internal
 */
export interface ComponentMetadataInterface {
    /**
     * Data relative to the @Component decorator.
     * Optional because only the @Component decorator can set it.
     */
    component: ComponentMetadata;
    /**
     * Data relative to the @Composable decorator.
     * Optional because only the @Composable decorator can set it.
     */
    composable?: ComposableDecoratorOptions;
    /**
     * Define the props to register.
     */
    props: Record<string, PropMetadata>;
    /**
     * The list of the computed properties.
     */
    computed: ComputedMetadata;
    /**
     * The list of reactive properties.
     */
    reactive: string[];
    /**
     * The list properties/methods exposed to the template.
     */
    exposed: Record<string, ExposeMetadata>;
    /**
     * The list of provided properties.
     */
    provided: Record<string, ProvideDecoratorOptions>;
    /**
     * Map of values provided by parent components.
     */
    injected: Record<string, InjectProvidedDecoratorOptions>;
    /**
     * Map of methods to call for lifecycle hooks.
     */
    hooks: Partial<Record<LifecycleHook, string[]>>;
    /**
     * Getter/setter or functions being watched.
     */
    watch: WatchMetadata[];
    /**
     * Map of property names and composable ctor to import.
     */
    imports: Record<string, ImportDecoratorOptions>;
    /**
     * References on HTML elements in the template.
     */
    templateRefs: Record<string, TemplateRefDecoratorOptions>;
    /**
     * Name of the method to use as a render function.
     */
    renderMethod: string | null;
    /**
     * Theming configuration.
     */
    themeable: ThemeableMetadata | null;
    /**
     * Map of theme vars accessors.
     */
    themeVars: Record<string, ThemeVarDecoratorOptions>;
}
