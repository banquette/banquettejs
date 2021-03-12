// Fast snap to backwards point then slow resolve to finish
export function easeOutBack (t: number, magnitude = 1.70158 ) {

    const scaledTime = ( t / 1 ) - 1;

    return (
        scaledTime * scaledTime * ( ( magnitude + 1 ) * scaledTime + magnitude )
    ) + 1;

}
