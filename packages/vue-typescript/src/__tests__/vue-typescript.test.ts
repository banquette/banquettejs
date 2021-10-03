import { mount } from '@vue/test-utils';
import { nextTick } from "vue";
import { Component } from "../decorator/component.decorator";
import { Expose } from "../decorator/expose.decorator";
import { Prop } from "../decorator/prop.decorator";
import { getComponentOptions } from "../utils";

@Component({
    name: 'button',
    template: `<div>
        <span id="count">count: {{ count }}</span>
        <span id="invisibleCount">invisibleCount: {{ invisibleCount }}</span>
    </div>`
})
class ButtonComponent {
    @Prop({type: Number, default: 0}) public defaultCount!: number;

    @Expose() public count: number = 0;
    public invisibleCount: number = 0;

    public beforeMount(): void {
        this.count = this.invisibleCount = this.defaultCount;
    }

    @Expose() public increment(): void {
        this.count++;
        this.invisibleCount++;
    }

    public invisibleIncrement(): void {
        this.increment();
    }
}

describe('@Expose()',  () => {
    const wrapper = mount(getComponentOptions(ButtonComponent));

    test('Exposing public property', async () => {
        expect(wrapper.find('#count').text()).toContain('count: 0');
        wrapper.vm.increment();
        await nextTick();
        expect(wrapper.find('#count').text()).toContain('count: 1');
    });

    test('Access non exposed property', () => {
        expect(wrapper.find('#invisibleCount').text()).toContain('invisibleCount:');
    });
});

describe('@Prop()', () => {
    test('displays message',  () => {
        const wrapper = mount(getComponentOptions(ButtonComponent), {
            propsData: {
                defaultCount: 10
            }
        })
        expect(wrapper.find('#count').text()).toContain('count: 10');
    });
});
