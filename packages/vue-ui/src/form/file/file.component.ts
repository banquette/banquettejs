import { HttpMethod } from "@banquette/http/constants";
import { FileViewModel } from "@banquette/ui/form/file/file.view-model";
import { ensureInEnum } from "@banquette/utils-array/ensure-in-enum";
import { proxy } from "@banquette/utils-misc/proxy";
import { IconClose } from "@banquette/vue-material-icons/icon-close";
import { IconFileUpload } from "@banquette/vue-material-icons/icon-file-upload";
import { IconInsertDriveFile } from "@banquette/vue-material-icons/icon-insert-drive-file";
import { IconStop } from "@banquette/vue-material-icons/icon-stop";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { Watch, ImmediateStrategy } from "@banquette/vue-typescript/decorator/watch.decorator";
import { RemoteComposable } from "../../misc/remote/remote.composable";
import { ProgressHorizontalComponent } from "../../progress/progress-horizontal";
import { AbstractVueFormComponent } from "../abstract-vue-form.component";

@Themeable({
    vars: {
        color: 'slvxvxoa',
        outlineWidth: 'm4vweagr',
        outlineColor: 'aqqhi16f',
        padding: 'x73pwbop',
        borderRadius: 'b0whwn2z',
        boxShadow: 'ejw144jm',
        background: 'fafhipdb',
        fontSize: 'yvwfinhn',

        label: {
            color: 'hjoqe90v',
            margin: 'r60agvhh',
            fontSize: 'xb4919f6',
            fontWeight: 'cfvnkwve'
        },

        placeholder: {
            color: 'qdw6a9fh',
            fontSize: 'bec4uu9b'
        },

        focused: {
            outlineWidth: 'e2xlw36v',
            outlineColor: 'b1hj6140',
            background: 'nfwwjp5t',
            boxShadow: 'd6zvc2x5'
        },

        error: {
            outlineWidth: 'x63if0mt',
            outlineColor: 'q30w5vdm',
            background: 'fv3912g0',
            boxShadow: 'cub29qik',

            focused: {
                outlineWidth: 'i5th4lyv'
            }
        },

        disabled: {
            outline: 'fa2n3mu4',
            background: 'w0bfunmz',
            boxShadow: 'nqf8p3jj',

            label: {
                color: 'b9gdkbqj',
                fontWeight: 'h9nc2z49'
            }
        },

        help: {
            color: 'fpv8mky0'
        }
    }
})
@Component({
    name: 'bt-form-file',
    components: [IconInsertDriveFile, IconFileUpload, IconStop, IconClose, ProgressHorizontalComponent],
})
export default class FileComponent extends AbstractVueFormComponent<FileViewModel> {
    /**
     * `true` to accept multiple files.
     */
    @Prop({type: Boolean, default: false}) public multiple!: boolean;

    /**
     * `true` to auto start uploads when files are queued.
     */
    @Prop({type: Boolean, default: true}) public autoStart!: boolean;

    /**
     * If `true`, files not uploaded through the file component will not be added to the form.
     */
    @Prop({type: Boolean, default: true}) public ignoreNonUploadedFiles!: boolean;

    /**
     * Validation pattern for file types.
     */
    @Prop({type: String, default: null}) public accept!: string|null;

    /**
     * Where to show the errors tooltip relative to the input.
     */
    @Prop({type: String, default: 'bottom-start'}) public errorPlacement!: string;

    /**
     * @see RemoteComposable
     */
    @Prop({type: String, default: null}) public url!: string|null;
    @Prop({type: String, default: null}) public endpoint!: string|null;
    @Prop({type: String, default: HttpMethod.POST, validate: (value) => ensureInEnum(value, HttpMethod, HttpMethod.POST)}) public method!: string|null;
    @Prop({type: Object, default: {}}) public urlParams!: Record<string, string>;

    /**
     * @inheritDoc
     */
    protected setupViewModel(): FileViewModel {
        const vm = new FileViewModel(this.proxy, {
            controlToView: proxy(this.controlToView, this),
            viewToControl: proxy(this.viewToControl, this)
        });
        return vm;
    }

    private viewToControl(value: any): any {
        return value;
    }

    private controlToView(input: any): Date|null {
        return input;
    }

    @Watch([
        'multiple',
        'autoStart',
        'accept',
        'ignoreNonUploadedFiles',
        'url',
        'endpoint',
        'method',
        'urlParams'
    ], {immediate: ImmediateStrategy.NextTick})
    private syncConfigurationProps(): void {
        this.vm.multiple = this.multiple;
        this.vm.autoStartUpload = this.autoStart;
        this.vm.ignoreNonUploadedFiles = this.ignoreNonUploadedFiles;
        this.vm.accept = this.accept;
        this.vm.remote.url = this.url;
        this.vm.remote.endpoint = this.endpoint;
        this.vm.remote.method = ensureInEnum(this.method, HttpMethod, HttpMethod.POST);
        this.vm.remote.urlParams = this.urlParams;
    }
}
