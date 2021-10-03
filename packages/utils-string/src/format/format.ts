
/**
 * Basic string format function.
 *
 * Examples:
 *
 * "{} {}".format("a", "b") => "a b"
 * "{1} {0}".format("a", "b") => "b a"
 * "{foo} {bar}".format({ foo: "a", bar: "b" }) => "a b"
 */
export function format(input: string, ...args: any[]): string {
    let argNum = 0;
    return input.replace(/\{(\w*)\}/gi, (match) => {
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
}
