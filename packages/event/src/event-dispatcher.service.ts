import { Service } from "@banquette/dependency-injection/decorator/service.decorator";
import { EventDispatcher } from "./event-dispatcher";

@Service()
export class EventDispatcherService  extends EventDispatcher {

}
