import { EventArg } from "@banquette/event";
import { Mutation } from "../mutation";

export class MutationsCollectionEvent extends EventArg {
    public constructor(public readonly mutations: Mutation[]) {
        super();
    }
}
