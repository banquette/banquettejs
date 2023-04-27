import { EventArg } from "@banquette/event";
import { Node } from '../node';

export class NodeRemovedEventArg extends EventArg {
    public constructor(public readonly node: Node) {
        super();
    }
}
