
// Slow movement backwards then fast snap to finish
export function easeInBack (t: number, magnitude = 1.70158 ) {

    return t * t * ( ( magnitude + 1 ) * t - magnitude );

}
