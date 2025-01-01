import { markRaw } from 'vue';
import { Injector } from "@banquette/dependency-injection";
import { Constructor } from '@banquette/utils-type';
import { TiptapConfigurationInterface } from "./tiptap-configuration.interface";
import { TiptapConfigurationService } from "./tiptap-configuration.service";
import { AbstractTiptapModule } from './modules/abstract-tiptap-module';

/**
 * Utility function to create a type safe toolbar item.
 */
export function createToolbarItem<T extends AbstractTiptapModule>(
    component: Constructor<T>,
    options?: T['configuration']
) {
    return { component: markRaw(component), options };
}

/**
 * Utility function to easily register a tiptap configuration.
 */
export function registerTiptapConfiguration(name: string, configuration: TiptapConfigurationInterface): void {
    return Injector.Get(TiptapConfigurationService).set(name, configuration);
}

