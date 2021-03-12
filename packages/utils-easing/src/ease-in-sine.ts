// Slight acceleration from zero to full speed
export function easeInSine(t: number) {
    return -1 * Math.cos( t * ( Math.PI / 2 ) ) + 1;
}
