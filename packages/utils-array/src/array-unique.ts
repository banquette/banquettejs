/**
 * Create a copy of the input array free of duplicates.
 */
export function arrayUnique(array: any[]): any[] {
    return array.filter((value, index, arr) => arr.indexOf(value) === index);
}
