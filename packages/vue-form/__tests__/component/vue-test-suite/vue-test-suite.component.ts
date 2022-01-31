import { Component, Prop, Computed } from "@banquette/vue-typescript";
import VueTestComponent from "../vue-test/vue-test.component.vue";
import { ControlViewTestSuiteInterface } from "../../controls-views-test-configs/control-view-test-suite.interface";
import { ControlViewTestInterface } from "../../controls-views-test-configs/control-view-test.interface";

@Component({
    name: 'vue-test-suite',
    components: [VueTestComponent]
})
export default class VueTestSuiteComponent {
    // Props
    @Prop({type: Object, required: true}) public suite!: ControlViewTestSuiteInterface;

    @Computed() public get validCount(): number {
        return this.suite.tests.reduce((count: number, item: ControlViewTestInterface) => {
            return count + (item.valid ? 1 : 0);
        }, 0);
    }
}
