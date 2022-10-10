import { Vue } from "@banquette/vue-typescript/vue";
import { Position } from "@vueuse/core";
export default class DialogComponent extends Vue {
    private static ScrollLockedCount;
    private static UsedIds;
    /**
     * Bidirectional control of the visibility.
     */
    visible: boolean;
    /**
     * Unique id of the dialog, used to show/hide the dialog using the `DialogService`.
     */
    id: string | null;
    /**
     * If `true`, the scroll on the body is disabled while the dialog is opened.
     */
    lockScroll: boolean;
    /**
     * If `true`, a mask is shown behind the dialog to prevent interactions with the elements behind.
     */
    modal: boolean;
    /**
     * If `true`, the modal will close if the mask is clicked.
     */
    closeByMask: boolean;
    /**
     * If `true`, the modal will close if the user press the "Escape" key.
     */
    closeOnEscape: boolean;
    /**
     * An HTML element or selector to teleport the dialog into.
     */
    teleport: string | null;
    /**
     * If `true`, the content of the dialog is destroyed when the dialog is hidden.
     * If `false`, the content is only hidden.
     *
     * In either case, the content will only render once the dialog is first shown.
     */
    destroyOnClose: boolean;
    /**
     * If `true`, show a close button in the header of the dialog.
     */
    showClose: boolean;
    /**
     * If `true`, the dialog can be dragged from its header.
     */
    draggable: boolean;
    /**
     * Bidirectional binding for the visibility so the dialog can be closed
     * both from the inside and outside the component.
     */
    get isVisible(): boolean;
    set isVisible(value: boolean);
    /**
     * If `true`, the content is rendered.
     */
    get rendered(): boolean;
    /**
     * `true` if the end-user gave a content for the "header" slot.
     */
    get hasHeader(): boolean;
    /**
     * `true` if the end-user gave a content for the "footer" slot.
     */
    get hasFooter(): boolean;
    /**
     * Values exposed to the slots.
     */
    get bindings(): any;
    slotBag: Record<string, any>;
    /**
     * The amount of movement induced by the user by dragging the dialog.
     */
    dragTranslation: Position;
    dragging: boolean;
    overlayEl: Element;
    get dragTranslationStyle(): object;
    private internalVisible;
    private unsubscribeFunctions;
    private draggableUnsubscribeFunctions;
    private oldBodyOverflow;
    private shown;
    private eventDispatcher;
    constructor();
    /**
     * Vue lifecycle.
     */
    mounted(): void;
    /**
     * Vue lifecycle.
     */
    unmounted(): void;
    onIdChange(newValue: string | null, oldValue: string | null): void;
    onVisibleChange(newValue: boolean): void;
    onLockScrollChange(newValue: boolean): void;
    /**
     * Close the dialog.
     */
    close(): void;
    /**
     * "keydown" event on the document.
     */
    onDocumentKeyDown(event: KeyboardEvent): void;
    /**
     * "mousedown" event on the mask.
     */
    onOverlayMouseDown(event: MouseEvent): void;
    /**
     * Called when a `DialogEvents.Show` event is emitted.
     */
    private onShowByEvent;
    /**
     * Called when a `DialogEvents.Hide` or `DialogEvents.HideAll` event is emitted.
     */
    private onHideByEvent;
    /**
     * Prevent or restore the overflow of the body depending on the input value
     * and on the other visible dialogs.
     */
    private updateScrollLock;
    /**
     * Make the dialog draggable.
     */
    private makeDraggable;
    /**
     * Stop the dialog from being draggable.
     */
    private freeDraggable;
}
