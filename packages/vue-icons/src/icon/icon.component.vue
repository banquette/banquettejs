<template src="./icon.component.html"></template>
<style src="./icon.component.css" scoped></style>
<script lang="ts">
import { IconRemixQuestionMark } from "../remix/question-mark";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Computed } from "@banquette/vue-typescript/decorator/computed.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { BindThemeDirective } from "@banquette/vue-typescript/theme/bind-theme.directive";
import { Vue } from "@banquette/vue-typescript/vue";
import { ThemeConfiguration } from "./theme-configuration";

@Themeable(ThemeConfiguration)
@Component({
    name: 'bt-icon',
    components: [IconRemixQuestionMark],
    directives: [BindThemeDirective],
    inheritAttrs: false
})
export default class IconComponent extends Vue {
    @Prop({type: String, default: 'material'}) public set!: string;
    @Prop({type: String, required: true}) public name!: string;

    @Computed() public get iconName(): string {
        return `i-${this.set}-${this.name}`;
    }

    @Computed() public get isAvailable(): boolean {
        if (Object.keys(this.$.root.appContext.components).indexOf(this.iconName) > -1) {
            return true;
        }
        if (this.set && this.name) {
            const importCode = `import "@banquette/vue-icons/${this.set}/${this.name}";`;
            console.error(`Icon "${this.name}" of set "${this.set}" doesn\'t exist. You can import it by doing: ${importCode}`);
        }
        return false;
    }
}
</script>
