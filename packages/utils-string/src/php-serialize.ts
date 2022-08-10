/**
 * Typescript port of phpjs serialize
 * @see https://github.com/nhorvath/phpjs/blob/master/functions/var/serialize.js
 */
import { utf8Size } from "./utf8-size";

function getType(input: any): string {
    let types: any = ['boolean', 'number', 'string', 'array'];
    let type = typeof input;
    let match;
    let key;
    let cons;

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
                break
            }
        }
    }
    return type;
}

export function phpSerialize(input: any) {
    let output = '';
    const type = getType(input);

    switch (type) {
        case 'function': {
            output = '';
        } break ;

        case 'boolean': {
            output = 'b:' + (input ? '1' : '0');
        } break ;

        case 'number': {
            output = (Math.round(input) === input ? 'i' : 'd') + ':' + input;
        } break ;

        case 'string': {
            output = 's:' + utf8Size(input) + ':"' + input + '"';
        } break ;

        case 'array':
        case 'object': {
            let vals = '';
            let count = 0;
            output = 'a';
            for (const key in input) {
                if (input.hasOwnProperty(key)) {
                    if (getType(input[key]) === 'function') {
                        continue;
                    }
                    const okey = (key.match(/^[0-9]+$/) ? parseInt(key, 10) : key);
                    vals += phpSerialize(okey) + phpSerialize(input[key]);
                    count++;
                }
            }
            output += ':' + count + ':{' + vals + '}';
        } break ;

        case 'undefined':
        default: {
            // if the JS object has a property which contains a null value, the string cannot be unserialized by PHP
            output = 'N'
        } break ;
    }
    if (type !== 'object' && type !== 'array') {
        output += ';';
    }
    return output;
}
