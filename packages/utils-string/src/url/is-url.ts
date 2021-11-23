import { isString } from "@banquette/utils-type/is-string";

/**
 * Test if the input looks like an URL string.
 */
export function isUrl(input: any): boolean {
    return isString(input) && /^((((https?|ftp|rtsp|mms):)?\/\/)?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?(([0-9]{1,3}\.){3}[0-9]{1,3}|([0-9a-z_!~*'()-]+\.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\.[a-z]{2,6}|localhost))?(:[0-9]{1,4})?((\/?)|(\/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+\/?)$/i.test(input);
}
