export * from './vue-builder';
export * from './vue';
export { isComponentInstance, getComponentOptions, getDecoratorsData, c, getComponentInstance } from './utils';

/**
 * Decorators
 */
export * from './decorator/decorators-data.interface';
export * from './decorator/component.decorator';
export * from './decorator/composable.decorator';
export * from './decorator/computed.decorator';
export * from './decorator/expose.decorator';
export * from './decorator/import.decorator';
export * from './decorator/inject-provided.decorator';
export * from './decorator/lifecycle.decorator';
export * from './decorator/prop.decorator';
export * from './decorator/provide.decorator';
export * from './decorator/reactive.decorator';
export * from './decorator/ref.decorator';
export * from './decorator/render.decorator';
export * from './decorator/template-ref.decorator';
export * from './decorator/preset.decorator';
export * from './decorator/watch.decorator';
export * from './decorator/directive.decorator';

/**
 * Presets
 */
export * from './preset/vue-presets';
