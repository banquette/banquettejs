import { isObject } from "@banquette/utils-type/is-object";
import { Component, Prop, Expose, Vue, TemplateRef } from "@banquette/vue-typescript";
import { DECORATORS_OPTIONS_HOLDER_NAME } from "../../../../vue-typescript/src/constants";
import { AbstractVueFormComponent } from "../../../src";
import { ControlViewTestInterface } from "../../controls-views-test-configs/control-view-test.interface";
import { UsageException } from "@banquette/exception";
import TextComponent from "../../../component/text/text.component.vue";

@Component({
    name: 'vue-test',
    components: [
        TextComponent
    ]
})
export default class VueTestComponent extends Vue {
    // Props
    @Prop({required: true}) public component!: any;
    @Prop({type: Object, required: true}) public test!: ControlViewTestInterface;

    @TemplateRef('componentEl') public componentRef!: any;

    @Expose() public componentName!: any;

    public beforeMount(): void {
        if (!isObject(this.component.prototype[DECORATORS_OPTIONS_HOLDER_NAME])) {
            throw new UsageException(`Unsupported component "${String(this.component)}. Only vue typescript components are supported.`);
        }
        this.componentName = this.component.prototype[DECORATORS_OPTIONS_HOLDER_NAME].component.name;
    }

    public mounted(): void {
        if (!(this.componentRef instanceof AbstractVueFormComponent)) {
            throw new UsageException('Invalid component, must derive from AbstractVueFormComponent.');
        }
        Object.assign(this.test.v, (this.componentRef as any).v);
        (this.componentRef as any).v = this.test.v;
    }

    @Expose() public validate(): void {
        this.test.valid = true;
    }

    @Expose() public invalidate(): void {
        this.test.valid = false;
    }
}
