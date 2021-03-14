import { onRejectCallback, onResolveCallback } from "./types";

export interface ThenableInterface<T> {
    then<U>(
        onSuccess?: onResolveCallback<T, U>,
        onFail?: onRejectCallback<U>,
    ): ThenableInterface<U>;
    then<U>(
        onSuccess?: onResolveCallback<T, U>,
        onFail?: (reason: any) => void,
    ): ThenableInterface<U>;
}
