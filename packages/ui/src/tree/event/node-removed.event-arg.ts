import { EventArg } from "@banquette/event/event-arg";
import { Node } from '../node';

export class NodeRemovedEventArg extends EventArg {
    public constructor(public readonly node: Node) {
        super();
    }
}
