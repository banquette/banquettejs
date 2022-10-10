import { EventArg } from "@banquette/event/event-arg";
import { Node } from '../node';
export declare class NodeRemovedEventArg extends EventArg {
    readonly node: Node;
    constructor(node: Node);
}
