/*!
 * Banquette Validation v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ajax = require('./type/ajax.js');
var and = require('./type/and.js');
var callback = require('./type/callback.js');
var choice = require('./type/choice.js');
var compose = require('./type/compose.js');
var container = require('./type/container.js');
var email = require('./type/email.js');
var empty = require('./type/empty.js');
var equal = require('./type/equal.js');
var foreach = require('./type/foreach.js');
var _if = require('./type/if.js');
var invalid = require('./type/invalid.js');
var max = require('./type/max.js');
var min = require('./type/min.js');
var notEmpty = require('./type/not-empty.js');
var or = require('./type/or.js');
var pattern = require('./type/pattern.js');
var phone = require('./type/phone.js');
var sameAs = require('./type/same-as.js');
var isType = require('./type/is-type.js');
var url = require('./type/url.js');
var valid = require('./type/valid.js');

/**
 * Used to keep the original type (inferred from the object properties)
 * while adding the Record<string, ValidatorFactory> constraint.
 */
function VExtend(arg) {
    return arg;
}
/**
 * Shortcut object holding a reference on all validators' factory.
 * You are free to call the factory directly if you prefer.
 */
var V = VExtend({
    Ajax: ajax.Ajax,
    And: and.And,
    Callback: callback.Callback,
    Choice: choice.Choice,
    Compose: compose.Compose,
    Container: container.Container,
    Email: email.Email,
    Empty: empty.Empty,
    Equal: equal.Equal,
    Foreach: foreach.Foreach,
    If: _if.If,
    Invalid: invalid.Invalid,
    Max: max.Max,
    Min: min.Min,
    NotEmpty: notEmpty.NotEmpty,
    Or: or.Or,
    Pattern: pattern.Pattern,
    Phone: phone.Phone,
    SameAs: sameAs.SameAs,
    IsType: isType.IsType,
    Url: url.Url,
    Valid: valid.Valid
});
/**
 * To extend "V":
 *
 * import { VExtend, V as Base } from "@banquette/validation";
 * import { Test } from "validation/test";
 *
 * export const V = VExtend({
 *     ...Base,
 *     Test
 * });
 *
 * Then when using "V", instead of importing it from `@banquette/validation`, import your extended object.
 */

exports.V = V;
exports.VExtend = VExtend;
