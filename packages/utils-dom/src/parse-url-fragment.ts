/**
 * Convert the url fragment into a key/value pair object.
 */
export function parseUrlFragment(): Record<string, string|number> {
    const hash = window.location.hash.substr(1);
    return hash.split('&').reduce(function(result: Record<string, string|number>, item) {
        let parts = item.split('=');
        if (parts.length === 2) {
            result[parts[0]] = parts[1];
        }
        return result;
    }, {});
}
