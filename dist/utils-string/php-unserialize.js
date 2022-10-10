/*!
 * Banquette UtilsString v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { UsageException } from '@banquette/exception/usage.exception';
import { isString } from '@banquette/utils-type/is-string';

/**
 * TypeScript port of "php-unserialize-js"
 * @see https://github.com/bd808/php-unserialize-js
 */
/**
 * The current string being unserialized.
 */
var str = '';
/**
 * The current index in {str}.
 */
var idx = 0;
var refStack = [];
/**
 * Current index in the ref stack.
 */
var ridx = 0;
function readLength() {
    var del = str.indexOf(':', idx);
    var val = str.substring(idx, del);
    idx = del + 2;
    return parseInt(val, 10);
}
function readInt() {
    var del = str.indexOf(';', idx);
    var val = str.substring(idx, del);
    idx = del + 1;
    return parseInt(val, 10);
}
function parseAsInt() {
    var val = readInt();
    refStack[ridx++] = val;
    return val;
}
function parseAsFloat() {
    var del = str.indexOf(';', idx);
    var val = parseFloat(str.substring(idx, del));
    idx = del + 1;
    refStack[ridx++] = val;
    return val;
}
function parseAsBoolean() {
    var del = str.indexOf(';', idx);
    var val = str.substring(idx, del) === '1';
    idx = del + 1;
    refStack[ridx++] = val;
    return val;
}
function readString(expect) {
    if (expect === void 0) { expect = '"'; }
    var len = readLength();
    var utfLen = 0;
    var bytes = 0;
    var ch;
    var val;
    while (bytes < len) {
        ch = str.charCodeAt(idx + utfLen++);
        if (ch <= 0x007F) {
            bytes++;
        }
        else if (ch > 0x07FF) {
            bytes += 3;
        }
        else {
            bytes += 2;
        }
    }
    // catch non-compliant utf8 encodings
    if (str.charAt(idx + utfLen) !== expect) {
        utfLen += str.indexOf('"', idx + utfLen) - idx - utfLen;
    }
    val = str.substring(idx, idx + utfLen);
    idx += utfLen + 2;
    return val;
}
function parseAsString() {
    var val = readString();
    refStack[ridx++] = val;
    return val;
}
function readType() {
    var type = str.charAt(idx);
    idx += 2;
    return type;
}
function readKey() {
    var type = readType();
    switch (type) {
        case 'i': return readInt();
        case 's': return readString();
    }
    throw new UsageException("Unknown key type \"".concat(type, "\" at position ").concat(idx - 2));
}
function parseAsArray() {
    var len = readLength();
    var resultArray = [];
    var resultHash = {};
    var keep = resultArray;
    var lref = ridx++;
    var key;
    var val;
    var i;
    var j;
    var alen;
    refStack[lref] = keep;
    for (i = 0; i < len; i++) {
        key = readKey();
        val = parseNext();
        if (keep === resultArray && key + '' === i + '') {
            // store in array version
            resultArray.push(val);
        }
        else {
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
    var len;
    var obj = {};
    var lref = ridx++;
    // HACK last char after closing quote is ':',
    // but not ';' as for normal string
    var clazzname = readString();
    var key;
    var val;
    var i;
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
    var clazzname = readString();
    var content = readString('}');
    // There is no char after the closing quote
    idx--;
    return {
        "__PHP_Incomplete_Class_Name": clazzname,
        "serialized": content
    };
}
function parseAsRefValue() {
    var ref = readInt();
    // php's ref counter is 1-based; our stack is 0-based.
    var val = refStack[ref - 1];
    refStack[ridx++] = val;
    return val;
}
function parseAsRef() {
    var ref = readInt();
    // php's ref counter is 1-based; our stack is 0-based.
    return refStack[ref - 1];
}
function parseAsNull() {
    var val = null;
    refStack[ridx++] = val;
    return val;
}
function parseNext() {
    var type = readType();
    switch (type) {
        case 'i': return parseAsInt();
        case 'd': return parseAsFloat();
        case 'b': return parseAsBoolean();
        case 's': return parseAsString();
        case 'a': return parseAsArray();
        case 'O': return parseAsObject();
        case 'C': return parseAsCustom();
        // link to object, which is a value - affects refStack
        case 'r': return parseAsRefValue();
        // PHP's reference - DOES NOT affect refStack
        case 'R': return parseAsRef();
        case 'N': return parseAsNull();
    }
    throw new UsageException("Unknown type \"".concat(type, "\" at position ").concat(idx - 2));
}
function fixPropertyName(parsedName, baseClassName) {
    var class_name;
    var prop_name;
    var pos;
    if (isString(parsedName) && "\u0000" === parsedName.charAt(0)) {
        // "<NUL>*<NUL>property"
        // "<NUL>class<NUL>property"
        pos = parsedName.indexOf("\u0000", 1);
        if (pos > 0) {
            class_name = parsedName.substring(1, pos);
            prop_name = parsedName.substring(pos + 1);
            if ("*" === class_name) {
                // protected
                return prop_name;
            }
            else if (baseClassName === class_name) {
                // own private
                return prop_name;
            }
            else {
                // private of a descendant
                return class_name + "::" + prop_name;
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
        throw new UsageException("Expected two <NUL> characters in non-public property \"".concat(parsedName, "\" at position ").concat(idx - parsedName.length - 2));
    }
    // public "property"
    return parsedName;
}
/**
 * Parse php serialized data into js objects.
 */
function phpUnserialize(input) {
    str = input;
    refStack = [];
    idx = 0;
    ridx = 0;
    return parseNext();
}

export { phpUnserialize };
