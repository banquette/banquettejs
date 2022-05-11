/**
 * Create a new array only containing values common to `array1` and `array2`.
 */
export function arrayIntersect(array1: any[], array2: any[]): any[] {
    if (array2.length > array1.length) {
        const t = array2;
        array2 = array1;
        array1 = t;
    }
    return array1.filter((i) => array2.indexOf(i) > -1);
}
