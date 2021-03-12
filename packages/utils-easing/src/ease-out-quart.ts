// Decelerating to zero velocity
export function easeOutQuart(t: number) {
    const t1 = t - 1;
    return 1 - t1 * t1 * t1 * t1;
}
