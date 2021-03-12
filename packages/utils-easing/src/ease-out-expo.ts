// Initial exponential acceleration slowing to stop
export function easeOutExpo(t: number) {

    if ( t === 1 ) {
        return 1;
    }

    return ( -Math.pow( 2, -10 * t ) + 1 );

}
