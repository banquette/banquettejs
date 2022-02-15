
export const ChoiceOrigin = {
    /**
     * The default origin, meaning the choice has been added manually with no custom origin specified.
     */
    Default: Symbol('default'),

    /**
     * For choices coming from the remote composable.
     */
    Remote: Symbol('remote')
};

export const ChoicesEvents = {
    /**
     * Event used to notify available choices have changed in the ChoicesComposable.
     */
    ChoicesChanged: Symbol('choices-changed'),

    /**
     * Event used to notify selected items have changed in the ChoicesComposable.
     */
    SelectionChanged: Symbol('selection-changed'),

    /**
     * Trigger when a choice gained focus.
     */
    ChoiceFocused: Symbol('choice-focused')
};
