/**
 * Format the input number into a user-friendly string.
 */
export function numberFormat(x: number, decimals: number = 2): string {
    let parts = x.toFixed(decimals).split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
}
