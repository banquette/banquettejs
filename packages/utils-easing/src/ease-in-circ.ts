// Increasing velocity until stop
export function easeInCirc(t: number) {

    const scaledTime = t / 1;
    return -1 * ( Math.sqrt( 1 - scaledTime * t ) - 1 );

}
