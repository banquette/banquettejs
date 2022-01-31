
export const ViewModelEvents = {
    /**
     * That's where you should set the configurable options, create composables and configure them.
     * Vue props are not guaranteed to be ready at this point.
     */
    Configure: Symbol('configure'),

    /**
     * At this point the view model expect the configuration to be ready to use.
     * Vue props are guaranteed to be ready to use.
     */
    Initialize: Symbol('initialize'),

    /**
     * The component is initialized and ready to use by the end-user.
     */
    Ready: Symbol('ready')
};

export enum ViewModelSequence {
    /**
     * Called when the view model is created.
     */
    Initialize = 'initialize',

    /**
     * Called just before the view model is destroyed.
     */
    Dispose = 'dispose'
}
