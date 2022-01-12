
export const PresetEvents = {
    /**
     * Triggered when a new preset is created.
     */
    Created: Symbol('created'),

    /**
     * Triggered when any value of an existing preset is modified.
     */
    Updated: Symbol('updated')
}

/**
 * The name of the preset that is always applied, no matter what the user chooses to use.
 */
export const DefaultPreset = 'default';
