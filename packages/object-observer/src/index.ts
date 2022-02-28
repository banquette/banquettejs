import { ArrayObserver } from "./observer/array.observer";
import { ObjectObserver } from "./observer/object.observer";
import { ObserverFactory } from "./observer.factory";
import { TypedArrayObserver } from "./observer/typed-array.observer";

ObserverFactory.RegisterObserver(ArrayObserver);
ObserverFactory.RegisterObserver(TypedArrayObserver);
ObserverFactory.RegisterObserver(ObjectObserver);

export { ObserverFactory };
