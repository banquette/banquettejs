export class RemoteComposable {
    /**
     * The static url to call to retrieve the data.
     */
    public url!: string|null;

    /**
     * The name of an ApiEndpoint.
     * The behavior of this property depends on the value of the "model" property:
     *
     *   - if "model" is null: the endpoint is fetched from ApiMetadataService,
     *   - if "model" is defined: the endpoint is fetched (for this model) from "ModelApiMetadataService".
     */
    public endpoint!: string|null;

    /**
     * A model identifier that will define two things:
     *
     *   - where to find the endpoint in the "ModelApiMetadataService" (if "endpoint" is defined),
     *   - in what type of entity the response should be transformed into.
     */
    public model!: string|null;

    /**
     * The parameters to replace in the url or add in the query string.
     */
    public urlParams!: Record<string, string|number>;
}
