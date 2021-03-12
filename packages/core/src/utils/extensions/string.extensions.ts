/**
 * Extensions of the String interface.
 * Here are regrouped all string utilities directly integrated to the String prototype.
 */
import { trim } from "../string/trim";

/**
 * Extend string interface to add custom utilities.
 */
declare global {
    interface String {
        format(...params: any[]): string;
        trim(): string;
    }
}

/* tslint:disable:no-bitwise */

/**
 * Simple string format function.
 *
 * "{} {}".format("a", "b") => "a b"
 * "{1} {0}".format("a", "b") => "b a"
 * "{foo} {bar}".format({ foo: "a", bar: "b" }) => "a b"
 *
 * @param {...any} params
 *
 * @returns string
 */
String.prototype.format = function(...params: any[]): string {
    const args = arguments;
    let argNum = 0;

    return this.replace(/\{(\w*)\}/gi, (match) => {
        let curArgNum;
        let prop = null;
        if (match === "{}") {
            curArgNum = argNum;
            argNum++;
        } else {
            curArgNum = match.substr(1, match.length - 2);
            const parsed = ~~curArgNum;
            if (parsed.toString() === curArgNum) {
                curArgNum = parsed;
            } else {
                prop = curArgNum;
                curArgNum = 0;
            }
        }
        return curArgNum >= args.length ? "" : prop ? args[curArgNum][prop] || "" : args[curArgNum];
    });
};
/* tslint:enable:no-bitwise */

if (!String.prototype.trim) {
    String.prototype.trim = function () {
        return trim(this as string);
    };
}
