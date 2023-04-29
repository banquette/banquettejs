<style src="./group.component.css" scoped></style>
<template src="./group.component.html"></template>
<script lang="ts">
import { Choice } from "@banquette/ui";
import { Component, Expose, Prop, Vue } from "@banquette/vue-typescript";
import { PropType } from "vue";

@Component('bt-form-select-group')
export default class BtGroup extends Vue {
    @Prop({type: String as PropType<string|null>, default: null}) public label!: string|null;
    @Expose() public visibleChoices: Choice[] = [];

    public updateChoice(choice: Choice): void {
        for (let i = 0; i < this.visibleChoices.length; ++i) {
            if (this.visibleChoices[i].identifier === choice.identifier) {
                if (choice.visible) {
                    return ;
                }
                this.visibleChoices.splice(i, 1);
                return ;
            }
        }
        if (choice.visible) {
            this.visibleChoices.push(choice);
        }
    }
}
</script>
