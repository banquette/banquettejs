import { UnsubscribeFunction } from "@banquette/event";
import { h, renderSlot } from "vue";
import { Component } from "../decorator/component.decorator";
import { Prop } from "../decorator/prop.decorator";
import { Render } from "../decorator/render.decorator";
import { Watch } from "../decorator/watch.decorator";
import { Vue } from "../vue";
import { ThemeEvent } from "./event/theme.event";
import { VueThemes } from "./vue-themes";

@Component('bt-theme')
export class ThemeComponent extends Vue {
    /**
     * Name of the theme to apply.
     * If the theme doesn't exist yet, the component will update automatically when it becomes available.
     */
    @Prop({type: String, default: null}) public name!: string|null;

    private themeInUse: string|null = null;
    private unsubscribe: UnsubscribeFunction|null = null;

    @Render()
    public render(context: any): any {
        const attrs = {class: 'bt-theme'};

        if (this.themeInUse !== this.name) {
            if (this.themeInUse !== null && VueThemes.Has(this.themeInUse)) {
                VueThemes.Get(this.themeInUse).free();
                this.themeInUse = null;
            }
            if (this.name) {
                if (VueThemes.Has(this.name)) {
                    const theme = VueThemes.Get(this.name);
                    attrs.class += ' ' + theme.id;
                    if (this.unsubscribe !== null) {
                        this.unsubscribe();
                        this.unsubscribe = null;
                    }
                    theme.use();
                    this.themeInUse = this.name;
                } else if (this.unsubscribe === null) {
                    this.unsubscribe = VueThemes.OnCreated((event: ThemeEvent) => {
                        if (event.theme && event.theme.name === this.name) {
                            // Force re-render
                            this.$forceUpdate();
                        }
                    });
                }
            }
        }
        return h('div', attrs, renderSlot(context.$slots, 'default'));
    }

    @Watch('name')
    private onNameChange(): void {
        // Force re-render
        this.$forceUpdate();
    }
}
