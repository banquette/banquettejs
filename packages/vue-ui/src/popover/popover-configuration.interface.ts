export interface PopoverConfigurationInterface {
    visible: boolean;
    content: string|null;
    allowHtml: boolean;
    showArrow: boolean;
    teleport: Element|string|null;
    stickToOptions: any;
}
