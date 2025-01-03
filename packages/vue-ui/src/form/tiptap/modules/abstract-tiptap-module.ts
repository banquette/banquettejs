import { UsageException } from "@banquette/exception";
import { Expose, Prop, Vue } from "@banquette/vue-typescript";
import { Editor, EditorEvents, Extensions } from "@tiptap/vue-3";
import BtFormTiptap from "../tiptap.component.vue";
import { TiptapModuleInterface } from "./tiptap-module.interface";

export abstract class AbstractTiptapModule<Conf = any> extends Vue implements TiptapModuleInterface {
    /**
     * Module's configuration.
     */
    @Prop({
        type: Object,
        default: {},
        transform(this: AbstractTiptapModule<Conf>, v: any) {
            return Object.assign({}, this.getDefaultConfiguration(), v || {});
        }
    })
    public configuration!: Conf;

    /**
     * `true` if the module is ready to be used.
     */
    @Expose() public enabled: boolean = false;

    /**
     * The editor instance.
     */
    @Expose() public editor!: Editor;

    /**
     * Parent tiptap component instance.
     */
    protected parent!: InstanceType<typeof BtFormTiptap>;

    /**
     * Vue lifecycle method.
     */
    public beforeMount(): void {
        const $parent = (this.getParent('bt-form-tiptap') as InstanceType<typeof BtFormTiptap>) || null;
        if (!$parent) {
            throw new UsageException('A tiptap module must be child of a `bt-form-tiptap` component.');
        }
        this.parent = $parent;
        this.parent.registerModule(this);
    }

    /**
     * Vue lifecycle method.
     */
    public beforeUnmount(): void {
        this.parent.unregisterModule(this);
    }

    /**
     * @inheritDoc
     */
    public setEditor(editor: Editor): void {
        this.editor = editor;
        this.onReady();
    }

    /**
     * @inheritDoc
     */
    public getExtensions(): Extensions {
        return [];
    }

    /**
     * @inheritDoc
     */
    public disable(): void {
        this.enabled = false;
    }

    /**
     * @inheritDoc
     */
    public enable(): void {
        this.enabled = true;
    }

    /**
     * Tiptap's events handlers.
     */
    /* virtual */ public onBeforeCreate(props: EditorEvents['beforeCreate']): void {}
    /* virtual */ public onCreate(props: EditorEvents['create']): void {}
    /* virtual */ public onUpdate(props: EditorEvents['update']): void {}
    /* virtual */ public onSelectionUpdate(props: EditorEvents['selectionUpdate']): void {}
    /* virtual */ public onTransaction(props: EditorEvents['transaction']): void {}
    /* virtual */ public onFocus(props: EditorEvents['focus']): void {}
    /* virtual */ public onBlur(props: EditorEvents['blur']): void {}
    /* virtual */ public onDestroy(props: EditorEvents['destroy']): void {}

    /**
     * Default configuration values.
     * They will be merged with the ones coming as input.
     */
    protected getDefaultConfiguration(): Partial<Conf> {
        return {};
    }

    protected onReady(): void {
        // Override me
    }
}
