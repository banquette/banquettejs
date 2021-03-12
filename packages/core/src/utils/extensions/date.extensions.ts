/**
 * Extend string interface to add custom utilities.
 */
declare global {
    interface Date {
        toUTCDateTime(): string;
        toDateTime(): string;
    }
}

function twoDigits(num: number): string {
    if (0 <= num && num < 10) return "0" + num.toString();
    if (-10 < num && num < 0) return "-0" + (-1 * num).toString();
    return num.toString();
}

/**
 * Add to capability to export a native JS date into a datetime string.
 */
Date.prototype.toUTCDateTime = function() {
    return this.getUTCFullYear() + "-" +
        twoDigits(1 + this.getUTCMonth()) + "-" +
        twoDigits(this.getUTCDate()) + " " +
        twoDigits(this.getUTCHours()) + ":" +
        twoDigits(this.getUTCMinutes()) + ":" +
        twoDigits(this.getUTCSeconds());
};

/**
 * Add to capability to export a native JS date into a datetime string.
 */
Date.prototype.toDateTime = function() {
    return this.getFullYear() + "-" +
        twoDigits(1 + this.getMonth()) + "-" +
        twoDigits(this.getDate()) + " " +
        twoDigits(this.getHours()) + ":" +
        twoDigits(this.getMinutes()) + ":" +
        twoDigits(this.getSeconds());
};

export {}
