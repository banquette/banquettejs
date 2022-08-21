<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Render } from "@banquette/vue-typescript/decorator/render.decorator";
import { Vue } from "@banquette/vue-typescript/vue";
import { VNodeChild } from "@vue/runtime-core";
import { renderSlot, h } from "vue";

@Component('bt-conditional-wrapper')
export default class ConditionalWrapperComponent extends Vue {
    @Prop({type: String, default: 'div'}) public type!: string;
    @Prop({type: Boolean, required: true}) public enabled!: boolean;

    @Render() public render(context: any): VNodeChild {
        if (!this.enabled) {
            return renderSlot(context.$slots, 'default');
        }
        return h(this.type);
    }
}
</script>
