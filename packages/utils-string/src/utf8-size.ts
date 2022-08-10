/**
 * Get the size of a string in bytes, considering utf8 multi-bytes characters.
 */
export function utf8Size(str: string): number {
    let size = 0;
    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i)
        if (code < 0x0080) {
            size += 1
        } else if (code < 0x0800) {
            size += 2
        } else {
            size += 3
        }
    }
    return size
}
