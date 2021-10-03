import { UsageException } from "@banquette/exception";
import { isObject, isString, isUndefined } from "@banquette/utils-type";

/**
 * Utility class to work on colors.
 */
export class Color {
    public static HEX_REGEX = /^#?[a-f\d]{3}|[a-f\d]{6}$/i;
    public static RGB_REGEX = /^rgba?\s*\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*([0-9](?:\.[0-9]{1,2})?))?\s*\)$/;

    constructor(public r: number,
                public g: number,
                public b: number,
                public a: number = 1) {
    }

    /**
     * Convert the color to an hexadecimal string.
     *
     * @param includeAlpha boolean
     *
     * @returns string
     */
    public toHex(includeAlpha?: boolean): string {
        return "#" +
            Color.ComponentToHex(this.r) +
            Color.ComponentToHex(this.g) +
            Color.ComponentToHex(this.b) +
            (includeAlpha === true ? Color.ComponentToHex(Math.floor(this.a * 255)) : "");
    }

    /**
     * Create a color between two colors.
     *
     * @param color1  Color|string
     * @param color2  Color|string
     * @param percent number
     *
     * @returns Color|null
     */
    public static CreateFromRange(color1: string|Color, color2: string|Color, percent: number): Color|null {
        const a: Color = color1 instanceof Color ? color1 : Color.Create(color1);
        const b: Color = isObject(color2) ? (color2 as Color) : Color.Create(color2);

        if (!a || !b) {
            return null;
        }
        percent = Math.max(0, Math.min(255, percent >= 0 && percent <= 1 ? (percent * 255) : percent));
        const rv = Math.floor(a.r + ((percent * (b.r - a.r)) / 255));
        const gv = Math.floor(a.g + ((percent * (b.g - a.g)) / 255));
        const bv = Math.floor(a.b + ((percent * (b.b - a.b)) / 255));
        return new Color(rv, gv, bv);
    }

    /**
     * Test if the input looks like a valid color string.
     *
     * @param input string
     *
     * @returns boolean
     */
    public static IsValidColorString(input: string): boolean {
        if (!isString(input)) {
            return false;
        }
        return input.match(Color.HEX_REGEX) !== null || input.match(Color.RGB_REGEX) !== null;
    }

    /**
     * Create a Color instance from a hex string.
     *
     * @param input string
     *
     * @returns Color
     */
    public static CreateFromHex(input: string): Color {
        input = input.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => {
            return r + r + g + g + b + b;
        });

        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(input);
        if (result !== null) {
            return new Color(
                Math.max(0, Math.min(255, parseInt(result[1], 16))),
                Math.max(0, Math.min(255, parseInt(result[2], 16))),
                Math.max(0, Math.min(255, parseInt(result[3], 16))),
            );
        }
        throw new UsageException(`Invalid hex string "${input}".`);
    }

    /**
     * Create a color object from a rgb (or rgba) string representation.
     *
     * @param input string
     *
     * @return Color
     */
    public static CreateFromRgb(input: string): Color {
        const result = Color.RGB_REGEX.exec(input);
        if (result !== null) {
            return new Color(
                Math.max(0, Math.min(255, parseInt(result[1], 10))),
                Math.max(0, Math.min(255, parseInt(result[2], 10))),
                Math.max(0, Math.min(255, parseInt(result[3], 10))),
                !isUndefined(result[4]) ? Math.max(0.0, Math.min(1.0, parseFloat(result[4]))) : 1.0,
            );
        }
        throw new UsageException(`Invalid rgb(a) string "${input}".`);
    }

    /**
     * Try to create a Color object from the input.
     *
     * @param input any
     *
     * @returns Color
     */
    public static Create(input: any): Color {
        if (!isString(input) || !input.length) {
            throw new UsageException('Invalid color');
        }
        if (input[0] === "#") {
            return Color.CreateFromHex(input);
        }
        return Color.CreateFromRgb(input);
    }

    /**
     * Like create but if no valid color can be created, the input is
     * returned instead of null.
     *
     * @param input any
     *
     * @return any
     */
    public static CreateOrKeep(input: any): any {
        const result = Color.Create(input);
        if (result !== null) {
            return result;
        }
        return input;
    }

    /**
     * Convert the color to a rgb() color.
     *
     * @param includeAlpha boolean
     *
     * @return string
     */
    public toRgb(includeAlpha?: boolean): string {
        if (includeAlpha === true) {
            return "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")";
        }
        return "rgb(" + this.r + "," + this.g + "," + this.b + ")";
    }

    /**
     * Convert a number to its hexadecimal representation.
     *
     * @param c number
     *
     * @returns string
     *
     * @private
     */
    private static ComponentToHex(c: number): string {
        const hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }
}
