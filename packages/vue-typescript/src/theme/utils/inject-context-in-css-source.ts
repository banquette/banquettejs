import { ltrim } from "@banquette/utils-string/format/ltrim";
import { trim } from "@banquette/utils-string/format/trim";
import { extractCssSelectors } from "./extract-css-selectors";

/**
 * Very basic utility function that takes a raw css sources and inject the class of the variant and optionally the component's scope id.
 * The utility is not meant to be fool proof and is only tested for basic css syntax.
 */
export function injectContextInCssSource(source: string, contextId: string|null, scopeId: string|null): string {
    source = trim(source.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g,''));
    const selectors = extractCssSelectors(source);

    for (let i = selectors.length - 1; i >= 0; --i) {
        const selector = selectors[i];

        // Ignore animations
        if (selector[0][0] === '@') {
            continue ;
        }
        // Add the theme / variant class/attributes
        if (contextId !== null) {
            const isRootSelector = selector[0][0] === '&';
            if (isRootSelector) {
                const trimed = ltrim(selector[0].substring(1));
                source = source.substring(0, selector[1]) + trimed + source.substring(selector[2]);
                selector[2] -= selector[0].length - trimed.length;
                selector[0] = trimed;
            }
            if (isRootSelector && ['.', '#'].indexOf(selector[0][0]) < 0) {
                let j = 0;
                for (; j < selector[0].length && selector[0][j].match(/[a-z_-]+/i); ++j) ;
                selector[0] = selector[0].substring(0, j) + contextId + selector[0].substring(j);
            } else {
                selector[0] = contextId + (!isRootSelector ? ' ' : '') + selector[0];
            }
            source =
                source.substring(0, selector[1]) +
                selector[0] +
                source.substring(selector[2]);

            selector[2] += contextId.length + (isRootSelector ? 0 : 1);
        }

        // Add scope id
        if (scopeId !== null) {
            source =
                source.substring(0, selector[2]) +
                `[${scopeId}]` +
                source.substring(selector[2]);
        }
    }
    return source;
}
