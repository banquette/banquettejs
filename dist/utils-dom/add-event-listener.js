/*!
 * Banquette UtilsDom v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
/**
 * Wrapper to the native `addEventListener` that offers an unsubscribe function.
 */
function addEventListener(target, eventName, cb) {
    var removed = false;
    target.addEventListener(eventName, cb);
    return function () {
        if (!removed) {
            target.removeEventListener(eventName, cb);
            removed = true;
        }
    };
}

export { addEventListener };
