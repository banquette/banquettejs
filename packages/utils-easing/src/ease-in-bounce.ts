import { easeOutBounce } from "./ease-out-bounce";

// Bounce increasing in velocity until completion
export function easeInBounce(t: number) {
    return 1 - easeOutBounce( 1 - t );
}
