/**
 * Convert a size in bytes to a human friendly string.
 */
export function byteCountToHumanSize(bytes: number, si: boolean = true) {
    const multiple = si ? 1000 : 1024;
    if (Math.abs(bytes) < multiple) {
        return bytes + ' B';
    }
    const units = si
        ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
        : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
    let u = -1;
    do {
        bytes /= multiple;
        ++u;
    } while (Math.abs(bytes) >= multiple && u < units.length - 1);
    return bytes.toFixed(1) + ' ' + units[u];
}
