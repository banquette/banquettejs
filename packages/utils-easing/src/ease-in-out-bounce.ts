import { easeInBounce } from "./ease-in-bounce";
import { easeOutBounce } from "./ease-out-bounce";

// Bounce in and bounce out
export function easeInOutBounce(t: number) {
    if ( t < 0.5 ) {
        return easeInBounce( t * 2 ) * 0.5;
    }
    return ( easeOutBounce( ( t * 2 ) - 1 ) * 0.5 ) + 0.5;
}
