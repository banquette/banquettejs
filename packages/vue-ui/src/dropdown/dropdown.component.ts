import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Computed } from "@banquette/vue-typescript/decorator/computed.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { Vue } from "@banquette/vue-typescript/vue";
import DropdownDividerComponent from "./divider/dropdown-divider.component.vue";
import DropdownItemComponent from "./item/dropdown-item.component.vue";

@Themeable({
    vars: {
        color: 'x7nz55ql',
        backgroundColor: 's579u8ol',
        zIndex: 'llgbyhb8',
        borderRadius: 'c7jydqfq',
        padding: 'm5bldo4o',
        minWidth: 's47f5oaa',
        item: {
            fontSize: 'h3slruun',
            lineHeight: 'k4dmqp86',
            padding: 'o6tk2m410',
            textAlign: 'ou5nge8t',
            hover: {
                backgroundColor: 'ych7qm36',
                color: 'xb1x17az'
            }
        },
        divider: {
            color: 'zec7gi3x'
        }
    }
})
@Component({
    name: 'bt-dropdown',
    components: [DropdownItemComponent, DropdownDividerComponent]
})
export default class DropdownComponent extends Vue {
    @Prop({type: Object, default: {}}) public popper!: any;

    @Expose() public target!: HTMLElement;

    @Computed() public get options(): any {
        return {
            target: this.target,
            placement: 'bottom-start',
            popper: this.popper
        };
    }

    public mounted(): void {
        this.target = this.$el.parentElement;
    }
}
