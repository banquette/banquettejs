/**
 * To distinguish between `undefined` set by the end-user and `undefined` because the prop is not defined.
 */
export const UndefinedValue = Symbol('undefined');

// Used as origin for all choices created by the component.
export const BeforeSlotOrigin = Symbol('slot-before');
export const AfterSlotOrigin = Symbol('slot-after');
