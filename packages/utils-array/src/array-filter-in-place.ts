/**
 * Same api as `Array.filter` but without creating a new array.
 * The array given as parameter is mutated.
 */
export function arrayFilterInPlace(array: any[], callback: (item: any, index: number, array: any[]) => boolean): void {
    let to = 0;
    for (let i = 0; i < array.length; ++i) {
        if (callback(array[i], i, array)) {
            array[to++] = array[i];
        }
    }
    array.length = to;
}
