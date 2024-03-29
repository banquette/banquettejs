import { EventArg } from '@banquette/event';
import { AdapterRequest } from '../adapter/adapter-request';
import { AdapterResponse } from '../adapter/adapter-response';

export class BeforeResponseEvent extends EventArg {
    public constructor(
        public response: AdapterResponse,
        public request: AdapterRequest
    ) {
        super();
    }
}
