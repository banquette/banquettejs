
export enum NodeRemoteFetchStatus {
    /**
     * No request is running.
     */
    Idle = 'idle',

    /**
     * A remote fetch is running.
     */
    Pending = 'pending',

    /**
     * A remote fetch has failed.
     */
    Failed = 'failed'
}

/**
 * Events emitted through the event dispatcher.
 */
export const HeadlessTreeViewModelEvents = {
    NodeRemoved: Symbol('node-removed')
};

export type NodePropResolver<T> = ((node: any) => T)|string|null;
