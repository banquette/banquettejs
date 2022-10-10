/**
 * Parse a css source with no comments and extract the list of selectors and their position in the source.
 */
export declare function extractCssSelectors(source: string): Array<[string, number, number]>;
