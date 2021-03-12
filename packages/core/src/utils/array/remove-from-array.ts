/**
 * Search the first match of an item in an array and removes it.
 */
export function removeFromArray(ar: any[], item: any): boolean {
    const pos = ar.indexOf(item);
    if (pos >= 0) {
        ar.splice(pos, 1);
        return true;
    }
    return false;
}
