<style src="./dialog.component.css" scoped></style>
<template src="./dialog.component.html" ></template>
<script lang="ts">
import { Injector } from "@banquette/dependency-injection";
import { EventArg, EventDispatcherService } from "@banquette/event";
import { addEventListener } from "@banquette/utils-dom";
import { isServer, proxy } from "@banquette/utils-misc";
import { VoidCallback } from "@banquette/utils-type";
import { Component, Computed, Expose, Prop, Ref, TemplateRef, Themeable, Watch, ImmediateStrategy, BindThemeDirective, Vue } from "@banquette/vue-typescript";
import { useDraggable, Position } from "@vueuse/core";
import { watch, PropType } from "vue";
import { BtClientOnly } from "../misc";
import { BtOverlay } from "../overlay";
import { DialogEvents } from "./constant";
import { HideDialogEventArg } from "./event/hide-dialog.event-arg";
import { ShowDialogEventArg } from "./event/show-dialog.event-arg";
import { VisibilityChangeDialogEventArg } from "./event/visibility-change-dialog.event-arg";
import { ThemeConfiguration } from "./theme-configuration";

let ScrollLockedCount: number = 0;
let UsedIds: string[] = [];

@Themeable(ThemeConfiguration)
@Component({
    name: 'bt-dialog',
    components: [BtOverlay, BtClientOnly],
    directives: [BindThemeDirective],
    emits: ['update:visible', 'open', 'close']
})
export default class BtDialog extends Vue {
    /**
     * Bidirectional control of the visibility.
     */
    @Prop({type: Boolean, default: false}) public visible!: boolean;

    /**
     * Unique id of the dialog, used to show/hide the dialog using the `DialogService`.
     */
    @Prop({type: String as PropType<string|null>, default: null}) public id!: string|null;

    /**
     * If `true`, the scroll on the body is disabled while the dialog is opened.
     */
    @Prop({type: Boolean, default: true}) public lockScroll!: boolean;

    /**
     * If `true`, a mask is shown behind the dialog to prevent interactions with the elements behind.
     */
    @Prop({type: Boolean, default: true}) public modal!: boolean;

    /**
     * If `true`, the modal will close if the mask is clicked.
     */
    @Prop({type: Boolean, default: true}) public closeByMask!: boolean;

    /**
     * If `true`, the modal will close if the user press the "Escape" key.
     */
    @Prop({type: Boolean, default: true}) public closeOnEscape!: boolean;

    /**
     * An HTML element or selector to teleport the dialog into.
     */
    @Prop({type: String as PropType<string|null>, default: 'body'}) public teleport!: string|null;

    /**
     * If `true`, the content of the dialog is destroyed when the dialog is hidden.
     * If `false`, the content is only hidden.
     *
     * In either case, the content will only render once the dialog is first shown.
     */
    @Prop({type: Boolean, default: false}) public destroyOnClose!: boolean;

    /**
     * If `true`, show a close button in the header of the dialog.
     */
    @Prop({type: Boolean, default: true}) public showClose!: boolean;

    /**
     * If `true`, the dialog can be dragged from its header.
     */
    @Prop({type: Boolean, default: false}) public draggable!: boolean;

    /**
     * Bidirectional binding for the visibility so the dialog can be closed
     * both from the inside and outside the component.
     */
    @Computed()
    public get isVisible(): boolean {
        return this.visible || this.internalVisible;
    }
    public set isVisible(value: boolean) {
        this.$emit('update:visible', value);
    }

    /**
     * If `true`, the content is rendered.
     */
    @Computed() public get rendered(): boolean {
        return this.isVisible || (this.shown && !this.destroyOnClose);
    }

    /**
     * `true` if the end-user gave a content for the "header" slot.
     */
    @Computed() public get hasHeader(): boolean {
        return this.hasSlot('header');
    }

    /**
     * `true` if the end-user gave a content for the "footer" slot.
     */
    @Computed() public get hasFooter(): boolean {
        return this.hasSlot('footer');
    }

    /**
     * Values exposed to the slots.
     */
    @Computed() public get bindings(): any {
        return {
            close: proxy(this.close, this),
            bag: this.slotBag
        };
    }

    @Expose() public slotBag: Record<string, any> = {};

    /**
     * The amount of movement induced by the user by dragging the dialog.
     */
    @Expose() public dragTranslation: Position = {x: 0, y: 0};
    @Expose() public dragging: boolean = false;

    @TemplateRef('overlay') public overlayEl!: Element;

    @Computed() public get dragTranslationStyle(): object {
        if (!this.draggable) {
            return {};
        }
        return {transform: `translate(${this.dragTranslation.x}px, ${this.dragTranslation.y}px)`};
    }

    @Ref() private internalVisible: boolean = false;
    private unsubscribeFunctions: VoidCallback[] = [];
    private draggableUnsubscribeFunctions: VoidCallback[] = [];
    private oldBodyOverflow: string|null = null;
    private shown: boolean = false;
    private eventDispatcher: EventDispatcherService;
    private closeResult: any;

    public constructor() {
        super();
        this.eventDispatcher = Injector.Get(EventDispatcherService);
    }

    /**
     * Vue lifecycle.
     */
    public mounted(): void {
        this.unsubscribeFunctions.push(addEventListener(document, 'keydown', proxy(this.onDocumentKeyDown, this)));
        this.unsubscribeFunctions.push(this.eventDispatcher.subscribe(DialogEvents.Show, proxy(this.onShowByEvent, this)));
        this.unsubscribeFunctions.push(this.eventDispatcher.subscribe(DialogEvents.Hide, proxy(this.onHideByEvent, this)));
        this.unsubscribeFunctions.push(this.eventDispatcher.subscribe(DialogEvents.HideAll, proxy(this.onHideByEvent, this)));
    }

