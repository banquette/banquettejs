/**
 * TypeScript port of "php-unserialize-js"
 * @see https://github.com/bd808/php-unserialize-js
 */
import { UsageException } from '@banquette/exception';
import { isString } from '@banquette/utils-type';

export const phpUnserialize = (() => {
    /**
     * The current string being unserialized.
     */
    let str: string = '';

    /**
     * The current index in {str}.
     */
    let idx: number = 0;

    let refStack: any[] = [];

    /**
     * Current index in the ref stack.
     */
    let ridx = 0;

    function readLength(): number {
        const del = str.indexOf(':', idx);
        const val = str.substring(idx, del);
        idx = del + 2;
        return parseInt(val, 10);
    }

    function readInt(): number {
        const del = str.indexOf(';', idx);
        const val = str.substring(idx, del);
        idx = del + 1;
        return parseInt(val, 10);
    }

    function parseAsInt(): number {
        const val = readInt();
        refStack[ridx++] = val;
        return val;
    }

    function parseAsFloat(): number {
        const del = str.indexOf(';', idx);
        const val = parseFloat(str.substring(idx, del));
        idx = del + 1;
        refStack[ridx++] = val;
        return val;
    }

    function parseAsBoolean(): boolean {
        const del = str.indexOf(';', idx);
        const val = str.substring(idx, del) === '1';
        idx = del + 1;
        refStack[ridx++] = val;
        return val;
    }

    function readString(expect: string = '"'): string {
        const len = readLength(); // Desired byte length
        let utfLen = 0;           // UTF-8 character length
        let bytes = 0;
        let ch;
        let val;

        while (bytes < len) {
            ch = str.charCodeAt(idx + utfLen);

            if (ch <= 0x007f) {
                bytes += 1; // 1-byte character (ASCII)
            } else if (ch <= 0x07ff) {
                bytes += 2; // 2-byte character
            } else if (ch >= 0xD800 && ch <= 0xDBFF) {
                // 4-byte surrogate pair (for characters outside BMP, like emojis)
                bytes += 4;
                utfLen++; // Extra increment for surrogate pair
            } else {
                bytes += 3; // 3-byte character
            }
            utfLen++;
        }
        // Catch non-compliant utf8 encodings
        if (str.charAt(idx + utfLen) !== expect) {
            utfLen += str.indexOf(expect, idx + utfLen) - idx - utfLen;
        }

        val = str.substring(idx, idx + utfLen); // Extract the substring
        idx += utfLen + 2; // Move index past the extracted string and the surrounding quotes
        return val;
    }

    function parseAsString(): string {
        const val = readString();
        refStack[ridx++] = val;
        return val;
    }

    function readType(): string {
        const type = str.charAt(idx);
        idx += 2;
        return type;
    }

    function readKey(): string | number {
        const type = readType();
        switch (type) {
            case 'i':
                return readInt();
            case 's':
                return readString();
        }
        throw new UsageException(
            `Unknown key type "${type}" at position ${idx - 2}`
        );
    }

    function parseAsArray() {
        let len = readLength();
        let resultArray: any[] = [];
        let resultHash: any = {};
        let keep = resultArray;
        let lref = ridx++;
        let key;
        let val;
        let i;
        let j;
        let alen;

        refStack[lref] = keep;
        for (i = 0; i < len; i++) {
            key = readKey();
            val = parseNext();
            if (keep === resultArray && key + '' === i + '') {
                // store in array version
                resultArray.push(val);
            } else {
                if (keep !== resultHash) {
                    // found first non-sequential numeric key
                    // convert existing data to hash
                    for (j = 0, alen = resultArray.length; j < alen; j++) {
                        resultHash[j] = resultArray[j];
                    }
                    keep = resultHash;
                    refStack[lref] = keep;
                }
                resultHash[key] = val;
            }
        }
        idx++;
        return keep;
    }

    function parseAsObject() {
        let len;
        let obj: any = {};
        let lref = ridx++;
        // HACK last char after closing quote is ':',
        // but not ';' as for normal string
        let clazzname = readString();
        let key;
        let val;
        let i;

        refStack[lref] = obj;
        len = readLength();
        for (i = 0; i < len; i++) {
            key = fixPropertyName(String(readKey()), clazzname);
            val = parseNext();
            obj[key] = val;
        }
        idx++;
        return obj;
    }

    function parseAsCustom() {
        const clazzname = readString();
        const content = readString('}');
        // There is no char after the closing quote
        idx--;
        return {
            __PHP_Incomplete_Class_Name: clazzname,
            serialized: content,
        };
    }

    function parseAsRefValue() {
        const ref = readInt();
        // php's ref counter is 1-based; our stack is 0-based.
        const val = refStack[ref - 1];
        refStack[ridx++] = val;
        return val;
    }

    function parseAsRef() {
        const ref = readInt();
        // php's ref counter is 1-based; our stack is 0-based.
        return refStack[ref - 1];
    }

    function parseAsNull() {
        const val = null;
        refStack[ridx++] = val;
        return val;
    }

    function parseNext() {
        var type = readType();
        switch (type) {
            case 'i':
                return parseAsInt();
            case 'd':
                return parseAsFloat();
            case 'b':
                return parseAsBoolean();
            case 's':
                return parseAsString();
            case 'a':
                return parseAsArray();
            case 'O':
                return parseAsObject();
            case 'C':
                return parseAsCustom();

            // link to object, which is a value - affects refStack
            case 'r':
                return parseAsRefValue();

            // PHP's reference - DOES NOT affect refStack
            case 'R':
                return parseAsRef();

            case 'N':
                return parseAsNull();
        }
        throw new UsageException(`Unknown type "${type}" at position ${idx - 2}`);
    }

    function fixPropertyName(parsedName: string, baseClassName: string) {
        let class_name: string;
        let prop_name: string;
        let pos: number;
        if (isString(parsedName) && '\u0000' === parsedName.charAt(0)) {
            // "<NUL>*<NUL>property"
            // "<NUL>class<NUL>property"
            pos = parsedName.indexOf('\u0000', 1);
            if (pos > 0) {
                class_name = parsedName.substring(1, pos);
                prop_name = parsedName.substring(pos + 1);

                if ('*' === class_name) {
                    // protected
                    return prop_name;
                } else if (baseClassName === class_name) {
                    // own private
                    return prop_name;
                } else {
                    // private of a descendant
                    return class_name + '::' + prop_name;

                    // On the one hand, we need to prefix property name with
                    // class name, because parent and child classes both may
                    // have private property with same name. We don't want
                    // just to overwrite it and lose something.
                    //
                    // On the other hand, property name can be "foo::bar"
                    //
                    //     $obj = new stdClass();
                    //     $obj->{"foo::bar"} = 42;
                    //     // any user-defined class can do this by default
                    //
                    // and such property also can overwrite something.
                    //
                    // So, we can to lose something in any way.
                }
            }
            throw new UsageException(
                `Expected two <NUL> characters in non-public property "${parsedName}" at position ${
                    idx - parsedName.length - 2
                }`
            );
        }
        // public "property"
        return parsedName;
    }

    /**
     * Parse php serialized data into js objects.
     */
    return function phpUnserialize(input: string) {
        str = input;
        refStack = [];
        idx = 0;
        ridx = 0;
        return parseNext();
    }
})();
