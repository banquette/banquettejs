import { Inject } from "@banquette/dependency-injection/decorator/inject.decorator";
import { Module } from "@banquette/dependency-injection/decorator/module.decorator";
import { Injector } from "@banquette/dependency-injection/injector";
import { EventArg } from "@banquette/event/event-arg";
import { EventDispatcherService } from "@banquette/event/event-dispatcher.service";
import { addEventListener } from "@banquette/utils-dom/add-event-listener";
import { proxy } from "@banquette/utils-misc/proxy";
import { extend } from "@banquette/utils-object/extend";
import { VoidCallback } from "@banquette/utils-type/types";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Computed } from "@banquette/vue-typescript/decorator/computed.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Ref } from "@banquette/vue-typescript/decorator/ref.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { Watch, ImmediateStrategy } from "@banquette/vue-typescript/decorator/watch.decorator";
import { BindThemeDirective } from "@banquette/vue-typescript/theme/bind-theme.directive";
import { Vue } from "@banquette/vue-typescript/vue";
import { OverlayComponent } from "../overlay";
import { DialogEvents } from "./constant";
import { HideDialogEventArg } from "./event/hide-dialog.event-arg";
import { ShowDialogEventArg } from "./event/show-dialog.event-arg";
import { ThemeConfiguration } from "./theme-configuration";

@Module()
@Themeable(ThemeConfiguration)
@Component({
    name: 'bt-dialog',
    components: [OverlayComponent],
    directives: [BindThemeDirective],
    emits: ['update:modelValue', 'close'],
    factory: () => Injector.Get(DialogComponent)
})
export default class DialogComponent extends Vue {
    private static ScrollLockedCount: number = 0;
    private static UsedIds: string[] = [];

    // "v-model" recipient
    @Prop({type: Boolean, default: false}) public modelValue!: boolean;

    /**
     * Unique id of the dialog, used to show/hide the dialog using the `DialogService`.
     */
    @Prop({type: String, default: null}) public id!: string|null;

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
    @Prop({type: String, default: 'body'}) public teleport!: string|null;

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
     * Bi-directional binding for the visibility so the dialog can be closed
     * both from the inside and outside of the component.
     */
    @Computed()
    public get visible(): boolean {
        return this.modelValue || this.internalVisible;
    }
    public set visible(value: boolean) {
        this.$emit('update:modelValue', value);
    }

    /**
     * If `true`, the content is rendered.
     */
    @Computed() public get rendered(): boolean {
        return this.visible || (this.shown && !this.destroyOnClose);
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

    @Ref() private internalVisible: boolean = false;
    private unsubscribeFunctions: VoidCallback[] = [];
    private oldBodyOverflow: string|null = null;
    private shown: boolean = false;

    public constructor(@Inject(EventDispatcherService) private eventDispatcher: EventDispatcherService) {
        super();
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
        this.onIdChange(null, this.id);
    }

    @Watch('id', {immediate: ImmediateStrategy.BeforeMount})
    public onIdChange(newValue: string|null, oldValue: string|null) {
        if (oldValue) {
            const pos = DialogComponent.UsedIds.indexOf(oldValue);
            if (pos > -1) {
                DialogComponent.UsedIds.splice(pos, 1);
            }
        }
        if (newValue) {
            if (DialogComponent.UsedIds.indexOf(newValue) > -1) {
                console.warn(`The id "${newValue}" is already used by another dialog.`);
                return ;
            }
            DialogComponent.UsedIds.push(newValue);
        }
    }

    @Watch('visible', {immediate: false})
    public onVisibleChange(newValue: boolean) {
        if (newValue) {
            if (this.lockScroll) {
                this.updateScrollLock(true);
            }
            this.shown = true;
        }
    }

    @Watch('lockScroll', {immediate: ImmediateStrategy.BeforeMount})
    public onLockScrollChange(newValue: boolean) {
        if (this.visible) {
            this.updateScrollLock(newValue);
        }
    }

    /**
     * Close the dialog.
     */
    @Expose() public close(): void {
        this.visible = false;
        this.internalVisible = false;
        if (this.lockScroll) {
            this.updateScrollLock(false);
        }
        this.$emit('close');
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
        if (this.closeByMask) {
            event.stopPropagation();
            this.close();
        }
    }

    /**
     * Called when a `DialogEvents.Show` event is emitted.
     */
    private onShowByEvent(event: ShowDialogEventArg): void {
        if (event.id === this.id) {
            this.internalVisible = true;
            extend(this.slotBag || {}, event.args || {});
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
    private updateScrollLock(newValue: boolean): void {
        if (newValue) {
            if ((++DialogComponent.ScrollLockedCount) === 1) {
                this.oldBodyOverflow = document.body.style.overflow;
                document.body.style.overflow = 'hidden';
            }
        } else {
            if (!(--DialogComponent.ScrollLockedCount) && this.oldBodyOverflow !== null) {
                document.body.style.overflow = this.oldBodyOverflow;
                this.oldBodyOverflow = null;
            }
        }
    }
}
