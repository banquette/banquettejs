import { Vue } from "@banquette/vue-typescript/vue";
export default class OverlayComponent extends Vue {
    private static zIndexIncrement;
    position: 'absolute' | 'fixed';
    /**
     * Control the visibility of the overlay.
     * If invisible, the events are not blocked anymore.
     */
    visible: boolean;
    /**
     * Bridge to the `overlay-z-index` css variable.
     */
    zIndexCssVar: number;
    get zIndex(): number;
    private zIndexIncrement;
    unmounted(): void;
    private onVisibilityChange;
}
