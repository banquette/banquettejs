<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Render } from "@banquette/vue-typescript/decorator/render.decorator";
import { Vue } from "@banquette/vue-typescript/vue";
import { VNodeChild } from "@vue/runtime-core";
import { Teleport, openBlock, createElementBlock, createBlock, createElementVNode, renderSlot } from "vue";

@Component('bt-teleport')
export default class TeleportComponent extends Vue {
    static MaxId: number = 0;

    /**
     * Required. Specify target container.
     * Can either be a selector or an actual element.
     */
    @Prop({type: [Object, String], default: null}) public to!: string|HTMLElement|null;
    @Prop({type: Boolean, default: false, required: true}) public disabled!: boolean;

    private wrapperId: string = '__bt-teleport-' + TeleportComponent.MaxId++;

    @Render() public render(context: any): VNodeChild {
        if (this.disabled || !this.to) {
            return renderSlot(context.$slots, 'default');
        }
        return (openBlock(), createElementBlock('div', {id: this.wrapperId}, [
            (openBlock(), createBlock(Teleport as any, {to: context.to}, [
                createElementVNode('div', {'data-teleported-from': this.wrapperId }, [
                    renderSlot(context.$slots, 'default')
                ], 8, ['data-teleported-from'])
            ], 8, ['to']))
        ], 8, ['id']));
    }
}
</script>
