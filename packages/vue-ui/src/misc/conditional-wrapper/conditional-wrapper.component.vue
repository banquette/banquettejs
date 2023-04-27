<script lang="ts">
import { Component, Prop, Render, Vue } from "@banquette/vue-typescript";
import { VNodeChild } from "@vue/runtime-core";
import { renderSlot, h } from "vue";

@Component('bt-conditional-wrapper')
export default class BtConditionalWrapper extends Vue {
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
