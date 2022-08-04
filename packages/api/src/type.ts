import { ModelExtendedIdentifier } from "@banquette/model/type";

/**
 * A couple of model identifiers that define explicitly the type of model
 * to use from client to server and vice versa.
 */
export type ModelBidirectionalExtendedIdentifier = [
    ModelExtendedIdentifier, // Used in the direction client => server (request)
    ModelExtendedIdentifier  // Used in the direction server => client (response)
];
