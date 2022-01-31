import { ControlViewTestSuiteInterface } from "./control-view-test-suite.interface";
import { TextTestSuite } from "./suites/text.test-suite";

/**
 * The list of components' configurations to be tested.
 * One suite per component.
 */
export const ControlsViewsTestsConfigs: ControlViewTestSuiteInterface[] = [
    TextTestSuite
];
