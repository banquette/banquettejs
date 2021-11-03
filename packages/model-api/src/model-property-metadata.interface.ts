/**
 * Metadata object defining how an api property should behave.
 */
export interface ModelPropertyMetadataInterface {
    /**
     * Array of groups that will make this property updated by an api response.
     * Matches if it has at least one group in common with the current endpoint.
     *
     * Always match if null.
     */
    readGroups: string[]|null;

    /**
     * Array of groups that will make this property part of an api request.
     * Matches if it has at least one group in common with the current endpoint.
     *
     * Always included if null.
     */
    writeGroups: string[]|null;
}
