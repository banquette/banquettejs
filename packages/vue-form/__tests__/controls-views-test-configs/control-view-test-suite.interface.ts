import { ControlViewTestInterface } from "./control-view-test.interface";

export interface ControlViewTestSuiteInterface<T = unknown> {
    /**
     * A name for the suite.
     */
    name: string;

    /**
     * An optional description for the suite.
     */
    description?: string;

    /**
     * Component view model constructor.
     */
    component: any;

    /**
     * The list of tests to perform for this control.
     */
    tests: ControlViewTestInterface<T>[];
}
