/**
 * Generic types for POJO data structures.
 */
export type PojoPrimitive = string | number | boolean | null;
export type PojoValue = PojoPrimitive | Pojo | PojoArray;
export type Pojo = { [member: string]: PojoValue };
export interface PojoArray extends Array<PojoValue> {}
