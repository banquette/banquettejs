import { Component, Expose } from "@banquette/vue-typescript";
import VueTestSuiteComponent from "../vue-test-suite/vue-test-suite.component.vue";
import { ControlViewTestSuiteInterface } from "../../controls-views-test-configs/control-view-test-suite.interface";
import { ControlsViewsTestsConfigs } from "../../controls-views-test-configs/controls-views-tests-configs";

@Component({
    name: 'vue-test-suites-checker',
    components: [VueTestSuiteComponent]
})
export default class VueTestSuitesCheckerComponent {
    /**
     * The whole list of available suites.
     */
    @Expose() public suites: ControlViewTestSuiteInterface[] = ControlsViewsTestsConfigs;

    @Expose() public activeSuite: ControlViewTestSuiteInterface|null = null;

    /**
     * Change the current active suite of tests.
     */
    @Expose() public showSuite(suite: ControlViewTestSuiteInterface): void {
        this.activeSuite = suite;
    }
}