    /**
     * Vue lifecycle.
     */
    public unmounted(): void {
        for (const fn of this.unsubscribeFunctions) {
            fn();
        }
        this.unsubscribeFunctions = [];
        if (this.lockScroll) {
            this.updateScrollLock(false);
        }
        this.shown = false;
        this.onIdChange(null, this.id);
        this.freeDraggable();
    }

    @Watch('id', {immediate: ImmediateStrategy.BeforeMount | ImmediateStrategy.SsrPrefetch})
    public onIdChange(newValue: string|null, oldValue: string|null) {
        if (oldValue) {
            const pos = UsedIds.indexOf(oldValue);
            if (pos > -1) {
                UsedIds.splice(pos, 1);
            }
        }
        if (newValue) {
            if (UsedIds.indexOf(newValue) > -1) {
                console.warn(`The id "${newValue}" is already used by another dialog.`);
                return ;
            }
            UsedIds.push(newValue);
        }
    }

    @Watch('isVisible', {immediate: false})
    public onVisibleChange(newValue: boolean) {
        if (newValue) {
            if (this.lockScroll) {
                this.updateScrollLock(true);
            }
            this.shown = true;
            if (this.draggable) {
                setTimeout(() => {
                    this.makeDraggable();
                });
            }
            this.$emit('open', this.slotBag);
        } else {
            if (this.lockScroll) {
                this.updateScrollLock(false);
            }
            this.shown = false;
            this.freeDraggable();
            this.$emit('close');
        }
        if (this.id !== null) {
            this.eventDispatcher.dispatch(DialogEvents.VisibilityChange, new VisibilityChangeDialogEventArg(this.id, newValue, !newValue ? this.closeResult : undefined));
        }
    }

    @Watch('lockScroll', {immediate: false})
    public onLockScrollChange(newValue: boolean) {
        if (this.isVisible) {
            this.updateScrollLock(newValue, true);
        }
    }

    /**
     * Open the dialog.
     */
    @Expose() public open(): void {
        if (this.isVisible) {
            return ;
        }
        this.isVisible = true;
        this.internalVisible = true;
    }

    /**
     * Close the dialog.
     */
    @Expose() public close(result?: any): void {
        this.isVisible = false;
        this.closeResult = result;
        this.internalVisible = false;
    }

    /**
     * "keydown" event on the document.
     */
    @Expose()
    public onDocumentKeyDown(event: KeyboardEvent): void {
        if (event.key === 'Escape' && this.closeOnEscape) {
            event.stopPropagation();
            this.close();
        }
    }

    /**
     * "mousedown" event on the mask.
     */
    @Expose()
    public onOverlayMouseDown(event: MouseEvent): void {
        if (this.closeByMask && event.target === this.overlayEl) {
            this.close();
        }
    }

    /**
     * Called when a `DialogEvents.Show` event is emitted.
     */
    private onShowByEvent(event: ShowDialogEventArg): void {
        if (event.id === this.id) {
            this.internalVisible = true;
            this.slotBag = event.args || {};
        }
    }

    /**
     * Called when a `DialogEvents.Hide` or `DialogEvents.HideAll` event is emitted.
     */
    private onHideByEvent(event: HideDialogEventArg|EventArg): void {
        if (!(event instanceof HideDialogEventArg) || event.id === this.id) {
            this.close();
        }
    }

    /**
     * Prevent or restore the overflow of the body depending on the input value
     * and on the other visible dialogs.
     */
    private updateScrollLock(newValue: boolean, force: boolean = false): void {
        if (isServer() || (!force && newValue === this.shown)) {
            return ;
        }
        if (newValue) {
            if ((++ScrollLockedCount) === 1) {
                this.oldBodyOverflow = document.body.style.overflow;
                document.body.style.overflow = 'hidden';
            }
        } else {
            if (!(--ScrollLockedCount) && this.oldBodyOverflow !== null) {
                document.body.style.overflow = this.oldBodyOverflow;
                this.oldBodyOverflow = null;
            }
        }
    }

    /**
     * Make the dialog draggable.
     */
    private makeDraggable(): void {
        if (!this.$refs.header) {
            return ;
        }
        // The value of `dragTranslation` when the last drag started.
        const lastTranslationOffset: Position = {x: 0, y: 0};

        // The value of `x` and `y` when the last drag started.
        let lastDragOffset: Position|null = null;
        const data = useDraggable(this.$refs.header);
        this.draggableUnsubscribeFunctions.push(watch(data.isDragging, (newValue: boolean) => {
            if (newValue) {
                lastTranslationOffset.x = this.dragTranslation.x;
                lastTranslationOffset.y = this.dragTranslation.y;
                lastDragOffset = null;
            }
            this.dragging = newValue;
        }));
        this.draggableUnsubscribeFunctions.push(watch([data.x,  data.y], (newValues: number[]) => {
            if (lastDragOffset === null) {
                lastDragOffset = {x: newValues[0], y: newValues[1]};
            }
            this.dragTranslation.x = lastTranslationOffset.x + (newValues[0] - lastDragOffset.x);
            this.dragTranslation.y = lastTranslationOffset.y + (newValues[1] - lastDragOffset.y);
        }));
    }

    /**
     * Stop the dialog from being draggable.
     */
    private freeDraggable(): void {
        for (const fn of this.draggableUnsubscribeFunctions) {
            fn();
        }
        this.draggableUnsubscribeFunctions = [];
        this.dragTranslation.x = 0;
        this.dragTranslation.y = 0;
    }
}
</script>
