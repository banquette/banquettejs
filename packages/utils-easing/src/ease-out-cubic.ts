// Decelerating to zero velocity
export function easeOutCubic(t: number) {
    const t1 = t - 1;
    return t1 * t1 * t1 + 1;
}
