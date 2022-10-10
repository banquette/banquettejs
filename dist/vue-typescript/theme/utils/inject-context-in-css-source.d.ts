/**
 * Very basic utility function that takes a raw css sources and inject the class of the variant and optionally the component's scope id.
 * The utility is not meant to be foolproof and is only tested for basic css syntax.
 */
export declare function injectContextInCssSource(source: string, themeId: string, variantId: string, scopeId: string | null): string;
