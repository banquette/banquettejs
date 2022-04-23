import { MatchType } from "./constant";

export interface MatchResult {
    /**
     * Hold how the pattern part of the mask match.
     *
     * - MatchType.Full: the pattern perfectly match
     * - MatchType.Partial: the beginning of the path match the pattern
     * - MatchType.None: the pattern doesn't match at all
     */
    pattern: MatchType;

    /**
     * Hold how the mask's tags match the subject.
     *
     * - MatchType.Full: all tags defined in the pattern have been found
     * - MatchType.Partial: some tags defined in the pattern have been found
     * - MatchType.None: none of the tags defined in the pattern have been found
     */
    tags: MatchType;
}
