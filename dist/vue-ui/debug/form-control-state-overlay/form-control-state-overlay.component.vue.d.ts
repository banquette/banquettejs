import { Vue } from "@banquette/vue-typescript/vue";
export default class FormControlStateOverlayComponent extends Vue {
    /**
     * View data of the control to observe states of.
     */
    v: any;
    visible: boolean;
    get overlayOptions(): any;
    private knownKeys;
    private _groups;
    get groups(): any;
    target: Element;
    toggle(): void;
    hide(): void;
    toggleValueDetail(value: any): void;
    private createValueProxy;
    private normalizeValue;
}
