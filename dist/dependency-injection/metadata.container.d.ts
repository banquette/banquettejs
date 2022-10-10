import { InjectableMetadataInterface } from "./injectable-metadata.interface";
import { InjectableIdentifier } from "./type/injectable-identifier.type";
export declare class MetadataContainer {
    /**
     * Simply list of known metadata.
     */
    private static KnownMetadata;
    /**
     * Metadata objects indexed by identifier.
     */
    private static IdentifierMap;
    /**
     * Metadata objects indexed by tag symbol.
     */
    private static TagsMap;
    /**
     * Holds the number of time tags relative metadata have changed.
     */
    static readonly TagsVersion: number;
    /**
     * Register an dependency into the container.
     */
    static Set(metadata: InjectableMetadataInterface): void;
    /**
     * Get the metadata of an injectable from the container.
     */
    static Get(identifier: InjectableIdentifier): InjectableMetadataInterface | null;
    /**
     * Try to get the metadata of an object but throw an exception on failure.
     */
    static GetOrFail(identifier: InjectableIdentifier): InjectableMetadataInterface;
    /**
     * Get metadata objects matching one or multiple tags.
     */
    static GetForTag(tag: symbol | symbol[]): InjectableMetadataInterface[];
    /**
     * Gets the whole list of registered metadata.
     */
    static GetKnownMetadata(): InjectableMetadataInterface[];
    /**
     * Make the `tags` property of the metadata object react to changes so the tags map can stay utd.
     */
    private static ObserveTags;
}
