import { UnsubscribeFunction } from "@banquette/event/type";
import { h } from "vue";
import { Component } from "../decorator/component.decorator";
import { Prop } from "../decorator/prop.decorator";
import { Render } from "../decorator/render.decorator";
import { Watch } from "../decorator/watch.decorator";
import { Vue } from "../vue";
import { ThemeComponentSymbol } from "./constant";
import { ThemeEvent } from "./event/theme.event";
import { VueThemes } from "./vue-themes";

@Component('bt-theme')
export default class ThemeComponent extends Vue {
    /**
     * @see ThemeComponentSymbol
     */
    public s: symbol = ThemeComponentSymbol;

    /**
     * Name of the theme to apply.
     * If the theme doesn't exist yet, the component will update automatically when it becomes available.
     */
    @Prop({type: String, required: true}) public name!: string;

    private unsubscribe: UnsubscribeFunction|null = null;

    @Render()
    public render(props: any, context: any): any {
        const attrs = {class: 'bt-theme'};

        if (VueThemes.Has(this.name)) {
            attrs.class += ' ' + VueThemes.Get(this.name).id;
            if (this.unsubscribe !== null) {
                this.unsubscribe();
                this.unsubscribe = null;
            }
        } else if (this.unsubscribe === null) {
            this.unsubscribe = VueThemes.OnCreated((event: ThemeEvent) => {
                if (event.theme.name === this.name) {
                    // Force re-render
                    this.$forceUpdate();
                }
            });
        }
        return h('div', attrs, context.slots.default());
    }

    @Watch('name')
    private onNameChange(): void {
        // Force re-render
        this.$forceUpdate();
    }
}
