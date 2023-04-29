<script lang="ts">
import { Component, Vue } from "@banquette/vue-typescript";

@Component({
    name: 'bt-call',
    emits: ['call']
})
export default class BtCall extends Vue {
    /**
     * Vue lifecycle.
     */
    public mounted(): void {
        this.$emit('call');
    }
}
</script>
