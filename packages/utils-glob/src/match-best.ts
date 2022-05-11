import { MatchType } from "./constant";
import { match } from "./match";
import { MatchResult } from "./match-result";

/**
 * Match multiple patterns and keep the best result.
 */
export function matchBest(masks: string[], path: string, tags: string[] = []): MatchResult {
    let bestCombinedResult: MatchResult = {pattern: MatchType.None, tags: MatchType.None};
    for (const mask of masks) {
        const subResult: MatchResult = match(mask, path, tags);
        bestCombinedResult.pattern = Math.max(bestCombinedResult.pattern, subResult.pattern);
        bestCombinedResult.tags = Math.max(bestCombinedResult.tags, subResult.tags);
    }
    return bestCombinedResult;
}
