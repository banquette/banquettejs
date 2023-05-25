import { VNode, h } from "vue";

export class ErrorPlaceholderComponent {
    public constructor(public readonly error: string) {
    }

    public render(): VNode {
        return h('div', {style: 'background: #f56c6c; padding: 1em; border-radius: 4px; color: #fff;'}, this.error);
    }
}
