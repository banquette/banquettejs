export function twoDigits(num: number): string {
    if (0 <= num && num < 10) return "0" + num.toString();
    if (-10 < num && num < 0) return "-0" + (-1 * num).toString();
    return num.toString();
}
