export interface PopoverConfigurationInterface {
    visible: boolean;
    content: string|null;
    allowHtml: boolean;
    showArrow: boolean;
    teleport: Element|string|'auto'|null;
    zIndex: number|'auto'|null;
    stickToOptions: any;
}
