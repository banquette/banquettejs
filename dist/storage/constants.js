/*!
 * Banquette Storage v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from './_virtual/_tslib.js';
import { UsageException } from '@banquette/exception/usage.exception';
import { VarHolder } from '@banquette/utils-misc/var-holder';

var Constants = /** @class */ (function (_super) {
    __extends(Constants, _super);
    function Constants() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get the value of a constant.
     */
    Constants.Get = function (name) {
        return Constants.GetInstance().get(name);
    };
    /**
     * Register a constant.
     */
    Constants.Register = function (name, value) {
        if (Constants.GetInstance().has(name)) {
            throw new UsageException("A constant named ".concat(name, " is already defined."));
        }
        Constants.GetInstance().set(name, value);
    };
    /**
     * Get (and create if necessary) the singleton instance.
     */
    Constants.GetInstance = function () {
        if (Constants.Instance === null) {
            Constants.Instance = new Constants();
        }
        return Constants.Instance;
    };
    Constants.Instance = null;
    return Constants;
}(VarHolder));

export { Constants };
