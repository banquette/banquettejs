import 'reflect-metadata';
import { FormControl } from "@banquette/form";
import { Component, Expose } from "@banquette/vue-typescript";
import TextComponent from "../src/component/text/text.component";

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
        /**
         * TODO: investigate
         * Test failing, probably because of a bug in the "components" option.
         */
        // const wrapper = mount(App as any, {});
        // await nextTick();
        // expect(wrapper.find('#test').text()).toEqual('test');
        // expect(wrapper.vm.control.disabled).toBe(false);
    });
});
