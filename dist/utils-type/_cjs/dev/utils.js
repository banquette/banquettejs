/*!
 * Banquette UtilsType v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Gets the description string of a symbol.
 */
function getSymbolDescription(symbol) {
    var regExp = /\(([^)]+)\)/;
    var names = regExp.exec(symbol.toString()) || [];
    return names[1];
}

exports.getSymbolDescription = getSymbolDescription;
