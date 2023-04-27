import { EventArg } from '@banquette/event';
import { HttpRequest } from '../http-request';

export class RequestEvent extends EventArg {
    public constructor(public request: HttpRequest) {
        super();
    }
}
