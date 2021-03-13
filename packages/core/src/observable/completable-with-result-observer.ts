
export interface CompletableWithResultObserver<N, C = any> {
    next: (value: N) => void;
    error: (err: any) => void;
    complete: (value: C) => void;
}
