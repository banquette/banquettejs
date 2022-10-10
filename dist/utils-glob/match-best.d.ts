import { MatchResult } from "./match-result";
/**
 * Match multiple patterns and keep the best result.
 */
export declare function matchBest(masks: string[], path: string, tags?: string[]): MatchResult;
