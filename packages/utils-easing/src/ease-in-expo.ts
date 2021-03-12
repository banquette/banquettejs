// Accelerate exponentially until finish
export function easeInExpo(t: number) {

    if ( t === 0 ) {
        return 0;
    }

    return Math.pow( 2, 10 * ( t - 1 ) );

}
