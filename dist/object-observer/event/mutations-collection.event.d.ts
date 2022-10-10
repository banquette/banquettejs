import { EventArg } from "@banquette/event/event-arg";
import { Mutation } from "../mutation";
export declare class MutationsCollectionEvent extends EventArg {
    readonly mutations: Mutation[];
    constructor(mutations: Mutation[]);
}
