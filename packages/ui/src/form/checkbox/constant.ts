/**
 * For checkboxes with no group.
 * A symbol so it can be used as an index while protecting against naming collision.
 */
export const NullGroup = Symbol('null');

export type ValueIdentifierResolver<T> = ((choice: any) => T)|string|null;
