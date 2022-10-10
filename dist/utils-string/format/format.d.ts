/**
 * Basic string format function.
 *
 * Examples:
 *
 * "{} {}".format("a", "b") => "a b"
 * "{1} {0}".format("a", "b") => "b a"
 * "{foo} {bar}".format({ foo: "a", bar: "b" }) => "a b"
 */
export declare function format(input: string, ...args: any[]): string;
