import { BaseVars } from "../../base-input/theme-configuration";

export const ThemeConfiguration = {
    css: {
        vars: {...BaseVars, ...{
            paddingX: '@-padding-x',
            paddingY: '@-padding-y',
            inputMinWidth: '@-input-min-width',

            // Choice
            choiceTextColor: '@-choice-text-color',
            choiceCheckIconColor: '@-choice-check-icon-color',
            choiceTrashIconColor: '@-choice-trash-icon-color',
            choiceBackgroundFocusColor: '@-choice-background-focus-color',

            // Group
            groupPaddingX: '@-group-padding-x',
            groupPaddingY: '@-group-padding-y',
            groupLabelTextColor: '@-group-label-text-color',
            groupLabelFontWeight: '@-group-label-font-weight',
            groupLabelFontSize: '@-group-label-font-size',
            groupSeparatorColor: '@-group-separator-color',

            // Tags
            tagTextColor: '@-tag-text-color',
            tagBorderColor: '@-tag-border-color',
            tagBackgroundColor: '@-tag-background-color',
            tagMaxWidth: '@-tag-max-width',
            tagCloseFillColor: '@-tag-close-fill-color',
            tagCloseFillHoverColor: '@-tag-close-fill-hover-color',
            tagCloseBackgroundHoverColor: '@-tag-close-background-hover-color',

            // Addons
            clearIconColor: '@-clear-icon-color'
        }},
        selectors: {}
    }
};
