<script lang="ts">
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Vue } from "@banquette/vue-typescript/vue";

@Component({
    name: 'bt-call',
    template: false,
    emits: ['call']
})
export default class CallComponent extends Vue {
    /**
     * Vue lifecycle.
     */
    public mounted(): void {
        this.$emit('call');
    }
}
</script>
