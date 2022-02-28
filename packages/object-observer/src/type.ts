import { AbstractObserver } from "./observer/abstract.observer";

export type ObserverConstructor<T extends object = any> = {
    new(key: string, target: any, parent: AbstractObserver<any>|null): AbstractObserver<T>;
    GetPriority(): number;
    Supports(target: any): boolean;
};
