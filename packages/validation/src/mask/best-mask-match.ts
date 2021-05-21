import { matchMask } from "./match-mask";
import { MatchResult } from "./match-result";

/**
 * Test each mask against a path and return the strongest match result.
 */
export function bestMaskMatch(masks: string[], path: string): MatchResult {
    let bestResult: number = MatchResult.None;
    for (const mask of masks) {
        bestResult = Math.max(bestResult, matchMask(mask, path));
    }
    return bestResult;
}
