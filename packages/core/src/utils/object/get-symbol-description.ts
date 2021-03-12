/**
 * Gets the description string of a symbol.
 */
export function getSymbolDescription(symbol: symbol): string {
    const regExp = /\(([^)]+)\)/;
    const names = regExp.exec(symbol.toString()) || [];
    return names[1];
}
