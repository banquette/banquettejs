
export const ThemeConfiguration = {
    css: {
        vars: {
            itemFontFamily              : '@-item-font-family',
            itemFontSize                : '@-item-font-size',
            itemFontWeight              : '@-item-font-weight',
            itemTextColor               : '@-item-text-color',
            itemTextHoverColor          : '@-item-text-hover-color',

            itemBackgroundColor         : '@-item-background-color',
            itemBackgroundHoverColor    : '@-item-background-hover-color',
            itemIconColor               : '@-item-icon-color',

            itemDisabledOpacity         : '@-item-disabled-opacity'
        },
        selectors: {
            root: '&',
            item: '.bt-tree-item',
            'item((?:\\:|\\[)[\\w\[\\]-]+)': '.bt-tree-item$1',
            'item[expanded]': '.bt-tree-item[data-is-expanded]',
            'item[empty]': '.bt-tree-item[data-is-empty]',
            'item[disabled]': '.bt-tree-item[data-is-disabled]',
            itemsWrapper: '& > .items-wrapper',
            itemTitle: '.title',
            itemAddon: '.addon'
        }
    }
};
