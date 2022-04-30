import { UsageException } from "@banquette/exception/usage.exception";
import { ensureArray } from "@banquette/utils-type/ensure-array";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { InjectableMetadataInterface } from "./injectable-metadata.interface";
import { InjectableIdentifier } from "./type/injectable-identifier.type";

export class MetadataContainer {
    /**
     * Simply list of known metadata.
     */
    private static KnownMetadata: InjectableMetadataInterface[] = [];

    /**
     * Metadata objects indexed by identifier.
     */
    private static IdentifierMap: WeakMap<InjectableIdentifier, InjectableMetadataInterface> = new WeakMap<InjectableIdentifier, InjectableMetadataInterface>();

    /**
     * Metadata objects indexed by tag symbol.
     */
    private static TagsMap: Record<symbol, InjectableMetadataInterface[]> = {};

    /**
     * Holds the number of time tags relative metadata have changed.
     */
    public static readonly TagsVersion: number = 0;

    /**
     * Register an dependency into the container.
     */
    public static Set(metadata: InjectableMetadataInterface): void {
        MetadataContainer.ObserveTags(metadata);
        MetadataContainer.IdentifierMap.set(metadata.identifier, metadata);
        MetadataContainer.KnownMetadata.push(metadata);
    }

    /**
     * Get the metadata of an injectable from the container.
     */
    public static Get(identifier: InjectableIdentifier): InjectableMetadataInterface|null {
        const metadata = MetadataContainer.IdentifierMap.get(identifier);
        if (metadata) {
            return metadata;
        }
        for (const candidate of MetadataContainer.KnownMetadata) {
            if (candidate.ctor === identifier) {
                return MetadataContainer.IdentifierMap.get(candidate.identifier) || null;
            }
        }
        return null;
    }

    /**
     * Try to get the metadata of an object but throw an exception on failure.
     */
    public static GetOrFail(identifier: InjectableIdentifier): InjectableMetadataInterface {
        const metadata: InjectableMetadataInterface|null = MetadataContainer.Get(identifier);
        if (metadata === null) {
            throw new UsageException(`No injectable found for "${identifier.name}".`);
        }
        return metadata;
    }

    /**
     * Get metadata objects matching one or multiple tags.
     */
    public static GetForTag(tag: symbol|symbol[]): InjectableMetadataInterface[] {
        const output: InjectableMetadataInterface[] = [];
        const tags = ensureArray(tag);
        for (const item of tags) {
            if (!isUndefined(MetadataContainer.TagsMap[item])) {
                for (const metadata of MetadataContainer.TagsMap[item]) {
                    if (output.indexOf(metadata) < 0) {
                        output.push(metadata);
                    }
                }
            }
        }
        return output;
    }

    /**
     * Gets the whole list of registered metadata.
     */
    public static GetKnownMetadata(): InjectableMetadataInterface[] {
        return MetadataContainer.KnownMetadata;
    }

    /**
     * Make the `tags` property of the metadata object react to changes so the tags map can stay utd.
     */
    private static ObserveTags(metadata: InjectableMetadataInterface): void {
        const tags: symbol[] = metadata.tags;
        Object.defineProperty(metadata, 'tags', {
            enumerable: true,
            configurable: true,
            get: () => tags,
            set: (newTags: symbol[]) => {
                for (const newTag of newTags) {
                    if (tags.indexOf(newTag) < 0) {
                        tags.push(newTag);
                        if (isUndefined(MetadataContainer.TagsMap[newTag])) {
                            MetadataContainer.TagsMap[newTag] = [];
                        }
                        if (MetadataContainer.TagsMap[newTag].indexOf(metadata) < 0) {
                            MetadataContainer.TagsMap[newTag].push(metadata);
                            (MetadataContainer as any).TagsVersion = MetadataContainer.TagsVersion + 1;
                        }
                    }
                }
            }
        })
    }
}
