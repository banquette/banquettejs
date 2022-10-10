import { Primitive } from "@banquette/utils-type/types";
export declare class HeadersBag {
    private bag;
    /**
     * Get all headers.
     */
    all(): Record<string, string>;
    /**
     * Get a header by name.
     */
    get(name: string, defaultValue?: string | null): string | null;
    /**
     * Test if header is defined.
     */
    has(name: string): boolean;
    /**
     * Set a header.
     */
    set(name: string, value: Primitive): void;
    /**
     * Remove all headers.
     */
    empty(): void;
    /**
     * Create a HeadersBag instance from an object literal.
     */
    static FromMap(map: Record<string, Primitive>): HeadersBag;
    /**
     * Normalize the name of a header.
     */
    private normalizeName;
}
