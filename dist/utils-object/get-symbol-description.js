/*!
 * Banquette UtilsObject v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
/**
 * Gets the description string of a symbol.
 */
function getSymbolDescription(symbol) {
    var regExp = /\(([^)]+)\)/;
    var names = regExp.exec(symbol.toString()) || [];
    return names[1];
}

export { getSymbolDescription };
