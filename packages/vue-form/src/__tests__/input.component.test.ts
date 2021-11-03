import 'reflect-metadata';
import { FormControl } from "@banquette/form";
import { Component, Expose } from "@banquette/vue-typescript";
import { mount } from '@vue/test-utils';
import { nextTick } from "vue";
import { default as TextComponent } from "../component/text/text.component.vue";

@Component({
    name: 'app',
    template: `<form-text :control="control"></form-text>`,
    components: [TextComponent]
})
class App {
    @Expose() public control = new FormControl();
}

describe('TextComponent', () => {
    it('Correct text', async () => {
        const wrapper = mount(App as any, {});
        await nextTick();
        expect(wrapper.find('#test').text()).toEqual('test');
        expect(wrapper.vm.control.disabled).toBe(false);
    });
});
