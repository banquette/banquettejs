export interface PopoverConfigurationInterface {
    visible: boolean;
    content: string|null;
    allowHtml: boolean;
    showArrow: boolean;
    teleport: HTMLElement|string|null;
    stickToOptions: any;
}
