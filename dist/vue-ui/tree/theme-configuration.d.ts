export declare const ThemeConfiguration: {
    css: {
        vars: {
            itemFontFamily: string;
            itemFontSize: string;
            itemFontWeight: string;
            itemTextColor: string;
            itemTextHoverColor: string;
            itemBackgroundColor: string;
            itemBackgroundHoverColor: string;
            itemIconColor: string;
            itemDisabledOpacity: string;
        };
        selectors: {
            root: string;
            item: string;
            'item((?:\\:|\\[)[\\w[\\]-]+)': string;
            'item[expanded]': string;
            'item[empty]': string;
            'item[disabled]': string;
            itemsWrapper: string;
            itemTitle: string;
            itemAddon: string;
        };
    };
};
