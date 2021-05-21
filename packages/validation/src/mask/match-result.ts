export enum MatchResult {
    None,    // Never match.
    Partial, // Only match if it's a validator container.
    Async,   // Only match if it's an asynchronous validator.
    Sync,    // Only match if it's an synchronous validator.
    Full     // Always match.
}
