/*!
 * Banquette UtilsString v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
/**
 * Basic string format function.
 *
 * Examples:
 *
 * "{} {}".format("a", "b") => "a b"
 * "{1} {0}".format("a", "b") => "b a"
 * "{foo} {bar}".format({ foo: "a", bar: "b" }) => "a b"
 */
function format(input) {
    var arguments$1 = arguments;

    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments$1[_i];
    }
    var argNum = 0;
    return input.replace(/\{(\w*)\}/gi, function (match) {
        var curArgNum;
        var prop = null;
        if (match === "{}") {
            curArgNum = argNum;
            argNum++;
        }
        else {
            curArgNum = match.substr(1, match.length - 2);
            var parsed = ~~curArgNum;
            if (parsed.toString() === curArgNum) {
                curArgNum = parsed;
            }
            else {
                prop = curArgNum;
                curArgNum = 0;
            }
        }
        return curArgNum >= args.length ? "" : prop ? args[curArgNum][prop] || "" : args[curArgNum];
    });
}

export { format };
