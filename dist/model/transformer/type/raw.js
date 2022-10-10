/*!
 * Banquette Model v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
/**
 * Placeholder transformer doing nothing.
 */
function Raw() {
    return {
        /**
         * @inheritDoc
         */
        transform: function (context) {
            context.result.setResult(context.value);
            return context.result;
        },
        /**
         * @inheritDoc
         */
        transformInverse: function (context) {
            context.result.setResult(context.value);
            return context.result;
        }
    };
}

export { Raw };
