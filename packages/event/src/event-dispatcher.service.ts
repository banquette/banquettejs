import { Injector } from "@banquette/core";
import { injectable } from "inversify";
import { EventDispatcher } from "./event-dispatcher";

@injectable()
export class EventDispatcherService  extends EventDispatcher {

}
export const EventDispatcherServiceSymbol = Symbol("EventDispatcherService");
Injector.RegisterService(EventDispatcherServiceSymbol, EventDispatcherService);
