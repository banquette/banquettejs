import { removeAccents } from "./remove-accents";

/**
 * Basic slugify.
 *
 * @source https://gist.github.com/mathewbyrne/1280286
 */
export function slugify(input: string): string {
    return removeAccents(String(input)).toLowerCase()
        .replace(/\s+/g, "-")       // Replace spaces with -
        .replace(/[^\w\-]+/g, "-")  // Remove all non-word chars
        .replace(/\-\-+/g, "-")     // Replace multiple - with single -
        .replace(/^-+/, "")         // Trim - from start of text
        .replace(/-+$/, "");        // Trim - from end of text
}
