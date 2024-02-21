<script lang="ts">
import { Component, Prop, Render, Vue } from "@banquette/vue-typescript";
import {Teleport, openBlock, createElementBlock, createBlock, createElementVNode, renderSlot, PropType, VNode} from "vue";

let MaxId: number = 0;

@Component('bt-teleport')
export default class BtTeleport extends Vue {
    /**
     * Required. Specify target container.
     * Can either be a selector or an actual element.
     */
    @Prop({type: [Object, String] as PropType<HTMLElement|string|null>, default: null}) public to!: HTMLElement|string|null;
    @Prop({type: Boolean, default: false, required: true}) public disabled!: boolean;

    private wrapperId: string = '__bt-teleport-' + MaxId++;

    @Render() public render(context: any): VNode {
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
