import { I18nInterface } from "./i18n.interface";

export const I18nDefaults: I18nInterface = {
    dialogTitle: 'Link configuration',
    confirmButton: 'Confirm',
    cancelButton: 'Cancel',
    deleteButton: 'Remove',
    labelControlLabel: 'Display text',
    labelControlHelp: 'Text visible by the user. If not defined, the url is used.',
    hrefControlLabel: 'URL',
    hrefControlHelp: 'The URL that the hyperlink points to. ',
    hrefControlEmptyError: 'The URL is mandatory.',
    hrefControlSyntaxError: 'Must be a valid url.',
    targetControlLabel: 'Target',
    targetControlHelp: 'Where to show the linked URL.',
    popover: 'Link'
};
