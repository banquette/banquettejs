import { Service } from '@banquette/dependency-injection';
import { EventDispatcher } from './event-dispatcher';

@Service()
export class EventDispatcherService extends EventDispatcher {}
