/*!
 * Banquette UtilsString v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { utf8Size } from './utf8-size.js';

/**
 * Typescript port of phpjs serialize
 * @see https://github.com/nhorvath/phpjs/blob/master/functions/var/serialize.js
 */
function getType(input) {
    var types = ['boolean', 'number', 'string', 'array'];
    var type = typeof input;
    var match;
    var key;
    var cons;
    if (type === 'object' && !input) {
        return 'null';
    }
    if (type === 'object') {
        if (!input.constructor) {
            return 'object';
        }
        cons = input.constructor.toString();
        match = cons.match(/(\w+)\(/);
        if (match) {
            cons = match[1].toLowerCase();
        }
        for (key in types) {
            if (cons === types[key]) {
                type = types[key];
                break;
            }
        }
    }
    return type;
}
function phpSerialize(input) {
    var output = '';
    var type = getType(input);
    switch (type) {
        case 'function':
            {
                output = '';
            }
            break;
        case 'boolean':
            {
                output = 'b:' + (input ? '1' : '0');
            }
            break;
        case 'number':
            {
                output = (Math.round(input) === input ? 'i' : 'd') + ':' + input;
            }
            break;
        case 'string':
            {
                output = 's:' + utf8Size(input) + ':"' + input + '"';
            }
            break;
        case 'array':
        case 'object':
            {
                var vals = '';
                var count = 0;
                output = 'a';
                for (var key in input) {
                    if (input.hasOwnProperty(key)) {
                        if (getType(input[key]) === 'function') {
                            continue;
                        }
                        var okey = (key.match(/^[0-9]+$/) ? parseInt(key, 10) : key);
                        vals += phpSerialize(okey) + phpSerialize(input[key]);
                        count++;
                    }
                }
                output += ':' + count + ':{' + vals + '}';
            }
            break;
        case 'undefined':
        default:
            {
                // if the JS object has a property which contains a null value, the string cannot be unserialized by PHP
                output = 'N';
            }
            break;
    }
    if (type !== 'object' && type !== 'array') {
        output += ';';
    }
    return output;
}

export { phpSerialize };
