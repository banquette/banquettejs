import { isUndefined, Primitive } from '@banquette/utils-type';
import { HttpHeadersExceptionsMap } from './constants';

export class HeadersBag {
    private bag: Record<string, string> = {};

    /**
     * Get all headers.
     */
    public all(): Record<string, string> {
        return Object.assign({}, this.bag);
    }

    /**
     * Get a header by name.
     */
    public get(
        name: string,
        defaultValue: string | null = null
    ): string | null {
        name = this.normalizeName(name);
        return this.bag[name] || defaultValue;
    }

    /**
     * Test if header is defined.
     */
    public has(name: string): boolean {
        return this.get(name) !== null;
    }

    /**
     * Set a header.
     */
    public set(name: string, value: Primitive): void {
        name = this.normalizeName(name);
        this.bag[name] = String(value);
    }

    /**
     * Remove all headers.
     */
    public empty(): void {
        this.bag = {};
    }

    /**
     * Create a HeadersBag instance from an object literal.
     */
    public static FromMap(map: Record<string, Primitive>): HeadersBag {
        const bag = new HeadersBag();
        for (const key of Object.keys(map)) {
            bag.set(key, map[key]);
        }
        return bag;
    }

    /**
     * Normalize the name of a header.
     */
    private normalizeName(raw: string): string {
        const lowercase = raw.toLowerCase();
        if (!isUndefined(HttpHeadersExceptionsMap[lowercase])) {
            return HttpHeadersExceptionsMap[lowercase];
        }
        return lowercase
            .replace(/\s+/g, '-')
            .split('-')
            .map((text) => text[0].toUpperCase() + text.substr(1).toLowerCase())
            .join('-');
    }
}
