/**
 * Test if the input is a symbol.
 */
export function isSymbol(value: any): value is symbol {
    return typeof value === 'symbol';
}
